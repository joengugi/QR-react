import React from 'react';
import QRcode from '../images/QRcode.png';
import './Preview.css'

export default function Preview() {
  return (
    <div className = "container">
      <div className='inner'>
      <img src={QRcode.png} className = 'image' alt='scanner'></img>
        <h2>improve your front-end skill by building projects</h2>
        <p>scan the Qr code to visit frontend mentor and and take your coding skills to the next level </p>
      </div>
        
    </div>
  )
}
