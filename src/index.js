import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HelloMessage from './HelloMessage';
import Timer from './Timer';
import TodoApp from './TodoApp';
import MarkdownEditor from './MarkdownEditor';
import Fuli from './Fuli';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<HelloMessage name="Taylor" />, document.getElementById('helloMessage'));
ReactDOM.render(<Timer />, document.getElementById('timer'));
ReactDOM.render(<TodoApp />, document.getElementById('todoApp'));
ReactDOM.render(<MarkdownEditor />, document.getElementById('markdownEditor'));
ReactDOM.render(<Fuli />, document.getElementById('fuli'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
