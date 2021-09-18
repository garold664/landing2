import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './Data/state'
import {addPost} from './Data/state'
import {addMessage} from './Data/state'
import {onPostChange} from './Data/state'
import {onMessageChange} from './Data/state'
import {subscribe} from './Data/state'

export let rerenderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} 
        addPost={addPost} 
        addMessage={addMessage} 
        onPostChange={onPostChange} 
        onMessageChange={onMessageChange} 
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
subscribe(rerenderTree)
rerenderTree(state)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
