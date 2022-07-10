const React = require('react');
const { Context } = require('../middlewares/ssr');

module.exports = function Navigation() {
  const { user } = React.useContext(Context);
  return (
    <nav className="navigation">
      <ul className="navigation__lists">

        {user ? (
          <>
            <li className="navigation__item"><a className="navigation_link" href="/lc">Личный кабинет</a></li>
            <li className="navigation__item"><a className="navigation_link" href="/logout">Выйти</a></li>
            <li className="navigation__item"><a className="navigation_link" href="/home">Главная</a></li>
          </>
        )
          : (
            <>
              <li className="navigation__item"><a href="/auth/reg">Регистрация</a></li>
              <li className="navigation__item"><a href="/auth/login">Войти</a></li>
              <li className="navigation__item"><a href="/home">Главная</a></li>
            </>
          )}
      </ul>
    </nav>
  );
};
