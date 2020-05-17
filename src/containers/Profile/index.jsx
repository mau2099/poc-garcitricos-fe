import React, { useContext } from 'react';
import { GlobalStateContext } from './../../context/GlobalStateContext';
import './styles.scss';
const Profile = () => {
  const [state, setState] = React.useContext(GlobalStateContext);

  return (
    <>
      <h1>Profile</h1>
    </>
  );
};
export default Profile;
