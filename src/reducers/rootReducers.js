import { combineReducers } from 'redux'
import postReducer from './postReducer'
import themeReducer from './themeReducer'

const rootReducers = combineReducers({
  postReducer,
  themeReducer
})

export default rootReducers
