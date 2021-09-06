import React from 'react'
import './App.css';
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Profile from './components/profile/Profile'
import Dialogs from './components/dialogs/Dialogs'

import {BrowserRouter} from 'react-router-dom'

function App() {
    return (
        <div className="wrapper">
          <BrowserRouter>
            <Header />
            <Navbar />
            <div className="wrapper-content">
            <Profile />
            <Dialogs />
            </div>
          </BrowserRouter>
        </div>
  );
}

export default App;

