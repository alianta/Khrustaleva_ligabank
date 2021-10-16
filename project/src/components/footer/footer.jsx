import React from 'react';
import Social from '../social/social';
import Logo from '../logo/logo';

function Footer() {
  return (
    <footer className="footer">
      <div className="contacts">
        <Logo/>
        <p className="contacts__address">150015, г. Москва, ул. Московская, д. 32</p>
        <p className="contacts__license">Генеральная лицензия Банка России №1050 Ⓒ Лига Банк, 2019</p>
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
      <div className="phone phone--mobile">
        <a className="phone__link" href="tel:+0904">*0904</a>
        <p className="phone__text" >Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2</p>
      </div>
      <div className="phone phone--office">
        <a className="phone__link" href="tel:+88001112223">8 800 111 22 33</a>
        <p className="phone__text" >Бесплатный для всех городов России</p>
      </div>
      <Social/>
    </footer>
  );
}

export default Footer;
