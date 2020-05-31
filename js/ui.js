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
                const categoriesList = categories.categories.categories;
                const categoriesSelect = document.querySelector('#category');

                categoriesList.forEach(category => {

                    const option = document.createElement('option');
                    option.value = category.id;
                    option.appendChild(document.createTextNode(category.name));
                    categoriesSelect.appendChild(option);
                })

            })
            .catch(error => console.log(error));
    }

    printMessage(message, className) {
        const div = document.createElement('div');
        div.className = className;

        div.appendChild(document.createTextNode(message));

        // Inser HTML
        const searchDiv = document.querySelector('#search-events');
        searchDiv.appendChild(div);
    

    setTimeout(() => {
        this.removeMessage();
    }, 3000);
}
    removeMessage() {
        const alert = document.querySelector('.alert');
        if(alert) {
            alert.remove();
        }
    }
}