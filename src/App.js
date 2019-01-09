import React, { Component } from 'react';
import './App.css';
import Todolist from './TodoList'

class App extends Component {
  constructor () {
    super()
    this.state = {
      items: [],
      currentItem: {text:'', key:''},
    }
  }
handleInput = e => {
  console.log('Hello Input')
}
addItem = () => {
  console.log('Hello Add Item')
}

  render() {
    return (
      <div className="App">
        <Todolist addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
