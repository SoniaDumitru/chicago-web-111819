import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <div className="filterWrapper">
        <label>Greased Pigs Only?</label>
          <input 
            onChange={this.props.toggleGreased}
            type="checkbox"
            checked={this.props.showGreased}
            />
          <select onChange={this.props.handleSort}>
            <option value=''></option>
            <option value='weight'>weight</option>
            <option value='name'>name</option>
          </select>
      </div>
    )
  }
}

export default Filter;
