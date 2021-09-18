import React from 'react'
import Post from './post/Post'

let postText = React.createRef()



function Posts(props) {

    let onPostChange = () => {
        props.onPostChange(postText.current.value)
    }

    let addPost = () => {
        props.addPost(postText.current.value)
        postText.current.value = ''
    }
    return (
        <div className='posts'>
            <input onChange = {onPostChange} value={props.newPostText} ref = {postText} placeholder='enter the post' />
            <button onClick={addPost}>Add post</button>
            {
                props.postItems.map((e) => {
                    return <Post name = {e.name} message = {e.message} likes = {e.likes} />
                })
            }
            
        </div>
  );
}

export default Posts;

