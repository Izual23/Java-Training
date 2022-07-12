//Helpers
let error = "Error al no seleccionar envio correctamente, por favor, realice el pedido nuevamente";
let question = "¿Deseas envio físico? El envío físico tiene un costo de 1000 pesos argentinos.";

//Calculations
const plus = (a, b) =>  a + b;
const minus = (a, b) =>  a - b;
const iva = x => x * 0.40;

//Details
const prices = [
    {id: 1, name: "Cuerpo Entero", price: 3500},
    {id: 2, name: "Medio Cuerpo", price: 2000},
    {id: 3, name: "Cabeza", price: 1500},
    {id: 4, name: "Fondo", price: 3000},
    {id: 5, name: "Chibi", price: 1000},
    {id: 6, name: "Discount", price: 200},
    {id: 7, name: "Sends", price: 1000},
];

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

alert("Bienvenido/a a mi página web de dibujos, a continuación podrás seleccionar tu paquete y verificar sus precios");
alert("Haz tu pedido escribiendo el número correspondiente a cada paquete.");
let choose = parseInt(prompt(`(1).${prices[0].name}: $${prices[0].price}, (2).${prices[1].name}: $${prices[1].price}, (3).${prices[2].name}: $${prices[2].price}, (4).${prices[3].name}: $${prices[3].price}, (5).${prices[4].name}: $${prices[4].price}`));

//Waiting time
function total(){
    alert("Calculando precios + ivas - descuentos. Un momento por favor");
}
total();

//Total price
switch (choose){
    case 1: 
        alert(`El precio por tu pack es de ${finalPaq1} pesos argentinos.`);
        let again1 = prompt(question).toLowerCase();
        if (again1 == "si"){
            alert(`El precio por 1: ${categories[0]} + envio físico es de ${totalPaq1} pesos argentinos.`);
            alert("Será derivado a PayPal para realizar el pago.")
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
            alert(`El precio por 2: ${categories[1]} + envio físico es de ${totalPaq2} pesos argentinos.`);
            alert(error)
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
            alert(`El precio por 3: ${categories[2]} + envio físico es de ${totalPaq3} pesos argentinos.`);
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
            alert(`El precio por 4: ${categories[3]} + envio físico es de ${totalPaq4} pesos argentinos.`);
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
            alert(`El precio por 5: ${categories[4]} + envio físico es de ${totalPaq5} pesos argentinos.`);
            alert("Será derivado a PayPal para realizar el pago.")
        }
        else if (again5 == "no"){
            alert(`Precio final: $${finalPaq5}. Será derivado a PayPal para realizar el pago.`);
        }
        else{
            alert(error);
        }
    break;
}


/*class Paq1{
    constructor(name, price){
        this.name = name;
        this.price = price;
        this.sell = false;
    }
    sold(){
        this.sell = true;
    }
}

const product1 = new Paq1("Cuerpo Entero", 3500);
product1.sold();

if (product1.sell){
    alert("Producto agregado al carro");
}
else{
    alert("Producto no vendido");
}*/

//...............................................
/*class Details{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    iva(){
        this.price = this.price * 0.40
    }
    discount(){
        this.price = this.price - 200
    }
}
const drawings = [];
drawings.push(new Details(`${categories[0]}`, `${costs[0]}`))
drawings.push(new Details(`${categories[1]}`, `${costs[1]}`))
drawings.push(new Details(`${categories[2]}`, `${costs[2]}`))
drawings.push(new Details(`${categories[3]}`, `${costs[3]}`))
drawings.push(new Details(`${categories[4]}`, `${costs[4]}`))*/
