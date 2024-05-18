import { cartContext } from "../../Context/cartContext";
import { useContext } from "react";

function Card({ data }) {

    const { image, Name, description, price } = data;

    const { dispatch } = useContext(cartContext);

    function addToCart() {
        dispatch({
            type: "add",
            product: data
        })
    }

    return (
        <div>
            <div>
                <img src={image} />
            </div>
            <div>
                <h3 className="font-bold text-xl">{Name}</h3>
                <p>{description}</p>
                <p>Rs. {price}</p>
                <button onClick={addToCart} className="bg-yellow-500 rounded-md p-2">Add To Card</button>
            </div>
        </div>
    );
}
export default Card;