import React from 'react';

function MainNavigation() {
  return (
    <ul className="main-nav">
      <li className="main-nav__item">
        <a className="main-nav__link" href="/">Услуги</a>
      </li>
      <li className="main-nav__item">
        <a className="main-nav__link" href="/">Рассчитать кредит</a>
      </li>
      <li className="main-nav__item">
        <a className="main-nav__link main-nav__link--current" href="/">Конвертер валют</a>
      </li>
      <li className="main-nav__item">
        <a className="main-nav__link" href="/">Контакты</a>
      </li>
      <li className="main-nav__item">
        <a className="main-nav__link" href="/">Задать вопрос</a>
      </li>
    </ul>
  );
}

export default MainNavigation;
