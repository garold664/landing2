import React from 'react'
import { NavLink } from 'react-router-dom';
import './Dialogs.css';
import DialogItem from './dialogItem/DialogItem';
import Message from './message/Message';


let MessageText = React.createRef()

function Dialogs(props) {

    let onMessageChange = () => {
        props.onMessageChange(MessageText.current.value)
    }

    let addMessage = () => {
        props.addMessage(MessageText.current.value)
        MessageText.current.value = ''
    }
    return (
        <div className='dialogs'>
            <div className="dialog">
                {
                    props.dialogsPage.dialogNames.map((e) => {
                        return <DialogItem name = {e.name} id = {e.id} />
                    })
                }
            </div>
            <div className="messages">
                {
                    props.dialogsPage.messageItems.map((e) => {
                        return <Message message = {e.message} id = {e.id} />
                    })
                }
            </div>
            <form action="">
                <input onChange={onMessageChange} value={props.dialogsPage.newMessageText} ref={MessageText} type="text" />
                <br />
                <input onClick={addMessage} type="button" value="send" />
            </form>
        </div>
  );
}

export default Dialogs;

