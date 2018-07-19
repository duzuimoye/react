import React, { Component } from 'react';

import './App.css';
class helloMessage extends Component {
    render() {
        return <h1>hello {this.props.name}</h1>
    }
}
class App extends Component {
  render() {
      const arr = [
          <h1 key="1">hello world</h1>,
          <h2 key="2">react is awesome</h2>
      ]
    return (
      <div className="App">
      <helloMessage name="john"/>
        <ul>
            {
                arr
            }
        </ul>
      </div>
    );
  }
}

export default App;
