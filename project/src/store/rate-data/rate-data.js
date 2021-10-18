import {adaptRateToClient} from '../adapter';//++++
import {createReducer} from '@reduxjs/toolkit';
import {loadRates} from '../action';//+++++

const initialState = {
  rates: {},
  isDataLoaded: false,
};

const rateData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadRates, (state, action) => {
      state.rates = adaptRateToClient(action.payload);
      state.isDataLoaded =  true;
    });
});

export {rateData};
