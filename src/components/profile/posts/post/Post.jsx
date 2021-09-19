import React from 'react'

import ava_min from "../../../../img/elon_min.jpg"

function Post(props) {
    return (
        <div className='post'>
            <img src={ava_min} alt="profile mini photo" />
            <span>{props.name}</span>
            <p>{props.message}</p>
            <span className="likes">Likes: {props.likes}</span>
        </div>
  );
}

export default Post;

