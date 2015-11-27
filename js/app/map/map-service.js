/**
 * Created by armin on 13.11.15.
 */

map.factory('mapService', ["$http", 'DefaultConfig', function($http, DefaultConfig) {
    var mapService = {};
    var map = null;
    var source;

    var features = [];
    var activeMarker = "";

    var dragInteraction = null;

    var drawInteraction = null;
    var drawEvent = null;

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


        initGeolocation();
        activateDrag();
    };

    function initGeolocation() {
        navigator.geolocation.getCurrentPosition(
            function (position) {


                mapService.setCenter(position.coords.longitude, position.coords.latitude, 17);
                //mapService.addMarker(position.coords.longitude, position.coords.latitude, "media/start_marker.png");
                //mapService.addMarker(position.coords.longitude + 0.001, position.coords.latitude, "media/end_marker.png");
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
    }

    var activateDrag = function() {

        console.log(features);

        if(dragInteraction) {
            removeDrag();
        }

        dragInteraction = new ol.interaction.Modify({
            features: new ol.Collection(features),
            style: null
        });

        map.addInteraction(dragInteraction);
    };

    var deactivateDrag = function() {
        if(dragInteraction) {
            dragInteraction.setActive(false);
        }
    };

    var removeDrag = function() {
        if(dragInteraction) {
            map.removeInteraction(dragInteraction);
        }
    };

    var activateDraw = function() {

        deactivateDrag();
        removeDraw();

        var iconStyle = new ol.style.Style({
            image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
                anchor: [0.5, 1],
                src: getMarkerSrc(activeMarker),
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
            evt.feature.setStyle(iconStyle);
            features.push(evt.feature);
        });
        map.addInteraction(drawInteraction);
    };

    var deactivateDraw = function() {
        if(drawInteraction) {
            drawInteraction.setActive(false);
        }
        activateDrag();
    };
    var removeDraw = function() {
        if(drawInteraction) {
            map.removeInteraction(drawInteraction);
        }
    };


    mapService.addMarker = function(lon, lat, imgSrc) {
        var iconFeature = new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.transform([lon, lat], 'EPSG:4326', 'EPSG:3857')),
            name: 'Null Island',
            population: 4000,
            rainfall: 500
        });

        var iconStyle = new ol.style.Style({
            image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
                anchor: [0.5, 0.5],
                src: imgSrc,
                scale: 0.05,
            //    offset:

            }))
        });
        iconFeature.setStyle(iconStyle);
        source.addFeature(iconFeature);

        iconFeature.on('change',function(){
            //console.log('Feature Moved To:' + ol.proj.transform([this.getGeometry().getCoordinates()[0], this.getGeometry().getCoordinates()[1]], 'EPSG:3857', 'EPSG:4326'));
            //console.log('Feature Moved To:' + [this.getGeometry().getCoordinates()[0] + this.getGeometry().getCoordinates()[1]]);
            //console.log(features);
        },iconFeature);
        features.push(iconFeature);
        activateDrag();
    };

    var getMarkerSrc = function(markerLabel) {
        switch(markerLabel) {
            case "start":
                return "media/start_marker.png";
            case "end":
                return "media/end_marker.png";
            default:
                return "";
        }
    }

    mapService.toggleMarker = function(markerLabel) {
        if(activeMarker == markerLabel) {
            activeMarker = "";
            deactivateDraw();
        } else {
            activeMarker = markerLabel;
            activateDraw(markerLabel)
        }
    };



    mapService.setCenter = function(lon, lat, zoom) {
        map.getView().setCenter(ol.proj.transform([lon, lat], 'EPSG:4326', 'EPSG:3857'));
        map.getView().setZoom(zoom);
    }

    mapService.search = function(query, successCallback, failCallback) {
        var url = "http://nominatim.openstreetmap.org/?q=" + query + "&format=json&callback=JSON_CALLBACK";

        $http.get(url).success(successCallback).error(failCallback);
    };



    return mapService;
}]);