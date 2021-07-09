
function ejercicio_1 (){

for (var n = 0; n < 10; n++)
if (n % 2 == 0)
{
console.log(n, "Es par")
} 
else{
console.log(n, "Es impar")
}
}


function ejercicio_2 (){

var num1 = 5;
var num2 = 8;
suma = num1 + num2;
{
console.log("La suma total es: " +suma);
}
}

Ejercicio_3

function promediar_edades(arreglo_personas) {

    promedio_edades = 0
    for (i = 0; i < arreglo_personas.length ; i++){
    
        promedio_edades += arreglo_personas[i].Edad
    }
    promedio_edades /= arreglo_personas.length

    return promedio_edades
}
function promediar_pesos(arreglo_personas) {
    promedio_pesos = 0
    for (i = 0; i < arreglo_personas.length ; i++){
    
        promedio_pesos += arreglo_personas[i].Peso
    }
    promedio_pesos /= arreglo_personas.length

    return promedio_pesos
}

persona1 = {
    "Nombre": 'Bobby',
    "Edad": 3,
    "Peso": 12
}

persona2 = {
    "Nombre": 'Tommy',
    "Edad": 4,
    "Peso": 20
}

persona3 = {
    "Nombre": 'Pelusa',
    "Edad": 8,
    "Peso": 6
}

persona4 = {
    "Nombre": 'Cachupin',
    "Edad": 6,
    "Peso": 25
}

persona5 = {
    "Nombre": 'Firulais',
    "Edad": 1,
    "Peso": 2
}
arreglo_personas = [persona1, persona2, persona3, persona4, persona5]

{
    console.log("el promedio de edad es: ", promedio_edades)
    console.log("el promedio de peso es: ", promedio_pesos)
}
