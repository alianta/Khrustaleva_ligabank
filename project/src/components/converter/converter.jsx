import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import {useSelector, useDispatch} from 'react-redux';
import {getRates} from '../../store/rate-data/selectors';
import {historyAddItem} from '../../store/action';
import 'react-datepicker/dist/react-datepicker.css';

const AVALIABLE_MONEY_INPUT_NAME = 'available-money';
const AVALIABLE_CURRENCY_INPUT_NAME = 'purchased-currency';
const DEFAULT_AVALIABLE_CYRRENCY = 'RUB';
const DEFAULT_PURCHASED_CYRRENCY = 'USD';

const currencyConversation=(startValue, startCurrencyRate, endCurrencyRate) => Math.ceil(startValue * startCurrencyRate / endCurrencyRate *10000)/10000;

function Converter() {
  const calenderEndDate = new Date();
  const calenderStartDate = new Date().setDate(calenderEndDate.getDate()-6);
  const rates = useSelector(getRates);
  /* eslint-disable no-console */
  console.log('films:',rates);
  if(rates.date){
    console.log('films-date:',new Date(rates.date).getDate());
  }
  /* eslint-enable no-console */

  const [money, setMoney] = useState({
    date: new Date(),
    avaliableMoney: 0,
    purchasedMoney: 0,
    avaliableCurrency: 'RUB',
    avaliableCurrencyRate: 1,
    purchasedCurrency: 'USD',
    purchasedCurrencyRate: 71.2371,
  });

  const handleCurrencyChange = ({target}) => {
    if(target.id === AVALIABLE_CURRENCY_INPUT_NAME) {
      setMoney({
        ...money,
        purchasedCurrency: target.value,
        purchasedCurrencyRate: 50,//подставить значение из справочника
        purchasedMoney: currencyConversation(money.avaliableMoney,money.avaliableCurrencyRate,50),//подставить значение из справочника вместо 50
      });
    } else {
      setMoney({
        ...money,
        avaliableCurrency: target.value,
        avaliableCurrencyRate: 30,//подставить значение из справочника
        avaliableMoney: currencyConversation(money.purchasedMoney, money.purchasedCurrencyRate, 30),//подставить значение из справочника вместо 30
      });
    }
  };

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

  const dispatch = useDispatch();
  const handleHistoryAdd = (evt) => {
    const date = `${money.date.getDate()}.${money.date.getMonth()+1}.${money.date.getFullYear()}`;
    evt.preventDefault();

    const historyItem = {
      date: date,
      avaliableValue: money.avaliableMoney,
      avaliableCurrency: money.avaliableCurrency,
      purchasedValue: money.purchasedMoney,
      purchasedCurrency: money.purchasedCurrency,
    };
    dispatch(historyAddItem(historyItem));
  };

  return (
    <form className="converter" onSubmit={handleHistoryAdd}>
      <h3 className="converter__name">Конвертер валют</h3>
      <fieldset className="converter-money converter-money--avaliable">
        <label className="converter-money__label" htmlFor="available-money">У меня есть</label>
        <input id="available-money" className="converter-money__input" name="available-money" type="number" placeholder="1000" min="0" max="1000000" step="0.0001" value={money.avaliableMoney} onChange={handleMoneyChange}/>
        <select name="available-currency" id="available-currency" className="currency currency--avaliable" defaultValue={DEFAULT_AVALIABLE_CYRRENCY} onChange={handleCurrencyChange}>
          <option value="RUB">RUB</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBR">GBR</option>
          <option value="CNY">CNY</option>
        </select>
      </fieldset>
      <fieldset className="converter-money converter-money--purchased">
        <label className="converter-money__label" htmlFor="purchased-money">Хочу приобрести</label>
        <input id="purchased-money" className="converter-money__input" name="purchased-money" type="number" placeholder="1000" min="0" max="1000000" step="0.0001" value={money.purchasedMoney} onChange={handleMoneyChange}/>
        <select name="purchased-currency" id="purchased-currency" className="currency currency--purchased" defaultValue={DEFAULT_PURCHASED_CYRRENCY} onChange={handleCurrencyChange}>
          <option value="RUB">RUB</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBR">GBR</option>
          <option value="CNY">CNY</option>
        </select>
      </fieldset>

      <label className="visually-hidden" htmlFor="calender">calender</label>
      <div className="calender">
        <p className='calender__information'>Курс на {money.date.toString()}: 1 USD = 1 USD</p>
        <DatePicker
          wrapperClassName="datePicker"
          className="calender__date"
          dateFormat="d.MM.yyyy"
          selected={money.date}
          maxDate={calenderEndDate}
          minDate={calenderStartDate}
          onChange={(date) => setMoney({
            ...money,
            date: date,//ещё надо в сменить курсы валют у обоих валют, вяв их из стораджа
          })}
        />
      </div>
      <button className="button button--save" type="submit">Сохранить результат</button>
    </form>
  );
}

export default Converter;
