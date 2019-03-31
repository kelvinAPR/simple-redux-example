import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import Store from './store'

const StoreInstance = Store();

console.log('store instance')
console.log(StoreInstance)

ReactDOM.render(
    <Provider store={StoreInstance}>
        <App />
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
