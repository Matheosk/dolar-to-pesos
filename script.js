// Declaramos elementos del DOM
const inputDollar = document.getElementById('input-dolar');
const texto = document.getElementById('cambio');

// Conseguimos el valor del dolar actualizado desde DolarAPI
async function getDollarValueFromApi() {
  const response = await fetch("https://dolarapi.com/v1/dolares/blue");
  const data = await response.json();
  return parseInt(data.venta);
}

async function calculateValue() {
  // Variable con el valor actualizado del dolar
  const dollarValue = await this.getDollarValueFromApi();

  // Damos funcion a la entrada numerica
  inputDollar.addEventListener('change', (e) => {
    let entrada = e.target.value;
    let cambio = entrada * dollarValue;

    // Actualizamos el resultado solamente si el usuario ingreso un dato
    if (entrada !== "" && entrada !== "0") {
      texto.innerText = `${entrada} USD = ${cambio} ARS \n (Cambio Blue)`;
    }
  });
}
calculateValue();

