document.addEventListener("DOMContentLoaded", e => {

    fillUserList();

    const catOption = c => `<option>${c.name}</option>`;
    //REMOVE VALUE SO THE DISPLAY NAME WILL BE USED BY THE NEW TODO
    // const catOption = c => `<option value="${c.id}">${c.name}</option>`;

    fetch( host + "/api/categories")
        .then(r => r.json())
        .then(cats => cats.forEach(c => catList.innerHTML += catOption(c)));

    //// GOAL IS TO GENERATE AN ENCODED FORM TO SEND AS THE "body"    
    //userid=1&category=1&priority=Medium&description=Make+Tea&deadline=2023-12-06

    saveButton.addEventListener("click", e => {

        // LOOP WAY OF GATHERING FORM DATA
        const elements = document.querySelectorAll("main [name]");
        const content = [...elements].map(e => `${encodeURIComponent(e.name)}=${encodeURIComponent(e.value)}`).join("&");

        // LINEAR WAY OF GATHERING FORM DATA
        // const content = new FormData();
        // content.append("userid", userList.value);
        // content.append("category", catList.value);
        // content.append("priority", priorityList.value);
        // content.append("description", description.value);
        // content.append("deadline", deadline.value);
        // console.log(content)
        //// FormData() NOT WORKING WITH ANY OR NONE FOR CONTENT TYPE

        fetch(host + "/api/todos/", {
            method: "POST", body: content,
            headers: {
                "Content-type": "application/x-www-form-urlencoded" //"application/json"
            }
        }).then(r => {
            location="/todos.html"
        });

    }); //END SAVE
});//END LOADED