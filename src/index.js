import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import MyApp from './MyApp';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<MyApp name="JoJo"/>, document.getElementById('root'));
ReactDOM.render(<MyApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
