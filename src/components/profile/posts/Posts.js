import React from 'react'

// import ava from "../../img/elon.jpg"
import ava_min from "../../../img/elon_min.jpg"

function Posts() {
    return (
        <div className='posts'>
            <input placeholder='enter the post' />
            <button>Add post</button>
            <div className='post'>
                <img src={ava_min} alt="profile mini photo" />
                <span>Elon Mask</span>
                <p>Some text</p>
            </div>
        </div>
  );
}

export default Posts;

