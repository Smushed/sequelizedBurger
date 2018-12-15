$(() => {
    //Has to be a function because of using this keyword
    $(`.eat`).on(`click`, function (event) {
        const id = $(this).data(`id`);
        const customerName = { customer_name: $(`#customer-${id}`).val().trim() };
        if (customerName.customer_name === "") {
            alert("Please insert a customer name before consuming!")
        } else {
            createCustomer(customerName);
        }

        //Creating the customer to then call the burger function so I can know the ID of the customer and assign it to the burger
        function createCustomer(customerName) {
            $.post(`/api/customer`, customerName).then((newCustomer) => {
                eatBurger(newCustomer)
            });
        };
        //Make the put request, the only thing that really matters here is the ID
        //Devoured is automatically set as this app only flows one way since you can't un-eat a burger
        const eatBurger = (newCustomer) => {

            $.ajax(`/api/eat`, {
                type: `PUT`,
                data: {
                    id,  //This is just id wrapped in an object as the user can only eat the burger. Comes from the function scope
                    CustomerId: newCustomer.id,
                    customer_name: newCustomer.customer_name
                }
            }).then(() => {
                console.log("working");
                location.reload();
            });
        }
    });
    $(`.submit`).on(`click`, (event) => {
        const newBurger = {
            //Takes the textarea on the html and passes it into the call
            burger_name: $(`#burger-input`).val().trim(),
        };
        console.log(newBurger)
        $.post(`/api/burger`, newBurger).then(() => { location.reload() });
    });
})