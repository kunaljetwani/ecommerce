import React from 'react'

export default function Singleprodwomen(props) {
    const { title, price, description, image, rating } = props.data
  return (
    <div>
         <div className='singlewomensproduct card'>
        <div class="card " style={{ width: 18 + "rem;" }}>
          <img src={image} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{description}
            </p>
            <h3>{price}</h3>
            <h2>{rating[0]}</h2> <h2>{rating[1]}</h2>
            <a href="#" class="btn btn-primary">Add to cart</a>

          </div>
        </div> </div>

      
    </div>
  )
}
