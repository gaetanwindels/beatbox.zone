module.exports = ["$scope", "TracklistService", function($scope, TracklistService) {

    this.tracklistService = TracklistService;

    this.tracklistService.addTrack();

    this.addTrack = function() {
        this.tracklistService.addTrack();
        var objDiv = document.getElementsByClassName("tracklist-container")[0];
        objDiv.scrollTop = objDiv.scrollHeight;
    }

    this.close = function(index) {
        this.tracklistService.removeTrack(index);
    }
}]