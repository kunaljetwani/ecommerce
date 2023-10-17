import { useState } from "react"
import React from 'react'
import SingleJwelary from "./singlejewlery"
import './jewlerystyle.css'


export default function Jewlery(props) {
  let [jewlery, setejwelery] = useState([])
  fetch('https://fakestoreapi.com/products/category/jewelery')
    .then(res => res.json())
    .then(json => setejwelery(json))
  return (

    <div>
      <h2>this is jewelery page</h2>
      {/* <SingleJwelary/> */}
      <div className="jewl row ">
        {jewlery.map((item) =>(
          <div className="col-sm-3">
          <SingleJwelary data={item} />
          </div>
          ))
        }
      </div>
    </div>
  )
}
