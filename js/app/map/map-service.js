/**
 * Created by armin on 13.11.15.
 */

map.factory('mapService', ["$rootScope", "$http", 'DefaultConfig', function($rootScope, $http, DefaultConfig) {
    var mapService = {};
    var map = null;
    var source;

    mapService.features = [];

    var clickEvent = null;
    var popupOverlay = null;

    var drawInteraction = null;
    var drawEvent = null;

    var removeInteraction = false;



    var activeMarker = "";

    mapService.init = function(container) {

        var title = new ol.layer.Tile({source: new ol.source.OSM()});

        source = new ol.source.Vector({});

        var vector = new ol.layer.Vector({
            source: source,
        });

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
    };

    function initGeolocation() {
        navigator.geolocation.getCurrentPosition(
            function (position) {


                mapService.setCenter(position.coords.longitude, position.coords.latitude, 17);
                //mapService.addMarker(position.coords.longitude, position.coords.latitude, "fight", "Current location", "media/fight_marker.png");
            },
            function (error) {
                console.log(error.msg);
            },
            {
                enableHighAccuracy: DefaultConfig.defaultEnableHighAccuracy,
                timeout: DefaultConfig.defaultTimeout,
                maximumAge: DefaultConfig.defaultMaximumAge
            }
        );
    };

    mapService.refreshMap = function() {
        map.renderSync();
    };

    var activateClick = function() {
        clickEvent = map.on("click", function(evt) {
            if(drawInteraction)
                return;

            mapService.hideOverlay();
            map.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {
                if(removeInteraction == true) {
                    $rootScope.$broadcast("markerRemoved", { marker: feature });
                    map.removeInteraction(feature.drag);
                    source.removeFeature(feature);
                } else {
                    $rootScope.$broadcast("markerClicked", { marker: feature });
                }

            });
        });
    };

    var removeClick = function() {
        map.unByKey(clickEvent);
    };

    var activateDrag = function(feature) {

        var dragInteraction = new ol.interaction.Modify({
            features: new ol.Collection([feature]),
            style: null
        });

        dragInteraction.on('modifyend',function(evt){
            $rootScope.$broadcast("markerChanged", { marker: evt.features.getArray()[0] });
        });

        feature.drag = dragInteraction;

        map.addInteraction(dragInteraction);
    };

    mapService.getMarkerById = function(id) {
        return mapService.features[id];
    };

    mapService.addMarker = function(id, lon, lat, iconSrc) {
        var iconStyle = new ol.style.Style({
            image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
                anchor: [0.5, 1],
                src: iconSrc,
                scale: 0.05,

            }))
        });

        var marker = new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.transform([lon, lat], 'EPSG:4326', 'EPSG:3857'))
        });
        source.addFeature(marker);
        initMarker(marker, iconStyle, id);
    };

    var initMarker = function(marker, iconSrc, id) {

        marker.iconSrc = iconSrc;

        var styleFunction = function(){
            return [new ol.style.Style({
                image: new ol.style.Icon({
                    anchor: [0.5, 1],
                    src: this.iconSrc,
                    scale: 0.05
                })
            })];
        };

        marker.setStyle(styleFunction);
        marker.setId(id);

        mapService.features[id] = marker;
        activateDrag(marker);
        $rootScope.$broadcast("markerAdded", { markerId: id });
    };

    mapService.drawMarker = function(task, iconSrc) {
        activateDraw(task, iconSrc);
    };

    mapService.stopDrawing = function() {
      removeDraw();
    };


    var activateDraw = function(id, iconSrc) {

        removeInteraction = false;

        removeClick();
        removeDraw();

        var iconStyle = new ol.style.Style({
            image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
                anchor: [0.5, 1],
                src: iconSrc,
                scale: 0.05,

            }))
        });

        drawInteraction = new ol.interaction.Draw({
            source: source,
            type: "Point",
            style: iconStyle,
            geometryName: id
        });

        drawEvent = drawInteraction.on('drawend', function (evt) {
            console.log("Drawend");
            removeDraw();
            initMarker(evt.feature, iconSrc, id);
        });
        map.addInteraction(drawInteraction);
    };

    var removeDraw = function() {
        if(drawInteraction) {
            map.removeInteraction(drawInteraction);
            drawInteraction = null;
            activeMarker = "";
            //activateClick();
        }
    };

    mapService.toggleRemove = function() {
        if(removeInteraction) {
            removeInteraction = false;
        } else {
            removeInteraction = true;
            removeDraw();
        }
    };

    mapService.setCenter = function(lon, lat, zoom) {
        map.getView().setCenter(ol.proj.transform([lon, lat], 'EPSG:4326', 'EPSG:3857'));
        map.getView().setZoom(zoom);
    };

    mapService.search = function(query) {
        var url = "http://nominatim.openstreetmap.org/?q=" + query + "&format=json&callback=JSON_CALLBACK";

        return $http.get(url).then( function(result) {
            return result.data;
        });
    };

    mapService.addPopupOverlay = function(element) {
        popupOverlay = new ol.Overlay(/** @type {olx.OverlayOptions} */ ({
            element: element,
            autoPan: true,
            autoPanAnimation: {
                duration: 250
            }
        }));

        map.addOverlay(popupOverlay);
    };

    mapService.showOverlay = function(coordinates) {
        popupOverlay.setPosition(coordinates);
    };

    mapService.hideOverlay = function() {
        popupOverlay.setPosition(undefined);
    };

    return mapService;
}]);