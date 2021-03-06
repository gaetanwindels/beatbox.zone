var WaveSurfer = require("wavesurfer.js");

module.exports = ["$q", "$rootScope", "Recorder", "ColorGenerator",
          function($q,   $rootScope,   Recorder,   ColorGenerator) {

    var counter = 0;

    var Track = function() {
        this.idContainer = "waveform" + counter++;
        this.playing = false;
        this.recording = false;
        this.looping = false;
        this.cursors = {};
        this.selected = false;
        this.color = ColorGenerator.pickColor();
        this.volume = 0.5;

        this.frequency = 50;
    };

    Track.prototype.getContainerId = function() {
        return this.idContainer;
    }

    Track.prototype.toggleSelect = function() {
        return this.selected = !this.selected;
    }

    Track.prototype.isSelected = function() {
        return this.selected;
    }

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

    Track.prototype.destroy = function() {
        this.stop();
        this.wavesurfer && this.wavesurfer.destroy();
    }

    Track.prototype.stopRecording = function() {
        Recorder.stop().then(function(blob) {
            this._setRecording(false);
            this.sound = new Audio();
            this.sound.src = window.URL.createObjectURL(blob);
            this.blob = blob;
        }.bind(this));
    }

    Track.prototype.setCursors = function(cursors) {
        this.cursors = cursors;
    }

    Track.prototype.play = function() {
        var deferred = $q.defer();

        if (!this.sound) {
            deferred.reject("no sound");
            return deferred.promise;
        }

        if (this.cursors && this.cursors.left) {
            this.sound.currentTime = this.sound.duration * this.cursors.left;
        }

        this.sound.volume = this.volume;
        this.sound.play();

        this.timerCurrent = window.setInterval(function() {
            if (this.cursors && this.cursors.right &&
                this.sound.currentTime >= this.sound.duration - this.sound.duration * this.cursors.right) {

                if (this.isLooping()) {
                    this.sound.currentTime = this.sound.duration * this.cursors.left;
                } else {
                    this.stop();
                    deferred.resolve();
                }
            }
        }.bind(this), 10);

        this._setPlaying(true);
        //this.sound = new Audio("assets/sound/sound" + digit + ".wav");

        //this.sound.play();

        this.sound.addEventListener("ended", function() {
            if (!this.isLooping()) {
                this.stop();
                deferred.resolve();
            }
        }.bind(this));

        if (this.isLooping()) {
            this.sound.addEventListener("ended", function() {

                if (!this.isPlaying() || !this.isLooping()) return;
                if (this.cursors && this.cursors.left) {
                    this.sound.currentTime = this.sound.duration * this.cursors.left;
                }
                this.sound.play();

            }.bind(this));
        }

        return deferred.promise;
    }

    Track.prototype.stop = function() {
        this._setPlaying(false);
        if (this.sound) {
            this.sound.pause();
            window.clearInterval(this.timerCurrent);
        }
    }

    return Track;
}]