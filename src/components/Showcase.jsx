import React from 'react'
import './Showcase.css'
import kitchenconcrete from "./images/kitchenconcrete.jpg"
import atrium from "./images/atrium.jpg"
import livingroom from "./images/livingroom.jpg"
import diningroom from "./images/diningroom.jpg"
import bedroom from "./images/bedroom.jpg"
import livingroom2 from "./images/livingroom2.jpg"


function Showcase() {
    return (
        <div id="showcase">
            <h2>Showcase.</h2>
            <hr />
            <div className="images">
                <img src={kitchenconcrete} />
                <img src={atrium} />
                <img src={livingroom} />
                <img src={diningroom} />
                <img src={bedroom} />
                <img src={livingroom2} />
            </div>
        </div>
    );
}
export default Showcase;
