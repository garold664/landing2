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
            

            <input placeholder='enter the post' />
            <button>Add post</button>
            <Post name="some guy"  message = "Any message" />
            <Post name="Elon Musk" message = "Lorem Ipsum" />
            <Post name="Elon Musk" message = "Anything else" />
            <Post name="Elon Musk" message = "Elon Musk is really great inventor and entrepreneur" />
>>>>>>> a4f752ebbba862aeede2b1bdf6668b8a8bf7c928
        </div>
  );
}

export default Posts;

