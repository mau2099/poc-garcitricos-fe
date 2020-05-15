import actions from './actionsEnum';

const addLabel = (labelName) => {
  return {
    type: actions.ADD_LABEL,
    labelName: labelName,
  };
};

const login = (user) => {
  return {
    type: actions.LOGIN,
    user,
  };
};

const toggleNavbar = () => {
  return {
    type: actions.TOGGLE_NAVBAR,
  };
};

export { addLabel, toggleNavbar, login };
