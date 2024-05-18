import { faker } from '@faker-js/faker';
import { createContext, useReducer } from "react";
import { cartReducer } from '../Reducers/cartReducer';


export const cartContext = createContext();

function CartContextProvider({ children }) {

    let products = [];

    for (let i = 0; i < 10; i++) {
        products.push({
            id: faker.database.mongodbObjectId(),
            Name: faker.commerce.productName(),
            price: faker.commerce.price(),
            description: faker.commerce.productDescription(),
            image: faker.image.url()
        });
    }
    const [shopping, dispatch] = useReducer(cartReducer, {
        products,
        cart: []
    });

    return (
        <cartContext.Provider value={{ shopping, dispatch }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContextProvider;