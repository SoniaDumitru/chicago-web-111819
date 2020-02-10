const initialState = {
  paintings: []
}

export default (state=initialState, action) => {
  switch(action.type) {
    case 'UPDATE_PAINTINGS': 
      return {
        ...state,
        paintings: action.artworks
      }
    case 'UPVOTE': 
      const newPaintings = state.paintings.map(p => {
        if (p.id !== action.id) {
          return p
        } else {
          return {
            ...p, 
            votes: p.votes + 1
          }
        }
      })

      return {
        ...state,
        paintings: newPaintings 
      }
  }
  return state
}
