module.exports = function() {
    return {

        controller: function() {

        },

        templateUrl: "js/components/waveformCursors/waveformCursors.view.html",

        scope: {
            "ngModel": "="
        },

        link: function(scope, elmt, attr) {

            scope.clicked = false;

            elmt.on("mousedown", function (e) {
                scope.clicked = true;
                console.log(e);
                e.currentTarget.getElementsByClassName("wave-cursor-left")[0].style.width = e.offsetX + "px";
            });

            document.addEventListener("mouseup", function (e) {
                scope.clicked = false;
            });


            document.addEventListener("mousemove", function (e) {
                if (scope.clicked) {
                    //e.currentTarget.getElementsByClassName("wave-cursor-left")[0].style.width = e.offsetX + "px";
                }
            });

        }
    }
}