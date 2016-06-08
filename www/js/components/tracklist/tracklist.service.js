module.exports = ["Track", function(Track) {

    this.tracks = [];

    this.addTrack = function() {
        this.tracks.push(new Track());
        this.tracks[this.tracks.length -1].isSong1 = (this.tracks.length & 1);
    }

    this.getTracks = function() {
        return this.tracks;
    }

}]