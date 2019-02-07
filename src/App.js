import React, { Component } from 'react';
import ReactRouter from './router/index'
import {BrowserRouter as Router} from 'react-router-dom'
import MainContainer from './containers/main';

class App extends Component {
  render() {
    return (
      <MainContainer>
        <Router>
          <ReactRouter/>
        </Router>
      </MainContainer>
    );
  }
}

export default App;