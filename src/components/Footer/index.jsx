import React from 'react';
import './styles.scss';
const Footer = (props) => {
  return (
    <footer className={`${props.className} footer`}>
      <p>All left reserved.</p>
      <p>Copyright © 2020</p>
    </footer>
  );
};
export default Footer;
