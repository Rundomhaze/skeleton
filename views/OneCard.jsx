const React = require('react');
const Layout = require('./Layout');
const { Context } = require('../middlewares/ssr');

module.exports = function OneCard({ oneCard, allPhotosByOneCard }) {
  const { user } = React.useContext(Context);
  return (
    <Layout>
      <div className="cardItem">
        <h1 className="oneCard_name">
          {`${oneCard.cardName}`}
        </h1>
        <h2 className="oneCard_name">
          {`${oneCard.cardDesc}`}
        </h2>
        <h1>
          {`${oneCard.cardPrice} $`}
        </h1>

        {allPhotosByOneCard.map((onePhoto) => (
          <img src={`${onePhoto.img_href}`} />
        ))}

        {user && (
          <div className="card__edit-buttons">
            <a href={`/cardApi/edit/${oneCard.id}`} className="editCard edit__buttons edit__buttons-change" id={`${oneCard.id}`}>Изменить</a>
            <a href={`/cardApi/delete/${oneCard.id}`} className="deleteCard edit__buttons edit__buttons-delete" id={`${oneCard.id}`}>Удалить</a>
            <a href={`/cardApi/add/${oneCard.id}`} className="addCard edit__buttons edit__buttons-more" id={`${oneCard.id}`}>Добавить</a>
            <a href="/cardsList" className="addCard edit__buttons edit__buttons-more" id={`${oneCard.id}`}>Назад</a>
          </div>
        )}
        {!user &&
          (
            <div className="card__edit-buttons">
              <div className="cardItem"><a className="navigation_link_foot" href="/cardsList">Назад</a></div>
            </div>
          )}
      </div>
    </Layout >
  );
};


