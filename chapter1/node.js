// function first() {
//   second();
//   console.log('첫 번째');
// }
// function second() {
//   third();
//   console.log('두 번째');
// }
// function third() {
//   console.log('세 번째');
// }
// first();

// function run() {
//   console.log('3초 후 실행');
// }
// console.log('시작');
// setTimeout(run, 3000);
// console.log('끝');

// function oneMore() {
//   console.log('one more');
// }
// function run() {
//   console.log('run run')
//   setTimeout(() => {
//     console.log('wow');
//   }, 0)
//   new Promise((resolve) => {
//     resolve('hi');
//   })
//     .then(console.log);
//   oneMore();
// }

// setTimeout(run, 5000);
console.log('----------------------------');

var won = 1000;
var result1 = '이 과자는 ' + won + '원입니다.';
// 이 과자는 1000원입니다

const result2 = `이 과자는 ${won}원입니다.`

console.log(result1);
console.log(result2);

console.log('----------------------------');

function a() {
  console.log('오잉')
}
a`` // 최신 함수 호출 방법

var relationShip1 = {
  name: 'zero',
  friends: ['nero', 'hero', 'xero'],
  logFriends: function () {
    var that = this;
    this.friends.forEach(function (friend) {
      console.log(this.name, friend)
    });
  },
};
relationShip1.logFriends();
/* that.name과 this.name의 결과값이 다름
화살표 함수를 사용했을 때 this는 자신의 this가 아니라 부모의 this
function에서의 this는 부모 this가 아니라 자신의 this
따라서 화살표 함수와 function함수 쓸때는 확실히 구분해서 써야됨
*/

//구조분해 할당
const ex = { a: 123, b: { c: 135, d: 146} }
const a = ex.a;
const d = ex.b.d;

const { a, b: { d }} = ex;
console.log(a);
console.log(d);

arr = [1, 2, 3, 4, 5];
const x = arr[0];
const y = arr[1];
const z = arr[4];

const [x,y, , z] = arr;