import { combineReducers } from 'redux';
import userReducer from './userReducer';
import confReducer from './confReducer';
import dataTableReducer from './dataTableReducer';

export default combineReducers({
    userReducer, 
    dataTableReducer,
    confReducer
});
