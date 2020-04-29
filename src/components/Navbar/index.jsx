import React from 'react';
import './styles.scss';
import folders from './../../data/folders';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className='navbar__container'>
      <ul className='navbar'>
        {folders.map((folder) => {
          return (
            <Link className='navbar__item' to={folder.to}>
              {folder.label}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navbar;
