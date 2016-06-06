var angular = require("angular");

var playgroundService = require("./playground.service");
var playgroundController = require("./playground.controller");
var playgroundDirective = require("./playground.directive");

require("angular-ui-router");

var playgroundModule = angular.module("playground",
    [
        // internal modules
        require("./../../components/tracklist/tracklist.module").name,

        // external modules
        "ui.router",
    ]
);

playgroundModule.controller("PlaygroundController", playgroundController);
//playgroundModule.directive("Playground", playgroundDirective);

playgroundModule.config(require("./playground.routes"));

playgroundModule.name = "playground";

module.exports = playgroundModule;