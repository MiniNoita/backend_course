import express from 'express';
import './dbconnection.js';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import passport from 'passport';
import session from 'express-session';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import * as passportFunction from './passportfunction.js';
passportFunction.default(passport);

const port = Number(process.env.PORT) || 8080;
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  }),
);
// passportin login-sessio
app.use(passport.initialize());
app.use(passport.session());

import studentsRoute from './routes/students.js';
app.use(express.json());

import router from './routes/index.js';
app.use('/', router);

app.use('/students', studentsRoute);

import userRouter from './routes/users.js';
app.use('/users', userRouter);

app.listen(port, () => {
  console.log('Listening to port: ', port);
});
