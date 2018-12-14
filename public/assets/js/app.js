$(() => {
    //Has to be a function because of using this keyword
    $(`.eat`).on(`click`, function (event) {
        const id = $(this).data(`id`);

        //Passes the ID rather than call it from a route as the example to control user input
        const userEat = {
            id: id,
            //1 is the same thing as true in mySQL. Setting the value as true for devoured
            devoured: 1
        };
        //Make the put request, the only thing that really matters here is the ID
        //Devoured is automatically set as this app only flows one way since you can't un-eat a burger
        $.ajax(`/api/eat`, {
            type: `PUT`,
            data: userEat
        }).then(() => {
            console.log("working");
            location.reload();
        });
    });
    $(`.submit`).on(`click`, function (event) {
        const newBurger = {
            //Takes the textarea on the html and passes it into the call
            burger_name: $(`#burger-input`).val().trim(),
        };
        $.ajax(`/api/burgers`, {
            type: `POST`,
            data: newBurger
        }).then(() => {
            location.reload();
        }
        );
    });
})