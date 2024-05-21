import { useContext } from "react";
import { cartContext } from "../../Context/cartContext";
import CartCard from './CartCard'

function Cart(){

    const {shopping:{cart}} = useContext(cartContext);
    const cartCard = cart.map ((item) => {
        return < CartCard key={item.id} item={item} />
    } )

    return(
         <section className="grid grid-cols-3 p-2 m-0 gap-4 w-full ">
            {cartCard}
         </section>
    )
}
export default Cart;