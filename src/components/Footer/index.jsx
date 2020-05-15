import React from 'react';
import './styles.scss';
const Footer = (props) => {
  return (
    <footer className={`${props.className} footer`}>
      <p>Copyright © {new Date().getFullYear()} - Garcítricos</p>
      <a>@Mau2099</a>
    </footer>
  );
};
export default Footer;
