
let pintar = () => {

    let nombre = prompt("Dime tu nombre");

    let contenedor = document.getElementById("contenedor");
    contenedor.style.color = "green";
    contenedor.style.background = "blue";
    contenedor.innerHTML = `Hola, te llamas ${nombre}`;
};