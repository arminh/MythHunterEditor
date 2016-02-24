/**
 * Created by armin on 24.02.16.
 */

app.factory("Serializer", function() {

    function stringify(obj) {

        var jsonStrings = [];
        var keys = Object.keys(obj);

        for(var i = 0; i < keys.length; i++) {

            var keyString = '"' + keys[i] + '":';
            var valueString = stringifyValue(obj[keys[i]]);

            jsonStrings.push(keyString + valueString);
        }

        return "{" + jsonStrings.join(",") + "}";
    }

    function stringifyValue(value) {
        switch(typeof value)  {
            case "string":
                return '"' + value + '"';
            case "object":
                if(Array.isArray(value)) {
                    return stringifyArray(value);
                } else {
                    return stringify(value);
                }
            default:
                return value;
        }
    }

    function stringifyArray(array) {
        var arrayParts = [];

        for(var i = 0; i < array.length; i++) {
            arrayParts.push(stringifyValue(array[i]));
        }

        return "[" + arrayParts.join(",") + "]";
    }

    function parse(jsonString) {
        return JSON.parse(jsonString);
    }

    return {
        stringify: stringify,
        parse: parse
    }
});