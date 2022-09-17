import styled from "styled-components";
import { BsSearch, BsArrowLeft } from 'react-icons/bs';

export default function Search ({ disable, setDisable }) { 

    return (
        <Wrapper isDisabled={disable}>
            <SearchPage isDisabled={disable}>
                <SearchBar>
                    <BsArrowLeft 
                        className="icon" 
                        onClick={()=> setDisable(false)}
                    />
                    <form>
                        <input 
                            type="text" 
                            placeholder="Search" r
                            equired
                        >
                        </input>
                    </form>
                    <BsSearch className="icon" />
                </SearchBar>

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
    height: 100vh;    
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
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid #E09145;

    font-size: 22px;
    font-weight: 400;
    color: #e09145;

    .icon {
        cursor: pointer;
    }

    form {
        width: 70%;
    }

    input {
        width: 100%;
        height: 30px;
        padding-left: 10px;
        border: none;
        border-radius: 20px;
        background-color: #FCD9B8;

        font-family: 'Hind';
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;

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
`
