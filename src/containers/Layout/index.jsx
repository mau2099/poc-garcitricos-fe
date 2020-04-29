import React from 'react';
import './styles.scss';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Layout = (props) => {
  const { children } = props;
  return (
    <div className='grid__container'>
      <Header className='grid__header' />
      <Navbar className='grid__navbar' />
      <div className='grid__content'>{children}</div>
      <Footer className='grid__footer' />
    </div>
  );
};

export default Layout;
