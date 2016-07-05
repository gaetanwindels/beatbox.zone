var angular = require("angular");

var trackDirective = require("./track.directive");
var trackService = require("./track.service");
var trackController = require("./track.controller");

var modules = [];

var moduleName = "track";

var trackModule = angular.module(moduleName, modules);

trackModule.directive("myTrack", trackDirective);
trackModule.factory("Track", trackService);
trackModule.controller("TrackController", trackController);

trackModule.name = moduleName;

module.exports = trackModule;