

/*
 sum( x * y ) - sum( x ) * sum( y )
------------------------------------
 sum( x ^ 2 ) - ( sum( x ) ^ 2) / n
*/

var _ = require('lodash');

var LeastSquares = function () {}

_.extend(LeastSquares.prototype, {
  initialize: function (opt) {
    this.dataSet = opt.dataSet;
    this.getSlope();
    this.getIntercept();
  },

  getSlope: function () {
    this.sumXY = _.inject(this.dataSet, function (total, point) {
      return total + point.x * point.y;
    }, 0);

    this.sumX = _.inject(this.dataSet, function (total, point) {
      return total + point.x;
    }, 0);

    this.sumY = _.inject(this.dataSet, function (total, point) {
      return total + point.y;
    }, 0);

    this.sumXsquare = _.inject(this.dataSet, function (total, point) {
      return total + point.x * point.x;
    }, 0);

    this.n = this.dataSet.length;


    var top = this.sumXY - this.sumX * this.sumY / this.n;

    var bottom = this.sumXsquare - this.sumX * this.sumX / this.n;

    this.slope = top / bottom;
  },

  getIntercept: function () {
    this.intercept = ( this.sumY - this.slope * this.sumX ) / this.n;
  }
});

module.exports = LeastSquares;