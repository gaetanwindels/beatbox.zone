module.exports = ["$stateProvider", function($stateProvider) {

    $stateProvider
        .state('playground', {
            url: "/playground",
            templateUrl: "js/states/playground/playground.view.html"
        });
}]