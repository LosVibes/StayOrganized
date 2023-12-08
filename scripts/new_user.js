document.addEventListener("DOMContentLoaded", e => {

    saveButton.addEventListener("click", e => {

        if (passwordInput.value != repeatPassword.value) {
            alert("Passwords do not match");
            return; //EXIT FUNCTION
        }

        // LOOP WAY OF GATHERING FORM DATA
        const elements = document.querySelectorAll("main [name]");
        const content = [...elements].map(e => `${encodeURIComponent(e.name)}=${encodeURIComponent(e.value)}`).join("&");

        fetch(host + "/api/users/", {
            method: "POST", body: content,
            headers: {
                "Content-type": "application/x-www-form-urlencoded" //"application/json"
            }
        }).then(r => {
            location = "index.html"
        });

    }); //END SAVE
});//END LOADED