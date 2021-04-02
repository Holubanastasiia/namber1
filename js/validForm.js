
let email = document.getElementById("email");
let submit = document.getElementById("submit");

submit.addEventListener("click", function (e) {
    e.preventDefault();

    let valid = true;

    if (email.value.length === 0) {
        valid = false;
        email.className = "error";
    }
    else {
        email.className = "OK";
    }
});