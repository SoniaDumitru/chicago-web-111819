import React, { Component } from 'react';

class HogCard extends Component {
  constructor(){
    super()
    this.state = {
      showInfo: false
    }
  }


  renderImage = () => {
    const imageName = this.props.hog.name.toLowerCase().replace(/\ /g, '_')
    const image = require(`../hog-imgs/${imageName}.jpg`)
    return <img src={image}  />
  }

  renderInfo = () => {
    const { hog } = this.props
    return <div className='ui card'>
      <p>specialty: {hog.specialty}</p>
      <p>greased: {hog.greased ? 'si' : 'no'}</p>
      <p>weight: {hog.weight}</p>
      <p>highest medal: {hog['highest medal achieved']}</p>
    </div>
  }

  toggleShowInfo= () => {
    this.setState( prevState => {
      return {
        showInfo: !prevState.showInfo
      }
    })
  }

  render() {
    return (
      <div className="pigTile" >
        {this.renderImage()}
        <h6>{this.props.hog.name}</h6>
          { this.state.showInfo ? this.renderInfo() : null }
        <button onClick={this.toggleShowInfo}>{this.state.showInfo ? 'Less Info' : 'More Info'}</button>
          <button onClick={() => this.props.hideHog(this.props.hog.name)}>Hide Me</button>
      </div>
    )
  }
}

export default HogCard;
