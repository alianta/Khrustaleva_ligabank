import React from 'react';

function Converter() {
  return (
    <div className="converter">
      <label className="converter__label" htmlFor="available-money">У меня есть</label>
      <input id="available-money" name="available-money" type="number" placeholder="1000" min="1" max="1000000"/>
      <label className="converter__label" htmlFor="purchased-money">Хочу приобрести</label>
      <input id="purchased-money" name="purchased-money" type="number" placeholder="1000" min="1" max="1000000" step="0.0001"/>
      <label className="visually-hidden" htmlFor="calender">calender</label>
      <input className="converter__calender" id="calender" type="text" name="calender" value="19/03/19 00:00"/>
      <button className="converter__save" type="submit">Сохранить результат</button>
    </div>
  );
}

export default Converter;
