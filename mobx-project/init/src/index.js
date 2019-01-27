import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// 引入mobx的数据
import store from './store';
import { Provider } from 'mobx-react';
// 要被包裹进去  2.将数据仓给展开
ReactDOM.render(<Provider {...store}>
     <App />
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
