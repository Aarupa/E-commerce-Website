import { useContext } from "react";
import { cartContext } from "../../Context/cartContext";

function cart(){

    const {shopping:{cart}} = useContext(cartContext);
    return(
        <div>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <p>Name</p>
                <p>Price</p>
                <select name="quantity" id="quantity">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div>
                <button>Delete</button>
            </div>
        </div>
    )
}
export default Cart;