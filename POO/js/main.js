

// //PROGRAMACIÓN ORIENTADA A OBJETOS

// //CLASES

// class Tarea {

//     constructor(texto, id) {
//         console.log("Tarea instanciada con éxito!", texto);

//         this.texto = texto;
//         this.id = id;
//         this.fecha = new Date();
//     };

//     fechaHoy(){
//         this.fecha = new Date();
//     };
// };

// let tarea = new Tarea('compra patatas',1);

// let tarea2 = new Tarea('comprar huevo',2);

// let tarea3 = new Tarea('comprar pan',3);

// console.log(tarea2.texto);
// console.log(tarea3.fecha);
// console.log(tarea.id);

// class Coche {

//     constructor(velocidad,marca,color,puertas,combustible,plazas){
//         this.velocidad = velocidad;
//         this.marca = marca;
//         this.color = color;
//         this.puertas = puertas;
//         this.combustible = combustible;
//         this.plazas = plazas;
//         this.ruedas = 4;
//         this.volante = "izquierda";

//     };

//     acelerar(){
//         this.velocidad = this.velocidad + 50;
//     };

//     frenar(){
//         this.velocidad = this.velocidad - 50;
//     };

//     aparcar(){
//         this.velocidad = 0;
//     };
// };

// let cocheJessica = new Coche(100,"Seat","White",4,"Diesel",5);
// let cocheCarlos = new Coche(90,"Mercedes","Rojo",3,"Gasolina",2);

// let tramo = "recta";

// while(tramo == "recta"){
//     cocheJessica.acelerar();
//     cocheCarlos.acelerar();
//     console.log("RRRRRRRRRRRRN Jessica acelera y va a " + cocheJessica.velocidad + "km/h");
//     console.log("RRRRRRRRRRRRN Carlos acelera y va a " + cocheCarlos.velocidad + "km/h");

//     if(cocheCarlos.velocidad >= 290){
//         tramo = "curva";
//     };

//     if(cocheJessica.velocidad >= 300){
//         tramo = "curva";
//     };
// };

// console.log("Jessica llega a la curva a " + cocheJessica.velocidad + " KM/H");


class Fighter {

    constructor (nombre, fuerza, suerte, defensa){
        this.vida = 300;
        this.nombre = nombre;
        this.fuerza = fuerza;
        this.suerte = suerte;
        this.defensa = defensa;
    };

    golpe1(enemigo){
        enemigo.vida -= (this.fuerza - enemigo.suerte);
    };

    golpeEspecial(){

    };
};

let player1 = new Fighter("Queen",30,10,5);

let player2 = new Fighter("JC",40,20,0);

player1.golpe1(player2);

console.log(player2.vida);