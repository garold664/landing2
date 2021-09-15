import React from 'react'
import './App.css';
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Profile from './components/profile/Profile'
import Dialogs from './components/dialogs/Dialogs'

import {BrowserRouter, Route} from 'react-router-dom'


function App(props) {
    return (
        <div className="wrapper">
          <BrowserRouter>
            <Header />
            <Navbar navbar = {props.state.navbar} />
            <div className="wrapper-content">
              <Route exact path="/" render={ () => <Profile profilePage={props.state.profilePage} />} />
              <Route exact path="/profile" render={ () => <Profile  profilePage={props.state.profilePage}  />} />
              <Route exact path="/dialogs" render={ () => <Dialogs dialogsPage={props.state.dialogsPage} />} />
            </div>
          </BrowserRouter>
        </div>
  );
}

export default App;

