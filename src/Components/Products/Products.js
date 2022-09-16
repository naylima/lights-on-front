import { useNavigate } from "react-router-dom";
import { ProductCard } from '../../Styles/HomeStyle';
import { BsPlusCircle } from 'react-icons/bs';

export default function Products ({product, id}) {

    const navigate = useNavigate();

    return (

        <ProductCard key={id}>
            <img 
                src={product.url} 
                onClick={() => {
                    navigate(`/${product._id}`,
                        {state: {
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
                <BsPlusCircle className="plus" />
            </div>
        </ProductCard>
    )
}