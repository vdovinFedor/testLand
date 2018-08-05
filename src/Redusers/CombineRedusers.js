import { combineReducers } from 'redux';
import loggined from './LoginForm.js';
import companyReduser from "./CompanyReduser";
import windowShow from './Window';

export default combineReducers({
    loggined,
    companyReduser,
    windowShow

});