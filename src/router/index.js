import React, { Component } from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Cart from '../containers/Cart';
import Shipping from '../containers/Shipping';

class ReactRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/shipping" component={Shipping} />
        <Redirect to="/cart" />
      </Switch>
    );
  }
}

export default ReactRouter;