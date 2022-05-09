rotulo.innerHTML = "Ingrese el sueldo actual del empleado";

let btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", () => {
  let sueldoActual: number = Number(dato.value);
  let sueldoNuevo: number = 0;

  if (0 < sueldoActual && sueldoActual <= 15000) {
    sueldoNuevo = sueldoActual * 1.2;
    console.log("Cuenta con aumento del 20%, el sueldo será de ", sueldoNuevo);
  } else if (15001 < sueldoActual && sueldoActual <= 20000) {
    sueldoNuevo = sueldoActual * 1.1;
    console.log("Cuenta con aumento del 10%,El sueldo será de ", sueldoNuevo);
  } else if (20001 < sueldoActual && sueldoActual <= 25000) {
    sueldoNuevo = sueldoActual * 1.05;
    console.log("Cuenta con aumento del 5%,El sueldo será de ", sueldoNuevo);
  } else {
    sueldoNuevo = sueldoActual;
    console.log("No cuenta con aumento de sueldo");
  }
});
