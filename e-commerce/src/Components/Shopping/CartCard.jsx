function  CartCard({item}){
    const {image,product,price} =item;
    return(
        <div>
        <div>
            <img src={image} />
        </div>
        <div>
            <p>{product}</p>
            <p>Rs.{price}</p>
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
export default CartCard