import React from 'react'
import './Profile.css';
import Posts from './posts/Posts'
import ProfileInfo from './profileInfo/ProfileInfo';


function Profile(props) {
    return (
        <div className='profile'>
            <ProfileInfo />
            <Posts postItems = {props.profilePage.postItems} />
        </div>
  );
}

export default Profile;

