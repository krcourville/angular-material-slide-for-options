const OptionsShownCssClass = "options-shown";
const OptionsNotShownCssClass = "options-not-shown";

export class SwipeForOptionsController {
    public isOptionsShown = false;

    public showOptions(isShown: boolean) {
        const allItems = document.querySelectorAll("md-swipe-for-options");
        for (let i = 0; i < allItems.length; i++) {
            const ctrl = angular.element(allItems[i]).controller("mdSwipeForOptions");
            ctrl.isOptionsShown = false;
        }
        this.isOptionsShown = isShown;
    }

    public get optionsShowClass() {
        return this.isOptionsShown ?
            OptionsShownCssClass :
            OptionsNotShownCssClass;
    }
}