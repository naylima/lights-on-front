import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import CartContext from "../../Contexts/CartContext";
import CartProductCard from "./CartProductCard";
import { getCartProducts } from "../../Common/Service/Service";

export default function Cart({disable, setDisable}) {

    const {cart, setCart} = useContext(CartContext)
    const navigate = useNavigate()
    
    useEffect(() => {

        const promise = getCartProducts();
        promise.then((res => setCart(res.data)))
    }, []);

    function goToCheckout(){
        if(cart.length <= 0){
            return alert("You haven't selected any products yet")
        }
        navigate("/checkout");
    }
    
    let totalSum = 0

    cart.map(item=>totalSum+=Number(item.price.replace("$", "")))

    return(
        <Wrapper isDisabled={disable}>
            <CartDisable isDisabled={disable} onClick={()=>{setDisable(false);console.log(disable)}}>

            </CartDisable>
            <CartPage isDisabled={disable}>
                <h1>My products</h1>
                
                <CartProductsContainer>
                    {cart.length > 0 ? cart.map((item, id)=><CartProductCard key={id} _id={item._id} image={item.url} name={item.title} price={item.price}/>) : <h6>You don't have any products selected yet</h6>}
                </CartProductsContainer>
                <CheckOut>
                <TotalSum><h3>TOTAL</h3><h2>${totalSum}</h2></TotalSum>
                <LButton activate={cart.length > 0} onClick={()=> goToCheckout()}>
                    <div>Checkout</div>
                </LButton>
                </CheckOut>
            </CartPage>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: fixed;
    display: flex;
    z-index: 2;
    top: 0;
`

const CartDisable = styled.div`
    display: ${props => props.isDisabled ? 'flex' : 'none'};
    transition: all 0.4s;
    position: absolute;
    height: 100vh;
    width: 100vw;
    background-color: ${props => props.isDisabled ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.0)'}
`

const CartPage = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    z-index: 3;
    height: 100vh;
    width: 70vw;
    right: ${props => props.isDisabled ? '0' : '-70vw'};
    transition: all 0.4s;
    background-color: #17181D;
    border-left: 1px solid #e09145;
h1 {
    color: #fcd9b8;
    font-size: 20px;
    margin-top: 4vh;
}
`

const LButton = styled.button`
    border: none;
    width: 50vw;
    height: 7vh;
    background-color: ${props => props.activate ? "#e09145" : "#b8926e" };
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 5px;
    margin-bottom: 3vh;
    cursor: pointer;
div {
    font-family: 'Hind', sans-serif;
    color: white;
    font-size: 18px;
    font-weight: bold;
} 
`

const CartProductsContainer = styled.div`
    background-color: #292C35;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 74vh;
    width: 64vw;
    border-radius: 3px;
    overflow: scroll;
    padding-bottom: 1vh;
h6 {
    margin: auto auto;
    color: #fcd9b8;
    text-align: center;
    font-size: 20px;
    font-weight: 300;
}
`

const TotalSum = styled.div`
    background-color: #292C35;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 5px 5px 0 0;
    border: 1px solid #e09145;
    border-bottom: none;
    display: flex;
    width: 40vw;
    height: 5.5vh;
    align-items: center;
    justify-content: center;
    padding: 1vw;
h3{
    color: #fcd9b8;
    font-size: 16px;
    margin-right: 3vw;
    font-weight: bold;
}
h2{
    background-color: #17181D;
    font-size: 17px;
    color: #e09145;
    font-weight: bold;
    border-radius: 5px;
    border: 1px solid #e09145;
    padding: 1vw;
    padding-bottom: 0.5vw;
}
`

const CheckOut = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`