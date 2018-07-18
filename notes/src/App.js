import React, { Component } from 'react';
import Notes from './components/Notes'
import './App.css';

class App extends Component {
  // .vue  三部分 template js  style
  // react .js 组件类 继承 template？ 在jsx 语法 render
  render() {
    return (
      <Notes/>
    );
  }
}

export default App;
