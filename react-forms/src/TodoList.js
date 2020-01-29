import React from 'react';


class TodoList extends React.Component {
  renderTodos = () => {
    return this.props.todos.map( todo => {
      return <li>{todo.title}</li>
    })
  }

  render(){
    const todoStyles = {'textAlign': 'left'}
    return <div>
      <ul style={todoStyles}>
        { this.renderTodos() }
      </ul>
    </div>
  }
}


export default TodoList
