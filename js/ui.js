class UI {

    constructor() {
        this.init();
    }
    init() {
        // display categries in <select>
        this.printCategories();
    }

    printCategories() {
        const categoriesList = eventbrite.getCategoriesAPI()
            .then(categories => {
                console.log(categories);
            })
    }
}