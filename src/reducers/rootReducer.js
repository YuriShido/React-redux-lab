import {combineReducers} from 'redux'
import personReducer from './personsReducer'

const rootReducer = combineReducers({
  persons: personReducer
})

export default rootReducer