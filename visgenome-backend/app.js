const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const history = require("connect-history-api-fallback");

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
// res.sendFile不知道有什么用？ 当访问路径不是文件的存储路径时，有用
const filesRouter = require('./routes/files');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//  当前端路由模式为history时防止空白页
app.use(history());

// 解决跨域问题
app.all("*", function(req, res, next) {
  // 设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "*");
  // 允许的header类型
  res.header("Access-Control-Allow-Headers", "Content-Type, Content-length");
  // 跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "DELETE, PUT, POST, GET, OPTIONS");
  if (req.method.toLowerCase() == "options") res.send(200);
  // 让options尝试请求快速结束
  else next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/file', filesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
