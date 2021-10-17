import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const AVALIABLE_MONEY_INPUT_NAME = 'available-money';

const currencyConversation=(startValue, startCurrencyRate, endCurrencyRate) => Math.ceil(startValue * startCurrencyRate / endCurrencyRate *10000)/10000;

function Converter() {
  const [money, setMoney] = useState({
    avaliableMoney: 0,
    purchasedMoney: 0,
    avaliableCurrency: 'RUB',
    avaliableCurrencyRate: 1,
    purchasedCurrency: 'USD',
    purchasedCurrencyRate: 71.2371,
  });

  const handleMoneyChange = ({target}) => {
    if(target.id === AVALIABLE_MONEY_INPUT_NAME) {
      setMoney({
        ...money,
        avaliableMoney: target.value,
        purchasedMoney: currencyConversation(Number(target.value),money.avaliableCurrencyRate,money.purchasedCurrencyRate),
      });
    } else {
      setMoney({
        ...money,
        avaliableMoney: currencyConversation(Number(target.value), money.purchasedCurrencyRate, money.avaliableCurrencyRate),
        purchasedMoney: target.value,
      });
    }
  };

  return (
    <div className="converter">
      <h3 className="converter__name">Конвертер валют</h3>
      <fieldset className="converter-money converter-money--avaliable">
        <label className="converter-money__label" htmlFor="available-money">У меня есть</label>
        <input id="available-money" className="converter-money__input" name="available-money" type="number" placeholder="1000" min="1" max="1000000" value={money.avaliableMoney} onChange={handleMoneyChange}/>
        <select name="available-currency" id="available-currency" className="currency currency--avaliable">
          <option value="rub" selected>RUB</option>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="gbr">GBR</option>
          <option value="cny">CNY</option>
        </select>
      </fieldset>
      <fieldset className="converter-money converter-money--purchased">
        <label className="converter-money__label" htmlFor="purchased-money">Хочу приобрести</label>
        <input id="purchased-money" className="converter-money__input" name="purchased-money" type="number" placeholder="1000" min="1" max="1000000" step="0.0001" value={money.purchasedMoney} onChange={handleMoneyChange}/>
        <select name="purchased-currency" id="purchased-currency" className="currency currency--purchased">
          <option value="rub" >RUB</option>
          <option value="usd" selected>USD</option>
          <option value="eur">EUR</option>
          <option value="gbr">GBR</option>
          <option value="cny">CNY</option>
        </select>
      </fieldset>

      <label className="visually-hidden" htmlFor="calender">calender</label>
      <div className="converter__wrapper">
        <DatePicker className="converter__calender"/>
      </div>
      <button className="button button--save" type="submit">Сохранить результат</button>
    </div>
  );
}

export default Converter;
