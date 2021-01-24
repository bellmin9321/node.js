setImmediate(() => {
  console.log('immediate');
});
process.nextTick(() => {
  console.log('nextTick');
});
setTimeout(() => {
  console.log('timeout');
}, 0);
Promise.resolve().then(() => console.log('promise'));

// setImmediate vs setTimeout(0초)
// setTimeout을 0초 설정할거면 차라리 setImmediate를 써라
// 둘 중 어떤게 먼저 실행될지는 상황에 따라 다름