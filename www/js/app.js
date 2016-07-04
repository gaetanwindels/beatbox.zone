var angular = require("angular");
var attachFastClick = require('fastclick');
var controller = require("./controller");

require("angular-ui-router");

attachFastClick(document.body);

var modules = [
    // internal modules
    require("./states/playground/playground.module.js").name,

    // external modules
    "ui.router"
];

var app = angular.module("app", modules);

app.controller("Ctrl", controller);

app.config(["$urlRouterProvider", function($urlRouterProvider) {
    $urlRouterProvider.otherwise("/playground");
}]);

angular.bootstrap(document.body, ["app"]);