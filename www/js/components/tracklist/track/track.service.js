module.exports = ["Recorder", function(Recorder) {

    var Track = function() {
        this.playing = false;
        this.recording = false;
        this.looping = false;

        this.frequency = 50;

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

    Track.prototype._setRecording = function(recording) {
        this.recording = recording;
    }

    Track.prototype.setLooping = function(looping) {
        this.looping = looping;
    }

/*    Track.prototype.cut = function() {
        Recorder.cut(100).then(function(e) {
            this.sound = new Audio();
            this.sound.src = e;
        }.bind(this));
    }*/

    Track.prototype.setFrequency = function(frequency) {
        this.frequency = frequency;
    }

    Track.prototype.getFrequency = function() {
        return this.frequency;
    }

    Track.prototype.record = function() {
        this._setRecording(true);
        setTimeout(function() {
            Recorder.record();
        }.bind(this), 200);

    }

    Track.prototype.stopRecording = function() {
        Recorder.stop().then(function(e) {
            this._setRecording(false);
            this.sound = new Audio();
            this.sound.src = e;
        }.bind(this));
    }

    Track.prototype.play = function() {
        if (!this.sound) return;

        this._setPlaying(true);
        //this.sound = new Audio("assets/sound/sound" + digit + ".wav");
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
                }.bind(this), this.getFrequency());
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