import React from 'react'
import './Productdisplay.css'
import star_icon from '../Assets/star_icon.png';
import star_dull from '../Assets/star_dull_icon.png';
const Productdisplay = (props) => {
  const {product}=props;
  return (
    <div className='productdisplay'>
      <div className='productdisplayleft'>

<div className='productdisplay-img-list'>
  <img src={product.image} alt=""/>
  <img src={product.image} alt=""/>
  <img src={product.image} alt=""/> 
  <img src={product.image} alt=""/>
</div>
<div className='productdisplay-img'>
<img  className="productdisplay-main-img" src={product.image} alt=""/>
</div>
      </div>
      <div className='productdisplayright'>
<h1>{product.name}</h1>
<div className='productdisplay-right-star'>
  <img src={star_icon} alt=""/>
  <img src={star_icon} alt=""/>
  <img src={star_icon} alt=""/>
  <img src={star_icon} alt=""/>
  <img src={star_dull} alt=""/>
  <p>(122)</p>
</div>
<div className='productdisplayright-prices'>
  <div className='productdisplayright-price-old'>${product.old_price}</div>
  <div className='productdisplayright-price-new'>${product.new_price}</div>
</div>
<div className='productdisplayright-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</div>
      
      <div className='productdisplay-right-size'>
        <h1>select size</h1>
        <div className='productdisplay-right-sizes'>
          <div>S</div>
          <div>M</div>
          <div>L</div>
          <div>XL</div>
          <div>XXL</div>
        </div>

      </div>
      <button>ADD TO CART</button>
      <p className='productdisplayright-category'><span>Category:</span>Women,T-shirt,Crop-top</p>
      <p className='productdisplayright-category'><span>Tags:</span>Modern,Latest</p>
      </div>
    </div>
  )
}

export default Productdisplay
