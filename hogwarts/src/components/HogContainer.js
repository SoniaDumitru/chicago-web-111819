import React, { Component } from 'react';
import HogCard from './HogCard'

class HogContainer extends Component {

  renderHogs = () => {
    return this.props.hogs.map(hogData => {
      return <HogCard 
              hideHog={this.props.hideHog}
              hog={hogData} />
    })
  }

  render() {
    return (
      <div className="App">
        {this.renderHogs()}
      </div>
    )
  }
}

export default HogContainer;
