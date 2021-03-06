import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';

import ProductsCatalog from '../containers/ProductsCatalog/ProductsCatalog'
import ProductPage from '../components/ProductPage/ProductPage';
import PageNotFound from '../components/PageNotFound/PageNotFound';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ProductsCatalog}></Route>
    <Route exact path="/product/:id" component={ProductPage}></Route>

    <Route path='/404' component={PageNotFound} />
    <Redirect from='*' to='/404' />
  </Switch> 
);

export default Routes;