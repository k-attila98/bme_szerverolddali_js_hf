var expect = require('chai').expect;
var setPrivilegeMW = require('../../../../middleware/auth/setPrivilegeMW');

describe('setPrivilegeMW middleware', function () {

    it('should return privilegelevel on res locals and req session', function (done) {
        var reqMock = {
            session: {
                userid: 5
            }
        };
        var resMock = {
            locals: {}
        };
        var resultMock = {
            privilegeLevel: 1
        };

        const mw = setPrivilegeMW(
            {
                CustomerModel: {
                    findOne: function (some, cb) {
                        cb(null, resultMock)
                    }
                }
            }
        );

        mw(
            reqMock,
            resMock,
            (err) => {
                expect(reqMock.session.userprivilege).to.be.eql(1);
                expect(resMock.locals.privilegelevel).to.be.eql(1);
                expect(err).to.eql(undefined);
                done();
        });
    });

    it('should return error when db returns error', function (done) {
        var reqMock = {
            session: {
                userid: 5
            }
        };
        var resMock = {
            locals: {}
        };

        const mw = setPrivilegeMW(
            {
                CustomerModel: {
                    findOne: function (some, cb) {
                        cb('db error', undefined)
                    }
                }
            }
        );

        mw(
            reqMock,
            resMock,
            (err) => {
                expect(resMock.locals.error).to.eql('Nem található ilyen felhasználó!');
                done();
            });
    });

    it('should return error when no user found', function (done) {
        var fakeCustomerModel = {
            findOne: function (some, cb) {
                cb(undefined, undefined)
            }
        };

        var res = {
            locals: {}
        };

        const mw = setPrivilegeMW(
            {
                CustomerModel: fakeCustomerModel
            }
        );

        mw(
            {
                session:
                    {
                        userid: 2
                    }
            }, //req
            res, //res
            () => { //callback, does this if next
                expect(res.locals.error).to.eql('Nem található ilyen felhasználó!');
                done();
            }
        );
    });
});