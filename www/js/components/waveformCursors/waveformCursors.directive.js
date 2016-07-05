module.exports = function() {
    return {

        controller: function() {

        },

        templateUrl: "js/components/waveformCursors/waveformCursors.view.html",

        scope: {
            "ngModel": "="
        },

        link: function(scope, elmt, attr) {

            scope.rightClicked = false;
            scope.leftClicked = false;

            scope.ngModel.left = 0;
            scope.ngModel.right = 0;

            this.left = document.getElementsByClassName("wave-cursor-left")[0];
            this.right = document.getElementsByClassName("wave-cursor-right")[0];

            function detectCursor(e) {
                scope.rightClicked = false;
                scope.leftClicked = false;
                var clientX = e instanceof TouchEvent ? e.touches[0].clientX : e.clientX;

                if (Math.abs(clientX - left.getBoundingClientRect().right) <
                    Math.abs(clientX - right.getBoundingClientRect().left)) {
                    this.elemClicked = e.currentTarget.getElementsByClassName("wave-cursor-left")[0];
                    scope.rightClicked = false;
                    scope.leftClicked = true;
                } else {
                    this.elemClicked = e.currentTarget.getElementsByClassName("wave-cursor-right")[0];
                    scope.rightClicked = true;
                    scope.leftClicked = false;
                }
            }

            function manageMove(e) {
                var left = e.currentTarget.getElementsByClassName("wave-cursor-left")[0];
                var right = e.currentTarget.getElementsByClassName("wave-cursor-right")[0];
                var clientX = e instanceof TouchEvent ? e.touches[0].clientX : e.clientX;

                if (scope.leftClicked) {
                    this.elemClicked.style.width = clientX + "px";
                    scope.$apply(function() {
                        scope.ngModel.left = clientX / document.body.clientWidth;
                    });
                }
                if (scope.rightClicked) {
                    this.elemClicked.style.width = (document.body.clientWidth - clientX) + "px";

                    scope.$apply(function() {
                        scope.ngModel.right = 1 - right.getBoundingClientRect().left / document.body.clientWidth;
                    });
                }
            }

            elmt.on("mousedown", detectCursor.bind(this));
            elmt.on("touchstart", detectCursor.bind(this));

            document.addEventListener("mousemove", manageMove.bind(this));
            document.addEventListener("touchmove", manageMove.bind(this));

            document.addEventListener("mouseup", function (e) {
                manageMove(e);
                scope.rightClicked = false;
                scope.leftClicked = false;
            });

            document.addEventListener("touchend", function (e) {
                scope.rightClicked = false;
                scope.leftClicked = false;
            });

        }
    }
}