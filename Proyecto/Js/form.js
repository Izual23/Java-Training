//Nav_Error
let wall2 = document.getElementById("Soon");
wall2.addEventListener("click", () => {
    Swal.fire({
        icon: 'error',
        title: 'Página en desarollo',
        text: 'Mas contenido proximamente!',
    })
})

//HTML
let div1 = document.getElementById("Title");
div1.innerHTML = `<h1> Contacto </h1>`;
div1.className = "text-center Back_Pink FontText1 Margin_1";

let form = document.getElementById("Forming");
form.className = "Margin_1";
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

//Footer
let YT = document.getElementById("YT");
YT.addEventListener("click", () => {
    event.preventDefault();
    Toastify({
        text: "Canal de YouTube en creacion 🦄",
        duration: 5000,
        className: 'toastyColorRed',
        }).showToast();
})