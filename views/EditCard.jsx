const React = require('react');

module.exports = function EditCard({ card }) {
  return (
    <div>
      <h1>Изменить карточку</h1>
      <main className="" role="main">
        <form method="post" className="editForm" action={`/cardApi/edit/update/${card.id}`}>
          <label htmlFor="">Название: </label>
          <input id="" name="cardName" type="text" value={card.cardName} />
          <label htmlFor="songTitle_input">Описание: </label>
          <input id="songTitle_input" name="cardDesc" type="text" value={card.cardDesc} />
          <label htmlFor="songTitle_input">Цена: </label>
          <input id="songTitle_input" name="cardPrice" type="text" value={card.cardPrice} />
          <input type="submit" value="Сохранить" className="button btn_edit_form" />
        </form>
      </main>
    </div>
  );
};
