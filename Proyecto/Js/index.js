//Details
const prices = [
    {id: 1, name: "Cuerpo Entero", price: 3500, show: true,},
    {id: 2, name: "Medio Cuerpo", price: 2000, show: true},
    {id: 3, name: "Cabeza", price: 1500, show: true},
    {id: 4, name: "Fondo", price: 3000, show: true},
    {id: 5, name: "Chibi", price: 1000, show: true},
    {id: 6, name: "Discount", price: 200, show: false},
    {id: 7, name: "Sends", price: 1000, show: false},
];
const look = prices.map((the) => the.name)
//Site intro

alert("Bienvenido/a a mi página web de dibujos, a continuación podrás seleccionar tu paquete y verificar sus precios");//
/*alert("Haz tu pedido escribiendo el número correspondiente a cada paquete.");
alert(`Ofrezco tipos de dibujos como:\n${look}`)
//Helpers
let error = "Error al no seleccionar envio correctamente, por favor, realice el pedido nuevamente";
let question = "¿Deseas envio físico? El envío físico tiene un costo de 1000 pesos argentinos.";
//Calculations
const plus = (a, b) =>  a + b;
const minus = (a, b) =>  a - b;
const iva = x => x * 0.40;
let choose = "Elija una opcion: \n";
for (let i = 0; i < prices.length; i++){
    if (prices [i].show == true){
        choose += `${prices[i].id} ${prices[i].name}: `;
        choose += `$${prices[i].price}\n`;
    }
}
let choosing = parseInt(prompt(choose));
//Calculating 1
let finalPaq1 = minus (plus (prices[0].price, iva(prices[0].price)), prices[5].price);
let finalPaq2 = minus (plus (prices[1].price, iva(prices[1].price)), prices[5].price);
let finalPaq3 = minus (plus (prices[2].price, iva(prices[2].price)), prices[5].price);
let finalPaq4 = minus (plus (prices[3].price, iva(prices[3].price)), prices[5].price);
let finalPaq5 = minus (plus (prices[4].price, iva(prices[4].price)), prices[5].price);
//Calculating for extra
let totalPaq1 = plus (finalPaq1, prices[6].price);
let totalPaq2 = plus (finalPaq2, prices[6].price);
let totalPaq3 = plus (finalPaq3, prices[6].price);
let totalPaq4 = plus (finalPaq4, prices[6].price);
let totalPaq5 = plus (finalPaq5, prices[6].price);
//Waiting time
function total(){
    alert("Calculando precios + ivas - descuentos. Un momento por favor");
}
total();
//Total price
switch (choosing){
    case 1: 
        alert(`El precio por tu pack es de ${finalPaq1} pesos argentinos.`);
        let again1 = prompt(question).toLowerCase();
        if (again1 == "si"){
            alert(`El precio por 1: ${prices[0].name} + envio físico es de ${totalPaq1} pesos argentinos.`);
            alert("Será derivado a PayPal para realizar el pago.");
        }
        else if (again1 == "no"){
            alert(`Precio final: $${finalPaq1}. Será derivado a PayPal para realizar el pago.`);
        }
        else{
            alert(error);
        }
    break;
    case 2: 
        alert(`El precio por tu pack es de ${finalPaq2} pesos argentinos.`);
        let again2 = prompt(question).toLowerCase();
        if (again2 == "si"){
            alert(`El precio por 2: ${prices[1].name} + envio físico es de ${totalPaq2} pesos argentinos.`);
            alert("Será derivado a PayPal para realizar el pago.")
        }
        else if (again2 == "no"){
            alert(`Precio final: $${finalPaq2}. Será derivado a PayPal para realizar el pago.`);
        }
        else{
            alert(error);
        }
    break;
    case 3: 
        alert(`El precio por tu pack es de ${finalPaq3} pesos argentinos.`);
        let again3 = prompt(question).toLowerCase();
        if (again3 == "si"){
            alert(`El precio por 3: ${prices[2].name} + envio físico es de ${totalPaq3} pesos argentinos.`);
            alert("Será derivado a PayPal para realizar el pago.")
        }
        else if (again3 == "no"){
            alert(`Precio final: $${finalPaq3}. Será derivado a PayPal para realizar el pago.`);
        }
        else{
            alert(error);
        }
    break;
    case 4: 
        alert(`El precio por tu pack es de ${finalPaq4} pesos argentinos.`);
        let again4 = prompt(question).toLowerCase();
        if (again4 == "si"){
            alert(`El precio por 4: ${prices[3].name} + envio físico es de ${totalPaq4} pesos argentinos.`);
            alert("Será derivado a PayPal para realizar el pago.")
        }
        else if (again4 == "no"){
            alert(`Precio final: $${finalPaq4}. Será derivado a PayPal para realizar el pago.`);
        }
        else{
            alert(error);
        }
    break;
    case 5: 
        alert(`El precio por tu pack es de ${finalPaq5} pesos argentinos.`);
        let again5 = prompt(question).toLowerCase();
        if (again5 == "si"){
            alert(`El precio por 5: ${prices[4].name} + envio físico es de ${totalPaq5} pesos argentinos.`);
            alert("Será derivado a PayPal para realizar el pago.")
        }
        else if (again5 == "no"){
            alert(`Precio final: $${finalPaq5}. Será derivado a PayPal para realizar el pago.`);
        }
        else{
            alert(error);
        }
    break;
}*/

//HTML
let div1 = document.getElementById("Title");
div1.innerHTML = `<h1> Dibujos y Arte .Yuuki Queen.</h1>`;
div1.className = "text-center Back_Pink FontText";

let catalogue = document.getElementById("PricesList");
for (const item of prices){
    if (item.show == true){
    let items = document.createElement("li");
    items.innerHTML =   `<h3>Dibujo: ${item.name}</h3>
                        <p>Código: ${item.id}</p>
                        <b>Valor: $${item.price}</b>
                        `;
    catalogue.append(items);
    }
}

let wall2 = document.getElementById("List");
wall2.onmousemove = () => alert("Página en desarollo, servicios proximamente!");

let wall3 = document.getElementById("Wall3");
wall3.onclick = () => alert("Proximamente");

let form = document.getElementById("Forming");
form.addEventListener("click", event => {
    if (event.target.matches("#submit-button")) {
        event.preventDefault();
        alert("Contacto proximamente");
    }
});