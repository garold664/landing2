import React from 'react'

function Message(props) {
    return (
        <div className='message'>
            <p className="message_name">{props.name}</p>
            <p className="message_text">{props.message}</p>
        </div>
  );
}

export default Message;

