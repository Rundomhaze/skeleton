require('dotenv').config(); // для чтения .env файла
require('@babel/register'); // бэбил для чтения jsx файлов
const { sequelize } = require('./db/models'); // подключаем секвалайз для проверки соединения с бд

const app = require('express')();
const configApp = require('./config/configApp'); // подключаем конфиги со всеми стандартными МВ

const homeRoute = require('./routes/view/homeRoute'); // Роут для отрисовки домашней страницы
const authRoute = require('./routes/view/authRoute'); // Роут для отрисовки страниц логин/логаут/регистрация
const cardsListRoute = require('./routes/view/cardsListRoute'); // Отрисовка списка всех карточек

const cardsRouteApi = require('./routes/api/cardsRouteApi'); // роут для CRUD-операций (изменение, добавление и удаление карточек)
const authRouteApi = require('./routes/api/authRouteApi') // взаимодействие логина/логаута/реги с базой данных

configApp(app);

app.get('/', (req, res) => {
  res.redirect('/home');
});

app.use('/home', homeRoute);
app.use('/auth', authRoute);
app.use('/cardsList', cardsListRoute);

// app.use('/cardsApi', cardsRouteApi);
app.use('/api', authRouteApi);



const PORT = process.env.PORT ?? 3000;

app.listen(PORT, async () => {
  console.log(`<<<<<<Server started on ${PORT} port>>>>>>>>`);
  try {
    await sequelize.authenticate();
    console.log('<<<<<DB connection OK>>>>>>')
  } catch (error) {
    console.log(error.message);
  }
});
