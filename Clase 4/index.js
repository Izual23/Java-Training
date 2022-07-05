alert("Bienvenido/a a mi página web de dibujos, a continuación podrás seleccionar tu paquete y verificar sus precios");
alert("Haz tu pedido escribiendo el número correspondiente a cada paquete.");
let choose = parseInt(prompt("(1).Cuerpo Entero: $3500, (2).Medio Cuerpo: $2000, (3).Cabeza: $1500, (4).Fondo: $3000, (5).Chibi: $1000"));
const plus = (a, b) =>  a + b;
const minus = (a, b) =>  a - b;
const iva = x => x * 0.40;
//Numbers and prices
let paq1 = 3500;
let paq2 = 2000;
let paq3 = 1500;
let paq4 = 3000;
let paq5 = 1000;
let discount = 200;
let sends = 1000;
//Calculating 1
let finalPaq1 = minus (plus (paq1, iva(paq1)), discount);
let finalPaq2 = minus (plus (paq2, iva(paq2)), discount);
let finalPaq3 = minus (plus (paq3, iva(paq3)), discount);
let finalPaq4 = minus (plus (paq4, iva(paq4)), discount);
let finalPaq5 = minus (plus (paq5, iva(paq5)), discount);
//Calculating for extra
let totalPaq1 = plus (finalPaq1, sends);
let totalPaq2 = plus (finalPaq2, sends);
let totalPaq3 = plus (finalPaq3, sends);
let totalPaq4 = plus (finalPaq4, sends);
let totalPaq5 = plus (finalPaq5, sends);
//Waiting time
function total(){
    alert("Calculando precios + ivas - descuentos. Un momento por favor");
}
total();
//Total price
switch (choose){
    case 1: 
        alert(`El precio por tu pack es de ${finalPaq1} pesos argentinos.`);
        let again1 = prompt("¿Deseas envio digital o físico? El envío físico tiene un costo de 1000 pesos argentinos.").toLowerCase();
        if (again1 == "si"){
            alert(`El precio por 1: Cuerpo entero + envio físico es de ${totalPaq1} pesos argentinos.`);
            alert("Será derivado a PayPal para realizar el pago.")
        }
        else if (again1 == "no"){
            alert(`Precio final: $${finalPaq1}. Será derivado a PayPal para realizar el pago.`);
        }
        else{
            alert("Error al no seleccionar envio correctamente, por favor, realice el pedido nuevamente");
        }
    break;
    case 2: 
        alert(`El precio por tu pack es de ${finalPaq2} pesos argentinos.`);
        let again2 = prompt("¿Deseas envio digital o físico? El envío físico tiene un costo de 1000 pesos argentinos.").toLowerCase();
        if (again2 == "si"){
            alert(`El precio por 2: Medio Cuerpo + envio físico es de ${totalPaq2} pesos argentinos.`);
            alert("Será derivado a PayPal para realizar el pago.")
        }
        else if (again2 == "no"){
            alert(`Precio final: $${finalPaq2}. Será derivado a PayPal para realizar el pago.`);
        }
        else{
            alert("Error al no seleccionar envio correctamente, por favor, realice el pedido nuevamente");
        }
    break;
    case 3: 
        alert(`El precio por tu pack es de ${finalPaq3} pesos argentinos.`);
        let again3 = prompt("¿Deseas envio digital o físico? El envío físico tiene un costo de 1000 pesos argentinos.").toLowerCase();
        if (again3 == "si"){
            alert(`El precio por 3: Cabeza + envio físico es de ${totalPaq3} pesos argentinos.`);
            alert("Será derivado a PayPal para realizar el pago.")
        }
        else if (again3 == "no"){
            alert(`Precio final: $${finalPaq3}. Será derivado a PayPal para realizar el pago.`);
        }
        else{
            alert("Error al no seleccionar envio correctamente, por favor, realice el pedido nuevamente");
        }
    break;
    case 4: 
        alert(`El precio por tu pack es de ${finalPaq4} pesos argentinos.`);
        let again4 = prompt("¿Deseas envio digital o físico? El envío físico tiene un costo de 1000 pesos argentinos.").toLowerCase();
        if (again4 == "si"){
            alert(`El precio por 4: Fondo + envio físico es de ${totalPaq4} pesos argentinos.`);
            alert("Será derivado a PayPal para realizar el pago.")
        }
        else if (again4 == "no"){
            alert(`Precio final: $${finalPaq4}. Será derivado a PayPal para realizar el pago.`);
        }
        else{
            alert("Error al no seleccionar envio correctamente, por favor, realice el pedido nuevamente");
        }
    break;
    case 5: 
        alert(`El precio por tu pack es de ${finalPaq5} pesos argentinos.`);
        let again5 = prompt("¿Deseas envio digital o físico? El envío físico tiene un costo de 1000 pesos argentinos.").toLowerCase();
        if (again5 == "si"){
            alert(`El precio por 5: Chibi + envio físico es de ${totalPaq5} pesos argentinos.`);
            alert("Será derivado a PayPal para realizar el pago.")
        }
        else if (again5 == "no"){
            alert(`Precio final: $${finalPaq5}. Será derivado a PayPal para realizar el pago.`);
        }
        else{
            alert("Error al no seleccionar envio correctamente, por favor, realice el pedido nuevamente");
        }
    break;
}