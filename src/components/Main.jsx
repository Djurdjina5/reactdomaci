import React from 'react'
import videocoffee from '../videos/videocoffee.mp4'
import { Link } from "react-router-dom";

export const Main = () => {
  return (
    <div className='main'>
        <video src={videocoffee} autoPlay muted loop />
        <div className='content'>
            <h1>LET'S DRINK COFFEE</h1>
             <Link to="/products"><h3 style={{color:"wheat"}}>SHOP</h3></Link>
        </div>
    </div>
  )
}
