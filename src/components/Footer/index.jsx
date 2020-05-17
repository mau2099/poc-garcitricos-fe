import React from 'react';
import './styles.scss';
const Footer = ({className}) => {
  return (
    <footer className={`${className} footer`}>
      <p>
        Copyright ©
        {new Date().getFullYear()}
        - Garcítricos
      </p>
      <a href='https://mau2099.dev'>@Mau2099</a>
    </footer>
  );
};
export default Footer;
