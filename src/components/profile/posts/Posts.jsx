import React from 'react'
import Post from './post/Post'
// import ava from "../../img/elon.jpg"
import ava_min from "../../../img/elon_min.jpg"

let postItems = [
    {name: 'some guy', message: "Any message"},
    {name: 'Elon Musk', message: "Lorem Ipsum"},
    {name: 'Elon Musk', message: "Anything else"},
    {name: 'Elon Musk', message: "Elon Musk is really great inventor and entrepreneur"},
];

function Posts() {
    return (
        <div className='posts'>
            <input placeholder='enter the post' />
            <button>Add post</button>
            {
                postItems.map((e) => {
                    return <Post name = {e.name} message = {e.message} />
                })
            }
            {/* <Post name="some guy"  message = "Any message" />
            <Post name="Elon Musk" message = "Lorem Ipsum" />
            <Post name="Elon Musk" message = "Anything else" />
            <Post name="Elon Musk" message = "Elon Musk is really great inventor and entrepreneur" /> */}
        </div>
  );
}

export default Posts;

