module.exports = ["$scope", "Track", "TracklistService",
          function($scope,   Track,   TracklistService) {

    this.tracklistService = TracklistService;

    this.tracklistService.addTrack();

    this.emptyTrack = new Track();

    this.addTrack = function() {
        this.tracklistService.addTrack();
        var objDiv = document.getElementsByClassName("tracklist-container")[0];
        objDiv.scrollTop = objDiv.scrollHeight;
    }

    this.close = function(index) {
        this.tracklistService.removeTrack(index);
    }
}]