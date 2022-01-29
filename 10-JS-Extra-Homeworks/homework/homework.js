// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var total = [];
  var prop = Object.keys(objeto);
  for (let i = 0; i < prop.length; i++){
    total.push([prop[i], objeto[prop[i]]]);
  }
  return total;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var res = {}
  for (let i = 0; i < string.length; i++){
    if (!res[string.charAt(i)]){
      res[string.charAt(i)] = 0;
    }
    res[string.charAt(i)] += 1;
  } //intente remplazar "res[string.charAt(i)]" por una variable pero el codigo deja de funcionar.
  return res;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var res = "";
  for(let i = 0; i < s.length; i++){
    if (s[i] === s[i].toUpperCase()){
      res += s[i];
    }
  }
  for(let i = 0; i < s.length; i++){
    if (s[i] === s[i].toLowerCase()){
      res += s[i];
    }
  }
  return res;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var array = str.split(" ");
  var res = array.map(palabra => {
    palabraInvertida = "";
    for (let i = palabra.length -1; i >= 0; i--) {
      palabraInvertida += palabra[i];
    }
    palabraInvertida += " ";
    return palabraInvertida;
  });
  res = res.join("");
  res = res.substring(0, res.length -1);
  return res;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numeroS = String(numero);
  var numeroI = "";
  for (let i = numeroS.length -1; i >= 0; i--) {
    numeroI += numeroS[i];
  }
  if (numeroI === numeroS){
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  res = "";
  for(var i = 0; i < cadena.length; i++){
    if(cadena[i] == "a" || cadena[i] == "b" || cadena[i] == "c"){
      continue;
    } else {
      res += cadena[i];
    }
  }
  return res;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var res = {};
  for (let i = 0; i < arr.length; i++) {
    if (!res[arr[i].length]){
      res[arr[i].length] = [];
    }
    res[arr[i].length].push(arr[i]);
  }
  var resultado = [];
  for (palabra in res){
    for (let i = 0; i < palabra.length +1; i++){
      if (res[palabra][i]){
        resultado.push(res[palabra][i]);
      }
    }
  }
  return resultado;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var res = [];
  arreglo1.forEach(valor1 => {
    arreglo2.forEach(valor2 => {
      if(valor1 == valor2){
        res.push(valor1);
      }
    });
  });
  return res;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

