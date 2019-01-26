const expect = require('chai').expect;

const { hello } = require('../../routes/create');

let req = {
    body: {},
};

let res = {
    sendCalledWith: '',
    send: function(arg) { 
        this.sendCalledWith = arg;
    }
};

describe('Create Route', function() {
    describe('Hello() function', function() {
        it('Should error out if no name provided ', function() {
            hello(req, res);
            expect(res.sendCalledWith).to.contain('error');
        });
    })
});