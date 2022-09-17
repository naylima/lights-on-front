import styled from "styled-components";
import { BsSearch, BsArrowLeft } from 'react-icons/bs';
import { useState } from "react";
import { searchProducts } from "../../Common/Service/Service";
import { Container } from '../../Styles/HomeStyle';
import Products from '../Products/Products.js';

export default function Search ({ disable, setDisable }) { 

    const [keyword, setKeyword] = useState("");
    const [products, setProducts] = useState([]);
    const [hidden, setHidden] = useState(true)

    function sendForm (e) {
        e.preventDefault();

        const promise = searchProducts(keyword);
        promise.then((res => {
            setProducts(res.data)
            setHidden(true)
        }));
        promise.catch(() => {
            setProducts([])
            setHidden(false)
        });
    }

    return (
        <Wrapper isDisabled={disable}>
            <SearchPage isDisabled={disable}>
                <SearchBar>
                    <BsArrowLeft 
                        className="icon" 
                        onClick={()=> setDisable(false)}
                    />
                    <form onSubmit={sendForm}>
                        <input 
                            type="text" 
                            placeholder="Search"
                            value={keyword}
                            onChange={e => setKeyword(e.target.value)}
                            required
                        >
                        </input>
                        <button type="submit">
                            <BsSearch className="icon"/>
                        </button>                        
                    </form>
                </SearchBar>

                <Results>
                    <NotFound hidden={hidden}>
                        <h1>Ops! No products matched your search. Please, try again!</h1>
                    </NotFound>  
                    <Container>
                        {products.map((product, id) => 
                            <Products product={product} id={id}/>
                        )}
                    </Container>            
                </Results>  

            </SearchPage>

        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: fixed;
    display: flex;
    z-index: 2;
    top: 0;
`

const SearchPage = styled.div`

    width: 100vw;
    min-height: 100vh;    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;   
    transition: all 0.3s;
    z-index: 3;
    
    position: fixed;
    left: ${props => props.isDisabled ? '0' : '-100vw'};
    
    background-color: #17181D;

`
const SearchBar = styled.div`

    width: 100%;
    height: 75px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #E09145;
    background-color: #17181D;

    font-size: 22px;
    font-weight: 400;
    color: #e09145;

    position: fixed;
    top: 0;

    .icon {
        cursor: pointer;
    }

    form {
        width: 85%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    input {
        width: 80%;
        height: 30px;
        padding-left: 10px;
        border: none;
        border-radius: 20px;
        background-color: #FCD9B8;

        font-family: 'Hind';
        font-weight: 400;
        font-size: 20px;

        ::placeholder {
            font-size: 20px;
            line-height: 25px;
            color: #17181D;
            opacity: .5;
        }

        :focus {
            outline: none;
        } 
    }

    button {
        border: none;
        background: none;

        .icon {
            font-size: 22px;
            color: #e09145;
            cursor: pointer;
        }
    }
`
const Results = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: scroll;   
`
const NotFound = styled.div`

    width: 75vw;
    margin: auto;
    text-align: center;
    padding-top: 200px;

    h1 {
        font-size: 28px;
        line-height: 30px;
        letter-spacing: .2px;
        font-weight: 400;
        color: #E09145;
    }
    display: ${props => props.hidden ? 'none' : 'flex'};
`
