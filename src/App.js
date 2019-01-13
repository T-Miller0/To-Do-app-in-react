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

deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
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
