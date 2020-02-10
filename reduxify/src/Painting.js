import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

class Painting extends React.Component {
  render(){
    return (
      <div className="item">
        <div className="ui small image">
          <img src={this.props.painting.image} alt={this.props.painting.slug} />
        </div>
        <div className="middle aligned content">
          <div className="header">{`"${this.props.painting.title}" by ${this.props.painting
            .artist.name}`}</div>
          <div className="description">
            <a onClick={() => this.props.upvote(this.props.painting.id)}>
              <i className="large caret up icon" />
              {this.props.painting.votes} votes
            </a>
          </div>
          <div onClick={this.props.handleDelete} className="ui red basic button">
            Delete It
          </div>
          <Link to={`/paintings/${this.props.painting.id}`} className="ui basic button">
            View
          </Link>
        </div>
      </div>
    );
  }
};

const mapDispatchToProps= (dispatch) => {
  return {
    upvote: (id) => { dispatch({type: 'UPVOTE', id: id})},
  }
}

export default connect(null, mapDispatchToProps)(Painting);



