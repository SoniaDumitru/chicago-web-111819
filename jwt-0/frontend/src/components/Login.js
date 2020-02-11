import React from 'react';
import {connect} from 'react-redux'

class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: 'raza',
      password: 'hello',
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.setState({
      username: '',
      password: '',
    })

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }

    fetch('http://localhost:3000/api/v1/auth', reqObj)
    .then(resp => resp.json())
    .then(user => {
      this.props.loginUser(user)
      this.props.history.push('/about')
      // redirect to about page
    })
  }

  render(){
      console.log('loginprops,', this.props)
    return (
      <div>
        <h3>Sign in</h3>
        <form onSubmit={this.handleSubmit}>
          <input name={'username'} onChange={this.handleInputChange} value={this.state.username} />
          <input name={'password'} onChange={this.handleInputChange} value={this.state.password} />
          <input type='submit' value='login' />
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => {
      dispatch({type: 'LOGIN_USER', user})
    }
  }
}

export default connect(null, mapDispatchToProps)(Login);


