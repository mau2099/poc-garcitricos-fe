import React, { useEffect } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import folders from '../../data/folders';
import { GlobalStateContext } from '../../context/GlobalStateContext';

const Navbar = (props) => {
  const [state, setState] = React.useContext(GlobalStateContext);
  useEffect(() => {
    console.log('Navbar state', state);
  }, [state]);
  return (
    <nav className={`navbar__container ${state.navbar && 'opened'}`}>
      <ul className='navbar'>
        {folders.map((folder) => {
          return (
            <Link className='navbar__item' to={folder.to} key={folder.label}>
              {folder.icon}
              &nbsp;&nbsp;
              {folder.label}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navbar;
