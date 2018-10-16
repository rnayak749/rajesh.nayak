import { combineReducers } from 'redux';
import ReducerUser from './reducers-users';

const rootReducer = combineReducers({
  users : ReducerUser
});

export default rootReducer;