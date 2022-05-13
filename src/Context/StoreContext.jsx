import { createContext,useReducer, useState} from "react";

const StoreContext = createContext();

const StoreProvider =({children})=>{
    
    return(
        <StoreContext value={data}>{children}</StoreContext>
    );
}

export {StoreProvider};
export default StoreContext;