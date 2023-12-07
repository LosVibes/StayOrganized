document.addEventListener("DOMContentLoaded", e => {

    fillUserList();

    const catOption = c => `<option value="${c.id}">${c.name}</option>`;

    fetch("http://localhost:8083/api/categories")
        .then(r => r.json())
        .then(cats => cats.forEach(c => catList.innerHTML += catOption(c)));

    //// GOAL IS TO GENERATE AN ENCODED FORM TO SEND AS "BODY"
    //userid=1&category=1&priority=Medium&description=Make+Tea&deadline=2023-12-06 

    saveButton.addEventListener("click", e => {

        //// LOOP WAY OF GATHERING DATA
        const elements = document.querySelectorAll("main [name]");
        const content = [...elements].map(e => `${e.name}=${ encodeURIComponent(e.value) }`).join("&");

        // LINEAR WAY IF GATHERING FROM DATA
        // const content = new FormData();
        // content.append("userid", userList.value);
        // content.append("category", catList.value);
        // content.append("priority", priorityList.value);
        // content.append("description", description.value);
        // content.append("deadline", deadline.value);
        // console.log(content)
        //// FormData() NOT WORKING WITH ANY OR NON FOR CONTENT TYPE
        
        fetch("http://localhost:8083/api/todos/", {method:"POST", body: content, 
        headers:{
            "Content-type": "application/x-www-form-urlencoded" // "application/json"
        } 
    }).then(r => {
        location="todos.html"
    });
    });// END SAVE
});// END LOADED