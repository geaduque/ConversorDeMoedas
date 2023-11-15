function Dolar() {
  let valorEmDolar = document.getElementById("dolar").value;

  let valorEmReal = valorEmDolar * 4.87;

  valorEmReal = valorEmReal.toFixed(2);

  alert("$" + valorEmDolar + " em Real é igual R$" + valorEmReal);
}

function Euro() {
  let valorEmEuro = document.getElementById("euro").value;

  let valorEmReal = valorEmEuro * 5.29;

  valorEmReal = valorEmReal.toFixed(2);

  alert("€" + valorEmEuro + " em Real é igual R$" + valorEmReal);
}

function Libra() {
  let valorEmLibra = document.getElementById("euro").value;

  let valorEmReal = valorEmLibra * 6.08;

  valorEmReal = valorEmReal.toFixed(2);

  alert("£" + valorEmLibra + " em Real é igual R$" + valorEmReal);
}

function Iene() {
  let valorEmIene = document.getElementById("euro").value;

  let valorEmReal = valorEmIene * 0.032;

  valorEmReal = valorEmReal.toFixed(2);

  alert("¥" + valorEmIene + " em Real é igual R$" + valorEmReal);
}
