import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import { MdMenu, MdPerson } from 'react-icons/md/';
import logo from '../../assets/static/garcitricos.png';
import gravatar from '../../utils/gravatar';
import { GlobalStateContext } from '../../context/GlobalStateContext';
import { toggleNavbar } from '../../actions';

// import header from './../header';

const Header = (props) => {
  const [state, setState] = React.useContext(GlobalStateContext);

  const [gravatarHash, setGravatar] = React.useState('');

  const handleClick = (e) => {
    setState(toggleNavbar());
  };

  useEffect(() => {
    console.log('actualizar');

    setGravatar(gravatar(state.user.email));
  }, [state]);

  return (
    <header className={`${props.className} header__container`}>
      <div className='navbar__toggle' onClick={handleClick}>
        <MdMenu size={32} />
      </div>
      <figure className='header__logo'>
        <Link to='/'>
          <img className='logo' src={logo} alt='garcitricos' />
        </Link>
      </figure>
      {/* <div className='reserved__space' /> */}

      <Link className='user-info__container' to='/profile'>
        {Object.keys(state.user).length > 0 ? (
          <img className='avatar' src={gravatarHash} alt={state.user.email} />
        ) : (
          <MdPerson size={32} />
        )}
      </Link>
      {/* </div> */}
    </header>
  );
};
export default Header;
