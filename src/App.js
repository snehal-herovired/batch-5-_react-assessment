import React,{useState} from "react";
import "./style.css";
import product from "./data.js"

export default function App() {
  let [cart,setCart] = useState([])

  function addtoCart(product){
   // now using Find method to check whether the product exit in cart or not.
   const productinCart = cart.find((ele) => ele.id === product.id);
   if (productinCart) {
     // if product exists in cart we map the product and set porduct in cart quatity to increment and otherwise just add new item.
     setCart(cart.map((ele)=>ele.id===product.id ? {...productinCart,quantity:productinCart.quantity+1}:ele))
   }
   else {
     setCart([...cart,{...product,quantity:1}])
   }
  }
  

  function increment(item){
    const productinCart = cart.find((ele)=>ele.id===item.id);
    if(productinCart){
      // if product exists in cart we map the product and set porduct in cart //quatity to increment and otherwise just add new item.
      setCart(cart.map((ele)=>ele.id===item.id ? {...productinCart,quantity:productinCart.quantity+1}:ele))
    }

  }

  function decrement(item){
    const productinCart = cart.find((ele)=>ele.id===item.id);
    if(productinCart){
     if(productinCart.quantity>1){
      setCart(cart.map((ele)=>ele.id===item.id ? {...productinCart,quantity:productinCart.quantity-1}:ele))
     }
    }
  }
  return (
    <div>
      {
        product.map((item)=>{
          return(<>
          
          <div>{item.name} <button onClick={()=>addtoCart(item)}>add to cart</button></div>
          
          
          
          
          </>)
        })
      }
       {
         cart.length ?
         <>
         <span>cart:{cart.length} </span> <br/>
          {
            cart.map((item)=>{
              return(
                <>
                <span>{item.name}</span>     <span>quantity :{item.quantity}</span>
                <div>
                  <button onClick={()=>increment(item)}>Add</button>
                  <button onClick={()=>decrement(item)}>remove</button>
                </div>

                </>
              )
            })
          }
         
         
         </>

         
         
         
         
         : <span>no product in cart</span>
       }
    </div>
  );
}
