import React from 'react';
import './styles.scss';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { GlobalContextProvider } from './../../context/GlobalStateContext';

const Layout = (props) => {
  const { children } = props;
  return (
    <GlobalContextProvider>
      <div className='grid__container'>
        <Header className='grid__header' />
        <Navbar className='grid__navbar' />
        <div className='grid__content'>{children}</div>
        <Footer className='grid__footer' />
      </div>
    </GlobalContextProvider>
  );
};

export default Layout;
