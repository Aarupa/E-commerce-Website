import Card from './Card'
import { useContext } from 'react';
import { cartContext } from '../../Context/cartContext';

function Products () {

    const { shopping: { products } } = useContext ( cartContext ) ;

    const Cards = products.map ((product) => {
        return <Card key = {product.id} data={product} />
    })

    return (
        <section className=' grid grid-cols-3 m-2 p-2 gap-5 rounded-md'>
            {Cards}
        </section>
    );
}

export default Products;