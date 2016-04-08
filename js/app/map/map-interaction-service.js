/**
 * Created by armin on 13.11.15.
 */

(function () {
    'use strict';

    angular
        .module('map')
        .factory('MapInteractionService', MapInteractionService);

    MapInteractionService.$inject = ["$log", "$rootScope", "$q", 'DefaultConfig'];

    /* @ngInject */
    function MapInteractionService($log, $rootScope, $q, DefaultConfig) {

        $log = $log.getInstance("MapInteractionService", debugging);

        var map = null;
        var source;
        var features = [];

        var clickEvent = null;
        var popupOverlay = null;

        var drawInteraction = null;
        var drawEvent = null;

        var removeInteraction = false;
        var activeMarker = "";
        var markerId = 0;

        var animationDuration = 2000;
        var animationStartRadius = 5;
        var animationEndRadius = 40;

        var service = {
            init: init,
            setCenter: setCenter,
            addMarker: addMarker,
            setMarkerStyle: setMarkerStyle,
            removeMarker: removeMarker,
            getMarkerById: getMarkerById,
            drawMarker: drawMarker,
            flashMarker: flashMarker,
            stopDrawing: stopDrawing,
            addPopupOverlay: addPopupOverlay,
            showOverlay: showOverlay,
            hideOverlay: hideOverlay
        };
        return service;

        ////////////////

        function init(container) {

            var title = new ol.layer.Tile({source: new ol.source.OSM()});
            source = new ol.source.Vector({});
            var vector = new ol.layer.Vector({source: source});

            map = new ol.Map({
                layers: [
                    title,
                    vector
                ],
                view: new ol.View({
                    center: [0, 0],
                    zoom: 2
                }),
                target: container
            });

            activateClick();
            initGeolocation();
        }

        function initGeolocation() {

            var options = {
                enableHighAccuracy: DefaultConfig.defaultEnableHighAccuracy,
                timeout: DefaultConfig.defaultTimeout,
                maximumAge: DefaultConfig.defaultMaximumAge
            };

            navigator.geolocation.getCurrentPosition(successHandler, errorHandler, options);

            function successHandler(position) {
                setCenter(position.coords.longitude, position.coords.latitude, 17);
                //addMarker(position.coords.longitude, position.coords.latitude, "fight", "Current location", "media/fight_marker.png");
            }

            function errorHandler(error) {
                $log.warn("initGeolocation_fail: " + error);
            }
        }

        function activateClick() {
            clickEvent = map.on("click", mapClicked);

            function mapClicked(evt) {
                if (drawInteraction) {
                    return;
                }

                hideOverlay();
                map.forEachFeatureAtPixel(evt.pixel, checkIntersection);
            }

            function checkIntersection(feature, layer) {
                if (removeInteraction == true) {
                    $rootScope.$broadcast("markerRemoved", {marker: feature});
                    map.removeInteraction(feature.drag);
                    source.removeFeature(feature);
                } else {
                    $rootScope.$broadcast("markerClicked", {marker: feature});
                }
            }
        }

        function removeClick() {
            map.unByKey(clickEvent);
        }

        function activateDrag(feature) {

            var dragInteraction = new ol.interaction.Modify({
                features: new ol.Collection([feature]),
                style: null
            });

            dragInteraction.on('modifyend', function (evt) {
                $rootScope.$broadcast("markerChanged", {marker: evt.features.getArray()[0]});
            });

            feature.drag = dragInteraction;
            map.addInteraction(dragInteraction);
        }

        function addMarker(lon, lat, iconSrc) {
            var marker = new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.transform([lon, lat], 'EPSG:4326', 'EPSG:3857'))
            });
            source.addFeature(marker);
            return initMarker(marker, iconSrc);
        }

        function initMarker(marker, iconSrc) {

            marker.iconSrc = iconSrc;
            marker.setId(features.length);
            setMarkerStyle(marker, iconSrc);

            features[features.length] = marker;
            activateDrag(marker);
            return features.length - 1;
        }

        function setMarkerStyle(marker, iconSrc) {
            var styleFunction = function () {
                return [new ol.style.Style({
                    image: new ol.style.Icon({
                        anchor: [0.5, 1],
                        src: iconSrc,
                        scale: 0.05
                    })
                })];
            };

            marker.setStyle(styleFunction);
        }

        function removeMarker(markerId) {
            $log.info("removeMarker", markerId);
            var marker = features[markerId];
            map.removeInteraction(marker.drag);
            source.removeFeature(marker);
        }

        function getMarkerById(id) {
            return features[id];
        }

        function drawMarker(iconSrc) {
            var deferred = $q.defer();
            activateDraw(iconSrc, deferred);
            return deferred.promise;
        }

        function stopDrawing() {
            removeDraw();
        }

        function activateDraw(iconSrc, deferred) {

            removeInteraction = false;

            removeClick();
            removeDraw();

            var iconStyle = new ol.style.Style({
                image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
                    anchor: [0.5, 1],
                    src: iconSrc,
                    scale: 0.05

                }))
            });

            drawInteraction = new ol.interaction.Draw({
                source: source,
                type: "Point",
                style: iconStyle,
                geometryName: "Marker"
            });

            drawEvent = drawInteraction.on('drawend', drawEnd);

            function drawEnd(evt) {
                removeDraw();
                var markerId = initMarker(evt.feature, iconSrc);
                deferred.resolve(markerId);
            }

            map.addInteraction(drawInteraction);
        }

        function removeDraw() {
            if (drawInteraction) {
                map.removeInteraction(drawInteraction);
                drawInteraction = null;
                activeMarker = "";
                //activateClick();
            }
        }

        function toggleRemove() {
            if (removeInteraction) {
                removeInteraction = false;
            } else {
                removeInteraction = true;
                removeDraw();
            }
        }

        function setCenter(lon, lat, zoom) {
            map.getView().setCenter(ol.proj.transform([lon, lat], 'EPSG:4326', 'EPSG:3857'));
            map.getView().setZoom(zoom);
        }

        function addPopupOverlay(element) {
            popupOverlay = new ol.Overlay(/** @type {olx.OverlayOptions} */ ({
                element: element,
                autoPan: true,
                autoPanAnimation: {
                    duration: 250
                }
            }));

            map.addOverlay(popupOverlay);
        }

        function showOverlay(coordinates) {
            popupOverlay.setPosition(coordinates);
        }

        function hideOverlay() {
            //popupOverlay.setPosition(undefined);
        }

        /* Based on http://openlayers.org/en/v3.9.0/examples/feature-animation.html */
        function flashMarker(markerId) {
            var feature = features[markerId];

            var start = new Date().getTime();
            var listenerKey;

            function animate(event) {
                var vectorContext = event.vectorContext;
                var frameState = event.frameState;
                var flashGeom = feature.getGeometry().clone();
                var elapsed = frameState.time - start;
                var elapsedRatio = elapsed / animationDuration;
                // radius will be 5 at start and 30 at end.
                var radius = ol.easing.easeOut(elapsedRatio) * animationEndRadius + animationStartRadius;
                var opacity = ol.easing.easeOut(1 - elapsedRatio);

                var flashStyle = new ol.style.Circle({
                    radius: radius,
                    snapToPixel: false,
                    stroke: new ol.style.Stroke({
                        color: 'rgba(255, 0, 0, ' + opacity + ')',
                        width: 2,
                        opacity: opacity
                    })
                });

                vectorContext.setImageStyle(flashStyle);
                vectorContext.drawPointGeometry(flashGeom, null);
                if (elapsed > animationDuration) {
                    ol.Observable.unByKey(listenerKey);
                    return;
                }
                // tell OL3 to continue postcompose animation
                frameState.animate = true;
            }
            listenerKey = map.on('postcompose', animate);
        }
    }
})();