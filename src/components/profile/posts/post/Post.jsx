import React from 'react'

import ava_min from "../../../../img/elon_min.jpg"

function Post() {
    return (
        <div className='post'>
            <img src={ava_min} alt="profile mini photo" />
            <span>Elon Mask</span>
            <p>Some text</p>
        </div>
  );
}

export default Post;

