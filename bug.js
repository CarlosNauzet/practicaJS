function calcularPromedio(numeros) {
  console.log(numeros);
  let sumaTotal = 0;
  for (let i = 0; i < numeros.length; i++) {
    sumaTotal += numeros[i];
    console.log(sumaTotal);
  }
  const promedio = sumaTotal / numeros.length;
  console.log(sumaTotal + " es este la suma total");
  console.log(promedio + " este es el promedio");
  return promedio;
}
const listaNumeros = [1, 2, 3, 4, 5];
const promedioNumeros = calcularPromedio(listaNumeros);

console.log(listaNumeros);
