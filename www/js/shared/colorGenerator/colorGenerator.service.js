module.exports = function() {

    var colorPool = [
        "#f44336", "#03a9f4", "#4caf50", "#ff9800", "#673ab7"
    ];

    this.counter = 0;

    this.pickColor = function() {
        return colorPool[this.counter = ((this.counter + 1) % colorPool.length)];
    }

}