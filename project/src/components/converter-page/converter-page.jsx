import React from 'react';

function ConverterPage() {
  return (
    <div>
      <header>
        <a className="logo" href="#">
          <svg className="logo__image" width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.75 1H13.8333L1 22.3415H4.79167L6.54167 19.2927L16.75 1Z" fill="#2C36F2"/>
            <path d="M2.75 26H27.25L16.75 7.09756L15 10.1463L20.25 19.2927L22 22.3415H4.79167H1L2.75 26Z" fill="#2C36F2"/>
            <path d="M22 22.3415L20.25 19.2927H9.75H6.54167L4.79167 22.3415H22Z" fill="#2C36F2"/>
            <path d="M27.25 26L29 22.3415L16.75 1L6.54167 19.2927H9.75L15 10.1463L16.75 7.09756L27.25 26Z" fill="#2C36F2"/>
            <path d="M15 10.1463L9.75 19.2927H20.25L15 10.1463Z" fill="#2C36F2"/>
            <path d="M27.25 26H2.75L1 22.3415M27.25 26L29 22.3415L16.75 1M27.25 26L16.75 7.09756L15 10.1463M16.75 1H13.8333L1 22.3415M16.75 1L6.54167 19.2927M1 22.3415H4.79167M15 10.1463L9.75 19.2927M15 10.1463L20.25 19.2927M9.75 19.2927H20.25M9.75 19.2927H6.54167M20.25 19.2927L22 22.3415H4.79167M6.54167 19.2927L4.79167 22.3415" stroke="#F6F7FF"/>
          </svg>
          <h1 className="logo-header">ЛИГА Банк</h1>
        </a>
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

          <a className="user-link" href="#">Войти в Интернет-банк</a>

          <button className="main-nav__toggle main-nav__toggle--no-js" type="button">
            <span className="visually-hidden">Открыть меню</span>
          </button>
        </nav>
      </header>
      <main>
        <div className="promo">
          <h1 className="promo__header">Лига Банк</h1>
          <h2 className="promo__text">Кредиты на любой случай</h2>
          <a className="promo__link" href="#">Рассчитать кредит</a>
        </div>
        <div className="content">
          <div className="converter">
            <label className="converter__label" htmlFor="available-money">У меня есть</label>
            <input id="available-money" name="available-money" type="number" placeholder="1000" min="1" max="1000000"/>
            <label className="converter__label" htmlFor="purchased-money">Хочу приобрести</label>
            <input id="purchased-money" name="purchased-money" type="number" placeholder="1000" min="1" max="1000000" step="0.0001"/>
            <label className="visually-hidden" htmlFor="calender">calender</label>
            <input className="converter__calender" id="calender" type="text" name="calender" value="19/03/19 00:00"/>
            <button className="converter__save" type="submit">Сохранить результат</button>
          </div>
          <div className="history">
            <h3 className="history__header">История конвертация</h3>
            <button className="history__button">Очистить историю</button>
          </div>
        </div>
      </main>
      <footer>
        <div className="contacts">
          <a className="logo" href="#">
            <svg className="logo__image" width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.75 1H13.8333L1 22.3415H4.79167L6.54167 19.2927L16.75 1Z" fill="#2C36F2"/>
              <path d="M2.75 26H27.25L16.75 7.09756L15 10.1463L20.25 19.2927L22 22.3415H4.79167H1L2.75 26Z" fill="#2C36F2"/>
              <path d="M22 22.3415L20.25 19.2927H9.75H6.54167L4.79167 22.3415H22Z" fill="#2C36F2"/>
              <path d="M27.25 26L29 22.3415L16.75 1L6.54167 19.2927H9.75L15 10.1463L16.75 7.09756L27.25 26Z" fill="#2C36F2"/>
              <path d="M15 10.1463L9.75 19.2927H20.25L15 10.1463Z" fill="#2C36F2"/>
              <path d="M27.25 26H2.75L1 22.3415M27.25 26L29 22.3415L16.75 1M27.25 26L16.75 7.09756L15 10.1463M16.75 1H13.8333L1 22.3415M16.75 1L6.54167 19.2927M1 22.3415H4.79167M15 10.1463L9.75 19.2927M15 10.1463L20.25 19.2927M9.75 19.2927H20.25M9.75 19.2927H6.54167M20.25 19.2927L22 22.3415H4.79167M6.54167 19.2927L4.79167 22.3415" stroke="#F6F7FF"/>
            </svg>
            <h1 className="logo-header">ЛИГА Банк</h1>
          </a>
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
        <ul className="social-list">
          <li className="social-list__item">
            <a className="social-list__link" aria-label="Фейсбук" href="#">
              <svg width="9" height="16" fill="none" focusable="false" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9.2h2.143L9 6H6V4.4c0-.824 0-1.6 1.714-1.6H9V.112A25.85 25.85 0 0 0 6.551 0c-2.327 0-3.98 1.326-3.98 3.76V6H0v3.2h2.571V16H6V9.2Z" fill="#1F1E25"/>
              </svg>
            </a>
          </li>
          <li className="social-list__item">
            <a className="social-list__link" aria-label="Инстаграмм" href="#">
              <svg width="16" height="16" fill="none" focusable="false" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0c2.174 0 2.445.008 3.298.048.852.04 1.432.174 1.942.372a3.9 3.9 0 0 1 1.418.922c.406.4.721.884.922 1.418.198.51.332 1.09.372 1.942C15.99 5.555 16 5.826 16 8s-.008 2.445-.048 3.298c-.04.852-.174 1.432-.372 1.942a3.907 3.907 0 0 1-.922 1.418c-.4.406-.884.721-1.418.922-.51.198-1.09.332-1.942.372C10.445 15.99 10.174 16 8 16s-2.445-.008-3.298-.048c-.852-.04-1.432-.174-1.942-.372a3.911 3.911 0 0 1-1.418-.922A3.923 3.923 0 0 1 .42 13.24c-.198-.51-.332-1.09-.372-1.942C.01 10.445 0 10.174 0 8s.008-2.445.048-3.298C.088 3.85.222 3.27.42 2.76c.2-.534.515-1.018.922-1.418.4-.407.884-.721 1.418-.922C3.27.222 3.85.088 4.702.048 5.555.01 5.826 0 8 0Zm0 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm5.2-.2a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM8 5.6a2.4 2.4 0 1 1 0 4.8 2.4 2.4 0 0 1 0-4.8Z" fill="#1F1E25"/>
              </svg>
            </a>
          </li>
          <li className="social-list__item">
            <a className="social-list__link" aria-label="Твиттер" href="#">
              <svg width="16" height="13" fill="none" focusable="false" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 1.543c-.6.265-1.236.44-1.886.516A3.292 3.292 0 0 0 15.558.244a6.564 6.564 0 0 1-2.085.796A3.283 3.283 0 0 0 7.88 4.032 9.325 9.325 0 0 1 1.114.604a3.28 3.28 0 0 0 1.016 4.38 3.273 3.273 0 0 1-1.487-.41v.04a3.281 3.281 0 0 0 2.633 3.218c-.484.13-.99.15-1.483.056a3.283 3.283 0 0 0 3.066 2.279A6.59 6.59 0 0 1 0 11.525 9.29 9.29 0 0 0 5.031 13c6.039 0 9.341-4.999 9.341-9.334 0-.141-.004-.284-.01-.424A6.667 6.667 0 0 0 16 1.544Z" fill="#1F1E25"/>
              </svg>
            </a>
          </li>
          <li className="social-list__item">
            <a className="social-list__link" aria-label="Ютуб" href="#">
              <svg width="16" height="13" fill="none" focusable="false" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.634 2.03C16 3.478 16 6.5 16 6.5s0 3.023-.366 4.47c-.203.8-.797 1.43-1.55 1.643C12.717 13 8 13 8 13s-4.714 0-6.084-.387c-.756-.216-1.35-.845-1.55-1.643C0 9.523 0 6.5 0 6.5s0-3.022.366-4.47c.203-.8.797-1.43 1.55-1.643C3.286 0 8 0 8 0s4.717 0 6.084.387c.756.216 1.35.845 1.55 1.643ZM6.4 9.344 11.2 6.5 6.4 3.656v5.688Z" fill="#1F1E25"/>
              </svg>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default ConverterPage;
