import React from 'react'
import './Profile.css';
import Posts from './posts/Posts'
import ProfileInfo from './profileInfo/ProfileInfo';


function Profile(props) {
    return (
        <div className='profile'>
            <ProfileInfo />
            <Posts newPostText = {props.profilePage.newPostText} postItems = {props.profilePage.postItems} addPost={props.addPost}  onPostChange={props.onPostChange} />
        </div>
  );
}

export default Profile;

