import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// https://stackoverflow.com/questions/68707553/uncaught-referenceerror-buffer-is-not-defined
// if not show text, pease read below blog
//https://akashmittal.com/unchecked-runtime-lasterror-message-port-closed/#:~:text=Chrome%20throws%20Unchecked%20runtime.lastError%3A%20The%20message%20port%20closed,all%20the%20installed%20extensions%20in%20your%20chrome%20browser.
