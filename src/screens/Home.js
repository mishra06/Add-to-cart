import React from 'react'
import Navbar from '../components/Navbar'
import Cart from '../components/Cart'
import { useState } from 'react'



const Home = () => {

  const [products, setProducts]=useState([
    {
      imges : "https://www.course-api.com/images/cart/phone-1.png",
      phone_name : "Samsung Galaxy S8",
      price : 20000,
      opt : "remove",
      id : 1,
      quantity :0
    },
    {
      imges : "https://www.course-api.com/images/cart/phone-2.png",
      phone_name : "Samsung Galaxy S8",
      price : 39999,
      opt : "remove",
      id: 2,
      quantity:0
    },
    {
      imges : "https://www.course-api.com/images/cart/phone-3.png",
      phone_name : "Samsung Galaxy S8",
      price : 40000,
      opt : "remove",
      id : 3,
      quantity: 0
    },
    {
      imges : "https://www.course-api.com/images/cart/phone-4.png",
      phone_name : "Samsung Galaxy S8",
      price : 50000,
      opt : "remove",
      id: 4,
      quantity:0
    } 
]);

const [quantity,setQuantity]=useState(0);

  return (
    <div>
      <Navbar quantity={quantity}/>
     <Cart products={products} setProducts={setProducts} setQuantity={setQuantity} quantity={quantity}/>
    </div>
  )
}

export default Home
