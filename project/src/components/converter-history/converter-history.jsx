import React from 'react';

function ConverterHistory() {
  return (
    <div className="history">
      <h3 className="history__header">История конвертация</h3>
      <ul className="history__table">
        <li className="history__item">
          <time className="history__date" dateTime="2017-04-20">25.11.2020</time>
          <span className="history__available">1000 RUB</span>
          <span className="history__purchased">13,1234 USD</span>
        </li>
        <li className="history__item">
          <time className="history__date" dateTime="2017-04-20">25.11.2020</time>
          <span className="history__available">1000 RUB</span>
          <span className="history__purchased">13,1234 USD</span>
        </li>
        <li className="history__item">
          <time className="history__date" dateTime="2017-04-20">25.11.2020</time>
          <span className="history__available">1000 RUB</span>
          <span className="history__purchased">13,1234 USD</span>
        </li>
        <li className="history__item">
          <time className="history__date" dateTime="2017-04-20">25.11.2020</time>
          <span className="history__available">1000 RUB</span>
          <span className="history__purchased">13,1234 USD</span>
        </li>
        <li className="history__item">
          <time className="history__date" dateTime="2017-04-20">25.11.2020</time>
          <span className="history__available">1000 RUB</span>
          <span className="history__purchased">13,1234 USD</span>
        </li>
        <li className="history__item">
          <time className="history__date" dateTime="2017-04-20">25.11.2020</time>
          <span className="history__available">1000 RUB</span>
          <span className="history__purchased">13,1234 USD</span>
        </li>
        <li className="history__item">
          <time className="history__date" dateTime="2017-04-20">25.11.2020</time>
          <span className="history__available">1000 RUB</span>
          <span className="history__purchased">13,1234 USD</span>
        </li>
        <li className="history__item">
          <time className="history__date" dateTime="2017-04-20">25.11.2020</time>
          <span className="history__available">1000 RUB</span>
          <span className="history__purchased">13,1234 USD</span>
        </li>
        <li className="history__item">
          <time className="history__date" dateTime="2017-04-20">25.11.2020</time>
          <span className="history__available">1000 RUB</span>
          <span className="history__purchased">13,1234 USD</span>
        </li>
        <li className="history__item">
          <time className="history__date" dateTime="2017-04-20">25.11.2020</time>
          <span className="history__available">1000 RUB</span>
          <span className="history__purchased">13,1234 USD</span>
        </li>
      </ul>
      <button className="button button--history">Очистить историю</button>
    </div>
  );
}

export default ConverterHistory;
