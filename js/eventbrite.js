class Eventbrite {

    constructor() {
        this.auth_token = 'XYNCNDQ45CUVKDMS3HT5';
        this.orderby = 'date';
    }
    // Get events form API
    async queryAPI(eventNamve, category) {
        const eventResponse = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${eventName}sort_by=${this.orderby}&categories=101&token=${this.auth_token}`);
    }



    async getCategoriesAPI() {
        
        const categoriesResponse = await fetch (`https://www.eventbriteapi.com/v3/categories/?token=${this.auth_token}`);

        const categories = await categoriesResponse.json();

        return {
            categories
        }
    }
}