import React from 'react';

function Converter() {
  return (
    <div className="converter">
      <h3 className="converter__name">Конвертер валют</h3>
      <fieldset className="converter-money">
        <label className="converter-money__label" htmlFor="available-money">У меня есть</label>
        <input id="available-money" className="converter-money__input" name="available-money" type="number" placeholder="1000" min="1" max="1000000"/>
        <select name="available-currency" id="available-currency" className="currency currency--avaliable">
          <option value="rub" selected>RUB</option>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="gbr">GBR</option>
          <option value="cny">CNY</option>
        </select>
      </fieldset>
      <fieldset className="converter-money">
        <label className="converter-money__label" htmlFor="purchased-money">Хочу приобрести</label>
        <input id="purchased-money" className="converter-money__input" name="purchased-money" type="number" placeholder="1000" min="1" max="1000000" step="0.0001"/>
        <select name="purchased-currency" id="purchased-currency" className="currency currency--purchased">
          <option value="rub" selected>RUB</option>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="gbr">GBR</option>
          <option value="cny">CNY</option>
        </select>
      </fieldset>

      <label className="visually-hidden" htmlFor="calender">calender</label>
      <input id="calender" className="converter__calender" type="text" name="calender" value="19/03/19 00:00"/>
      <button className="converter__save" type="submit">Сохранить результат</button>
    </div>
  );
}

export default Converter;
