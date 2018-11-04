import React, { Component } from 'react';
import { render } from 'react-dom';

import './app.scss';

class App extends Component {
  render() {
    return <p>Hello React</p>;
  }
}

render(<App/>, document.getElementById('root'));