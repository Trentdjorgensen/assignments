import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import store from './redux';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';



ReactDOM.render(
 <Provider >
    <BrowserRouter>
                <App/>
    </BrowserRouter>
</Provider>,
document.getElementById('root'));