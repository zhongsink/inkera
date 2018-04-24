import create from './create';
import axios from 'axios';
export const adList = (params) =>
  create(async (dispatch) => {
    axios.get(`/ad/list`)
      .then(function (response) {
        if (response.data.status) {
          dispatch({
            type: 'setAd',
            payload: {
              data: response.data.result,
            },
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  });