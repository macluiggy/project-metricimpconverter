var regex = /[a-z]+|[^a-z]+/gi;
function ConvertHandler() {
  this.getNum = function (input) {
    try {
      let result = input.match(regex)[0];
      // console.log(result);
      if (isNaN(result)) return "invalid number";

      return result;
    } catch (error) {
      console.log(error);
    }
  };

  this.getUnit = function (input) {
    try {
      let result = input.match(regex)[1].toLowerCase();
      let validUnits = ["gal", "l", "lbs", "kg", "mi", "km"];
      if (validUnits.indexOf(result) === -1) return "invalid unit";
      if (result === "l") return result.toUpperCase();
      return result;
    } catch (error) {
      console.log(error);
      return "invalid unit";
    }
  };

  this.getReturnUnit = function (initUnit) {
    try {
      let result;
      const unitToUnit = {
        gal: "L",
        l: "gal",
        // lbs: () => (initUnit * lbsToKg).toFixed(5),
        kg: "lbs",
        lbs: "kg",
        mi: "km",
        km: "mi",
      };
      result = unitToUnit[`${initUnit}`.toLowerCase()];
      return result;
    } catch (error) {
      console.log(error);
      return "error";
    }
  };

  this.spellOutUnit = function (unit) {
    let result;

    return result;
  };

  this.convert = function (initNum, initUnit) {
    try {
      const galToL = 3.78541;
      const lbsToKg = 0.453592;
      const miToKm = 1.60934;
      let result;
      const valToVal = {
        gal: (initNum * galToL).toFixed(5),
        l: (initNum / galToL).toFixed(5),
        // lbs: () => (initUnit * lbsToKg).toFixed(5),
        lbs: (initNum * lbsToKg).toFixed(5),
        kg: (initNum / lbsToKg).toFixed(5),
        mi: (initNum * miToKm).toFixed(5),
        km: (initNum / miToKm).toFixed(5),
      };
      result = valToVal[initUnit.toLowerCase()];

      return Number(result);
    } catch (error) {
      console.log(error);
      return "error";
    }
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;

    return result;
  };
}

module.exports = ConvertHandler;
