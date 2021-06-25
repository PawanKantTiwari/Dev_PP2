import React, { Component } from 'react';

import InputBox from "./components/InputBox/InputBox"
import TodoList from "./components/TodoList/TodoList";

class App extends Component {
  state = {
    todos : [
      {id : "1" , todo : "HTML"},
      {id : "2" , todo : "CSS"},
      {id : "3" , todo : "CSS"},
      {id : "4" , todo : "CSS"},
      {id : "5" , todo : "CSS"},
    ]
  }
  render() {
    let todos = this.state.todo;
    return <div className="App">
              <InputBox></InputBox>
              <TodoList todos =  {this.state.todos} ></TodoList>
           </div>;
  }
}

export default App;