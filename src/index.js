import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));

/*function tick() {
    const element = (
    <div align="center">
        <h2>Welcome to the React</h2>
        <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
*/

//Not to refresh entire html page.
if(module.hot) {
    module.hot.accept();
  }
  
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
