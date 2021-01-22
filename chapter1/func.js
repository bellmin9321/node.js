// const { odd, even } = require('./var');
import { odd, even } from './var';


function checkOddOrEven (number) {
  if (number % 2) {
    return odd;
  } else {
    return even; 
  }
}

// module.exports = checkOddOrEven; 구버전
export default checkOddOrEven;