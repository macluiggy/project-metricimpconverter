var regex = /[a-z]+|[^a-z]+/gi;
function ConvertHandler() {
  this.getNum = function (input) {
    let result = input.match(regex)[0];

    return result;
  };

  this.getUnit = function (input) {
    let result = input.match(regex)[1].toLowerCase();
    if (result === "l") return result.toUpperCase();
    return result;
  };

  this.getReturnUnit = function (initUnit) {
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
  };

  this.spellOutUnit = function (unit) {
    let result;

    return result;
  };

  this.convert = function (initNum, initUnit) {
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
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;

    return result;
  };
}

module.exports = ConvertHandler;
