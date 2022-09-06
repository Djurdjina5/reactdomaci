import React from 'react'
import videocoffee from '../videos/videocoffee.mp4'

export const Main = () => {
  return (
    <div className='main'>
        <video src={videocoffee} autoPlay muted loop />
        <div className='content'>
            <h1>LETS DRINK COFFEE</h1>
            <h3>SHOP</h3>
        </div>
    </div>
  )
}
