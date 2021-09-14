import React from 'react'
import './Profile.css';
import Posts from './posts/Posts'
import ProfileInfo from './profileInfo/ProfileInfo';

let postItems = [
    {name: 'some guy', message: "Any message", likes: 1},
    {name: 'Elon Musk', message: "Lorem Ipsum", likes: 3},
    {name: 'Elon Musk', message: "Anything else", likes: 2},
    {name: 'Elon Musk', message: "Elon Musk is really great inventor and entrepreneur", likes: 15},
];

function Profile() {
    return (
        <div className='profile'>
            <ProfileInfo />
            <Posts postItems = {postItems} />
        </div>
  );
}

export default Profile;

