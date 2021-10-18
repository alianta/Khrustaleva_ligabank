import {combineReducers} from 'redux';
import {rateData} from './rate-data/rate-data';
import {historyData} from './history-data/history-data';
import {server} from './server/server';

export const NameSpace = {
  RATES: 'RATES',
  HISTORY: 'HISTORY',
  SERVER: 'SERVER',
};

export default combineReducers({
  [NameSpace.RATES]: rateData,
  [NameSpace.HISTORY]: historyData,
  [NameSpace.SERVER]: server,
});
