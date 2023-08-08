import React from "react";
import './Cart.css';
function Cart({cartItems,
    handleAddProduct,
    handleRemoveProduct,
    handleClearance,
    handleDelete})
    {

    const totalprice = cartItems.reduce((price,item)=>price+item.quantity*item.price,0)
    return(
    <div className="cart-items">
        <div className="cart-items-text">
        <h3 className="cart-items-header">Cart Items</h3>
        <h3 className="cart-items-header">Keep Shoping</h3>
        </div>
       
       {/* <div className="clear-cart">
        {cartItems.length >=1 &&(<button className="clear-cart-btn" onClick = {() =>handleClearance}>clearcart</button>)}
       </div> */}



        {cartItems.length === 0 && (<div className="cart-items-empty">no items are added</div>
        )}
   <div>
    <div className="cartitembanner">
   {cartItems.map((cartItem)=>(
    
    <div key={cartItem.id} className="cart-items-list">
        <img className="class-items-image"
        src={cartItem.image} 
        alt={cartItem.image}/>
    <div>
       <h3 className="cart-items-name">{cartItem.name}</h3>
    </div>
    <div className="cart-items-function">
    <button className="cart-items-add" onClick={()=>handleAddProduct(cartItem)}>+</button>
    <button className="cart-items-remove"onClick={()=>handleRemoveProduct(cartItem)}>-</button>
    </div>
     <div className="cart-items-price">{cartItem.quantity}*{cartItem.price}</div> 
    <div> <button className="delete" onClick={() => handleDelete(cartItem.id)}><i class="fa-solid fa-trash"></i></button> </div>
</div>

    ))}  
    <div className="cart-items-total-price-name">Total Price
            <div className="cart-items-total-price"
            >${totalprice}</div>  

          </div>
          </div>
          </div>
          </div>
         )
}

export default Cart;