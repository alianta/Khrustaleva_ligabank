import {loadRates, changeServerErrorStatus} from './action';

export const fetchRates = (apiParams) => (dispatch, _getState, api) => (
  api.get(apiParams)
    .then(({data}) => {
      dispatch(loadRates(data));
    })
    .catch((error) => {
      dispatch(changeServerErrorStatus(true));
    })
);
