var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const courseRouter = require('./routes/courses');
const paymentsRouter = require('./routes/payments');
const ordersRouter = require('./routes/orders');
const mediaRouter = require('./routes/media');
const refreshTokenRouter = require('./routes/refreshTokens');

var app = express();

app.use(logger('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false, limit : '50mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const verifyToken = require('./middleware/verifyToken');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/courses',verifyToken, courseRouter);
app.use('/media', mediaRouter);
app.use('/orders', ordersRouter);
app.use('/payments', paymentsRouter);
app.use('/refresh-tokens', refreshTokenRouter);



module.exports = app;
