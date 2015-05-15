

/*
 sum( x * y ) - sum( x ) * sum( y )
------------------------------------
 sum( x ^ 2 ) - ( sum( x ) ^ 2) / n
*/

var _ = require('lodash');
x = [0,1,2,3,4,5,6,7,8]

y = [0,2,4,6,8,10,12,14,16]

var data = [];

_.each(x, function (val, idx) {
  data.push({
    x: val,
    y: y[idx]
  });
});

var getSlope = function (dataSet) {

  var sumXY = _.inject(dataSet, function (total, point) {
    return total + point.x * point.y;
  }, 0);

  var sumX = _.inject(dataSet, function (total, point) {
    return total + point.x;
  }, 0);

  var sumY = _.inject(dataSet, function (total, point) {
    return total + point.y;
  }, 0);

  var sumXsquare = _.inject(dataSet, function (total, point) {
    return total + point.x * point.x;
  }, 0);

  var n = dataSet.length;


  var top = sumXY - sumX * sumY / n;

  var bottom = sumXsquare - sumX * sumX / n

  return top / bottom;
}

console.log(data);

console.log(getSlope(data));