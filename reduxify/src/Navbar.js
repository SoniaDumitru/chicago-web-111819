import React from 'react';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'yellow'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
  }

  render() {
    return (
      <div className={`ui inverted ${this.state.color} menu`}>
        <Link to='/' className="item">
          <h2 className="ui header">
            <i className={`${this.props.icon} icon`} />
            <div className="content">{this.props.title}</div>
            <div className="sub header">{this.props.description}</div>
          </h2>
        </Link>
        <div className="right menu">
          <div className="item">
            <Link to='/about' className="ui button">
              About Page
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
