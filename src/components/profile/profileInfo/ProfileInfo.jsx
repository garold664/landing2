import React from 'react'


import ava from "../../../img/elon.jpg"
import ava_min from "../../../img/elon_min.jpg"

function ProfileInfo() {
    return (
        <div className='me'>
            <img src={ava} alt="profile mini photo" />
            <p>Elon Mask</p>
        </div>

  );
}

export default ProfileInfo;

