// const { odd, even } = require('./var'); 구버전
// const checkNumber = require('./func');
import { odd, even } from './var'; // 신버전
import checkNumber from './func'

function checkStringOddOrEven(str) {
  if (str.length %2 ) {
    return odd;
  } else { 
    return even;
  }
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));