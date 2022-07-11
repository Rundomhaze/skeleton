const React = require('react');
const Layout = require('./Layout');

module.exports = function CardsList({ cards }) {
  return (
    <Layout>
      <main role="main">
        <ul className="">
          {cards.map((card) => (
            <li className="" key={card.id}>
              <a href={`/cards/${card.id}`} className="titleCard">Название: {card.cardName}</a>
              
              {/* <span className="">Дата создания {card.createdAt.toString()}</span> */}
              <p className="">Описание: {card.cardDesc}</p>
              <p className="">Цена: {card.cardPrice}</p>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
};

