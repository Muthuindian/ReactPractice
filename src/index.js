import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
let element = (<div><h1>Hello</h1>
<h2>Meera</h2></div>);
let mountNode=document.getElementById('root');
ReactDOM.render(<App />,mountNode );
registerServiceWorker();
