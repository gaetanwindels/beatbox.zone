var angular = require("angular");

var tracklistDirective = require("./tracklist.directive");
var tracklistService = require("./tracklist.service");
var tracklistController = require("./tracklist.controller");

var moduleName = "tracklist";
var modules = [
    require("./track/track.module").name
];

var moduleName = "tracklist";

var tracklistModule = angular.module(moduleName, modules);

tracklistModule.name = moduleName;

tracklistModule.directive("tracklist", tracklistDirective);
tracklistModule.service("TracklistService", tracklistService);

tracklistModule.service("Recorder", require("./../../shared/recorder/recorder.service"));

tracklistModule.controller("TracklistController", tracklistController);

module.exports = tracklistModule;