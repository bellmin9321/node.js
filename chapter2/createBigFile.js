const fs = require('fs');
const file = fs.createWriteStream('./big.txt');

for (let i = 0; i <= 10_000_0; i++) {
  file.write('엄청 큰 파일이니 주의하세요')
}
file.end(); 