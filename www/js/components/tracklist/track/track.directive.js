module.exports = function() {
    return {

        controller: "TrackController",
        controllerAs: "track",
        templateUrl: "js/components/tracklist/track/track.view.html",
        scope: {
            "service": "=ngModel",
            "onClose": "&"
        },
        bindToController: true,
        transclude: true
    }
}