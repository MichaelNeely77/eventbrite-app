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

    } else {
        // Print a message
        ui.printMessage('Add an Event or City', 'text-center alert alert-danger mt-4');   
    }
})