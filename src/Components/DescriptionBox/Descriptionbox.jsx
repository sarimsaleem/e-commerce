import React from 'react'
import "./descriptionbox.css"

const Descriptionbox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-navbox">Description</div>
            <div className="descriptionbox-navbox fade">Reviews (122) </div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website i an online platform that facilitate buying an selling of products and services over the internet servers as an virtual marketplace where business and individuals showcase their products, interact their customers, and cunduct transactions wiithout the need of phyical presence. E-commerce website have gained immense popularity due to their convenice accessibility and the global reach they offer
            </p>
            <p>
                E-commerce website typically display products and services and detailed description, images, prices and any available variety. Each products usually has it's relevant information. 
            </p>
        </div>
    </div>
  )
}

export default Descriptionbox