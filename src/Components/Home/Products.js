import { ProductCard } from '../../Styles/HomeStyle';
import { BsPlusCircle } from 'react-icons/bs';

export default function Products ({products}) {

    return (
        products.map((product, index) => (

            <ProductCard key={index}>
                <img src={product.url}/>
                <p>{product.title}</p>
                <div>
                    <span>{product.price}</span>
                    <BsPlusCircle className="plus"/>
                </div>
            </ProductCard>

        ))
    )
}