//EXER1: creacion de estruturas de datos

//array sin valores
let array = [];

//array con valores
let arrayDatos = [5, 10, 15];

//obxecto sen valores
let obxecto = {};

//obxecto con valores
let obxectoDatos = {
  primerDato: "zoe",
  segundoDato: "chaos",
  tercerDato: "carballo",
};

console.log("este é o meu array sen definir", array);
console.log("este é o meu obxecto sen definir", obxecto);

console.log("este é o meu array definido", arrayDatos);
console.log("este é o meu obxecto definido", obxectoDatos);

//EXER2: insercion de valores

//en array

arrayDatos.push(20, 25, 30);
console.log("agora teño estos 6 valores no meu array", arrayDatos);

//en obxecto
obxectoDatos.cuartoDato = 29;
obxectoDatos.quintoDato = "muller";
obxectoDatos.sextoDato = "traballadora";
console.log("agora teño 6 valores no meu obxecto", obxectoDatos);

//EXER3: bucle for

for (let contador = 0; contador < arrayDatos.length; contador++) {
  console.log(
    "o elemento do array en posicion: " + contador,
    "ten este valor: " + arrayDatos[contador]
  );
}
