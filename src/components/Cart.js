import React from 'react'
import './Cart.css'
import { useState } from 'react'

import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";

const Cart = ({products, setProducts, setQuantity ,quantity}) => {

  const [total,setTotal] = useState(0)


  // function for increase button

  function Increase(id){
    let tempProduct = products;
    tempProduct.map((ele)=>{
      if(ele.id ===id){
        ele.quantity += 1;
        setTotal(total+(ele.price));
        setQuantity(quantity+1);
      }
      return(ele);
    });
    // console.log("increse ",tempProduct);
    setProducts([...tempProduct])

  }

  // function for decreas 
  function Decrease(id){
    let tempProducts = [...products];
    tempProducts.map((ele)=>{
      if(ele.id ===id && ele.quantity>0){
        ele.quantity -= 1;
        setTotal(total-(ele.price))
        setQuantity(quantity-1);
      }
      return(ele);
    });
    setProducts(tempProducts);
  }

  // function for remove the product 
  function RemoveProduct(id){
    let  tempProducts = [...products];
    let arr = tempProducts.filter((ele)=>{
      if(ele.id === id){
        setTotal(total-ele.quantity*ele.price)
      }
      return ele.id !== id;
    })
    setProducts(arr);
  }

  return (
    <div>
      <h1>YOUR BAG</h1>
      <div className="cont">
        {products.length<=0 && <p>Cart is empty</p>}
        {products.map((ele)=>{
          return(
            <div className="single_items" key={products.id}>
              <div className="imgs_sec">
                <div className="phone_img">
                  <img src={ele.imges} alt="" />
                </div>
                <div className="info">
                  <h3>{ele.phone_name}</h3>
                  <span>${ele.price}</span>
                  <button onClick={()=>{
                    RemoveProduct(ele.id);
                  }}>{ele.opt}</button>
                </div>
              </div>
              <div className="quant">
                <button onClick={()=>{
                  Increase(ele.id)
                }}><TiArrowSortedUp /></button>
                <span className="number_item">{ele.quantity}</span>
                <button onClick={()=>{
                  Decrease(ele.id)
                }}><TiArrowSortedDown /></button>
              </div>
            </div>
          )
        })}
      </div>
      {/* total section  */}
      <div>
        <div className='total_sec'>
          <span>Total : </span>
          <span>${total}</span>
        </div>
        
        <div className="clr_cart">
          <button onClick={() =>{
            setProducts([])
            setTotal(0)
          }}>clear cart</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
