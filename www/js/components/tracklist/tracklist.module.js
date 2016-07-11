var angular = require("angular");

var tracklistDirective = require("./tracklist.directive");
var waveformCursorsDirective = require("./../waveformCursors/waveformCursors.directive");
var waveSurferDirective = require("./../wavesurfer/waveSurfer.directive");

var tracklistService = require("./tracklist.service");
var tracklistController = require("./tracklist.controller");

var moduleName = "tracklist";
var modules = [
    require("./track/track.module").name,
    require("./../../shared/shared.module").name,
];

var moduleName = "tracklist";

var tracklistModule = angular.module(moduleName, modules);

tracklistModule.name = moduleName;

tracklistModule.directive("tracklist", tracklistDirective);
tracklistModule.directive("waveformCursors", waveformCursorsDirective);
tracklistModule.directive("wavesurfer", waveSurferDirective);
tracklistModule.service("TracklistService", tracklistService);

tracklistModule.controller("TracklistController", tracklistController);

module.exports = tracklistModule;