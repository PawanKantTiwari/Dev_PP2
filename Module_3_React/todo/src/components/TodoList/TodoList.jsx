import React, { Component } from 'react';

class TodoList extends Component {
    state = {  }
    render() { 
        let todos = this.props.todo;
        return ( 
            <div className="todos">{todos.map(function(todoObj){return (<div key={todoObj.id} className="todo"><p>todoObj.todo</p></div>);})}</div>
        )
    }
}
 
export default TodoList;