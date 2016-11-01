import React, { Component } from 'react';
import Body from './Body.js'
import '../Css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>TechJobs</h2>
        </div>
        
        <Body />
      </div>
    );
  }
}

export default App;
