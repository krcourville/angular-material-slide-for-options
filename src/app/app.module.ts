import "angular-ui-router";

import AppController from "./app.controller";

import swipeForOptions  from "../components/swipeForOptions/swipeForOptions.component";

export default angular
    .module("app", ["ui.router", "ngMaterial", swipeForOptions.name])
    .config(($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterService) => {
        $stateProvider
            .state("root", {
                controller: AppController,
                controllerAs: "$ctrl",
                template:  require("./app.html"),
                url: ""
            });
    });
