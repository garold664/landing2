import React from 'react'
import { NavLink } from 'react-router-dom';
import './Dialogs.css';
import DialogItem from './dialogItem/DialogItem';
import Message from './message/Message';



function Dialogs() {
    return (
        <div className='dialogs'>
            <div className="dialog">
                <DialogItem name='Иван Иванов' id='1' />
                <DialogItem name='Илон Маск' id='2' />
                <DialogItem name='Бил Гейтс' id='3' />
            </div>
            <div className="messages">
                <Message message="Привет" />
                <Message message="Го на Марс" />
                <Message message="Где мой чип?" />
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

