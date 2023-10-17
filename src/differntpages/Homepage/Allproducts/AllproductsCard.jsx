import React from "react";

export default function AllproductsCard(props) {
  const { title, price, description, image, rating } = props.data;
  let product = props.data;
  function handelCartEvent() {
    console.log("the button is working fine");
    //store product in local storage
    let cartItems = localStorage.getItem("cartitem");
    if (!cartItems) {
      cartItems = [];
      cartItems.push(product);
      localStorage.setItem("cartitem", JSON.stringify(cartItems));
    } else {
      cartItems = JSON.parse(cartItems);
      cartItems.push(product);
      localStorage.setItem("cartitem", JSON.stringify(cartItems));
    }
    props.carrting(cartItems.length);
  }

  return (
    <div>
      <div className="all-products ">
        <div class="card " style={{ width: 18 + "rem;" }}>
          <img src={image} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-title">Brand-{title}</p>
            <p>{description}</p>
            <h3>{price}</h3>
            <h2>{rating[0]}</h2> <h2>{rating[1]}</h2>
            <button onClick={handelCartEvent} class="btn btn-success">
              Add to cart
            </button>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
