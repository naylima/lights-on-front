import { useNavigate } from "react-router-dom";
import styled from "styled-components";


export default function AddedToCart({disable, setDisable, url, title, price}) {

    const navigate = useNavigate();

    return (
        <Wrapper isDisabled={disable}>
            <AlertDisable 
                isDisabled={disable} 
                onClick={()=>{setDisable(false)}} 
            />
            <AlertBox isDisabled={disable}>
                <h1>THE PRODUCT HAS BEEN ADDED TO THE SHOPPING CART</h1>
                <div>
                    <img src={url}/>
                    <div>
                        <p>{title}</p>
                        <p>{price}</p>
                    </div>
                </div>
                <button onClick={() => navigate("/checkout")}>GO TO CHECKOUT</button>
                <button onClick={() => navigate("/home")}>CONTINUE SHOPPING</button>
            </AlertBox>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: fixed;
    display: flex;
    z-index: 2;
    top: 0;
`
const AlertDisable = styled.div`
    height: 100vh;
    width: 100vw;
    display: ${props => props.isDisabled ? 'flex' : 'none'};
    transition: all 0.4s;
    position: absolute;
    background-color: ${props => props.isDisabled ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.0)'};
`
const AlertBox = styled.div`
    width: 100vw;
    height: 50vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    transition: all 0.4s;
    background-color: #292c35;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    z-index: 3;
    
    position: fixed;
    bottom: ${props => props.isDisabled ? '0' : '-100vh'};

    h1 {
        font-size: 23px;
        font-weight: 500;
        color: #E09145;
        text-align: center;
    }

    >div {
        width: 100%;
        display: flex;
        padding-top: 5px;
        padding-bottom: 10px;
    }

    img{
        width: 35vw;
        height: 20vh;
        padding-right: 10px;
        object-fit: cover;
    }

    p{
        font-size: 20px;
        font-weight: 400;
        padding-bottom: 10px;
        color:  #fcd9b8;
    }

    button {
        width: 90vw;
        height: 5vh;
        border: none;
        border-radius: 5px;
        color: #fcd9b8;
        background-color:#E09145;
        cursor: pointer;

        font-size: 22px;
        font-weight: 400;

        :active {
            transform: scale(0.98);
            box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
        }
    }
    
`