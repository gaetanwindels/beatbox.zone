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
            scope.ngModel.left = 0;
            scope.ngModel.right = 0;

            elmt.on("mousedown", function (e) {
                scope.clicked = true;
                var left = e.currentTarget.getElementsByClassName("wave-cursor-left")[0];
                var right = e.currentTarget.getElementsByClassName("wave-cursor-right")[0];

                if (Math.abs(e.clientX - left.getBoundingClientRect().right) <
                    Math.abs(e.clientX - right.getBoundingClientRect().left)) {
                    left.style.width = e.clientX + "px";
                    scope.$apply(function() {
                        scope.ngModel.left = e.clientX / screen.width;
                    });
                } else {
                    right.style.width = (screen.width - e.clientX) + "px";
                    scope.$apply(function() {
                        scope.ngModel.right = 1 - right.getBoundingClientRect().left / screen.width;
                    });
                }
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