import { useState } from 'react'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AllproductsCard from '../Homepage/Allproducts/AllproductsCard'

export default function Categories({carting}) {
    
    
    let [count,setcount]=useState(0)
    let [allproducts, setallproducts] = useState([])
    const { category } = useParams()
    useEffect(() => {

        fetch('https://fakestoreapi.com/products/category/' + category)
            .then(res => res.json())
            .then(json => setallproducts(json))
    }, [category])


    let carrting =(add)=>{
        console.log("this is carrting",add)
        setcount(add)
      }
      carting(count)
    return (
        <div className="container">
            <h2>this is all products page</h2>

            <div class="row">

                {
                    allproducts &&
                    allproducts.map((item) => (
                        <div className="col-sm-3">
                            <AllproductsCard data={item} carrting={carrting} />
                        </div>
                    ))
                }
            </div>

        </div>)
}
