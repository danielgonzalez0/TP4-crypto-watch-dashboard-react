import { combineReducers } from 'redux';
import stableReducer from './stable.reducer';

//conbineReducers from redux is used to index all the reducers created
export default combineReducers({
  //reducers
  stableReducer,
});
