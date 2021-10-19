import {createReducer} from '@reduxjs/toolkit';
import {getHistory, historyAddItem, historyClear} from '../action';

const initialState = {
  historyData: [],
};

const historyData = createReducer(initialState, (builder) => {
  builder
    .addCase(getHistory, (state, action) => state )
    .addCase(historyAddItem, (state, action) => {
      state.historyData.push(action.payload);
      if(state.historyData.length > 10) {
        state.historyData.shift();
      }
    })
    .addCase(historyClear, (state, action) => {
      state.historyData = [];
    });
});
export {historyData};
