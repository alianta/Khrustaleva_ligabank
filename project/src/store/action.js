import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_RATES: 'loadRates',
  GET_HISTORY: 'getHistory',
  CHANGE_SERVER_ERROR_STATUS: 'changeServerErrorStatus',
  HISTORY_ADD_ITEM: 'historyAddItem',
  HISTORY_CLEAR: 'historyClear',
};

export const loadRates =  createAction(ActionType.LOAD_RATES);
export const changeServerErrorStatus = createAction(ActionType.CHANGE_SERVER_ERROR_STATUS);
export const getHistory =  createAction(ActionType.GET_HISTORY);
export const historyAddItem = createAction(ActionType.HISTORY_ADD_ITEM);
export const historyClear = createAction(ActionType.HISTORY_CLEAR);
