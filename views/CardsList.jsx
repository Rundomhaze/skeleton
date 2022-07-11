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
              <a href={`/cards/${card.id}`} className="titleCard">Название: {card.cardName}</a>

              {/* <span className="">Дата создания {card.createdAt.toString()}</span> */}
              <p className="">Описание: {card.cardDesc}</p>
              <p className="">Цена: {card.cardPrice}</p>
            </li>
          ))}
        </ul>
        <div className="cardItem"><a className="navigation_link_foot" href="/home">Главная</a></div>
      </main>
    </Layout>
  );
};

// module.exports = function CardsList({ cards, onePhoto }) {
//   const { user } = React.useContext(Context);
//   return (
//     <Layout>
//       <ul className="card__lists" name="Card">
//         {cards.map((card, i) => (
//           <li className="cardItem" id={`${card.id}`} key={card.id}>
//             <img src={`${onePhoto[i].img_href}`} alt={`${card.cardName}`} id={`${card.id}`} />
//             <h2 id={`${card.id}`}>{card.cardName}</h2>
//             <p className="card_desc" id={`${card.id}`}>{card.cardDesc}</p>
//             {user && (
//               <div className="card__edit-buttons">
//                 <a href={`/cards/${card.id}/edit`} className="changeCard edit__buttons edit__buttons-change" id={`${card.id}`}>Изменить</a>
//                 <a className="deleteCard edit__buttons edit__buttons-delete" href={`animals/${card.id}`}>Удалить</a>
//                 <a className="edit__buttons edit__buttons-more" href={`animals/${card.id}/info`}>Подробнее</a>
//               </div>
//             )}           
//             {!user &&
//                (
//                 <div className="card__edit-buttons">
//                   <a className="edit__buttons edit__buttons-more" href={`animals/${card.id}/info`}>Подробнее</a>
//                 </div>
//               )}
//           </li>
//         ))}
//       </ul>
//     </Layout>
//   );
// };

