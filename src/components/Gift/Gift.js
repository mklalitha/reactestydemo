import React from "react";
import "./Gift.css"
import Rating from "../Rating/Rating";
function Gifts({giftItems,handleAddProduct}) {
    return (
        <>
            <div className="giftbannerimages">
                <div className="giftbannerimage1">
                    <img alt="Women's" height="270" width="310" src="./Images/topgift1.avif" />
                     <button className="giftbannertext1">$ 8373</button>
                </div>
                <div className="giftbannerimage2">
                    <img alt=" Men's" height="270" width="320" src="./Images/topgift2.avif" />
                    <button className="giftbannertext2">$ 7104</button>
                </div>
                <div className="giftbannerimage3">
                    <img alt="  Kids' & Baby" height="270" width="320" src="./Images/topgift3.avif" />
                    <button className="giftbannertext3">$ 3422</button>
                </div>
                <div className="giftbannerimage4">
                    <img alt="  Kids' & Baby" height="270" width="310" src="./Images/topgift4.avif" />
                     <button className="giftbannertext4">$ 4060</button>
                </div>
            </div>
            <div className="smallbanner">
                <p className="smallbanner-p">Editor's Pick</p>
                <h1 className="smallbanner-h1">The Etsy Gift Guide</h1>
                <h2 className="smallbanner-h2">We searched far and wide for the greatest things to give</h2>
                <p className="smallbanner-headind">Top-rated Gifts</p>
                </div>

               
              
                <div className="giftpart2images">
   
              
   {giftItems.map((giftItem)=>(
        <div className="giftpart2image">
        <div>
            <img className="gift-image" height="233" width="293" src={giftItem.image} alt="giftItem.name"/>
        </div>
        <div className="gift-title" key={giftItem.id}>{giftItem.name}</div>
        <div className="gift-price" key={giftItem.id}>${giftItem.price}</div>
        <div> <Rating value={giftItem.star}/></div>
        <button  style={{borderRadius:"5px",padding:"3px"}} onClick={() =>handleAddProduct(giftItem)} className="living-image-btn">Add to cart</button>
       
        
    </div>
   ))}
  
</div>



           
        </>
    )
}
export default Gifts;