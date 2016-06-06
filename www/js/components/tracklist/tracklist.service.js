module.exports = ["$http", function(Track) {

    this.tracks = [];

    this.addTrack = function() {
       // this.tracks.push(new Track());
        this.tracks.push(1);
        console.log("hi");
    }

    this.getTracks = function() {
        return this.tracks;
    }

}]