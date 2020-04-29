import React from 'react';
import './styles.scss';
import { MdMenu, MdPerson } from 'react-icons/md/';
import logo from './../../assets/static/garcitricos.png';
import { Link } from 'react-router-dom';

// import header from './../header';

const Header = (props) => {
  return (
    <header className={`${props.className} header__container`}>
      <figure className='header__logo'>
        <Link to='/'>
          <img className='logo' src={logo} alt='garcitricos' />
        </Link>
      </figure>
      <div className='reserved__space' />

      <Link className='user-info' to='/login'>
        <MdPerson size={32} color='#ffff6e' />
      </Link>
      {/* </div> */}
    </header>
  );
};
export default Header;
