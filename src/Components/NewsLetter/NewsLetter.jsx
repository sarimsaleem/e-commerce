import React from 'react'
import "./newsLetter.css"
const NewsLetter = () => {
  return (
    <div className='NewsLetter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newletter and stay updated</p>
        <div>
            <input type="email" placeholder='Your E-mail id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter