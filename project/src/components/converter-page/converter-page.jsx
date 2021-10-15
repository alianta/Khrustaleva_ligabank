import React from 'react';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import Social from '../social/social';
import Converter from '../converter/converter';
import ConverterHistory from '../converter-history/converter-history';

function ConverterPage() {
  return (
    <div>
      <header className="header">
        <Logo/>
        <nav className="main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <a className="main-nav__link" href="#">Услуги</a>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__link" href="#">Рассчитать кредит</a>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__link main-nav__link--current" href="#">Конвертер валют</a>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__link" href="#">Контакты</a>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__link" href="#">Задать вопрос</a>
            </li>
          </ul>
          <UserBlock/>
        </nav>
      </header>
      <main>
        <div className="promo">
          <h1 className="promo__header">Лига Банк</h1>
          <h2 className="promo__text">Кредиты на любой случай</h2>
          <a className="promo__link" href="#">Рассчитать кредит</a>
        </div>
        <div className="content">
          <Converter/>
          <ConverterHistory/>
        </div>
      </main>
      <footer>
        <div className="contacts">
          <Logo/>
          <p className="address">150015, г. Москва, ул. Московская, д. 32 Генеральная лицензия Банка России №1050 Ⓒ Лига Банк, 2019</p>
        </div>
        <ul className="nav">
          <li className="nav__item">
            <a className="nav__link" href="#">Услуги</a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">Рассчитать кредит</a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">Контакты</a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">Задать вопрос</a>
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
    </div>
  );
}

export default ConverterPage;
