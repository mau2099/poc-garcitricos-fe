import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Layout from './containers/Layout';
import Dashboard from '../containers/Dashboard';
import Home from '../containers/Home';
import Sales from '../containers/Sales';
import NotFound from '../containers/NotFound';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import Profile from '../containers/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/ventas' component={Sales} />
          <Route exact path='/tablero' component={Dashboard} />
          <Route exact path='/clientes' component={Dashboard} />
          <Route exact path='/proveedores' component={Dashboard} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/profile' component={Profile} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
export default App;
