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

    function initRecorder(stream) {
        this._livestream = stream;
    }

    this.record = function(liveStream) {
        //this._recorder.clear();
        this._recorder = new MediaRecorder(this._livestream);
        this._recorder.start();
    }

    this.stop = function() {
        return $q(function(resolve, reject) {
            this._recorder.stop();

            this._recorder.addEventListener('dataavailable', function(data) {
                console.log(data);
                resolve(window.URL.createObjectURL(this._livestream));
            }.bind(this));

        }.bind(this));
    }

    function onRecordingReady(e) {
        this._soundUrl = e.data;
        return this._soundUrl;
    }


}]