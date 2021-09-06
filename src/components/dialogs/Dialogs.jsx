import React from 'react'
import './Dialogs.css';
import Message from './message/Message'


function Dialogs() {
    return (
        <div className='dialogs'>
            <Message name="Иван Иванов" message="Привет" />
            <Message name="Илон Маск" message="Го на Марс" />
            <Message name="Билл Гейтс" message="Где мой чип?" />
            <form action="">
                <input type="text" />
                <br />
                <input type="submit" />
            </form>
        </div>
  );
}

export default Dialogs;

