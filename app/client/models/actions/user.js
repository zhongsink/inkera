import create from './create';
import axios from 'axios';
export const userLogin = (params) =>
  create(async (dispatch) => {
    axios.post('/login', params)
      .then((Response) => {
        dispatch({
          type: 'setUser',
          payload: {
            data: Response.data.message,
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  });

export const userSignup = (params) =>
  create(async (dispatch) => {
    axios.post('/signup', params)
      .then((Response) => {
        dispatch({
          type: 'setUser',
          payload: {
            data: Response.data.message,
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  });

export const currentUser = () =>
  create(async (dispatch) => {
    axios.get('/currentuser')
      .then((Response) => {
        dispatch({
          type: 'setUser',
          payload: {
            data: Response.data.user,
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  });