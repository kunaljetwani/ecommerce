import React from 'react'
import { useState } from 'react'
import Singlemensproduct from './singlemensproduct'

export default function Mensproduct(props) {
  let [mensprodduct, setmensproduct] = useState([])

  fetch("https://fakestoreapi.com/products/category/men's%20clothing")
    .then(res => res.json())
    .then(json => setmensproduct(json))
  return (
    <div>
      <h2>this is mens productpage</h2>
      <div className="mens row">
        {mensprodduct.map((item) => (
        <div className="col-sm-3">
          
        <Singlemensproduct data={item} />
        </div>
        ))
        }
      </div>
    </div>
  )
}
