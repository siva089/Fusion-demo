import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Row,Col} from 'react-bootstrap';

const Center=()=> {
  return (
    <div className="center-component ">
      
          <div className="center-image-grid">
            <img
              className="center-image"
              src="https://image.freepik.com/free-vector/modern-megapolis-night-glowing-buildings-ferris-wheel-cartoon-style-neon-colors_1441-2079.jpg"
            />
          </div>
       
       
          <div className="center-text">
            <h3>City of Love</h3>
            <p>
              There's nowhere on Earth quite like Venice: Its canals,
              labyrinth of car-free cobblestone streets, and hidden
              passageways are perfect for wandering. Hail a water taxi or
              gondola to wind through the city and, if you have time, get out
              of the historic center and head for the outer islands.
            </p>
          </div>

        
    </div>
  );
}
export default Center
