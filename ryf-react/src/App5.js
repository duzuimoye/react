import React, { Component } from 'react';

import './App.css';
class LinkButton extends Component {
    state = {
        liked:false
    }
    handleClick() {
        // console.log(this);
        this.setState({
            liked: !this.state.liked
        })
    }
    render() {
        const text = this.state.liked? 'liked':'don\'t like'
        return(
            <p onClick={()=>this.handleClick()}>you {text} this.click to toggle</p>
        )
    }
}
class App extends Component {
  handleClick (){
      this.refs.myTextInput.focus()
  }
  render() {
    return (
      <div className="App">
      <LinkButton/>
        <input type="text" ref="myTextInput"/>
        <input type="button" value="Focus the text input" onClick={this.handleClick.bind(this)}/>
      </div>
    );
  }
}

export default App;
