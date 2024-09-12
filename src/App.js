import React, { Component } from "react";
import TodoItems from "./components/TodoItems/TodoItems";
import AddItem from "./components/AddItem/AddItem";

class App extends Component {
  state = {
    items: [
      { id: 1, name: 'mohamed', age: 22 },
      { id: 2, name: 'ahmed', age: 22 },
      { id: 3, name: 'yasser', age: 22 }
    ]
  };

  deleteItem = (id) => {
    let items = this.state.items.filter(item => item.id !== id);
    this.setState({ items });
  }

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({ items });
  }

  render() {
    return (
      <div className="App container">
        <h1 className="text-center">To Do List App</h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
        <AddItem addItem={this.addItem} /> {/* Prop name is 'addItem' */}
      </div>
    );
  }
}

export default App;
