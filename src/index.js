import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let postItems = [
  {name: 'some guy', message: "Any message", likes: 1},
  {name: 'Elon Musk', message: "Lorem Ipsum", likes: 3},
  {name: 'Elon Musk', message: "Anything else", likes: 2},
  {name: 'Elon Musk', message: "Elon Musk is really great inventor and entrepreneur", likes: 15},
];

ReactDOM.render(
  <React.StrictMode>
    <App postItems={postItems} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
