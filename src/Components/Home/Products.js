import { useContext } from "react";
import CartContext from "../../Contexts/CartContext";
import { getCartProducts } from "../../Common/Service/Service";
import { ProductCard } from '../../Styles/HomeStyle';
import { BsPlusCircle } from 'react-icons/bs';
import { addToCart } from '../../Common/Service/Service';

export default function Products ({products}) {

    const { setCart } = useContext(CartContext)

    return (
        products.map((product, index) => (

            <ProductCard key={index}>
                <img src={product.url}/>
                <p>{product.title}</p>
                <div>
                    <span>{product.price}</span>
                    <BsPlusCircle className="plus" onClick={()=>{
                        const promise = addToCart(product);
                        promise.then(getCartProducts().then(res=>setCart(res.data)))
                        }}/>
                </div>
            </ProductCard>

        ))
    )
}