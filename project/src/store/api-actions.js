import {loadRates, changeServerErrorStatus} from './action';

export const APIRoute = {
  RATES:'',
  //RATES:'/XML_daily_eng.asp?date_req=19/10/2021',
};

export const fetchRates = () => (dispatch, _getState, api) => (
  api.get(APIRoute.RATES)
    .then(({data}) => {
      dispatch(loadRates(data));
      /* eslint-disable no-console */
      console.log('Data:',data);
      /* eslint-enable no-console */
    })
    .catch((error) => {
      /* eslint-disable no-console */
      console.log('server error:', error);
      /* eslint-enable no-console */
      dispatch(changeServerErrorStatus(true));
    })
);
