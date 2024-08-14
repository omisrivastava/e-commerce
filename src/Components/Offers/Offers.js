import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'>
      <div className='offersleft'>
<h1>Exclusive</h1>
<h1>Offers for you</h1>
<p>ONLY ON BEST SELLER  PRODUCT</p>
<button>Check Now</button>
      </div>
      <div className='offerright'>
<img src={exclusive_image} alt=''/>
      </div>
    </div>
  )
}

export default Offers
