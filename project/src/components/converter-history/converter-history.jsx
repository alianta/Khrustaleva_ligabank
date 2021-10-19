import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getConvertingHistory} from '../../store/history-data/selectors';
import {historyClear} from '../../store/action';
import uniqid from 'uniqid';

function ConverterHistory() {
  const history = useSelector(getConvertingHistory);
  const dispatch = useDispatch();
  const handleHistoryClear = (evt) => {
    evt.preventDefault();
    dispatch(historyClear());
  };

  return (
    <form className="history" onSubmit={handleHistoryClear}>
      <h3 className="history__header">История конвертация</h3>
      {history.length===0?'':
        <ul className="history__table">
          {history.map((historyItem,index) => (
            <li key = {uniqid()} className='history__item'>
              <time className="history__date" dateTime="2017-04-20">{historyItem.date}</time>
              <span className="history__available">{historyItem.avaliableValue} {historyItem.avaliableCurrency}</span>
              <span className="history__purchased">{historyItem.purchasedValue} {historyItem.purchasedCurrency}</span>
            </li>
          ))}
        </ul>}
      <button
        className={history.length===0?'button button--history button--disabled':'button button--history'}
        disabled={history.length===0}
      >
        Очистить историю
      </button>
    </form>
  );
}

export default ConverterHistory;
