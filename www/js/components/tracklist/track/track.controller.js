module.exports = ["$scope", "Track", function($scope, Track) {

    if (!this.ngModel instanceof Track) {
        this.ngModel = new Track();
    }

    //this.service = this.ngModel;

    this.cursors = {};

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
            result.then(function() {
                //$scope.$apply();
            });
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