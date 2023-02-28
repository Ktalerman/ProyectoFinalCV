
/**
 * console.log ("hola mundo")
let numero1  = 3;
let numero2 = 4;
let resultado = numero1+numero2;
console.log ("la sume es ="+ resultado)+*/

/**
document.getElementById('boton').onclick = function () {
    console.log ("Evento1");
    document.getElementById ('demo').innerHTML = '1155117655';
}
*/
/** 
document.addEventListener ('click', function(){
    console.log("event listener");
    document.getElementById ('demo').innerHTML = '1155117655';
});
*/

document.getElementById('boton1').addEventListener ('click', function(){
    console.log("event listener");
    document.getElementById ('demo').innerHTML = '1155117655';
});
document.getElementById('boton2').addEventListener ('click', function(){
    document.getElementById ('demo').innerHTML = 'Cañada de gomez 1068';
});
document.getElementById('boton3').addEventListener ('click', function(){
    document.getElementById ('demo').innerHTML = 'talermankarina78@hotmail.com';
});