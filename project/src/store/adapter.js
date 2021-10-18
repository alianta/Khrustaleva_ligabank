import {ValuteCodes, DEFAULT_CURRENCY, DEFAULT_CURRENCY_VALUE} from '../const';

const convertRates = (data) => {
  const  valuteList = [];

  let key ={};
  for (key in data) {
    if(ValuteCodes.includes(data[key].CharCode)) {
      valuteList.push({
        code: data[key].CharCode,
        value: data[key].Value,
      });
    }
  }
  valuteList.push({
    code: DEFAULT_CURRENCY,
    value: DEFAULT_CURRENCY_VALUE,
  });
  return valuteList;
};

export const adaptRateToClient = (rate) => ({
  date: rate.Date,
  rates: convertRates(rate.Valute),
});
