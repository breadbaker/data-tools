var LeastSquares = require('./least-square');
require('chai').should();
require('mocha');
var slope2 = [
  {
    x: 0,
    y: 0
  },{
    x: 1,
    y: 2 
  },{
    x: 2,
    y: 4 
  },{
    x: 3,
    y: 6 
  },{
    x: 4,
    y: 8 
  },{
    x: 5,
    y: 10 
  }
];

describe('LeastSquares', function() {
  it('should be able to calculate a simple slope', function (done) {
    var leastSquares = new LeastSquares();
    leastSquares.initialize({
      dataSet: slope2
    });

    leastSquares.slope.should.equal(2);
    done();
  });
  it('should be able to calculate a zero intercept', function (done) {
    var leastSquares = new LeastSquares();
    leastSquares.initialize({
      dataSet: slope2
    });

    leastSquares.intercept.should.equal(0);
    done();
  });
});
