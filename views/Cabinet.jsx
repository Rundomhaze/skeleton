const React = require('react');
const Layout = require('./Layout');

module.exports = function Cabinet({ }) {
  return (
    <Layout>
      <div className="log__form form_edit-info form__add">
        <p className="admin-title">Добавь карточку:</p>
        <form method="post" action="/cardApi/add/save" className="editForm editForm bord addAnimals">
          <label htmlFor="log">Название карточки:</label>
          <input type="text" id="log" name="cardName" className="" />
          <label htmlFor="log">Описание:</label>
          <input type="text" id="log" name="cardDesc" className="" />
          <label htmlFor="log">Цена:</label>
          <input type="text" id="log" name="cardPrice" className="" />
          <label htmlFor="log">Фото:</label>
          <input type="text" id="log" name="img_href" className="" />
      
          <button type="submit" className="button btn_edit_form">Добавить</button>
        </form>
      </div>
    </Layout>
  );
};
