import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FooterStyle } from "../../Styles/HomeStyle";
import { AiOutlineHome } from 'react-icons/ai';
import { BsSearch, BsBag  } from 'react-icons/bs';
import Cart from "../Cart/Cart";
import Search from "../Search/Search";

export default function Footer () {

    const navigate = useNavigate();
    const [showCart, setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    return (
        <>
            <FooterStyle>
                <AiOutlineHome className="icon" onClick={() => navigate("/home")}/>
                <BsSearch className="icon" onClick={()=>{setShowSearch(true)}}/>
                <BsBag className="icon" onClick={()=>{setShowCart(true)}}/>
            </FooterStyle>

            <Cart disable={showCart} setDisable={setShowCart}/>
            <Search disable={showSearch} setDisable={setShowSearch}/>
        </>
    )
}