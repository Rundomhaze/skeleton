const React = require('react');
const Layout = require('./Layout');

module.exports = function Home() {
  return (
    <Layout>
      <div className="text-center bg-image">
        <div className="mask">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Добро пожаловать на главную страницу</h1>
              <h4 className="mb-3">Санкт-Петербург, ул. Кирочная 19</h4>
              <p className="main__desc">Описание сайта</p>
              <a className="btn btn-outline-light btn-lg" href="/cardsList" role="button">Ссылка на карточки</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
