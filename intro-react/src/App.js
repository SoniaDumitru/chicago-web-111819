import React from 'react';
import logo from './logo.svg';
import './App.css';
import WelcomeContainer from './WelcomeContainer'

class App extends React.Component {

  func = () => {
    console.log('this is a function')
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h4>hello</h4>
            <WelcomeContainer />
        </header>
      </div>
    );
  }
}

export default App;
