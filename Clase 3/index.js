/*

let numero = parseInt(prompt("ingrese un numero"));

for (let index = 0; index <= 10; index++){
    let result = numero * index;
    let mensaje = `${numero} * ${index} = ${result}`;
    alert(mensaje);}

*/

for (let Room = 1; Room < 11; Room++){
    let Name = prompt("Hello, my name is...");
    let Gender = prompt("My gender is... (Specifiy Male or Female)").toLowerCase();
    let Service = `Your room is the number ${Room}.`;
    if (Gender == "male"){
        alert(Service + " " + "Please Mr. " + Name + ", be careful on the way to your room");
    }
    else if (Gender == "female"){
        alert(Service + " " + "Please Ms. " + Name + ", be careful on the way to your room");
    }
    else{
        alert("Please, specify your data again");
    }
}
