import React from 'react'
import './App.css';
import Menu from './components/Menu'
import Showcase from './components/Showcase'

function App() {
    return (
        <>
            <Menu />
            <div className="main">
                <h1>Interior Design</h1>
                <Showcase />
                
                <div id="services">
                    <h2>Services.</h2>
                    <hr />
                    <p>
                    We are a interior design service that focus on what's best for your home and what's best for you!
                    </p>
                    <p>
                    Some text about our services - what we do and what we offer. We are lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>

                <div id="designers">
                    <h2>Designers.</h2>
                    <hr />
                    <p>The best team in the world.</p>
                    <p>
                    We are lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p><b>Our designers are thoughtfully chosen</b>:</p>
                </div>

                <div id="designers">
                    <h2>Designers.</h2>
                    <hr />
                    <p>The best team in the world.</p>
                    <div className="member">
                    <img src="images/team2.jpg" alt="John" />
                    <div className="description">
                        <h3>John Doe</h3>
                        <p className="position">CEO &amp; Founder</p>
                        <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                    </div>
                    </div>
                    <div className="member">
                    <img src="images/team1.jpg" alt="Jane" />
                    <div className="description">
                        <h3>Jane Doe</h3>
                        <p className="position">Designer</p>
                        <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                    </div>
                    </div>
                    <div className="member">
                    <img src="images/team3.jpg" alt="Mike" />
                    <div className="description">
                        <h3>Mike Ross</h3>
                        <p className="position">Architect</p>
                        <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                    </div>
                    </div>
                </div>

                <div id="packages">
                    <h2>Packages.</h2>
                    <hr />
                    <p>Some text our prices. Lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure</p>
                </div>
                
                <div className="tariffs">
                    <div className="tariff">
                    <ul>
                        <li className="tariff-name">Basic</li>
                        <li>Floorplanning</li>
                        <li>10 hours support</li>
                        <li>Photography</li>
                        <li>20% furniture discount</li>
                        <li>Good deals</li>
                        <li>
                        <p className="price">50 cents</p>
                        <p className="period">per day</p>
                        </li>
                        <li>
                        <button>Sign Up</button>
                        </li>
                    </ul>
                    </div>
                    <div className="tariff pro">
                    <ul>
                        <li className="tariff-name">Pro</li>
                        <li>Floorplanning</li>
                        <li>50 hours support</li>
                        <li>Photography</li>
                        <li>50% furniture discount</li>
                        <li>GREAT deals</li>
                        <li>
                        <p className="price">50 cents</p>
                        <p className="period">per day</p>
                        </li>
                        <li>
                        <button>Sign Up</button>
                        </li>
                    </ul>
                    </div>
                </div>

                <div id="contact">
                    <h2>Contact.</h2>
                    <hr />
                    <p>Do you want us to style your home? Fill out the form and fill me in with the details :) We love meeting new people!</p>
                    <form>
                    <p>
                        <label for="name">Name</label>
                        <input type="text" name="Name" id="name" />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="email" name="Email" id="email" />
                    </p>
                    <p>
                        <label for="comment">Message</label>
                        <input type="text" name="Message" id="comment" />
                    </p>
                    <button>Send Message</button>
                    </form>
                </div>

            </div>

            <div id="footer">
            <p>
                Powered by
                <a href="http://hwschool.online/" target="_blank">Hello world</a>
            </p>
            </div>
        </>
  );
}

export default App;

