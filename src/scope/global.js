//variables

var a; //declarando
var b = 'b'; //declaramos y asignamos
b = 'bb'; //reasignar variable
var a = 'aa'; //redeclaracion'

//Global Scope

var fruit = 'Apple'; //global. De esta manera tenemos una variable global osea que funciona por fuera del codigo

function bestFruit(){
    console.log(fruit);
}
bestFruit();

//ERROR comun.
function countries(){
    country = 'Argentina'; //aca tambien se puede declarar la variable al no declarar y asignar afuera de la funcion se declara adentro pero se declara como global
    console.log(country);
}

countries();
console.log(country);