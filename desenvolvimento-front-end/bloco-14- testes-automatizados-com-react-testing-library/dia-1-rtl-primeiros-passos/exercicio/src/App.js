import React, { Component } from "react";
import InputTodo from "./InputTodo";
import Item from "./Item";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTodo: [],
      removedTodo: [],
      selectedTodo: [],
    };

    this.addTodo = this.addTodo.bind(this);
    this.selectTodo = this.selectTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  selectTodo(todo) {
    const { selectedTodo } = this.state;
    if (!selectedTodo.includes(todo)) {
      this.setState({ selectedTodo: [...selectedTodo, todo] });
    }
  }

  removeTodo(todo) {
    const { selectedTodo } = this.state;
    const response = selectedTodo.filter((select) => select !== todo);
    this.setState({ listTodo: response });
  }

  render() {
    const { listTodo, selectedTodo } = this.state;

    return (
      <div className="App">
        <InputTodo addTodo={(todo) => this.addTodo(todo)} />
        {listTodo && (
          <ul>
            {listTodo.map((todo, index) => (
              <li key={index + 1}>
                <Item content={todo} selectCallBack={this.selectTodo} />
                {selectedTodo.includes(todo) ? (
                  <button onClick={() => this.removeTodo(todo)}>Remover</button>
                ) : (
                  <button disabled onClick={() => this.removeTodo(todo)}>Remover</button>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default App;
