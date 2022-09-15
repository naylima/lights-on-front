import styled from "styled-components"
import CartProductCard from "./CartProductCard";
import { getCartProducts } from "../../Common/Service/Service";

export default function Cart({disable, setDisable}) {

    const mockData = [{
        url: 'https://i.pinimg.com/564x/d6/e5/a9/d6e5a976e7d44a9edd799c64cfa1e340.jpg',
        title: 'Blue Pendant Light',
        price: '$120',
        description: 'Cluster is a fully customizable dynamic of our Benedict™ series Pendants.'
    },{
        url: 'https://i.pinimg.com/564x/6b/65/ef/6b65ef68901c483464e3b7e9f79fe17f.jpg',
        title: 'Beam Stick Metal',
        price: '$230',
        description: 'Beam Stick is a series of cylindrical-shaped LED suspensions. The light beam, available with different wattages, is suitable to illuminate a surface with punctual precision.'
    },
    {
        url: 'https://i.pinimg.com/564x/08/60/25/08602558eccff33043ff60bccfd54ab7.jpg',
        title: 'Cool concrete',
        price: '$190',
        description: 'Award winning contemporary concrete planters and sculpture by Adam Christopher'
    },
    {
        url: 'https://i.pinimg.com/564x/53/e8/25/53e82516487594451958a248bb4d961e.jpg',
        title: 'Laurent collection',
        price: '$250',
        description: 'The Laurent Collection distills the milk globe to its essential relationship between circle and sphere. A series of thin forms compliment the Laurent globes—forms that carve through space, moving between line, surface, and volume. These forms combine in endless patterns, making it possible for an installation of Laurent lamps to inhabit any space with subtlety and quiet strength.'
    },
    {
        url: 'https://i.pinimg.com/564x/2b/01/42/2b0142a72fb6633d96cf8102405ca105.jpg',
        title: 'Mila Sconce',
        price: '$180',
        description: 'The new Mila Sconce in brushed brass by Matthew McCormick Studio.'
    },
    {
        url: 'https://i.pinimg.com/564x/2c/85/15/2c85156bd0c8416907f6ba2124b74b67.jpg',
        title: 'Vibia | Duo Ceiling Lamp',
        price: '$360',
        description: 'Duo is a ceiling lamp which combines the natural warm appearance of wood with the technical refinement of the metal wrap.'  
    }]

    let totalSum = 0

    mockData.map(item=>totalSum+=Number(item.price.replace("$", "")))

    return(
        <Wrapper isDisabled={disable}>
            <CartDisable isDisabled={disable} onClick={()=>{setDisable(false);console.log(disable)}}>

            </CartDisable>
            <CartPage isDisabled={disable}>
                <h1>My products</h1>
                
                <CartProductsContainer>
                    {mockData.map((item, id)=><CartProductCard key={id} image={item.url} name={item.title} price={item.price}/>)}
                </CartProductsContainer>
                <CheckOut>
                <TotalSum><h3>TOTAL</h3><h2>${totalSum}</h2></TotalSum>
                <LButton>
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
    background-color: #e09145;
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
`

const TotalSum = styled.div`
    background-color: #292C35;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 5px 5px 0 0;
    border: 1px solid #e09145;
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