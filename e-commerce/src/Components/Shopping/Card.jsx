import { cartContext } from "../../Context/cartContext";
import { useContext } from "react";

function Card({ data }) {

    const { image, Name, description, price } = data;

    const {shopping: { cart } , dispatch } = useContext(cartContext);

    function addToCart() {
        if(cart.includes(data))
            return;

        dispatch({
            type: "add",
            product: data
        })
    }

    return (
        <div className="mt-11 ">
            <div>
                <img src={image} style={{width :'300px' , height : '300px' , borderRadius:'8px'}}/>
            </div>
            <div>
                <h3 className="font-bold text-xl">{Name}</h3>
                {/* <p>{description}</p> */}
                <p>Rs. {price}</p>
                <button onClick={addToCart} className="bg-yellow-500 rounded-md p-1">Add To Card</button>
            </div>
        </div>
    );
}
export default Card;