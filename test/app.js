const supertest = require("supertest");
const should = require("should");

// This agent refers to PORT where program is runninng.
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || "0.0.0.0";
const server = supertest.agent(`http://${HOST}:${PORT}`);

describe("App endpoint tests",function(){
  // #1 should return home page
  it("should return pong",function(done){
    server
      .get("/ping")
      .expect(200) // THis is HTTP response
      .end(function(err,res){
        // HTTP status should be 200
        res.status.should.equal(200);
        // Error key should be false.
        res.text.should.equal("pong");
        done();
    });
  });
});