import actions from './actionsEnum';

const addLabel = (labelName) => {
  return {
    type: actions.ADD_LABEL,
    labelName,
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

const signOut = () => {
  return {
    type: actions.SIGNOUT,
  };
};

export { addLabel, toggleNavbar, login, signOut };
