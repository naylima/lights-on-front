import { useEffect, useState } from 'react';
import { getProducts } from '../../Common/Service/Service';
import { Header, Container } from '../../Styles/HomeStyle';
import Products from '../Products/Products.js';
import Footer from '../Footer/Footer.js';

export default function Home () {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const promise = getProducts();
        promise.then((res => setProducts(res.data)))
    }, []);

    return (
        <>
            <Header>
                <h1>LightsON</h1>
            </Header>

            <Container>
                {products.map((product, id) => 
                    <Products product={product} id={id}/>
                )}
            </Container>
            
            <Footer/>

        </>
    )
}

