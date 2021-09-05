import React from 'react'
import './Contact.css'

function Contact() {
    return (
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
    );
}
export default Contact;