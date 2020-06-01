const eventbrite = new Eventbrite();
const ui = new UI();

// create a listeneer for the submit button
document.getElementById('submitBtn').addEventListener('click', (e) => {
    e.preventDefault();

    // Get values form form
    const eventName= document.getElementById('event-name').value;
    const category = document.getElementById('category').value;

    // console.log(eventName + ' : '+ category);
    if(eventName != '') {
        // Query eventbrite API
        eventbrite.queryAPI(eventName, category)
            .then(events => {
                const eventsList = events.events.events;
                if(eventsList.length > 0) {
                    // print the events
                    ui.displayEvents(eventsList);
                } else {
                    // print the message
                    ui.printMessage('No results found', 'text-center alert alert-danger mt-4');  
                }
            })

    } else {
        // Print a message
        ui.printMessage('Add an Event or City', 'text-center alert alert-danger mt-4');   
    }
})