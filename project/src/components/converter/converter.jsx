import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import {useSelector, useDispatch} from 'react-redux';
import {getRates} from '../../store/rate-data/selectors';
import {historyAddItem} from '../../store/action';
import {fetchRates} from '../../store/api-actions';
import {ValuteCodes, DEFAULT_CURRENCY, API_KEY, DEFAULT_AVALIABLE_CYRRENCY, DEFAULT_PURCHASED_CYRRENCY, RATES_AVALIABLE_DAYS } from '../../const';
import { generateApiParams, currencyConversation} from '../../utils';
import 'react-datepicker/dist/react-datepicker.css';

const AVALIABLE_MONEY_INPUT_NAME = 'available-money';
const AVALIABLE_CURRENCY_INPUT_NAME = 'purchased-currency';


function Converter() {
  const calenderEndDate = new Date();
  const calenderStartDate = new Date().setDate(calenderEndDate.getDate() - RATES_AVALIABLE_DAYS);
  const rates = useSelector(getRates);
  const dispatch = useDispatch();

  const [money, setMoney] = useState({
    date: new Date(),
    avaliableMoney: 0,
    purchasedMoney: 0,
    avaliableCurrency: DEFAULT_AVALIABLE_CYRRENCY,
    purchasedCurrency: DEFAULT_PURCHASED_CYRRENCY,
  });

  const handleCurrencyChange = ({target}) => {
    const apiParams = generateApiParams(new Date(),DEFAULT_CURRENCY,ValuteCodes.join(),API_KEY);
    dispatch(fetchRates(apiParams));

    if(target.id === AVALIABLE_CURRENCY_INPUT_NAME) {
      setMoney({
        ...money,
        purchasedCurrency: target.value,
        purchasedMoney: currencyConversation(money.avaliableMoney,rates[money.avaliableCurrency],rates[target.value]),
      });
    } else {
      setMoney({
        ...money,
        avaliableCurrency: target.value,
        avaliableMoney: currencyConversation(money.purchasedMoney, rates[money.purchasedCurrency], rates[target.value]),
      });
    }
  };

  const handleMoneyChange = ({target}) => {
    if(target.id === AVALIABLE_MONEY_INPUT_NAME) {
      setMoney({
        ...money,
        avaliableMoney: target.value,
        purchasedMoney: currencyConversation(Number(target.value),rates[money.avaliableCurrency],rates[money.purchasedCurrency]),
      });
    } else {
      setMoney({
        ...money,
        avaliableMoney: currencyConversation(Number(target.value), rates[money.purchasedCurrency], rates[money.avaliableCurrency]),
        purchasedMoney: target.value,
      });
    }
  };

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

  const handleDateChange = (date) => {
    const apiParams = generateApiParams(date,DEFAULT_CURRENCY,ValuteCodes.join(),API_KEY);
    dispatch(fetchRates(apiParams));
    setMoney({
      ...money,
      purchasedMoney: currencyConversation(money.avaliableMoney,rates[money.avaliableCurrency],rates[money.purchasedCurrency]),
      date: date,
    });
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
          <option value="GBP">GBP</option>
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
          <option value="GBP">GBP</option>
          <option value="CNY">CNY</option>
        </select>
      </fieldset>

      <div className="calender">
        <DatePicker
          wrapperClassName="datePicker"
          className="calender__date"
          dateFormat="d.MM.yyyy"
          selected={money.date}
          maxDate={calenderEndDate}
          minDate={calenderStartDate}
          onChange={handleDateChange}
        />
      </div>
      <button className="button button--save" type="submit">Сохранить результат</button>
    </form>
  );
}

export default Converter;
