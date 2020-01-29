import React from 'react';
import TodoList from './TodoList'
import TodoForm from './TodoForm'


class TodoContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: [
        { title: 'clean room', completed: false },
        { title: 'do homework', completed: false }
      ]
    }
  }

  updateTodos = (newTodo) => {
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render(){
    return <div>
      <TodoForm updateTodos={this.updateTodos} />
      <TodoList todos={this.state.todos} />
    </div>
  }
}


export default TodoContainer
