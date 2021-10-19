import {combineReducers} from 'redux';
import {rateData} from './rate-data/rate-data';
import {historyData} from './history-data/history-data';

export const NameSpace = {
  RATES: 'RATES',
  HISTORY: 'HISTORY',
};

export default combineReducers({
  [NameSpace.RATES]: rateData,
  [NameSpace.HISTORY]: historyData,
});
