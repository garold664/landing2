import React from 'react'
import Post from './post/Post'
// import ava from "../../img/elon.jpg"
import ava_min from "../../../img/elon_min.jpg"

function Posts() {
    return (
        <div className='posts'>
            <input placeholder='enter the post' />
            <button>Add post</button>
            <Post />
        </div>
  );
}

export default Posts;

