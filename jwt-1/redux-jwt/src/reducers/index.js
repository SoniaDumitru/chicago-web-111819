import { combineReducers } from 'redux'
import paintings from './paintings'
import loader from './loader'
import auth from './auth'

export default combineReducers({
  auth,
  loader,
  paintings,
})
