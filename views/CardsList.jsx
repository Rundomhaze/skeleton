const React = require('react');
const Layout = require('./Layout');
const { Context } = require('../middlewares/ssr');


module.exports = function CardsList({ cards, onePhoto}) {
  const { user } = React.useContext(Context);
  return (
    <Layout>
   
      <main role="main">
        <ul className="card__lists">
          {cards.map((card, i) => (

            <li className="cardItem" id={`${card.id}`} key={card.id}>
              <img className="card_img" src={`${onePhoto[i].img_href}`} alt={`${card.cardName}`} id={`${card.id}`} />
              <a href={`/cardsList/oneCardInfo/${card.id}`} className="titleCard">Название: {card.cardName}</a>              
              <p className="">Описание: {card.cardDesc}</p>
              <p className="">Цена: {card.cardPrice} $</p>

              {user && (
              <div className="card__edit-buttons">
                <a href={`/cardApi/edit/${card.id}`} className="editCard edit__buttons edit__buttons-change" id={`${card.id}`}>Изменить</a>
                <a href={`/cardApi/delete/${card.id}`} className="deleteCard edit__buttons edit__buttons-delete" id={`${card.id}`}>Удалить</a>
                <a href={`/cardsList/oneCardInfo/${card.id}`} className="infoCard edit__buttons edit__buttons-more" id={`${card.id}`}>Подробнее</a>
                <a href="/cardApi/add/" className="addCard edit__buttons edit__buttons-more" id={`${card.id}`}>Добавить</a>
              </div>
            )}           
            {!user &&
               (
                <div className="card__edit-buttons">
                  <a href={`/cardsList/oneCardInfo/${card.id}`} className="edit__buttons edit__buttons-more">Подробнее</a>
                </div>
              )}
            </li>
          ))}
          
        </ul>
        <div className="cardItem"><a className="navigation_link_foot" href="/home">На главную страницу</a></div>
      </main>
    </Layout>
  );
};
