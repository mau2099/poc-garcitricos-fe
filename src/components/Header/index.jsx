import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './styles.scss';
import { MdMenu, MdPerson } from 'react-icons/md/';
import logo from '../../assets/static/garcitricos.png';
import gravatar from '../../utils/gravatar';
import { GlobalStateContext } from '../../context/GlobalStateContext';
import { toggleNavbar, signOut } from '../../actions';

// import header from './../header';

const Header = (props) => {
  const [state, setState] = React.useContext(GlobalStateContext);
  const [gravatarHash, setGravatar] = React.useState('');
  const [showMenu, setMenu] = React.useState(false);

  const handleClick = (e) => {
    setState(toggleNavbar());
  };

  const handleSignOut = () => {
    setState(signOut());
    Redirect('/ventas');
  };

  useEffect(() => {
    setGravatar(gravatar(state.user.email));
  }, [state.user]);

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

      <span className='user-info__container' onClick={() => setMenu(!showMenu)}>
        {state.hasUser ? (
          <img className='avatar' src={gravatarHash} alt={state.user.email} />
        ) : (
          <MdPerson size={32} />
        )}
        {showMenu && (
          <ul className='user__menu'>
            {state.hasUser ? (
              <>
                <Link Link to='/profile'>
                  Mi cuenta
                </Link>
                <li onClick={handleSignOut}>Cerrar sesión</li>
              </>
            ) : (
              <Link Link to='/login'>
                Iniciar Sesión
              </Link>
            )}
          </ul>
        )}
      </span>
    </header>
  );
};
export default Header;
