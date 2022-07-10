// Разгружаем app.js, выносим все необходимые для работы сервера мидлварки в данный файл

const express = require('express');

const path = require('path');   // для чтения статики
const session = require('express-session');   // модуль для создания сессий
const FileStore = require('session-file-store')(session);   // создания папки с сессиями, в которой будут храниться данные об авторизированных пользователях
const morgan = require('morgan') // логирование запросов
const reactSsrMiddleware = require('../middlewares/ssr');   // мв для отрисовки реакта и присвоению контекста
const getUser = require ('../middlewares/getUser')   // мв для отрисовки реакта и присвоению контекста

const sessionConfig = {
  store: new FileStore(),   // создаем папку в которой будет храниться сессия залогиненого пользователя
  name: 'user_sid',   // название кука
  secret: process.env.SESSION_SECRET ?? 'G(8x>|Ai^"+&',   // шифрование кука
  resave: false,   // пересохранение куки при каждом запросе, чтобы время хранения кука не обновлялось при каждом входе
  saveUninitialized: false,   // создание сессии без регистрации
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

module.exports = function config(app) {
  app.use(reactSsrMiddleware);
  app.use(express.static(path.resolve('public')));
  app.use(express.urlencoded({extended: true}));
  app.use(express.json());
  app.use(session(sessionConfig));
  app.use(morgan('dev'));
  app.use(getUser);
};
