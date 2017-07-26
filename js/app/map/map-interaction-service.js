/**
 * Created by armin on 13.11.15.
 */

(function () {
    'use strict';

    angular
        .module('map')
        .factory('MapInteractionService', MapInteractionService);

    MapInteractionService.$inject = ["$log", "$rootScope", "$q", 'DefaultConfig', "BackendService"];

    /* @ngInject */
    function MapInteractionService($log, $rootScope, $q, DefaultConfig, BackendService) {

        $log = $log.getInstance("MapInteractionService", debugging);

        var map = null;
        var centerLon = -1;
        var centerLat = -1;
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
            centerOnCurrentLocation: centerOnCurrentLocation,
            addMarker: addMarker,
            addLine: addLine,
            setMarkerStyle: setMarkerStyle,
            removeMarker: removeMarker,
            getMarkerById: getMarkerById,
            drawMarker: drawMarker,
            flashMarker: flashMarker,
            stopDrawing: stopDrawing,
            drawLine: drawLine,
            addPopupOverlay: addPopupOverlay,
            showOverlay: showOverlay,
            hideOverlay: hideOverlay
        };
        return service;

        ////////////////

        function init(container) {

            if(drawInteraction) {
                stopDrawing();
            }
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
            initDrag();
        }

        function centerOnCurrentLocation() {

            var options = {
                enableHighAccuracy: DefaultConfig.defaultEnableHighAccuracy,
                timeout: DefaultConfig.defaultTimeout,
                maximumAge: DefaultConfig.defaultMaximumAge
            };
            if(navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(successHandler, errorHandler, options);
            }


            function successHandler(position) {
                setCenter(position.coords.longitude, position.coords.latitude, 17);
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

        function initDrag() {
            var movingFeature = null;

            map.on('pointerdown', function (event) {
                var pixel = map.getEventPixel(event.originalEvent);
                movingFeature = map.forEachFeatureAtPixel(pixel, function (feature) {
                    return feature;
                });
                if(movingFeature && !drawInteraction) {
                    event.preventDefault();
                }
            });

            map.on('pointerup', function (evt) {
                if(movingFeature) {
                    $rootScope.$broadcast("markerChanged", {marker: movingFeature});
                    movingFeature = null;
                }
            });

            map.on('pointermove', function (event) {
                if (movingFeature) {
                    movingFeature.getGeometry().setCoordinates(event.coordinate);
                }
            });
        }

        function removeClick() {
            map.unByKey(clickEvent);
        }

        function activateDrag(feature) {

            var dragInteraction = new ol.interaction.Modify({
                features: new ol.Collection([feature]),
                style: null
            });

            feature.getGeometry().on("change", markerChanged);

            feature.drag = dragInteraction;
            map.addInteraction(dragInteraction);
        }

        function markerChanged(evt) {
            var markerGeometry = evt.target;

            if(markerGeometry.lineStart) {
                var lineGeometry = markerGeometry.lineStart.getGeometry();
                lineGeometry.setCoordinates([markerGeometry.getCoordinates(), lineGeometry.getLastCoordinate()]);
                markerGeometry.lineStart.setStyle(styleFunction(markerGeometry.lineStart));
            }

            if(markerGeometry.lineEnd) {
                lineGeometry = markerGeometry.lineEnd.getGeometry();
                lineGeometry.setCoordinates([lineGeometry.getFirstCoordinate(), markerGeometry.getCoordinates()]);
                markerGeometry.lineEnd.setStyle(styleFunction(markerGeometry.lineEnd));
            }
        }

        function addMarker(lon, lat, iconSrc) {
            var marker = new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.transform([lon, lat], 'EPSG:4326', 'EPSG:3857'))
            });
            source.addFeature(marker);
            return initMarker(marker, iconSrc);
        }

        function styleFunction(feature) {
            var geometry = feature.getGeometry();
            var styles = [
                // linestring
                new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        width: 5, color: 'rgba(255, 0, 0, 1)',
                        lineDash: [.1, 5] //or other combinations
                    })
                })
            ];

            geometry.forEachSegment(function(start, end) {
                var dx = end[0] - start[0];
                var dy = end[1] - start[1];
                var rotation = Math.atan2(dy, dx);
                // arrows
                styles.push(new ol.style.Style({
                    geometry: new ol.geom.Point(end),
                    image: new ol.style.Icon({
                        src: 'media/arrow.png',
                        anchor: [0.75, 0.5],
                        rotateWithView: true,
                        rotation: -rotation
                    })
                }));
            });

            return styles;
        };

        function addLine(startMarkerId, endMarkerId) {
            var startGeomtery = getMarkerById(startMarkerId).getGeometry();
            var endGeometry = getMarkerById(endMarkerId).getGeometry();

            var startCoords = startGeomtery.getCoordinates();
            var endCoords = endGeometry.getCoordinates();

            var line = new ol.Feature({
                geometry: new ol.geom.LineString([startCoords, endCoords])
            });

            line.setStyle(styleFunction(line));

            startGeomtery.lineStart = line;
            endGeometry.lineEnd = line;

            source.addFeature(line);
            return line;
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

            if(marker.getGeometry().lineEnd) {
                source.removeFeature(marker.getGeometry().lineEnd);
            }

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
                flashMarker(markerId);
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

        function drawLine() {

            var deffered = $q.defer();

            var style = new ol.style.Style({
                stroke: new ol.style.Stroke({
                    width: 5, color: 'rgba(255, 0, 0, 1)',
                    lineDash: [.1, 5] //or other combinations
                }),
                zIndex: 2
            });

            var draw = new ol.interaction.Draw({
                source: source,
                type: /** @type {ol.geom.GeometryType} */ "LineString",
                maxPoints: 2,
                style: style,
                geometryName: "Line"
            });
            map.addInteraction(draw);

            draw.on('drawend', drawEnd);

            function drawEnd(evt) {
                evt.feature.setStyle(styleFunction(evt.feature));
                map.removeInteraction(draw);
                deffered.resolve(evt.feature);
            }

            return deffered.promise;
        }

        function setCenter(lon, lat, zoom) {
            centerLon = lon;
            centerLat = lat;
            BackendService.getQuestsInRange(centerLon, centerLat, 1000).then(function(result) {
                console.log(result);
            });
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