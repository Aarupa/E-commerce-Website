import { useContext } from "react";
import { cartContext } from "../../Context/cartContext";

function Header({iscart , setIscart}) {

    const  { shopping: { cart } } = useContext(cartContext);
    return (
        <header className="bg-black text-white h-20 ">
            <nav className="flex justify-between">
                <h2 className="text-xl">Random website</h2>
                <button onClick={()=> setIscart(!iscart)}>Cart({cart.length})</button>
            </nav>
        </header>
    )
}
export default Header;