import { useContext } from "react";

//context
import CartContext from "../../Context/CartContext";

const Header =()=>{
    const {counter} = useContext(CartContext);

    return(
        <div className="w-full h-4 flex">
            <div className="w-[40%]">
                <p>Logo</p>
            </div>
            <div className="w-[60%]">
                <p>name {counter}</p>
            </div>
        </div>
    );
}
export default Header;