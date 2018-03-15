import { combineReducers } from 'redux';
import { reducer as forms } from 'redux-form';
import usersReducer from './users.reducer';

const rootReducers = combineReducers({
  users: usersReducer,
  form: forms,
});

export default rootReducers;

