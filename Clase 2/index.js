/*let edad = 19;
let permiso = edad > 18;

if(permiso){
    console.log("Puedes entrar");
}else{
    console.log("no puedes entrar");
}
*/

let Name = prompt("Log in with your name");
let Surname = prompt("Type you surname")
let Age = parseInt(prompt("Type your age"));

if (((Name == " ") && (Surname == " ")) || (Age <= 12)){
    alert(Name + " " + Surname + ", " + "You have to go to elementary school");
}
else if (((Name == " ") && (Surname == " ")) || (Age <= 17)){
    alert(Name + " " + Surname + ", " + "You have to go to high school");
}
else{
    alert(Name + " " + Surname + ", " + "You have to go to university");
}