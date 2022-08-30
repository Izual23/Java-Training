//HTML
//Personal_Data
let logIn = document.getElementById("inUser");
logIn.addEventListener("click", () => {
    event.preventDefault();
    let user;
    let storageUser = sessionStorage.getItem("user");
    if(storageUser){
        let user = storageUser;
        let welcome = `Bienvenid@ ${user}`;
        alert(welcome);
    }
    else{
        user = prompt("Ingrese su nombre");
        sessionStorage.setItem("user",user);
    }
    setTimeout(() =>{
        sessionStorage.clear();
    }, 60000)
})

let Hi = document.getElementById("presentation");
Hi.addEventListener("click", () => {
    alert("Bienvenido/a a mi página web de dibujos");//
    alert(`Ofrezco tipos de dibujos como:\n${look}`);
    alert("Escribe el número correspondiente a cada paquete cuando realices tu pedido.");
})


let div1 = document.getElementById("Title");
div1.innerHTML = `<h1> Dibujos y Arte .Yuuki Queen.</h1>`;
div1.className = "text-center Back_Pink FontText1";

let div2 = document.getElementById("about");
div2.innerHTML = `<h1> Sobre mi.</h1>`;
div2.className = "text-center FontText1 Margin_1";

let div3 = document.getElementById("story");
div3.innerHTML = `<p>¡HOLA! Soy Yuuki, me dedico a la ilustración, dibujo en su mayoría de estilo manga/anime. Soy diseniadora grafica y me dedico enteramente a esto, adoro poder dibujar y crear cosas que creía que solo eran ideas en mi cabeza y poder plasmarlas. Muchas gracias a todas las personas que puedan apoyarme en esta web para que pueda seguir con mi deseo y ayudarme a cumplir con mis objetivos.</p>`;
div3.className = "text-center FontName Margin_2 Back_sky";

let div4 = document.getElementById("show");
div4.innerHTML = `<h1> Dibujos.</h1>`;
div4.className = "text-center FontText1 Margin_1";

//Nav_Error
let wall2 = document.getElementById("Soon");
wall2.addEventListener("click", () => {
    Swal.fire({
        icon: 'error',
        title: 'Página en desarollo',
        text: 'Mas contenido proximamente!',
    })
})

/*----------------------------*/

//Back_Details
const prices = [
    {id: 1, name: "Cuerpo Entero", price: 3500, show: true,},
    {id: 2, name: "Medio Cuerpo", price: 2000, show: true},
    {id: 3, name: "Cabeza", price: 1500, show: true},
    {id: 4, name: "Fondo", price: 3000, show: true},
    {id: 5, name: "Chibi", price: 1000, show: true},
    {id: 6, name: "Personalizado", price: 4000, show: true},
    {id: 7, name: "Discount", price: 200, show: false},
    {id: 8, name: "Sends", price: 1000, show: false},
];
const look = prices.map((the) => the.name)

const save = (clave, valor) => {localStorage.setItem(clave, valor);}
for(const item of prices){
    save(item.id, JSON.stringify(item))
}
localStorage.setItem("prices", JSON.stringify(prices))

//Cards_Detail
var cards = document.querySelectorAll('.Detail');
for (var i = 0; i < cards.length; i++) {
    cards[i].querySelector('.PricesList').innerHTML =  `<h3>Dibujo: ${prices[i].name}</h3>
                                                        <p>Código: ${prices[i].id}</p>
                                                        <b>Valor: $${prices[i].price} + iva</b>
                                                        `;
}

//Helpers
let advice = {
    question: "¿Deseas envio físico? El envío físico tiene un costo de 1000 pesos argentinos.",
    error: "Error al no seleccionar envio correctamente, por favor, realice el pedido nuevamente",
    finish: "Será derivado a PayPal para realizar el pago.",
}
let {
    question,
    error,
    finish
} = advice;

//Back_Operations
const plus = (a, b) =>  a + b;
const minus = (a, b) =>  a - b;
const iva = x => x * 0.40;

//Back_Calculating
let finalPaq1 = minus (plus (prices[0].price, iva(prices[0].price)), prices[6].price);
let finalPaq2 = minus (plus (prices[1].price, iva(prices[1].price)), prices[6].price);
let finalPaq3 = minus (plus (prices[2].price, iva(prices[2].price)), prices[6].price);
let finalPaq4 = minus (plus (prices[3].price, iva(prices[3].price)), prices[6].price);
let finalPaq5 = minus (plus (prices[4].price, iva(prices[4].price)), prices[6].price);
let finalPaq6 = minus (plus (prices[5].price, iva(prices[5].price)), prices[6].price);

//Back_Calculating_extra
let totalPaq1 = plus (finalPaq1, prices[7].price);
let totalPaq2 = plus (finalPaq2, prices[7].price);
let totalPaq3 = plus (finalPaq3, prices[7].price);
let totalPaq4 = plus (finalPaq4, prices[7].price);
let totalPaq5 = plus (finalPaq5, prices[7].price);
let totalPaq6 = plus (finalPaq6, prices[7].price);

//Orders_Process
function total(){
    alert("Calculando precios + ivas - descuentos. Un momento por favor");
}

let c1 = document.getElementById("c1");
c1.addEventListener("click", () => {
    alert('Haz seleccionado un pedido de dibujo "Cuerpo entero"');
    total();
    alert(`El precio por tu pack es de ${finalPaq1} pesos argentinos.`);
        let again1 = prompt(question).toLowerCase();
        if (again1 == "si"){
            alert(`El precio por 1: ${prices[0].name} + envio físico es de ${totalPaq1} pesos argentinos.`);
            alert(finish);
        }
        else if (again1 == "no"){
            alert(`Precio final: $${finalPaq1}. Será derivado a PayPal para realizar el pago.`);
        }
        else{
            alert(error);
        }
})
let c2 = document.getElementById("c2");
c2.addEventListener("click", () => {
    alert('Haz seleccionado un pedido de dibujo "Medio Cuerpo"');
    total();
    alert(`El precio por tu pack es de ${finalPaq2} pesos argentinos.`);
        let again2 = prompt(question).toLowerCase();
        if (again2 == "si"){
            alert(`El precio por 2: ${prices[1].name} + envio físico es de ${totalPaq2} pesos argentinos.`);
            alert(finish)
        }
        else if (again2 == "no"){
            alert(`Precio final: $${finalPaq2}. Será derivado a PayPal para realizar el pago.`);
        }
        else{
            alert(error);
        }
})
let c3 = document.getElementById("c3");
c3.addEventListener("click", () => {
    alert('Haz seleccionado un pedido de dibujo "Cabeza"');
    total();
    alert(`El precio por tu pack es de ${finalPaq3} pesos argentinos.`);
        let again3 = prompt(question).toLowerCase();
        if (again3 == "si"){
            alert(`El precio por 3: ${prices[2].name} + envio físico es de ${totalPaq3} pesos argentinos.`);
            alert(finish)
        }
        else if (again3 == "no"){
            alert(`Precio final: $${finalPaq3}. Será derivado a PayPal para realizar el pago.`);
        }
        else{
            alert(error);
        }
})
let c4 = document.getElementById("c4");
c4.addEventListener("click", () => {
    alert('Haz seleccionado un pedido de dibujo "Fondo"');
    total();
    alert(`El precio por tu pack es de ${finalPaq4} pesos argentinos.`);
        let again4 = prompt(question).toLowerCase();
        if (again4 == "si"){
            alert(`El precio por 4: ${prices[3].name} + envio físico es de ${totalPaq4} pesos argentinos.`);
            alert(finish)
        }
        else if (again4 == "no"){
            alert(`Precio final: $${finalPaq4}. Será derivado a PayPal para realizar el pago.`);
        }
        else{
            alert(error);
        }
})
let c5 = document.getElementById("c5");
c5.addEventListener("click", () => {
    alert('Haz seleccionado un pedido de dibujo "Chibi"');
    total();
    alert(`El precio por tu pack es de ${finalPaq5} pesos argentinos.`);
        let again5 = prompt(question).toLowerCase();
        if (again5 == "si"){
            alert(`El precio por 5: ${prices[4].name} + envio físico es de ${totalPaq5} pesos argentinos.`);
            alert(finishh)
        }
        else if (again5 == "no"){
            alert(`Precio final: $${finalPaq5}. Será derivado a PayPal para realizar el pago.`);
        }
        else{
            alert(error);
        }
})
let c6 = document.getElementById("c6");
c6.addEventListener("click", () => {
    alert('Haz seleccionado un pedido de dibujo "Personalizado"');
    total();
    alert(`El precio por tu pack es de ${finalPaq6} pesos argentinos.`);
        let again6 = prompt(question).toLowerCase();
        if (again6 == "si"){
            alert(`El precio por 6: ${prices[5].name} + envio físico es de ${totalPaq6} pesos argentinos.`);
            alert(finish)
        }
        else if (again6 == "no"){
            alert(`Precio final: $${finalPaq6}. Será derivado a PayPal para realizar el pago.`);
        }
        else{
            alert(error);
        }
})

//End_Button
let spread = document.getElementById("list_Button");
spread.onclick = () => console.log(...prices)

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