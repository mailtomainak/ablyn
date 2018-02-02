process.env.NODE_ENV = 'test';
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server/index.js');
let should = chai.should();



chai.use(chaiHttp);
describe("TimeLine Tests", () => {
  describe("Get TimeLine", () => {
    it("should get the timeline", (done) => {
      chai.request(server).post('/tweet').end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(0);
        done();
      })
    })
  });
});
