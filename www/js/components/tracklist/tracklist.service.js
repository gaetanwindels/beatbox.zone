module.exports = ["Track", function(Track) {

    this.tracks = [];

    this.addTrack = function() {
        this.tracks.push(new Track());
    }

    this.removeTrack = function(i) {
        this.tracks[i].destroy();
        this.tracks.splice(i, 1);
    }

    this.getTracks = function() {
        return this.tracks;
    }

    this.playSelected = function() {
        for (var i = 0; i < this.tracks.length; i++) {
            if (this.tracks[i].isSelected()) {
                this.tracks[i].stop();
                this.tracks[i].play();
            }
        }
    }

}]