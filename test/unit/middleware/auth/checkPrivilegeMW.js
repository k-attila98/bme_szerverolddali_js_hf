var expect = require('chai').expect;
var checkPrivilegeMW = require('../../../../middleware/auth/checkPrivilegeMW');

describe('setPrivilegeMW middleware', function () {

    it('should pass privilegelevel check with admin priv', function (done) {
        var reqMock = {
            session: {
                    userprivilege: 1
                }
        };
        var resMock = {
            locals: {
                privilegelevel: 1
            },
            redirect: where => {
                expect(where).to.be.eql(undefined);
            }
        };

        const mw = checkPrivilegeMW({});

        mw(
            reqMock,
            resMock,
            (err) => {
                expect(err).to.eql(undefined);
                done();
            });
    });

    it('should fail privilegelevel check by not having admin priv', function (done) {
        var reqMock = {
            session: {
                userprivilege: 0
            }
        };
        var resMock = {
            locals: {
                privilegelevel: 0
            },
            redirect: where => {
                expect(where).to.be.eql('/order');
                done();
            }
        };

        const mw = checkPrivilegeMW({});

        mw(
            reqMock,
            resMock,
            (err) => {
                //no next
            });
    });

    it('should fail privilegelevel check by having different priv levels', function (done) {
        var reqMock = {
            session: {
                userprivilege: 0
            }
        };
        var resMock = {
            locals: {
                privilegelevel: 1
            },
            redirect: where => {
                expect(where).to.be.eql('/order');
                done();
            }
        };

        const mw = checkPrivilegeMW({});

        mw(
            reqMock,
            resMock,
            (err) => {
                //no next
            });
    });
});