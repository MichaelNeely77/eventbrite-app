class UI {

    constructor() {
        this.init();
    }
    init() {
        // display categries in <select>
        this.printCategories();

        this.result = document.getElementById('result');
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

    displayEvents(events) {
        
        let HTMLTemplate = '';

        events.forEach(eventInfo => {
            HTMLTemplate = `
                <div class="col-me-4 mt-4">
                    <div class="card">
                        <div class="card-body">
                            <img class="img-fluid mb-2" src="${eventInfo.logo != null ? eventInfo.logo.url : ''}">
                        </div>
                        <div class="card-body">
                            <div class="card-text">
                            <h2 class="text-center card-title">${eventInfo.name.text}</h2>
                            <p class="lead text-info">Event information: </p>
                            <p class="">${eventInfo.desscription.text.substring(0, 200)}...</p>
                            <span class="badge badge-primary">Capacity: ${eventInfo.capacity}</span>
                            <span class="badge badge-secondary">Date and Time: ${eventInfo.start.local}</span>

                            <a href="${eventInfo.url}" target="_blank" class="btn btn-primary btn-block mt-4">
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });

        this.result.innerHTML = HTMLTemplate
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