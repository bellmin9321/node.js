const fs = require('fs');

fs.readFile('./readme.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('1번', data.toString());
  fs.readFile('./readme.txt', (err, data) => {
    if (err) {
      throw err;
    }
    console.log('2번', data.toString());
    fs.readFile('./readme.txt', (err, data) => {
      if (err) {
        throw err;
      }
      console.log('3번', data.toString());
      fs.readFile('./readme.txt', (err, data) => {
        if (err) {
          throw err;
        }
        console.log('4번', data.toString());
      });
    });
  });
});

// callback 지옥
// asyncOrder 는 순서도 지키면서 다같이 background로 들어감 따라서 동시성을 살릴 수 있지만 callback 지옥에 빠진다
// promise로 해결 가능



