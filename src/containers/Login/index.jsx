import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaTwitter } from 'react-icons/fa';
import { FormControl, TextField } from '@material-ui/core';
import './styles.scss';
import background from '../../assets/static/limes.jpg';
import logo from '../../assets/static/garcitricos.png';
import { login } from './../../actions';
import { GlobalStateContext } from './../../context/GlobalStateContext';
import { auth, googleProvider } from './../../utils/firebase';

const Login = (props) => {
  const [loginForm, setLogin] = useState({ email: '', password: '' });
  const [state, setState] = React.useContext(GlobalStateContext);

  const style = {
    backgroundImage: `url(${background})`,
  };

  const handleChange = (e) => {
    e.preventDefault();
    setLogin({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleLoginEmail = (e) => {
    e.preventDefault();
    auth()
      .createUserWithEmailAndPassword(loginForm.email, loginForm.password)
      .then(({ user }) => {
        setState(login({ ...user.providerData[0] }));
        console.log('google user info', user);
        props.history.push('/');
      })
      .catch((err) => console.log(err));
    // setState(login(loginForm));
    // props.history.push('/ventas');
  };

  const handleLoginGoogle = () => {
    auth()
      .signInWithPopup(googleProvider)
      .then(({ user }) => {
        setState(login({ ...user.providerData[0] }));
        console.log('google user info', user);
        props.history.push('/');
      });
  };

  return (
    <section className='login__container' style={style}>
      <form className='login__form' onSubmit={handleLoginEmail}>
        <img className='login__logo' src={logo} alt='logo garcitricos' />
        <h2 className='login__title'>Inicia Sesión</h2>
        <input
          type='email'
          name='email'
          placeholder='correo'
          required={true}
          onChange={handleChange}
          value={loginForm.email}
        />
        <input
          type='password'
          name='password'
          placeholder='contraseña'
          required={true}
          onChange={handleChange}
          value={loginForm.password}
        />
        <div className='remember-me'>
          <label htmlFor='remember'>Recordar mi cuenta</label>
          <input type='checkbox' name='remember' id='remember' />
        </div>
        <button type='submit'>Ingresar con usuario</button>

        <hr className='divider' />
        <button className='button' type='button' onClick={handleLoginGoogle}>
          <FaGoogle />
          &nbsp;Ingresar con Google
        </button>
        <button className='button' type='button'>
          <FaTwitter />
          &nbsp;Ingresar con Twitter
        </button>

        <Link to='/recover'>olivdé mi contraseña</Link>
      </form>
    </section>
  );
};
export default Login;
