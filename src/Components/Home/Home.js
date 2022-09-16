import { useEffect, useState } from 'react';
import { getProducts } from '../../Common/Service/Service';
import { Header, Container, Footer } from '../../Styles/HomeStyle';
import { AiOutlineHome } from 'react-icons/ai';
<<<<<<< HEAD
import { BsSearch } from 'react-icons/bs';
import { BsBag } from 'react-icons/bs';
import Products from './Products';
import Cart from '../Cart/Cart';

=======
import { BsSearch, BsBag } from 'react-icons/bs';
import Products from '../Products/Products.js';
>>>>>>> cf5bd8a (página do produto)

export default function Home () {

    const [products, setProducts] = useState([]);
    const [showCart, setShowCart] = useState(false);

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

            <Footer>
                <AiOutlineHome className="icon"/>
                <BsSearch className="icon" />
                <BsBag className="icon" onClick={()=>{setShowCart(true);console.log(showCart)}}/>
            </Footer>

            <Cart disable={showCart} setDisable={setShowCart}/>

        </>
    )
}

