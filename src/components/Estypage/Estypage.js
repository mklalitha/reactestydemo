import React from "react";
import "./Estypage.css";
import { Link } from "react-router-dom";
function EstyPage({displayItems,single}){
    return(
        <>
        <div className="estybannar">
        <h1 className="estybannarheading">The Best Mother’s Day Gifts</h1>

         <div className="estybannarimage">
         {displayItems.map((displayItem)=>(
                     <div className="card">
                     <div>
                      <img className="display-image" src={displayItem.image} alt={displayItem.image}/> 
                     </div>
                    <Link to={"/Home/displayItems/"+displayItem.id}><div  className="display-title" key={displayItem.id}>{displayItem.title}</div>
                    </Link> 
                     </div>
                ))}
    
          </div>
        </div>
        <div className="next"></div>
    <div className="dealbannerpart">
        <span className="dealbannerparttitle">
        <h2 className="dealbannerh2"> Deals of the day </h2>
        <Link to="/Home" className="dealbannerlink" > Shop all deals<i class="fa-solid fa-arrow-right"></i></Link>
    </span>
    <ul className="dealbannerimages">
 
   <div  className="dealbannerimage">
 <img alt="Women's Ethnic Clothing" height="182" width="182" style={{borderRadius:"20px"}}src="https://i.etsystatic.com/22368382/r/il/006d21/4245808662/il_300x300.4245808662_a3x4.jpg"/>
   <p className="dealbannertext1"> Up to 40% off on</p>
   <p className="dealbannertext2" title="Women's Ethnic Clothing"> Women's Ethnic Clothing </p>
</div>


   <div  className="dealbannerimage">
   <img    alt="Women's Western Clothing"   height="182" width="182" style={{borderRadius:"20px"}} src="https://i.etsystatic.com/32501528/r/il/23a5b4/3700725057/il_340x340.3700725057_szgj.jpg"/>
 
   <p className="dealbannertext1"> Up to 40% off on</p>
   <p className="dealbannertext2" title="Women's Ethnic Clothing"> Women's Western Clothing </p>
   </div>   



   <div  className="dealbannerimage">
   <img   alt="Men's Clothing"   height="182" width="182" style={{borderRadius:"20px"}}  src="https://i.etsystatic.com/25566015/c/2003/2003/0/274/il/5b71e2/3196479462/il_300x300.3196479462_20xh.jpg"/>
  
   <p className="dealbannertext1"> Up to 40% off on</p>
   <p className="dealbannertext2" title="Men's Clothing">   Men's Clothing </p>
   </div> 
   
 
   <div  className="dealbannerimage">
   <img  alt=" Fashion Jewellery"   height="182" width="182"style={{borderRadius:"20px"}}   src="https://i.etsystatic.com/12917913/r/il/7ef5de/4396673299/il_300x300.4396673299_bkgg.jpg"/>

   <p className="dealbannertext1"> Up to 40% off on</p>
   <p className="dealbannertext2" title="Fashion Jewellery">   Fashion Jewellery </p>
   </div>       
  

   <div  className="dealbannerimage">
   <img    alt="Women's Shoes"  height="182" width="182" style={{borderRadius:"20px"}}  src="https://i.etsystatic.com/24480679/r/il/d42481/4357242172/il_300x300.4357242172_hmhi.jpg"/>
  
   <p className="dealbannertext1"> Up to 40% off on</p>
   <p className="dealbannertext2" title="Women's Shoes">    Women's Shoes </p>
   </div>

 <div  className="dealbannerimage">
   <img    alt="Wedding Clothing"   height="182" width="182" style={{borderRadius:"20px"}}  src="https://i.etsystatic.com/27315676/c/1350/1350/0/178/il/e413a7/4237990044/il_300x300.4237990044_svpn.jpg"/>

   <p className="dealbannertext1"> Up to 40% off on</p>
   <p className="dealbannertext2" title="Wedding Clothing">   Wedding Clothing </p>
   </div>       
    </ul>
     </div>  
     <div>RECENT SEARCH</div>
    

        </>
    )
}
export default EstyPage;