import React from 'react'
import { NavLink } from 'react-router-dom';
import './Dialogs.css';
import DialogItem from './dialogItem/DialogItem';
import Message from './message/Message';



function Dialogs(props) {
    return (
        <div className='dialogs'>
            <div className="dialog">
                {
                    props.dialogNames.map((e) => {
                        return <DialogItem name = {e.name} id = {e.id} />
                    })
                }
            </div>
            <div className="messages">
                {
                    props.messageItems.map((e) => {
                        return <Message message = {e.message} id = {e.id} />
                    })
                }
            </div>
            <form action="">
                <input type="text" />
                <br />
                <input type="submit" />
            </form>
        </div>
  );
}

export default Dialogs;

