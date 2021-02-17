import { combineReducers } from 'redux';
import userReducer from './userReducer';
import dataTableReducer from './dataTableReducer';

export default combineReducers({
    userReducer, 
    dataTableReducer
});
