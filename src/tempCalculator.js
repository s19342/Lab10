function calculateTemperature(tempScale, tempGiven) {
console.log("there");

    if(tempScale === "tempCelsius"){
        return {
          cel: tempGiven,
          fah: tempGiven * (9/5) + 32,
          kel: tempGiven + 273.15,
        };
    }else if(tempScale === "tempFahrenheit"){
        return {
            cel: (tempGiven - 32) * (5/9),
            fah: tempGiven,
            kel: (tempGiven - 32) * (5/9) + 273.15,
          };
    }else{
        return {
            cel: tempGiven - 273.15,
            fah: (tempGiven - 273.15) * (9/5) + 32,
            kel: tempGiven,
          };
    }
}
  
  module.exports = calculateTemperature;