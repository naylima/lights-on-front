import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import CartContext from "../Contexts/CartContext.js";
import GlobalStyle from "../Styles/GlobalStyle.js";
import AuthSelector from "./AuthSelect.js";
import SignIn from "./Sign-In/SignIn.js";
import SignUp from "./Sign-Up/SignUp.js";
import Home from "./Home/Home.js";
import Checkout from "./Checkout/Checkout.js";

export default function App() {

    const [cart, setCart] = useState([])

    return(
<>
    <GlobalStyle />
        <CartContext.Provider value={{ cart, setCart }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AuthSelector />} ></Route>
                    <Route path="/sign-in" element={<SignIn />} ></Route>
                    <Route path="/sign-up" element={<SignUp />} ></Route>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/checkout" element={<Checkout />}></Route>
                </Routes>
            </BrowserRouter>
        </CartContext.Provider>
</>
    )
}