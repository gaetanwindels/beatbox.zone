module.exports = ["$q", function($q) {

    window.AudioContext = window.AudioContext ||
        window.webkitAudioContext;

    navigator.getUserMedia  = navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia;

    navigator.getUserMedia({video: false, audio: true}, initRecorder.bind(this), function() {
        console.log("error");
    });

    this._recorder;
    this._livestream;
    this._soundUrl;
    this._recordedChunks = [];

    function initRecorder(stream) {
        this._livestream = stream;
    }

    this.record = function(liveStream) {
        //this._recorder.clear();
        this._recordedChunks = [];
        this._recorder = new MediaRecorder(this._livestream, {mimeType: "audio/webm"});
        this._recorder.start(10);

        this._recorder.ondataavailable = handleDataAvailable.bind(this);
        //this._recorder.onstop = this.stop;
    }

    this.cut = function(ms) {
        return $q(function(resolve, reject) {
            this._recorder.stop();
            this._recordedChunks.splice(0, 10);
            var blob = new Blob(this._recordedChunks, {type: "audio/mpeg"});
            resolve(window.URL.createObjectURL(blob));
        }.bind(this));
    }

    this.stop = function() {
        return $q(function(resolve, reject) {
            this._recorder.stop();
            this._recordedChunks.splice(this._recordedChunks.length - 20, 20);
            var blob = new Blob(this._recordedChunks, {type: "audio/mpeg"});
            resolve(window.URL.createObjectURL(blob));
        }.bind(this));
    }

    function handleDataAvailable(event) {
        if (event.data.size > 0) {
            this._recordedChunks.push(event.data);
        } else {
            // ...
        }
    }

}]