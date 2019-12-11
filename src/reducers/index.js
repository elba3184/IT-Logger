import { combineReducers } from 'redux';
import logReducer from './logReducer.js';

export default combineReducers({
  log: logReducer,
});
