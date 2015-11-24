/**
 * Created by armin on 13.11.15.
 */

map.factory('mapService', ["$http", 'DefaultConfig', function($http, DefaultConfig) {
    var mapService = {};

    var map;
    var mapnik;
    var fromProjection, toProjection;
    var markers;

    mapService.init = function(container) {
        map = new OpenLayers.Map(container);

        /* Initialize OpenStreetMapViewController attributes */
        mapnik = new OpenLayers.Layer.OSM(); // This layer allows accessing OpenStreetMap tiles
        fromProjection = new OpenLayers.Projection("EPSG:4326");   // Transform from WGS 1984
        toProjection = new OpenLayers.Projection("EPSG:900913"); // to Spherical Mercator Projection
        markers = new OpenLayers.Layer.Markers("Markers");

        /* Add layers */
        map.addLayer(mapnik);
        map.addLayer(markers);

        /* Show the map */
        var osmPosition = new OpenLayers.LonLat(DefaultConfig.defaultPosition.coords.longitude, DefaultConfig.defaultPosition.coords.latitude).transform(fromProjection, toProjection);
        map.setCenter(osmPosition, DefaultConfig.defaultZoom);
    };

    mapService.search = function(query) {
        var url = "http://nominatim.openstreetmap.org/?q=" + query + "&format=json&callback=JSON_CALLBACK";

        function successCallback(response) {
            console.log(response[0].lon);
            console.log(response[0].lat);
        }

        function failCallback(response) {

        }

        $http.get(url).success(successCallback).error(failCallback);


    };

    return mapService;
}]);