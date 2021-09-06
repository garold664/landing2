import React from 'react'
import Post from './post/Post'
// import ava from "../../img/elon.jpg"
import ava_min from "../../../img/elon_min.jpg"

function Posts() {
    return (
        <div className='posts'>
            <input placeholder='enter the post' />
            <button>Add post</button>
            <Post name="some guy"  message = "Any message" />
            <Post name="Elon Musk" message = "Lorem Ipsum" />
            <Post name="Elon Musk" message = "Anything else" />
            <Post name="Elon Musk" message = "Elon Musk is really great inventor and entrepreneur" />
        </div>
  );
}

export default Posts;

