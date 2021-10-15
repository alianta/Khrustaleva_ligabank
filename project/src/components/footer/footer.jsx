import React from 'react';
import Social from '../social/social';
import Logo from '../logo/logo';

function Footer() {
  return (
    <footer>
      <div className="contacts">
        <Logo/>
        <p className="address">150015, г. Москва, ул. Московская, д. 32 Генеральная лицензия Банка России №1050 Ⓒ Лига Банк, 2019</p>
      </div>
      <ul className="nav">
        <li className="nav__item">
          <a className="nav__link" href="/">Услуги</a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/">Рассчитать кредит</a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/">Контакты</a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/">Задать вопрос</a>
        </li>
      </ul>
      <ul className="phone">
        <li className="phone__item">
          <a className="phone__link" href="tel:+0904">*0904</a>
          <p>Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2</p>
        </li>
        <li className="phone__item">
          <a className="phone__link" href="tel:+88001112223">8 800 111 22 33</a>
          <p>Бесплатный для всех городов России</p>
        </li>
      </ul>
      <Social/>
    </footer>
  );
}

export default Footer;
