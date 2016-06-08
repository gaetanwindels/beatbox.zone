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

    this.lowerFrequency = function() {
        var calcFrequency = this.service.getFrequency() - 10;
        this.service.setFrequency(Math.max(0, calcFrequency));
    }

    this.increaseFrequency = function() {
        this.service.setFrequency(this.service.getFrequency() + 10);
    }

    //this.ngModel && this.ngModel.isLooping();


}]