module.exports = ["TracklistService", function(TracklistService) {

    this.tracklistService = TracklistService;

    this.addTrack = function() {
        this.tracklistService.addTrack();
    }

}]