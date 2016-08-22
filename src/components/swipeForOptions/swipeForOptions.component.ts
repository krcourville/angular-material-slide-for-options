import "./swipeForOptions.scss";
import {SwipeForOptionsController} from "./swipeForOptions.controller";

const swipeForOptionsModule = angular
    .module("swipeForOptions", [
        "ngMaterial"
    ]);

swipeForOptionsModule.component("mdSwipeForOptions", {
    controller: SwipeForOptionsController,
    template: require("./swipeForOptions.html"),
    transclude: {
        content: "swipeContent",
        options: "swipeOptions"
    }
});

export default swipeForOptionsModule;