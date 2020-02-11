import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

const colors = [
];

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'yellow'
    };
  }

  handleLogout = () => {
    this.props.logout()
    this.props.history.push('/login')
  }

  render() {
    console.log('navbar props', this.props)
    return (
      <div className={`ui inverted yellow menu`}>
        <Link to='/about' className="item">
          <h2 className="ui header">
            <i className={`${this.props.icon} icon`} />
            <div className="content">{this.props.title}</div>
            <div className="sub header">{this.props.description}</div>
          </h2>
        </Link>
        <div className="right menu">
          <div className="item">
            {
              this.props.auth
              ? 
              <div onClick={this.handleLogout} className="ui button">
                Logout
              </div>
                :
              <Link to='/login' className="ui button">
                Login 
              </Link>
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps= (dispatch) => {
  return {
    logout: () => {
      dispatch({type: 'LOGOUT'})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));


