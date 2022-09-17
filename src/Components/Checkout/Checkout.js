import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Header } from "../../Styles/HomeStyle";
import { useContext } from "react";
import CartContext from "../../Contexts/CartContext";
import { checkOutCart } from "../../Common/Service/Service";
import ItemCheckout from "./ItemCheckout";

export default function Checkout() {

    const {cart} = useContext(CartContext)
    const navigate = useNavigate()

    let totalSum = 0

    cart.map(item=>totalSum+=Number(item.price.replace("$", "")))

    return (
        <Wrapper>
            <Header>
                <h1>LightsON</h1>
            </Header>
            <CheckoutList>
                {cart.map((item,id)=><ItemCheckout key={id} image={item.url} title={item.title} price={item.price}/>)}
            </CheckoutList>
            <TotalSum><h3>TOTAL</h3><h2>${totalSum}</h2></TotalSum>
            <ButtonsWrapper>
                <CancelButton>
                    <div onClick={()=> navigate('/home')}>Cancel</div>
                </CancelButton>
                <ConfirmButton>
                    <div onClick={async()=> {await checkOutCart(); navigate('/success')}}>Confirm and checkout products</div>
                </ConfirmButton>
            </ButtonsWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CheckoutList = styled.div`
    margin-top: 100px;
    height: 64vh;
    overflow: scroll;
`

const ButtonsWrapper = styled.div`
    display: flex;
    width: 85vw;
    justify-content: space-between;
`

const ConfirmButton = styled.button`
    border: none;
    width: 50vw;
    height: 9vh;
    background-color: #e09145;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 5px;
    margin-top: 2vh;
    cursor: pointer;
div {
    font-family: 'Hind', sans-serif;
    color: white;
    font-size: 19px;
    font-weight: bold;
    width: 45vw;
    height: 8vh;
}
    
`

const CancelButton = styled.button`
    border: 1.8px solid #fcd9b8;
    width: 30vw;
    height: 9vh;
    background-color: rgba(0,0,0,0);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 5px;
    margin-top: 2vh;
    cursor: pointer;
div {
    font-family: 'Hind', sans-serif;
    color: #fcd9b8;
    font-size: 20px;
    font-weight: 500;
}
    
`

const TotalSum = styled.div`
    margin-top: 2vh; 
    background-color: #292C35;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 5px ;
    border: 1px solid #e09145;
    display: flex;
    width: 85vw;
    height: 7vh;
    align-items: center;
    justify-content: space-between;
    padding: 1vw;
h3{
    color: #fcd9b8;
    font-size: 19px;
    margin-left: 3vw;
    font-weight: bold;
}
h2{
    background-color: #17181D;
    margin-right: 3vw;
    font-size: 20px;
    color: #e09145;
    font-weight: bold;
    border-radius: 5px;
    border: 1px solid #e09145;
    padding: 1vw;
    padding-bottom: 0.5vw;
}
`