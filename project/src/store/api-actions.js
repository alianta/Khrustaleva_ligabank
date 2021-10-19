import {loadRates, changeServerErrorStatus} from './action';

export const fetchRates = (apiParams) => (dispatch, _getState, api) => (
  api.get(apiParams)
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
