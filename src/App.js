import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Homepage from "../src/differntpages/Homepage";
import Jewlery from "./differntpages/Jewlery";
import Mensproduct from "./differntpages/Mensclothing";
import Womensproducts from "./differntpages/Women'sclothing";
import Login from "./differntpages/login";
import Signup from "./differntpages/signuppage";
import AllCart from "./differntpages/Cartpage/AllCart";
import Categories from "./differntpages/Catagories/Categories";
import { useState } from "react";
// import Mensclothing from './differntpages/Mensclothing'

function App() {
  let [cartlength, setcartlength] = useState(0);

  let carting = (add) => {
    console.log("home notified");
    setcartlength(add);
    //cheaking of data comming
    // console.log(add, typeof add);
  };

  // cheaking od data comming
  // console.log(cartlength, "this is cartlength of app ");

  return (
    <div className="App">
      {/* <Homepage/> */}
      {/* <Electronics/> */}
      {/* <Jewlery/> */}
      {/* <Mensproduct/> */}
      {/* <Womensproducts/> */}
      {/* <Homepage/> */}
      {/* <Login/> */}
      {/* <Signup/> */}

      <Router>
        <Navbar data={cartlength} />
        <Routes>
          <Route path="/" element={<Homepage carting={carting} />}></Route>
          {/* <Route path='/electronics' element={<Electronics/>}></Route>
      <Route path='/jewlery' element={<Jewlery/>}></Route>
      <Route path='/menscloth' element={<Mensproduct/>}></Route>
      <Route path='/womenscloth' element={<Womensproducts/>}></Route> */}
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signin" element={<Signup />}></Route>
          <Route path="/cart" element={<AllCart carting={carting} />}></Route>
          <Route path="/:category" element={<Categories carting={carting} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
