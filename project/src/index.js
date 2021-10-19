import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {createAPI} from './services/api';
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './store/root-reduser';
import {fetchRates} from './store/api-actions';
import {ValuteCodes, DEFAULT_CURRENCY, API_KEY} from './const';
import { generateApiParams } from './utils';

const api = createAPI();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
const apiParams = generateApiParams(new Date(),DEFAULT_CURRENCY,ValuteCodes.join(),API_KEY);
store.dispatch(fetchRates(apiParams));

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
