import React from 'react';
import './imagecomponent.css';
import flight from '../assests/flight.jpg';

const imagecomponent = () =>{
    return (
        <div className="image-container">
            <img src={flight} alt="could not load image" />
        </div>
    );
};

export default imagecomponent;