var angular = require("angular");

var moduleName = "shared";

var sharedModule = angular.module(moduleName, []);

sharedModule.name = moduleName;

sharedModule.service("ColorGenerator", require("./colorGenerator/colorGenerator.service"));
sharedModule.service("Recorder", require("./recorder/recorder.service"));

module.exports = sharedModule;