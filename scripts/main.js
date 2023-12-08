const host = "http://35.165.18.146"
// const host = "http://localhost:8083"

const userOption = u => `<option value="${u.id}">${u.name} - (${u.username})</option>`;
function fillUserList(){
    fetch(host + "/api/users")
    .then(r => r.json())
    .then(users => users.forEach(u => userList.innerHTML += userOption(u)));
}