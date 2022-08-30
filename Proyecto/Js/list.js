//HTML_List
const list = document.getElementById("secList");
fetch("./JSON/data.json")
.then(response => response.json())
.then(draws => {
    draws.forEach(drawing => {
        const li = document.createElement("li");
        li.innerHTML = `
        <ul>
            <h1> Producto ${drawing.id} </h1>
            <p>${drawing.name}<p>\n
            <h2> Código de Identificación </h2>
            <p>${drawing.id}</p>
            <h2> Precio inicial </h2>
            <p>${drawing.price}</p>
        </ul>
        <hr />
        `;
        list.append(li);
    });
})

let head = document.getElementById("intro");
head.className = "Margin_1";

//Nav_Error
let wall2 = document.getElementById("Soon");
wall2.addEventListener("click", () => {
    Swal.fire({
        icon: 'error',
        title: 'Página en desarollo',
        text: 'Mas contenido proximamente!',
    })
})


//Details
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

//Operations
const plus = (a, b) =>  a + b;
const minus = (a, b) =>  a - b;
const iva = x => x * 0.40;

//Calculating
let finalPaq1 = minus (plus (prices[0].price, iva(prices[0].price)), prices[6].price);
let finalPaq2 = minus (plus (prices[1].price, iva(prices[1].price)), prices[6].price);
let finalPaq3 = minus (plus (prices[2].price, iva(prices[2].price)), prices[6].price);
let finalPaq4 = minus (plus (prices[3].price, iva(prices[3].price)), prices[6].price);
let finalPaq5 = minus (plus (prices[4].price, iva(prices[4].price)), prices[6].price);
let finalPaq6 = minus (plus (prices[5].price, iva(prices[5].price)), prices[6].price);

//Calculating_extra
let totalPaq1 = plus (finalPaq1, prices[7].price);
let totalPaq2 = plus (finalPaq2, prices[7].price);
let totalPaq3 = plus (finalPaq3, prices[7].price);
let totalPaq4 = plus (finalPaq4, prices[7].price);
let totalPaq5 = plus (finalPaq5, prices[7].price);
let totalPaq6 = plus (finalPaq6, prices[7].price);

//Process_Starting
let choose = "Elija una opcion: \n";
for (let i = 0; i < prices.length; i++){
    if (prices [i].show == true){
        choose += `${prices[i].id} ${prices[i].name}: `;
        choose += `$${prices[i].price}\n`;
    }
}

//Total_price
function total(){
    alert("Calculando precios + ivas - descuentos. Un momento por favor");
}

//Selling
let ask = document.getElementById("order");
ask.addEventListener("click", () => {
    let choosing = parseInt(prompt(choose));
    total();
    switch (choosing){
        case 1: 
            alert(`Seleccionaste "Cuerpo Entero". El precio por tu pack es de ${finalPaq1} pesos argentinos.`);
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
            event.preventDefault();
        break;
        case 2: 
            alert(`Seleccionaste "Medio Cuerpo". El precio por tu pack es de ${finalPaq2} pesos argentinos.`);
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
            event.preventDefault();
        break;
        case 3: 
            alert(`Seleccionaste "Cabeza". El precio por tu pack es de ${finalPaq3} pesos argentinos.`);
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
            event.preventDefault();
        break;
        case 4: 
            alert(` Seleccionaste "Fondo".El precio por tu pack es de ${finalPaq4} pesos argentinos.`);
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
            event.preventDefault();
        break;
        case 5: 
            alert(`Seleccionaste "Chibi". El precio por tu pack es de ${finalPaq5} pesos argentinos.`);
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
            event.preventDefault();
        break;
        case 6: 
            alert(`Seleccionaste "Personalizado". El precio por tu pack es de ${finalPaq6} pesos argentinos.`);
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
            event.preventDefault();
        break;
    }
    
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