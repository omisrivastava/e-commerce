import React, {createContext} from "react"
import all_product from "../Components/Assets/all_product" 
export const Shopcontext=createContext(null);
const Shopcontextprovider=(props)=>{
const contextValue={all_product};
const getdefaultCart=()=>{
    // let cart={};
    //  for(let index=0;index<all_product.length;index++){
    //     cart{index}    
    //  }
}
return (
    <Shopcontext.Provider value={contextValue}>
        {props.children}
    </Shopcontext.Provider>
)
}  
export default Shopcontextprovider;
