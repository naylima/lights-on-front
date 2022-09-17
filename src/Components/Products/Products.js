import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductCard } from '../../Styles/HomeStyle';
import { BsPlusCircle } from 'react-icons/bs';
import { addToCart, getCartProducts } from '../../Common/Service/Service';
import CartContext from "../../Contexts/CartContext";

export default function Products ({product, id}) {

    const navigate = useNavigate();
    const { setCart } = useContext(CartContext);

    return (

        <ProductCard key={id}>
            <img 
                src={product.url} 
                onClick={() => {
                    navigate(`/${product._id}`,
                        {state: {
                            product: product,
                            url: product.url,
                            title: product.title,
                            price: product.price,
                            description: product.description
                        }}
                    )
                }}
            />
            <p
                onClick={() => {
                    navigate(`/${product._id}`,
                        {state: {
                            product: product,
                            url: product.url,
                            title: product.title,
                            price: product.price,
                            description: product.description
                        }}
                    )
                }}
            >
                {product.title}
            </p>
            <div>
                <span>{product.price}</span>
                <BsPlusCircle 
                    className="plus" 
                    onClick={async ()=>{
                        await addToCart(product);
                        const res = await getCartProducts();
                        setCart(res.data)
                    }}
                />
            </div>
        </ProductCard>
    )
}
