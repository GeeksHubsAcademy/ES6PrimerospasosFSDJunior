
//FOR OF 

let array1 = ["pico","pala","casco"];


/*for (let i = 0; i <= array1.length; i++){
    console.log(array1[i]);
}*/


for(let tiburon of array1){
    console.log(tiburon);
};

//FOR IN 

let apellidos = ["martinez","perez","garcía"];

for (let index in apellidos) {
    console.log('apellidos[' + index + '] = ' + apellidos[index]);
};