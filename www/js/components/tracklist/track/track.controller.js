module.exports = ["Track", function(Track) {

    if (!this.ngModel instanceof Track) {
        this.ngModel = new Track();
    }

    this.service = this.ngModel;

    this.toggleRecording = function() {
        this.service.setRecording(!this.service.isRecording());
    }

    this.toggleLooping = function() {
        this.service.setLooping(!this.service.isLooping());
    }

    this.togglePlay = function() {
        if (this.service.isPlaying()) {
            this.service.stop();
        } else {
            this.service.play();
        }
    }

    //this.ngModel && this.ngModel.isLooping();


}]