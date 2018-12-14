$(() => {
    //Has to be a function because of using this keyword
    $(`.eat`).on(`click`, function (event) {
        const id = $(this).data(`id`);

        //Make the put request, the only thing that really matters here is the ID
        //Devoured is automatically set as this app only flows one way since you can't un-eat a burger
        $.ajax(`/api/eat`, {
            type: `PUT`,
            data: { id } //This is just id wrapped in an object as the user can only eat the burger
        }).then(() => {
            console.log("working");
            location.reload();
        });
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