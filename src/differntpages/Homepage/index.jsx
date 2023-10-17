import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import AllproductsCard from "./Allproducts/AllproductsCard";

export default function Homepage({carting}) {

  let [count,setcount]=useState(0)
  let [allproducts, setallproducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setallproducts(json));
  }, []);

  let carrting =(add)=>{
    console.log("this is carrting",add)
    setcount(add)
  }
  // cheaking of data
  
  // console.log("this is homepage add",count)
  carting(count)
  return (
    <div className="container">
      <h2>this is all products page</h2>

      <div class="row">
        {allproducts.map((item) => (
          <div className="col-sm-3">
            <AllproductsCard data={item} carrting={carrting} />
          </div>
        ))}
      </div>
    </div>
  );
}
