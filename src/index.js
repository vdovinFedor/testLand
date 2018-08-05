import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import combineReducers from './Redusers/CombineRedusers';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';


//import registerServiceWorker from './registerServiceWorker';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';


//инициализация стора с параметром главного редьюсера
const store = createStore(combineReducers);
console.log(store.getState());


ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById('root')

);
