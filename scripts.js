/*
La funcionalidad en Javascript: Al momento de presionar el botón “Resumen”, 
deberá mostrar en la sección “Total a Pagar: $”, el monto correspondiente a la cantidad de tickets 
a comprar con el descuento correspondiente dependiendo la categoría seleccionada, 
existen 3 categorías, Estudiante, Trainee, Junior
*/

console.log("desde javascript")

const $d = document;
const $btnResumen = $d.getElementById("btn-resumen");
const $inputCantidad = $d.getElementById("cantidad-tickets")
const $selectCategoria = $d.getElementById("categoria-comprador")
const $labelTotal = $d.getElementById("lbl-total");
const $spanValorTicket = $d.getElementById("valor-ticket");
let cantidadEntradas, categoriaComprador;

const descuentos = [.8, .5, .15];
let precioCompleto = 200;
let textoPrecioCompleto = "VALOR DE TICKET $";
let textoTotalPagar = "Total a Pagar: $ ";

const calcularTotal = (precio, cantidad, categoria) => {
    
    let precioFinal = precio - precio * descuentos[categoria];
    return precioFinal * cantidad;
};

$d.addEventListener('DOMContentLoaded', (e) => {
    $spanValorTicket.innerHTML = "";
    $spanValorTicket.innerHTML = textoPrecioCompleto + precioCompleto;
})

$btnResumen.addEventListener('click', (e) => {
    e.preventDefault();    
    cantidadEntradas = $inputCantidad.value;
    categoriaComprador = $selectCategoria.value - 1;    
    let totalApagar = calcularTotal(precioCompleto, cantidadEntradas, categoriaComprador);   

    $labelTotal.innerHTML = "";
    $labelTotal.innerHTML = textoTotalPagar + totalApagar;
})


