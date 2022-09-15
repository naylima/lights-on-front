import styled from "styled-components"

export default function CartProductCard({image,name,price}) {

    return(
        <CartProductWrapper>
            <img src={image} alt={name}/>
            <ProductInfo>
                <h4>{name}</h4>
                <h5>{price}</h5>
            </ProductInfo>
        </CartProductWrapper>
    )
}

const CartProductWrapper = styled.div`
    background-color: #17181D;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    display: flex;
    align-items: center;
    width: 60vw;
    margin-top: 1vh;
img{
    height: 14vh;
    margin: 1vh 0 1vh 1vh;
    width: 30%;
    object-fit: cover;
}
`

const ProductInfo = styled.div`
    margin-left: 3vw;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
h4{
    color: #fcd9b8;
}
h5{
    margin-top: 2vh;
    color: #e09145;
    font-weight: bold;
    border-radius: 5px;
    border: 1px solid #e09145;
    padding: 1vw;
    padding-bottom: 0.5vw;
}
`