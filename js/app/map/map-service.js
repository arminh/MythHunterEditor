/**
 * Created by armin on 13.11.15.
 */

map.factory('mapService', ["$http", 'DefaultConfig', function($http, DefaultConfig) {
    var mapService = {};

    var map;
    var vectors;
    var mapnik;
    var fromProjection, toProjection;

    var markers;
    var markerSize = new OpenLayers.Size(20,32);
    var markerOffset = new OpenLayers.Pixel(-(markerSize.w/2), -markerSize.h);
    var markerIcon = new OpenLayers.Icon("media/startMarker", markerSize, markerOffset);

    mapService.init = function(container) {
        map = new OpenLayers.Map(container);

        /*var renderer = OpenLayers.Util.getParameters(window.location.href).renderer;
        renderer = (renderer) ? [renderer] : OpenLayers.Layer.Vector.prototype.renderers;

        vectors = new OpenLayers.Layer.Vector("Vector Layer", {
            renderers: renderer
        });*/

        /* Initialize OpenStreetMapViewController attributes */
        mapnik = new OpenLayers.Layer.OSM(); // This layer allows accessing OpenStreetMap tiles
        fromProjection = new OpenLayers.Projection("EPSG:4326");   // Transform from WGS 1984
        toProjection = new OpenLayers.Projection("EPSG:900913"); // to Spherical Mercator Projection


        /* Add layers */
        map.addLayer(mapnik);

        /* Show the map */
        var osmPosition = new OpenLayers.LonLat(DefaultConfig.defaultPosition.coords.longitude, DefaultConfig.defaultPosition.coords.latitude).transform(fromProjection, toProjection);
        map.setCenter(osmPosition, DefaultConfig.defaultZoom);

        initMarkers();
        initGeolocation();
        initDrag();
        //new OpenLayers.Control.DrawFeature(vectors, OpenLayers.Handler.Point);
    };

    function initMarkers() {
        markers = new OpenLayers.Layer.Markers("Markers");
        map.addLayer(markers);
    }

    function initDrag() {
        var dragFeature = new OpenLayers.Control.DragFeature(markers);

        map.addControl(dragFeature);

        dragFeature.activate();
    }

    function initGeolocation() {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                mapService.setCenter(position.coords.longitude, position.coords.latitude);
                mapService.addMarker(position.coords.longitude, position.coords.latitude);
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

    mapService.search = function(query, successCallback, failCallback) {
        var url = "http://nominatim.openstreetmap.org/?q=" + query + "&format=json&callback=JSON_CALLBACK";

        $http.get(url).success(successCallback).error(failCallback);
    };

    mapService.setCenter = function(lon, lat) {
        var position = new OpenLayers.LonLat(lon, lat).transform(fromProjection, toProjection);
        map.setCenter(position, DefaultConfig.defaultZoom);
    };

    mapService.addMarker = function(lon, lat) {
        var position = new OpenLayers.LonLat(lon, lat).transform(fromProjection, toProjection)
        markers.addMarker(new OpenLayers.Marker(position, markerIcon.clone()));
    };

    return mapService;
}]);