import React from 'react';
import DeleteablePainting from './DeleteablePainting';
import { Route, Switch } from 'react-router-dom';
import PaintingShow from './PaintingShow';
import Painting from './Painting';
import artworks from './artworks';
import { connect } from 'react-redux'

class PaintingList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(resp => resp.json())
    .then(data => {
      this.props.updatePaintings(artworks)
    })
  }

  render() {
    console.log('props in paintingList', this.props)

    const allPaintings = this.props.paintings.map(p => (
      <DeleteablePainting
        key={p.id}
        painting={p}
      />
    ));
    return (
      <Switch>
        <Route path='/paintings/:paintingId' render={(route) => {
          const id = route.match.params.paintingId
          const painting = this.props.paintings.find(painting => painting.id == id)
          return <div>
            <PaintingShow painting={painting}/>
          </div>
        }} />
        <Route path='/'  render={()=>{
          return <div>
            <h1>All Paintings</h1>
            <div className="ui items">{allPaintings}</div>
          </div>
        }}
        />
      </Switch>

    );
  }
}

const mapStateToProps= (state) => {
  return {
    paintings: state.paintings
  }
}

const mapDispatchToProps= (dispatch) => {
  return {
    updatePaintings: (artworks) => { dispatch({type: 'UPDATE_PAINTINGS', artworks: artworks})},
    upvote: (id) => { dispatch({type: 'UPVOTE', id: id})},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaintingList);













