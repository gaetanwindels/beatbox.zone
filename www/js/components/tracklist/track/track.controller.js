module.exports = ["$scope", "Track", function($scope, Track) {

    if (!this.ngModel instanceof Track) {
        this.ngModel = new Track();
    }

    //this.service = this.ngModel;

    this.cursors = {
        left: 0,
        right: 0
    };

    if (this.service) {
        this.service.setCursors(this.cursors);
    }

    this.toggleRecording = function() {
        if (!this.service.isRecording()) {
            this.service.record();
        } else {
            this.service.stopRecording();
        }
    }

    this.toggleLooping = function() {
        this.service.setLooping(!this.service.isLooping());
    }

    this.togglePlay = function() {
        if (this.service.isPlaying()) {
            this.service.stop();
        } else {
            var result = this.service.play();
            result.then(function(string) {
                console.log("hi");
            }).catch(function(error) {
                console.log(error);
            });
        }
    }

    this.toggleSelect = function() {
        this.service.toggleSelect();
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