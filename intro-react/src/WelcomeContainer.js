import React from 'react'

class WelcomeContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      number: 1
    }
  }

  handleChangeNumber = () => {
    const newNum = Math.random() * 100
    this.setState({
      number: newNum
    })

  }


  render(){
    console.log(this.state.number)
    return (
      <div>
        <p>Your number is: {this.state.number}</p>
        <button onClick={this.handleChangeNumber}>change Number</button>
      </div>
    )
  }
}

export default WelcomeContainer
