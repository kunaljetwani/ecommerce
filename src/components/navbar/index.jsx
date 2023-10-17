import React, { useEffect } from 'react'
import { useState } from 'react'
import './navbarstyle.css'
import { Link, json } from 'react-router-dom'
import Womensproducts from '../../differntpages/Women\'sclothing'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />


function Navbar({data}) {

    let [catagories, setcatagories] = useState([])
    let [cartcounter, setcartcounter] = useState(0)

    let list = ["kunal", "kiran", "papa", "mom"]
    useEffect(() => {
        let items = localStorage.getItem("cartitem")
        if (items) {
            items = JSON.parse(items)
            setcartcounter(items.length)
        }
    }, [data])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
            .then(res => res.json())
            .then(json => setcatagories(json))
            .catch((error) => console.log('Error:', error));
           

    }, [])
    //cheaking of data comming
    // console.log("this is cartlength of navbar please cheak ",data)
 
    let catagoriess = ((id) => {
        console.log("this is working", id)
    })
    function handelclick(e) {
        console.log("loginselected")
    }
    return (
        <div >
            {/* <h1>This is navbar</h1> */}
            <div className='right-hand'>
                <h1 className='first-heading'><Link to="/" >  ShopLane </Link></h1>
                <div className='left-hand'>

                    <div className='login-signup'>


                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />

                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg>

                        <select> login & signup


                            <option onSelect={handelclick} value="login">login  sign up</option>



                            <option value=""> <Link to="/Signup">signup</Link></option>

                            <option value="">Favriot</option>


                            <option value="">   <Link to="/cart">cart  </Link></option>

                        </select>
                    </div >
                    <Link className='linking' to="/cart">

                        <svg xmlns="http://www.w3.org/2000/svg" width="30" className='position-relative' height="30" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">

                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />

                        </svg>

                    </Link>
                    <div>


                        <span class="position-absolute top-10 start-100 translate-middle badge rounded-pill bg-danger" style={{ marginLeft: -50 }} >

                            { cartcounter> 0 && 
                            <span>{cartcounter}</span>
                            }
                        </span>


                    </div>
                </div>

            </div>
            <div className='navbar'><ul>
                <li><Link className='link' to="/">All</Link></li>
                {/* <li> <Link className='link' to="/jewlery">Jewelery</Link></li>
                <li> <Link className='link' to="/electronics">Electronics</Link></li>
                <li ><Link className='link' to="/menscloth">Men's clothing</Link></li>
                <li><Link className='link' to="/womenscloth">Women's clothing</Link></li> */}


                {catagories?.map((item) => (
                    <li> <Link className='link' to={`/${item}`}>{item}</Link></li>

                ))

                }

            </ul></div>

        </div>

    )
}
export default Navbar
