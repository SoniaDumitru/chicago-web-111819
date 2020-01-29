import React from 'react';

class TodoForm extends React.Component {
  constructor(){
    super()
    this.state = {
      title: ''
    }
  }

  handleInput = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  submitTodo = (e) => {
    e.preventDefault()
    const newTodo = { 
      title: this.state.title,
      completed: false
    }

    this.props.updateTodos(newTodo)
    this.setState({title : ''})
  }

  render(){
    console.log('todoform', this.props)
    return <div>
     <form onSubmit={this.submitTodo}>
        <input onChange={this.handleInput} type='text' name='title' value={this.state.title}/>
        <input type='submit' value='submit' />
      </form>
    </div>
  }
}


export default TodoForm
