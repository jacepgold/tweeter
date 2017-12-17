import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import tweets from './tweets'

const rootReducer = combineReducers({
  user,
  flash,
  tweets
import bio from './bio';

const rootReducer = combineReducers({
  user,
  bio,
  flash
});

export default rootReducer;
