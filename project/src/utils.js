export const generateApiParams = (rateDate, baseCurrency, currencyList, keyId) => `/${rateDate.getFullYear()}-${rateDate.getMonth()+1}-${rateDate.getDate()}.json?app_id=${keyId}&symbols=${currencyList}&base=${baseCurrency}`;

export const currencyConversation=(startValue, startCurrencyRate, endCurrencyRate) => Math.ceil(startValue / startCurrencyRate * endCurrencyRate *10000)/10000;
