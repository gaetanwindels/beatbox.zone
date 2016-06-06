module.exports = ["Track", function(Track) {

    this.tracks = [];

    this.addTrack = function() {
        this.tracks.push(new Track());
    }

    this.getTracks = function() {
        return this.tracks;
    }

}]