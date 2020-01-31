import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Filter from './Filter'
import HogContainer from './HogContainer'
import hogs from '../porkers_data';


class App extends Component {
  constructor(){
    super()

    const updatedHogs = hogs.map(hogObj => {
      return {
        ...hogObj,
        hidden: false
      }
    })

    this.state = {
      hogs: updatedHogs,
      showGreased: false,
      sortBy: ''
    }
  }

  toggleGreased = () => {
    this.setState(prevState => ({
      showGreased: !prevState.showGreased
    }))
  }

  handleSort= (e) => {
    this.setState({
      sortBy: e.target.value
    })
  }

  hideHog = (name) => {
    const updatedHogs = this.state.hogs.map( hog => {
      if (hog.name === name) {
        return {
          ...hog,
          hidden: true
        }
      } 

      return hog
    })

    this.setState({
      hogs: updatedHogs
    })

  }

  filterHogs = () => {
    let filteredHogs = this.state.hogs

    if(this.state.showGreased) {
      filteredHogs = filteredHogs.filter(hog => hog.greased)
    } 

    if (this.state.sortBy === 'weight') {
      filteredHogs = filteredHogs.sort((hog1, hog2) => (hog1.weight < hog2.weight) ? -1 : 1)
    }

    if (this.state.sortBy === 'name') {
      filteredHogs = filteredHogs.sort((hog1, hog2) => (hog1.name < hog2.name) ? -1 : 1)
    }
    filteredHogs = filteredHogs.filter(hog => !hog.hidden)

    return filteredHogs
  }

  render() {
    console.log('app state', this.state)
    return (
      <div className="App">
          <Nav />
            <Filter 
              handleSort={this.handleSort}
              toggleGreased={this.toggleGreased}
              showGreased={this.state.showGreased}/>
              <HogContainer 
                hideHog={this.hideHog}
                hogs={this.filterHogs()} />
      </div>
    )
  }
}

export default App;
