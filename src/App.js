import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Links/Links';
import Footer from './components/Footer/Footer';
import data from './components/Data/Data';
import dataEsty from './components/Data/EstyData';
import dataJewel from './components/Data/DataJewel';
import dataCloth from './components/Data/DataCloth';
import dataLiving from './components/Data/DataLiving';
import dataParty from './components/Data/DataParty';
import dataToys from './components/Data/DataToys';
import dataArt from './components/Data/DataArt';
import dataCraft from './components/Data/DataCraft';
import dataGift from './components/Data/DataGift';



function App() {
  const {productItems} = data;
  const {displayItems} = dataEsty;
  const {jewelItems} = dataJewel;
  const {clothItems} = dataCloth;
  const {livingItems} = dataLiving;
  const {partyItems} = dataParty;
  const {toysItems} = dataToys;
  const {artsItems} = dataArt;
  const {craftItems} = dataCraft;
  const {giftItems} = dataGift;
  
  const [cartItems,setcartItems] = useState([]);
  //  const [singleproduct,setsingleProduct] =useState([]);


   
  

// delete item
  const handleDelete =(id)=>{
    const del = cartItems.filter((item)=> item.id !== id);
    setcartItems([...del]);
};
// clear all
  const handleClearance = ()=>{
   setcartItems([]);
  }


// add item

  const handleAddProduct = (product)=>{
    const ProductExists = cartItems.find((item)=>item.id===product.id)
    if(ProductExists){
      setcartItems(cartItems.map((item)=>item.id===product.id?
      {...ProductExists,quantity:ProductExists.quantity + 1}:item))
    }
    else{
      setcartItems([...cartItems,{...product,quantity:1}])
    }
  }
// remove item
const handleRemoveProduct = (product)=>{
  const ProductExists = cartItems.find((item)=>item.id===product.id)
  if(ProductExists===1){
    setcartItems(cartItems.filter((item)=>item.id!==product.id));
  
  }
  else{
    setcartItems(cartItems.map((item)=>item.id===product.id?
    {...ProductExists,quantity:ProductExists.quantity - 1}:item))
  }
}

  
  return (
   <div>
    <BrowserRouter>
    <Header    cartItems ={cartItems}/>
    <Main 
     productItems ={productItems}
     displayItems = {displayItems}
     clothItems = {clothItems}
     livingItems = {livingItems}
     partyItems = {partyItems}
     toysItems = {toysItems}
     artsItems = {artsItems}
     craftItems = {craftItems}
     giftItems = {giftItems}


    
     jewelItems ={jewelItems}
     cartItems ={cartItems}
     handleAddProduct={handleAddProduct}
     handleRemoveProduct={ handleRemoveProduct}
     handleClearance={handleClearance}
     handleDelete={handleDelete}

    
     />
    <Footer/>
    </BrowserRouter>
   
     
    </div>
  );
}

export default App;
