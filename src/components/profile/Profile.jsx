import React from 'react'
import './Profile.css';
import Posts from './posts/Posts'

import ava from "../../img/elon.jpg"
import ava_min from "../../img/elon_min.jpg"

function Profile() {
    return (
        <div className='profile'>

            <div className='me'>
                <img src={ava} alt="profile mini photo" />
                <p>Elon Mask</p>
            </div>
            <Posts />
        </div>
  );
}

export default Profile;

