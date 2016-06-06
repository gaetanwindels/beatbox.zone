module.exports = ["TracklistService", function(TracklistService) {

    this.tracklistService = TracklistService;

    console.log(TracklistService);
    this.addTrack = function() {
        console.log("ho");
        this.tracklistService.addTrack();
    }

}]