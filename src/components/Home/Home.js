import React from "react";
import "./Home.css";
function Home({productItems}){
    return(
        <>
  <div className="mainbanner">
    <div className="textbanner">
    <h1 className="mainbannertitle1">Offers you can’t miss</h1>
    <h3 className="mainbannertitle2">Explore great offers on well-crafted treasures from Indian sellers. Up to 40% Off</h3>
    <h3 class="mainbannertitle3">Participating shops only. Sales terms may vary; subject to availability and change by sellers. See individual listings for details.</h3>
    </div>
   <div className="imagebanner">
   
                
                {productItems.map((productItem)=>(
                     <div className="card">
                     <div>
                         <img className="product-image" src={productItem.image} alt={productItem.image}/>
                     </div>
                     <div className="product-title" key={productItem.id}>{productItem.title}<i class="fa-solid fa-arrow-right"></i></div>
                    
                     
                 </div>
                ))}
               
            </div>
            </div>
            <div className="next"></div>
            </>
            
        )
    }

export default Home;