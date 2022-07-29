let form = document.getElementById("Forming");
form.addEventListener("click", event => {
    if (event.target.matches("#submit-button")) {
        event.preventDefault();
        alert("Contacto proximamente");
    }
});