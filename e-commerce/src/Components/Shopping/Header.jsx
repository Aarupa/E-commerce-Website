import { useContext } from "react";
import { cartContext } from "../../Context/cartContext";

function Header() {

    const  { shopping: { cart } } = useContext(cartContext);
    return (
        <header className="bg-black text-white">
            <nav className="flex justify-between">
                <h2 className="text-xl">Random website</h2>
                <button>Cart({cart.length})</button>
            </nav>
        </header>
    )
}
export default Header;