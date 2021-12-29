const chaiHttp = require("chai-http");
const chai = require("chai");
let assert = chai.assert;
const server = require("../server");
const { suite } = require("mocha");

chai.use(chaiHttp);

suite("Functional Tests", function () {
  suite("GET /api/convert => conversion object", () => {
    test("Convert 10L (valid input)", (hecho) => {
      chai
        .request(server)
        .get("/api/convert")
        .query({ input: "10L" })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.body.initNum, 10);
          assert.equal(res.body.initUnit, "L");
          assert.approximately(res.body.returnNum, 2.64172, 0.1);
          assert.equal(res.body.returnUnit, "gal");
          hecho();
        });
    });
  });
});
