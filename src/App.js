import React from 'react'
import './App.css';
import Menu from './components/Menu'
import Showcase from './components/Showcase'
import Services from './components/Services'
import Designers from './components/Designers'
import Packages from './components/Packages'
import Tariffs from './components/Tariffs'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    return (
        <>
            <Menu />
            <div className="main">
                <h1>Interior Design</h1>
                <Showcase />
                <Services />
                <Designers/>

                <Packages/>
                <Tariffs/>
                <Contact/>
            </div>
            <Footer/>
            
        </>
  );
}

export default App;

