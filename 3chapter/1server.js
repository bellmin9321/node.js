// const http = require('http');

// http.createServer((req, res) => {
//   res.write('<h1>Hello Node!</h1>');
//   res.write('<p>Hello Server</p>');
//   res.end('<p>Hello Bellmin</p>');
// })
//   .listen(8080, () => {
//     console.log('8080번과 연결됨');
//   });

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});
  res.write('<h1>Hello Node!</h1>');
  res.write('<p>Hello Server</p>');
  res.end('<p>Hello Bellmin</p>');
})
  .listen(8080);
server.on('listening', () =>{
  console.log('8080번과 연결됨')
});
server.on('error', (error) => {
  console.error(error);
});