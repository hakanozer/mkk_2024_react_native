import { legacy_createStore, combineReducers } from 'redux'
import { likesReducer } from "../userRedux/likesReducer";

const reducers = combineReducers({
  likesReducer
})
export const store = legacy_createStore(reducers)
