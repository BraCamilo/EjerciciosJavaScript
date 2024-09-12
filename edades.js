
function ingresarEdad() {
  let edad;
  do {
    edad = parseInt(prompt("Ingrese una edad entre 1 y 120 años:"));
    if (isNaN(edad) || edad < 1 || edad > 120) {
      alert("Edad no válida. Debe estar entre 1 y 120. Por favor, ingrese nuevamente.");
    }
  } while (isNaN(edad) || edad < 1 || edad > 120);
  return edad;
}


const edades = [];

for (let i = 0; i < 10; i++) {
  alert(`Ingresando la edad de la persona ${i + 1}`);
  edades.push(ingresarEdad());
}

let menores = 0;
let mayores = 0;
let adultosMayores = 0;
let edadMinima = Math.min(...edades);
let edadMaxima = Math.max(...edades);
let sumaEdades = 0;

edades.forEach(edad => {
  sumaEdades += edad;
  if (edad < 18) {
    menores++;
  } else if (edad >= 18 && edad < 60) {
    mayores++;
  } else {
    adultosMayores++;
  }
});

let promedioEdades = sumaEdades / edades.length;

alert(`Estadísticas de edades ingresadas:
- Menores de edad: ${menores}
- Mayores de edad: ${mayores}
- Adultos mayores (60 años o más): ${adultosMayores}
- Edad más baja: ${edadMinima}
- Edad más alta: ${edadMaxima}
- Promedio de edades: ${promedioEdades.toFixed(2)}`);
