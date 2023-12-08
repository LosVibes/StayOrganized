function todo(t) {
    // const completed = t.completed ? "[X]" : "[&nbsp;]";

    // let completed = "[&nbsp;]"
    // if(t.completed){
    //     completed = "[X]"
    // }
    const completed = `<img src="./images/check_box_${t.completed}.svg">Completed`
    return `
    <div class="todo card">
        <div class="id">         TODO ID:     <b>${t.id}</b></div>
        <div class="userid">     USER ID:     <b>${t.userid}</b></div>
        <div class="category">   CATEGORY:    <b>${t.category}</b></div>
        <div class="description">DESCRIPTION: <b>${t.description}</b></div>
        <div class="deadline">   DEADLINE:    <b>${t.deadline}</b></div>
        <div class="priority">   PRIORITY:    <b>${t.priority}</b></div>
        <button class="completed" onclick="mark(${t.id})">  ${completed}</button>
    </div>
    `;
}
function draw() {
    fetch(host + "/api/users/api/todos/")
        .then(r => r.json())
        .then(todos => {
            todoList.innerHTML = todos.filter(t => t.userid == userList.value).map(todo).join("");
        })
}

function mark(id) {
    fetch(host + "/api/todos/" + id, { method: "PUT" }).then(draw);
}


document.addEventListener("DOMContentLoaded", e => {

    fillUserList();

    userList.addEventListener("change", draw);

});//END OF LOADED