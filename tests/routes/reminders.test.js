const expect = require("chai").expect;

const { create } = require("../../route-handlers/reminders");

let req = {
  body: {}
};

let res = {
  sendCalledWith: "",
  send: function(arg) {
    this.sendCalledWith = arg;
  }
};

describe("Reminders Route", function() {
  describe("Create() function", function() {
    it("Should error out if no name provided ", function() {
      create(req, res);
      expect(res.sendCalledWith).to.contain("error");
    });
  });
});
