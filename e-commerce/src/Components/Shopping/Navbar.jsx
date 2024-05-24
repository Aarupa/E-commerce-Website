import { useContext } from "react";
import { cartContext } from "../../Context/cartContext";

// function Header({iscart , setIscart}) {

function Navbar(){

    // const  { shopping: { cart } } = useContext(cartContext);
    return (
        <header className="bg-white h-20 ">
            <nav className="flex justify-between">
                <div>
                    <img src={logo} alt="comfy sloth" />
                </div>
                {/* <button onClick={()=> setIscart(!iscart)}>Cart({cart.length})</button> */}
            </nav>
        </header>
    )
}
export default Navbar;