module.exports = ["TracklistService", function(TracklistService) {

    this.tracklistService = TracklistService;

    this.tracklistService.addTrack();

    this.addTrack = function() {
        this.tracklistService.addTrack();
    }

    this.close = function(index) {
        this.tracklistService.removeTrack(index);
    }
}]