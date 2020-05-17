/* eslint-disable consistent-return */
import actions from '../actions/actionsEnum';
import initialState from '../../initialState';

const reducer = (state = initialState, payload) => {
  console.info(`---> REDUCER Executed : ${payload.type}`, {
    state,
    payload,
  });
  if (payload.error) {
    console.error('-->Error controlado');
    return;
  }
  switch (payload.type) {
    case actions.ADD_LABEL:
      state.labels.push({
        label: payload.labelName,
        color: `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
          Math.random() * 256,
        )},${Math.floor(Math.random() * 256)})`,
      });
      return {
        ...state,
        labels: state.labels,
      };

    case actions.TOGGLE_NAVBAR:
      return {
        ...state,
        navbar: !state.navbar,
      };

    case actions.LOGIN:
      return {
        ...state,
        user: payload.user,
        hasUser: true,
      };

    case actions.SIGNOUT:
      return {
        ...state,
        user: { email: '', password: '' },
        hasUser: false,
      };
    default:
      return state;
  }
};

export default reducer;
