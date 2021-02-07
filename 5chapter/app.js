const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const indexRouter = require('./routes');
const userRouter = require('./routes/user');

const app = express();

app.set('port', process.env.PORT || 3000);

// app.use(morgan('combined'));
app.use(morgan('dev')); // 개발용
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secre: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
  },
  name: 'session-cookie',
}))

app.use('/', indexRouter);
app.use((req, res, next) => {
  console.log('모든 요청에 실행')
  next();;
// }, (req, res) => {
//   throw new Error('Error')
// })
});

app.get('/', (req, res, next) => {
  req.cookies
  req.signedCookies; // 암호화된 cookie
  res.cookie('name', encodeURIComponent(name), {
    expires: new Date(),
    httpOnly: true,
    path: '/',
  })
  res.clearCookie('name', encodeURIComponent(name), {
    httpOnly: true,
    path: '/',
  })
  res.sendFile(path.join(__dirname, 'index.html'));
});
  // res.send('Hello');
  // res.json({ hello: 'bellpush'}) 한 router에서 여러번 send하면 error남

//   // res.writeHead(200, { 'Content-Type': 'application/json' });
//   // res.end(JSON.stringify({ hello: 'bellpush'}));
//   // 위 두 줄을 줄인게 아래 한 줄 res.json
//   res.json({ hello: 'bellpush'})
// });

app.post('/', (req, res) => {
  res.send('hello express');
});

app.get('/category/JavaScript', (req, res) => {
  res.send(`hello Javascript`)
})

app.get('/category/:name', (req, res) => {
  res.send(`hello wildcard`)
}); // 와일드카드

app.get('/about', (req, res) => {
  res.send('about express');
});

app.use((req, res, next) => {
  res.status(200).send('404')
})

// error 처리 미들웨어
app.use((err, req, res, next) => {
  console.error(err);
  res.send('Warning Error')
})

app.get('*', (req, res) => {
  res.send('hello everybody');
}); // *은 이걸쓴거까지 실행을하겠다. 다음부터는 실행 안됨

app.listen(3000, () => {
  console.log('express server')
})


