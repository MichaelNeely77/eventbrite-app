class Eventbrite {

    constructor() {
        this.auth_token = 'XYNCNDQ45CUVKDMS3HT5';
    }

    async getCategoriesAPI() {
        
        const categoriesResponse = await fetch (`https://www.eventbriteapi.com/v3/categories/?token=${this.auth_token}`);

        const categories = await categoriesResponse.json();

        return {
            categories
        }
    }
}