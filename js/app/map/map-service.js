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

    var featureId = 0;

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

        initGeolocation();
    };

    function initGeolocation() {
        navigator.geolocation.getCurrentPosition(
            function (position) {


                mapService.setCenter(position.coords.longitude, position.coords.latitude, 17);
                mapService.addMarker(position.coords.longitude, position.coords.latitude, "fight", "media/fight_marker.png");
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

    mapService.addMarker = function(lon, lat, type, iconSrc) {
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
        initMarker(marker, iconStyle, type);
    };

    var initMarker = function(marker, style, type) {
        marker.setStyle(style);
        marker.setId(featureId++);
        marker.type = type;

        mapService.features.push(marker);
        activateDrag(marker);
        $rootScope.$broadcast("markerAdded", { marker: marker });
    };

    var activateDraw = function(activeMarker, iconSrc) {

        removeInteraction = false;
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
            geometryName: activeMarker
        });

        drawEvent = drawInteraction.on('drawend', function (evt) {
            initMarker(evt.feature, iconStyle, activeMarker);

        });
        map.addInteraction(drawInteraction);
    };

    var removeDraw = function() {
        if(drawInteraction) {
            map.removeInteraction(drawInteraction);
            drawInteraction = null;
            activeMarker = "";
        }
    };

    mapService.toggleMarker = function(type, iconSrc) {
        if(activeMarker == type) {
            removeDraw();
            activeMarker = "";
        } else {
            activateDraw(type,iconSrc);
            activeMarker = type;

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
        console.log(query);
        var url = "http://nominatim.openstreetmap.org/?q=" + query + "&format=json&callback=JSON_CALLBACK";

        return $http.get(url).then( function(result) {
            console.log(result.data);
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