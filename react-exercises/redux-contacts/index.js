import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './redux';

ReactDOM.render(<App/>, document.getElementById('root'));