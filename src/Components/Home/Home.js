import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../../Common/Service/Service';
import { Header, Container } from '../../Styles/HomeStyle';
import Products from '../Products/Products.js';
import AddedToCart from '../Products/AddedToCart';
import Footer from '../Footer/Footer.js';

export default function Home () {

    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const promise = getProducts();
        promise.then((res => setProducts(res.data)));
        promise.catch(() => {
            alert('Sign in and try again!');
            navigate("/");
        })
    }, []);

    return (
        <>
            <Header>
                <h1>LightsON</h1>
            </Header>

            <Container>
                {products.map((product, id) => 
                    <Products product={product} key={id}/>
                )}
            </Container>
            
            <Footer/>

        </>
    )
}

