import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Layout from './containers/Layout';
import Dashboard from './../containers/Dashboard/';
import Home from './../containers/Home/';
import NotFound from './../containers/NotFound';
import Layout from '../containers/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/balance' component={Dashboard} />
          <Route exact path='/clientes' component={Dashboard} />
          <Route exact path='/provedores' component={Dashboard} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
export default App;
