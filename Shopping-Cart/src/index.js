import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import './index.css'
import cartReducer from './components/reducers/cartReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

 const store = createStore(cartReducer);

 ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

