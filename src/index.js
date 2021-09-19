import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Data/state'
import {addPost} from './Data/state'
import {addMessage} from './Data/state'
import {onPostChange} from './Data/state'
import {onMessageChange} from './Data/state'
import {subscribe} from './Data/state'

export let rerenderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} 
        addPost={store.addPost.bind(store)} 
        addMessage={store.addMessage.bind(store)} 
        onPostChange={store.onPostChange.bind(store)} 
        onMessageChange={store.onMessageChange.bind(store)} 
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
store.subscribe(rerenderTree)
store.rerenderTree(store.getState())


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
