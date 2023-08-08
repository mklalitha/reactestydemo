import React from "react";
import "./Party.css";
import Rating from "../Rating/Rating";
function Party({partyItems,handleAddProduct}){
    return(
        <>
        <div className="partybanner">
      <div className="partybannertext">  
    
 <h1 className="partybannerh1"> Wedding & Party</h1>

 <div className="partybannerlist">
            <div>From thoughtful invitations to unique decorations – find everything you need for an unforgettable occasion</div>
    </div>
 <div className="partybannerAll">All
<svg xmlns="http://www.w3.org/2000/svg"   height="18" width="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M10,17a1,1,0,0,1-.707-1.707L12.586,12,9.293,8.707a1,1,0,0,1,1.414-1.414L15.414,12l-4.707,4.707A1,1,0,0,1,10,17Z"></path></svg>
Wedding & Party</div>
<span className="partybannerlittle">(8,223,549 results,with Ads<svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12,22A10,10,0,1,1,22,12,10.012,10.012,0,0,1,12,22ZM12,4a8,8,0,1,0,8,8A8.009,8.009,0,0,0,12,4Z"></path><circle cx="12" cy="16.5" r="1.5"></circle><path d="M13,14H11a3.043,3.043,0,0,1,1.7-2.379C13.5,11.055,14,10.674,14,10a2,2,0,1,0-4,0H8a4,4,0,1,1,8,0,4,4,0,0,1-2.152,3.259A2.751,2.751,0,0,0,13,14Z"></path></svg>)</span>
</div>
 <div className="partybannerimages">
 
   <div  className="partybannerimage">
 <img  alt="All Wedding" height="106" width="106" style={{borderRadius:"50%"}} src="./Images/topparty1.avif"/> 
   <p className="partybannertext1"> All Wedding</p>
   </div>
   <div  className="partybannerimage">
 <img  alt="Wedding Gifts" height="106" width="106" style={{borderRadius:"50%"}}  src="./Images/topparty2.avif"/>  
   <p className="partybannertext1">    Wedding Gifts</p>
   </div>
   <div  className="partybannerimage">
 <img  alt="  Wedding Decoration" height="106" width="106" style={{borderRadius:"50%"}}  src="./Images/topparty3.avif"/> 
   <p className="partybannertext11">  Wedding Decoration</p>
   </div>
   <div  className="partybannerimage">
 <img  alt="  Bags & Purses" height="106" width="106" style={{borderRadius:"50%"}} src="./Images/topparty4.avif"/> 
   <p className="partybannertext1"> Party Supplies</p>
   </div>


   <div  className="partybannerimage">
 <img  alt="Wedding Accessories" height="106" width="106" style={{borderRadius:"50%"}} src="./Images/topparty5.avif"/>  
   <p className="partybannertext1">  Wedding Accessories</p>
   </div>
   <div  className="partybannerimage">
 <img  alt=" Wedding Clothing" height="106" width="106" style={{borderRadius:"50%"}} src="./Images/topparty6.avif"/> 
   <p className="partybannertext1">    Wedding Clothing</p>
   </div>
   <div  className="partybannerimage">
 <img  alt="   Invitations & Paper" height="106" width="106" style={{borderRadius:"50%"}} src="./Images/topparty7.avif"/> 
   <p className="partybannertext11"> Invitations & Paper</p>
   </div>
   <div  className="partybannerimage">
 <img  alt="  Wedding Jewellery" height="106" width="106" style={{borderRadius:"50%"}} src="./Images/topparty8.avif"/> 
   <p className="partybannertext1"> Wedding Jewellery</p>
   </div>
   </div>
   </div> 
   {/* clothpart2 */}
<div  className="partypart2">
<div  className="partypart2text">
<h2 className="partypart2h2">Find something you love</h2>
<div className="partypart2input">
<button className="partypart2btn1" style={{borderRadius:"15px"}}><svg  xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5,7.6h5.7c0.4,1.2,1.5,2,2.8,2s2.4-0.8,2.8-2H19c0.6,0,1-0.4,1-1s-0.4-1-1-1h-2.7c-0.4-1.2-1.5-2-2.8-2s-2.4,0.8-2.8,2H5 c-0.6,0-1,0.4-1,1S4.4,7.6,5,7.6z M13.5,5.6c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S12.9,5.6,13.5,5.6z"></path><path d="M19,11.1h-7.7c-0.4-1.2-1.5-2-2.8-2s-2.4,0.8-2.8,2H5c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h0.7c0.4,1.2,1.5,2,2.8,2 s2.4-0.8,2.8-2H19c0.6,0,1-0.4,1-1C20,11.5,19.6,11.1,19,11.1z M8.5,13.1c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1s1,0.4,1,1 C9.5,12.7,9.1,13.1,8.5,13.1z"></path><path d="M19,16.6h-1.2c-0.4-1.2-1.5-2-2.8-2s-2.4,0.8-2.8,2H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h7.2c0.4,1.2,1.5,2,2.8,2s2.4-0.8,2.8-2 H19c0.6,0,1-0.4,1-1S19.6,16.6,19,16.6z M15,18.6c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S15.6,18.6,15,18.6z"></path></svg><span className="jewelpart2btn1text">All Filters</span></button>
<button className="partypart2btn2" style={{borderRadius:"15px"}}> <span className="jewelpart2btn2text1">
Sort by :<span className="partypart2btn1text2">Relevancy <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="16.5 10 12 16 7.5 10 16.5 10"></polygon></svg></span></span></button>
</div>
 <div className="partypart2images">
   
                
                {partyItems.map((partyItem)=>(
                     <div className="partypart2image">
                     <div>
                         <img className="party-image" height="233" width="293" src={partyItem.image} alt="partyItem.name"/>
                     </div>
                     <div className="party-title" key={partyItem.id}>{partyItem.name}</div>
                     <div className="party-price" key={partyItem.id}>${partyItem.price}</div>
                     <div> <Rating  value={partyItem.star}/></div>
                     <button  style={{borderRadius:"5px",padding:"3px"}}    onClick={() =>handleAddProduct(partyItem)} className="party-image-btn">add to cart</button>
                    
                     
                 </div>
                ))}
               
            </div>
</div>  
</div>
        </>
    )
}
export default Party;