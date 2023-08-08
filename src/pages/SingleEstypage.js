import React  from "react";
import { useParams } from "react-router";

  function SingleEstypage({diplayItems}){
    const param = useParams()
    const {id} = param
  const item = diplayItems.find((p)=>p.id===param.id)
  console.log(item)
    return(
        <>
        SingleEstypage

      
       
                   
                     <div>
                       <img className="display-image" src={item.image} alt="pic" height="500" width="500" style={{paddingBottom:"200px" ,zIndex:99999}}/>  
                    
                    <div className="display-title" key={item.id}>{item.title} </div>
                    </div>
               
                
        </>
    )
}
export default  SingleEstypage;
