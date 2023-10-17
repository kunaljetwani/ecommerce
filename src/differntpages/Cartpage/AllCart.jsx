import React, { useEffect, useState } from "react";
import Cart from "./Singlecart/Cart";

export default function AllCart({ carting }) {
  let [cart, setcart] = useState([]);
  useEffect(() => {
    let items = JSON.parse(localStorage.getItem("cartitem"));
    console.log(items);
    console.log("thia is kunal");
    setcart(items);
  }, [setcart]);

  carting(cart.length);

  return (
    <div className="container">
      {cart.map((i) => (
        <Cart items={i} />
      ))}
      <h1>total {}</h1>
    </div>
  );
}
