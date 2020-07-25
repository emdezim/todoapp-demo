import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state = { 
    todos: [
      {id: 1, content: 'Learn React JS'},
      {id: 2, content: 'Play PUBG'},
      {id:3, content: 'Play Call of Duty'}
    ]
   };

   deleteTodo = (id) => {
    const newTodos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos: newTodos
    })
   }

  addTodo = (todo) => {
  todo.id = Date.now();
  const todosArr = [...this.state.todos, todo];
  this.setState({
    todos: todosArr
  })
  }

  render() { 
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
     );
  }
}
 
export default App;