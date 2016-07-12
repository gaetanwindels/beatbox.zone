var WaveSurfer = require("wavesurfer.js");

module.exports = function() {
    return {

        controller: function() {

        },

        scope: {
            "blob": "=",
            "color": "="
        },

        link: function(scope, elmt, attr) {

            var waveColor = scope.color || "blue";

            scope.$watch("blob", function(newValue) {
                if (newValue instanceof Blob) {
                    wavesurfer.loadBlob(newValue);
                }
            });

            var wavesurfer = WaveSurfer.create({
                container: elmt[0],
                waveColor: waveColor,
                height: 70,
                fillParent: true
            });

            if (scope.blob instanceof Blob) {
                wavesurfer.loadBlob(scope.blob);
            }
        }
    }
}