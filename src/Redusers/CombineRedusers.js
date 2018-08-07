import { combineReducers } from 'redux';
import loggined from './LoginForm.js';
import companyReducer from './CompanyReduser';
import windowShow from './Window';

export default combineReducers({
    loggined,
    companyReducer,
    windowShow

});