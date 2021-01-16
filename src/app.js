const tempCalculator = require("./tempCalculator.js");
const distCalculator = require("./distCalculator.js");

const distanceValues = document.getElementsByClassName("distance");
const temperatureValues = document.getElementsByClassName("temperature");

for (let given of temperatureValues) {
  given.addEventListener("input", function (e) {
    let value = parseFloat(e.target.value);

    for (let temperature of temperatureValues) {
      temperature.value = tempCalculator(e.target.name, value)[temperature.id];
    }
  });
}

for (let given of distanceValues) {
  given.addEventListener("input", function (e) {
    let value = parseFloat(e.target.value);

    for (let distance of distanceValues) {
      distance.value = distCalculator(e.target.name, value)[distance.id];
    }
  });
}