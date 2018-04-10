import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          App
        </Link>
      </div>
    );
  }
}

export default App;
