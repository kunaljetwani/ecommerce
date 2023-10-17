// import React from 'react'

// export default function Cart(props) {
//     let carting = []
//     function handeldelete() {
//         carting = JSON.parse(localStorage.getItem("cartitem"))
//         console.log(carting)

//     }
//     // console.log(props,"this is props.item.")
//     return (
//         <div>
//             <div class="card mb-3" style={{ maxWidth: 540 + "px;" }}>
//                 <div class="row g-0">
//                     <div class="col-md-4">
//                         <img src={props.items.image} style={{ width: 180 + "px" }} class="img-fluid rounded-start" alt="..." />
//                     </div>
//                     <div class="col-md-6">
//                         <div class="card-body">

//                             <h5 class="card-title">{props.items.title}</h5>
//                             <p class="card-text">{props.items.description}</p>
//                             <p class="card-text"><small class="text-muted">{props.items.price}</small></p>
//                             {/* <h2>{props.item..rating[0]}</h2> <h2>{props.item..rating[1]}</h2> */}
//                             <button type="button" class="btn btn-outline-danger" onClick={handeldelete}>Delete</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

import React, {useState } from "react";

export default function Cart(props,) {
  const [cartItems, setCartItems] = useState([]);

  // Function to handle the delete button click
  function handleDelete() {
    // Get the current cart items from local storage
    const storedCartItems = JSON.parse(localStorage.getItem("cartitem")) || [];

    // Filter out the item that needs to be deleted
    const updatedCartItems = storedCartItems.filter(
      (item) => item.id !== props.items.id
    );

    // Update local storage and state with the updated cart items
    localStorage.setItem("cartitem", JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  }

  return (
    <div>
      <div className="card mb-3" style={{ Width: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={props.items.image}
              style={{ width: "180px" }}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">{props.items.title}</h5>
              <p className="card-text">{props.items.description}</p>
              <p className="card-text">
                <h4  className="text">Rs-{props.items.price}</h4>
              </p>
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
