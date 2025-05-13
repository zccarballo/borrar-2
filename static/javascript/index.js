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

/*utilizo el + para concatenar varias cosas dentro de console.log;
 *también podría dejar solo una string y utilizar $ para "llamar" a cada una de mis variables, pero en este caso no funciona,
 *seguramente por ser un bucle for*/

//EXER4: creacion de etiquetas para mostrar os datos en HTML

//IMPRIMO O ARRAY
let arrayParaHTML = document.createElement("div");
arrayParaHTML.className = "estilo-div";
arrayParaHTML.innerHTML = arrayDatos;
document.body.append(arrayParaHTML);
console.log("Este e o div que inclue o meu array", arrayParaHTML);

//IMPRIMO O OBXECTO - desta forma non podo imprimir o obxecto, pero si cada dato do obxecto
let obxectoParaHTML = document.createElement("div");
obxectoParaHTML.className = "estilo-div2";
obxectoParaHTML.innerHTML = obxectoDatos.primerDato; //asi accedo ao primeiro dato de obxectoDatos
document.body.append(obxectoParaHTML);
console.log("Este e o div que inclue o meu obxecto", obxectoParaHTML);

//(for .. in) con este bucle especial podo acceder a informacion do obxecto; (for...of) seria o equivalente para array

for (const clave in obxectoDatos) {
  console.log("clave ", clave, "valor do obxeto ", obxectoDatos[clave]);
}
//con este bucle xa podo imprimir o obxecto

//desta forma creo un div por cada dato:

for (const clave in obxectoDatos) {
  console.log("clave ", clave, "valor do obxeto ", obxectoDatos[clave]);
  let obxectoParaHTML = document.createElement("div");
  obxectoParaHTML.className = "estilo-div";
  obxectoParaHTML.innerHTML = obxectoDatos[clave];
  document.body.append(obxectoParaHTML);
  console.log("Este e o div que inclue o meu obxecto", obxectoParaHTML);
}

//desta forma creo un div no que meto todos os datos:

// let contedorObxecto = document.createElement("div");
// contedorObxecto.className = "estilo-div2";
// document.body.append(contedorObxecto);
// for (const clave in obxectoDatos) {
//   obxectoParaHTML.innerHTML = obxectoDatos[clave];
//   contedorObxecto.append(obxectoDatos[clave]);
//   console.log("Este e o div que inclue o meu obxecto", obxectoParaHTML);
// }

//IMPRIMO A ITERACIÓN

for (let contador = 0; contador < arrayDatos.length; contador++) {
  let bucle =
    "o elemento do array en posicion: " +
    contador +
    " ten este valor: " +
    arrayDatos[contador]; //Creo unha variable coa accion que se vai repetir en bucle
  console.log(bucle);
  let bucleParaHTML = document.createElement("div");
  bucleParaHTML.className = "estilo-div2";
  bucleParaHTML.innerHTML = bucle; //Dentro do contido do meu div introduzo a variable que creei para o bucle
  document.body.append(bucleParaHTML);
  console.log("Este e o div que inclue o meu bucle", bucleParaHTML);
}
