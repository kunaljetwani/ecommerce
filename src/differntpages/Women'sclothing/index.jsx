import React from 'react'
import { useState } from 'react'
import Singleprodwomen from './Singlewomensproduct/Singleprodwomen'

export default function Womensproducts() {
    let [womensprodduct, setwomensproduct] = useState([])

    fetch("https://fakestoreapi.com/products/category/women's%20clothing")
      .then(res => res.json())
      .then(json => setwomensproduct(json))
  return (
    <div>
      <h2>this is Womens productpage</h2>
      <div className="women row">
        {womensprodduct.map((item) => 
        ( <div className="col-sm-3">
          
        <Singleprodwomen data={item} />
        </div>
        ))
        }
      </div>
    </div>
  )
}
