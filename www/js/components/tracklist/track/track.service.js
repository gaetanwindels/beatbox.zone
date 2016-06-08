module.exports = [function() {

    var Track = function() {
        this.playing = false;
        this.recording = false;
        this.looping = false;

        this.isSong1 = true;
    };

    Track.prototype.isLooping = function() {
        return this.looping;
    }

    Track.prototype.isPlaying = function() {
        return this.playing;
    }

    Track.prototype.isRecording = function() {
        return this.recording;
    }

    Track.prototype._setPlaying = function(playing) {
        this.playing = playing;
    }

    Track.prototype.setRecording = function(recording) {
        this.recording = recording;
    }

    Track.prototype.setLooping = function(looping) {
        this.looping = looping;
    }

    Track.prototype.play = function() {
        this._setPlaying(true);
        var digit = this.isSong1 ? 1 : 2;
        //this.sound = new Audio("assets/sound/sound" + digit + ".wav");
        this.sound = new Audio("assets/sound/sound" + digit + ".wav");
        this.sound.play();

        this.sound.addEventListener("ended", function() {
            if (!this.isLooping()) {
                this.stop();
            }
        }.bind(this));

        if (this.isLooping()) {
            this.sound.addEventListener("ended", function() {

                if (!this.isPlaying() || !this.isLooping()) return;

                window.setTimeout(function() {
                    this.sound.play();
                }.bind(this), 20);
            }.bind(this));
        }
    }

    Track.prototype.stop = function() {
        this._setPlaying(false);
        if (this.sound) {
            this.sound.pause();
        }
    }

    return Track;
}]