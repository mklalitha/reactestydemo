import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "../Home/Home";
import Arts from "../Arts/Arts";
import Cloth from "../Cloth/Cloth";
import Jewellery from "../Jewellery/Jewellery";
import Living from "../Living/Living";
import Party from "../Party/Party";
import Toys from "../Toys/Toys";
import Craft from "../Craft/Craft";
import Gifts from "../Gift/Gift";
import EstyPage from "../Estypage/Estypage";
import SingleEstypage from "../../pages/SingleEstypage";
import Cart from "../Cart/Cart";
import Signin from "../Signin/Signin";

function Main({productItems,
               displayItems, 
               clothItems,
               livingItems,
               partyItems,
               toysItems,
               artsItems,
               craftItems,
               jewelItems,
               giftItems,
               cartItems,
               handleAddProduct,
               handleRemoveProduct,
               handleDelete,handleClearance,single,singleproduct}) {
      

return (
<>
<Routes>
  <Route path="/" exact element={<EstyPage  displayItems = {displayItems} single={single} />}></Route>
  <Route path="/Signin" exact element={<Signin/>}></Route>
  <Route path="/Home" exact element={<Home   productItems={productItems}/>}></Route>
  <Route path="/Art" exact element={<Arts artsItems={artsItems} handleAddProduct={handleAddProduct} />}></Route>
  <Route path="/Clothing" exact element={<Cloth   clothItems = {clothItems} handleAddProduct={handleAddProduct}
/>}></Route>
  <Route path="/Jewellery" exact element={<Jewellery  
   jewelItems ={jewelItems}  handleAddProduct={handleAddProduct} />}></Route>
  <Route path="/Living" exact element={<Living   livingItems = {livingItems} handleAddProduct={handleAddProduct} />}></Route>
  <Route path="/Party" exact element={<Party    partyItems = {partyItems} handleAddProduct={handleAddProduct} />}></Route>
  <Route path="/Toys" exact element={<Toys      toysItems = {toysItems} handleAddProduct={handleAddProduct} />}></Route>
  <Route path="/Craft" exact element={<Craft  craftItems = {craftItems} handleAddProduct={handleAddProduct}/>}></Route>
  <Route path="/Gifts" exact element={<Gifts giftItems = {giftItems} handleAddProduct={handleAddProduct}/>}></Route>
  <Route path="/Cart" exact element={<Cart  
  cartItems={cartItems}
  handleAddProduct={handleAddProduct}
  handleRemoveProduct={ handleRemoveProduct}
  handleClearance ={handleClearance}
  handleDelete={handleDelete}  />}></Route>


  <Route path="/Home/displayItems/:id" exact element={<SingleEstypage  diplayItems={displayItems}/>}></Route>
  

  
 
  
</Routes>
  
</>


)
}
export default Main;