import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilters'

//combines reducers into single reducer
// for app consumptions


export default combineReducers({
  todos,
  visibilityFilter
})