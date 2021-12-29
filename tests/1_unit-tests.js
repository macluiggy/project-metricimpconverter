// const chai = require("chai");
// let assert = chai.assert;
// const ConvertHandler = require("../controllers/convertHandler.js");

// let convertHandler = new ConvertHandler();

// suite("Unit Tests", function () {
//   suite("Function convertHandler.getUnit(input)", function () {
//     test("For each valid unit inputs", (done) => {
//       let input = ["gal", "mi", "km", "lbs", "kg", "L"];
//       input.forEach((ele) => {
//         assert.equal(convertHandler.getUnit(32 + ele), ele);
//       });
//       done();
//     });
//     test("Unknown unit", (done) => {
//       let input = "32g";
//       assert.equal(convertHandler.getUnit(input), "invalid unit");
//       done();
//     });

//     test("Gal to L", (done) => {
//       let input = [5, "gal"];
//       let expected = 18.92705;
//       assert.approximately(
//         convertHandler.convert(input[0], input[1]),
//         expected,
//         0.1
//       );
//       done();
//     });
//     test("L to Gal", (done) => {
//       let input = [5, "L"];
//       let expected = 1.32086;
//       assert.approximately(
//         convertHandler.convert(input[0], input[1]),
//         expected,
//         0.1
//       );
//       done();
//     });
//     test("Lbs to Kg", (done) => {
//       let input = [5, "lbs"];
//       let expected = 2.26796;
//       assert.approximately(
//         convertHandler.convert(input[0], input[1]),
//         expected,
//         0.1
//       );
//       done();
//     });
//     test("Kg to Lbs", (done) => {
//       let input = [5, "kg"];
//       let expected = 11.0231;
//       assert.approximately(
//         convertHandler.convert(input[0], input[1]),
//         expected,
//         0.1
//       );
//       done();
//     });
//     test("Km to Mi", (done) => {
//       let input = [5, "km"];
//       let expected = 3.10686;
//       assert.approximately(
//         convertHandler.convert(input[0], input[1]),
//         expected,
//         0.1
//       );
//       done();
//     });
//     test("Mi to Km", (done) => {
//       let input = [5, "mi"];
//       let expected = 8.04672;
//       assert.approximately(
//         convertHandler.convert(input[0], input[1]),
//         expected,
//         0.1
//       );
//       done();
//     });
//   });
//   suite("Function convertHandler.getNum(input)", () => {
//     test("Whole number input", (done) => {
//       let input = "32L";
//       assert.equal(convertHandler.getNum(input), 32);
//       done();
//     });
//     test("Decimal Input", (done) => {
//       let input = "3.25mi";
//       assert.equal(convertHandler.getNum(input), 3.25);
//       done();
//     });
//     test("Fractional Input", (done) => {
//       let input = "12/8mi";
//       assert.equal(convertHandler.getNum(input), 1.5);
//       done();
//     });
//     test("Fractional Input w/ Decimal", (done) => {
//       let input = "27/5.4mi";
//       assert.equal(convertHandler.getNum(input), 5);
//       done();
//     });

//     test("Invalid Input (double fraction)", (done) => {
//       let input = "3/7.2/4L";
//       assert.equal(convertHandler.getNum(input), "invalid number");
//       done();
//     });
//     test("No Numerical Input", (done) => {
//       let input = "kg";
//       assert.equal(convertHandler.getNum(input), 1);
//       assert.equal(convertHandler.getUnit(input), "kg");
//       done();
//     });
//   });
//   suite("Function convertHandler.convert(num, unit)", () => {
//     test("Gal to L", (done) => {
//       var input = [5, "gal"];
//       var expected = 18.9271;
//       assert.approximately(
//         convertHandler.convert(input[0], input[1]),
//         expected,
//         0.1
//       );
//       done();
//     });
//   });
//   suite("Function convertHandler.spellOutUnit(unit)", () => {
//     test("For Each Valid Unit Inputs", (done) => {
//       let input = ["gal", "mi", "km", "lbs", "kg", "L"];
//       let expected = [
//         "gallons",
//         "miles",
//         "kilometers",
//         "pounds",
//         "kilograms",
//         "liters",
//       ];
//       input.forEach((ele, i) => {
//         assert.equal(convertHandler.spellOutUnit(ele), expected[i]);
//       });
//       done();
//     });
//   });
// });
const chai = require("chai");
const assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

const convertHandler = new ConvertHandler();

suite("Unit Tests", () => {
  suite("Function convertHandler.getNum(input)", () => {
    test("Whole number input", (done) => {
      const input = "32L";
      assert.equal(convertHandler.getNum(input), 32);
      done();
    });

    test("Decimal Input", (done) => {
      const input = "1.2gal";
      assert.equal(convertHandler.getNum(input), 1.2);
      done();
    });

    test("Fractional Input", (done) => {
      const input = "1/2km";
      assert.equal(convertHandler.getNum(input), 0.5);
      done();
    });

    test("Fractional Input w/ Decimal", (done) => {
      const input = "5.5/2mi";
      assert.equal(convertHandler.getNum(input), 2.75);
      done();
    });

    test("Invalid Input (double fraction)", (done) => {
      const input = "5.5/2/2l";
      assert.equal(convertHandler.getNum(input), "invalid number");
      done();
    });

    test("No Numerical Input", (done) => {
      const input = "lbs";
      assert.equal(convertHandler.getNum(input), 1);
      done();
    });
  });

  suite("Function convertHandler.getUnit(input)", () => {
    test("For Each Valid Unit Inputs", (done) => {
      const input = ["gal", "mi", "km", "lbs", "kg", "L"];
      input.forEach((el) => {
        assert.equal(convertHandler.getUnit(el), el);
      });
      done();
    });

    test("Unknown Unit Input", (done) => {
      const input = "whatever";
      assert.equal(convertHandler.getUnit(input), "invalid unit");
      done();
    });
  });

  suite("Function convertHandler.getReturnUnit(initUnit)", () => {
    test("For Each Valid Unit Inputs", (done) => {
      const input = ["gal", "L", "mi", "km", "lbs", "kg"];
      const expect = ["L", "gal", "km", "mi", "kg", "lbs"];
      input.forEach((el, i) => {
        assert.equal(convertHandler.getReturnUnit(el), expect[i]);
      });
      done();
    });
  });

  suite("Function convertHandler.spellOutUnit(unit)", () => {
    test("For Each Valid Unit Inputs", (done) => {
      const input = ["gal", "l", "mi", "km", "lbs", "kg"];
      const expect = [
        "gallons",
        "liters",
        "miles",
        "kilometers",
        "pounds",
        "kilograms",
      ];
      input.forEach((el, i) => {
        assert.strictEqual(convertHandler.spellOutUnit(el), expect[i]);
      });
      done();
    });
  });

  suite("Function convertHandler.convert(num, unit)", () => {
    test("Gal to L", (done) => {
      var input = [5, "Gal"];
      var expected = 18.9271;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1 // Tolerance
      );
      done();
    });

    test("L to Gal", (done) => {
      var input = [6, "L"];
      var expected = 1.58503;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1 // Tolerance
      );
      done();
    });

    test("Mi to Km", (done) => {
      var input = [10, "Mi"];
      var expected = 16.0934;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1 // Tolerance
      );
      done();
    });

    test("Km to Mi", (done) => {
      var input = [2.5, "Km"];
      var expected = 1.55343;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1 // Tolerance
      );
      done();
    });

    test("Lbs to Kg", (done) => {
      var input = [3 / 3, "Lbs"];
      var expected = 0.453592;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1 // Tolerance
      );
      done();
    });

    test("Kg to Lbs", (done) => {
      var input = [6.3 / 2, "Kg"];
      var expected = 6.944561;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1 // Tolerance
      );
      done();
    });
  });
});
