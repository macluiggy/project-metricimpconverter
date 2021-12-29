const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
  suite("Function convertHandler.getUnit(input)", function () {
    test("For each valid unit inputs", (done) => {
      let input = ["gal", "mi", "km", "lbs", "kg", "L"];
      input.forEach((ele) => {
        assert.equal(convertHandler.getUnit(32 + ele), ele);
      });
      done();
    });
    test("Unknown unit", (done) => {
      let input = "32g";
      assert.equal(convertHandler.getUnit(input), "invalid unit");
      done();
    });

    test("Gal to L", (done) => {
      let input = [5, "gal"];
      let expected = 18.92705;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      );
      done();
    });
    test("L to Gal", (done) => {
      let input = [5, "L"];
      let expected = 1.32086;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      );
      done();
    });
    test("Lbs to Kg", (done) => {
      let input = [5, "lbs"];
      let expected = 2.26796;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      );
      done();
    });
    test("Kg to Lbs", (done) => {
      let input = [5, "kg"];
      let expected = 11.0231;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      );
      done();
    });
    test("Km to Mi", (done) => {
      let input = [5, "km"];
      let expected = 3.10686;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      );
      done();
    });
    test("Mi to Km", (done) => {
      let input = [5, "mi"];
      let expected = 8.04672;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      );
      done();
    });
  });
  suite("Function convertHandler.convert(num, unit)", () => {
    test("Gal to L", (done) => {
      var input = [5, "gal"];
      var expected = 18.9271;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      );
      done();
    });
  });
});
