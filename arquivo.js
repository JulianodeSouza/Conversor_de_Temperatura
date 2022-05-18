function conversorCelsius(celsius) {
  var celsius = document.getElementById("celsius").value;
  var fah = (celsius * 1.8) + 32;
  var decimal = fah.toFixed(2);
  alert("Temperatura: " + decimal + " °F");
  window.location.reload()
}

function conversorFahrenheit(Fahrenheit) {
  var Fahrenheit = document.getElementById("fahrenheit").value;
  var cel = (Fahrenheit - 32) / 1.8;
  var decimal = cel.toFixed(2);
  alert("Temperatura: " + decimal + " °C");
  window.location.reload()
}

function conversorKelvin(kelvin) {
  var kelvin = document.getElementById("kelvin").value;
  var conta = (kelvin - 273);
  alert("Temperatura: " + conta + "°C");
  window.location.reload()
}

