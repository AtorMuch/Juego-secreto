//let parrafo = document.querySelector("p")
//parrafo.innerHTML = "Indica un número de 1 a 20"
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto)

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}
function verificarIntento() {
    let numeroDeUsurio = parseInt(document.getElementById("valorUsuario").value);
    console.log(numeroDeUsurio);
    console.log(numeroSecreto);
    console.log(intentos);
    
   
    if (numeroDeUsurio === numeroSecreto){
        asignarTextoElemento("p", `Acertaste el número ${intentos} ${(intentos ===1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //El usuario no acerto
        if (numeroDeUsurio > numeroSecreto){
            asignarTextoElemento("p", "El número secreto es menor");
        }else {
           asignarTextoElemento("p", "El número secreto es mayor"); 
        }
        intentos++;
        limpiarCaja();

    }

    return;
}

function limpiarCaja(){
   document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
    let nuemeroGenerado =Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(nuemeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p","Ya se sortearon todos los números posibles")
    } else {
    //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(nuemeroGenerado)){
        return generarNumeroSecreto();
        } else {
        listaNumerosSorteados.push(nuemeroGenerado);
        return nuemeroGenerado;
        }
    }
}

function condicionesIniciales(){
asignarTextoElemento("h1", "Juego del número Secreto!");
asignarTextoElemento("p", `Indica un número de 1 a ${numeroMaximo}`);
numeroSecreto = generarNumeroSecreto();
intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicr el mensaje del intervalo del número
    //generar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Desabilitar el botón de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", true);
}

condicionesIniciales();
