function calculateDistance(distScale, distGiven) {
console.log("here");

    if(distScale === "distKilometers"){
        return {
            kil: distGiven,
            mil: distGiven * 0.621371,
          };
    }else{
        return {
            kil: distGiven * 1.609344,
            mil: distGiven,
          };
    }
}
  
  module.exports = calculateDistance;