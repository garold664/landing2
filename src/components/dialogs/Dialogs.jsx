import React from 'react'
import { NavLink } from 'react-router-dom';
import './Dialogs.css';
import DialogItem from './dialogItem/DialogItem';
import Message from './message/Message';

let dialogNames = [
    {name: 'Иван Иванов', id: 1},
    {name: 'Илон Маск', id: 2},
    {name: 'Билл Гейтс', id: 3}
];
let messageItems = [
    {message: 'Привет', id: 1},
    {message: 'Го на Марс', id: 2},
    {message: 'Где мой чип?', id: 3}
];

function Dialogs() {
    return (
        <div className='dialogs'>
            <div className="dialog">
                {
                    dialogNames.map((e) => {
                        return <DialogItem name = {e.name} id = {e.id} />
                    })
                }
            </div>
            <div className="messages">
                {
                    messageItems.map((e) => {
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

