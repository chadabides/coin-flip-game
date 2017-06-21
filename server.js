

var cf = require('./coin-flip-service.js');
var testRounds = 100;
var resultList = [];

do
{
var result = cf.main(10);
resultList.push(result);

}while(resultList.length != testRounds)

console.log(resultList.join(','));