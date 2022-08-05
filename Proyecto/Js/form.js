let form = document.getElementById("Forming");
form.addEventListener("click", event => {
    if (event.target.matches("#submit-button")) {
        event.preventDefault();
    }
});

let but = document.getElementById("submit-button");
but.addEventListener("click", event => {
    Swal.fire({
        title: 'Contacto proximamente',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })
})
