import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import CartContext from "../Contexts/CartContext.js";
import GlobalStyle from "../Styles/GlobalStyle.js";
import PrivatePage from "../Common/PrivatePage.js";
import AuthSelector from "./AuthSelect.js";
import SignIn from "./Sign-In/SignIn.js";
import SignUp from "./Sign-Up/SignUp.js";
import Home from "./Home/Home.js";
import Product from "./Products/Product.js";
import Checkout from "./Checkout/Checkout.js";
import Success from "./Success/Success.js";


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
                    <Route 
                        path="/home" 
                        element={
                            <PrivatePage>
                                <Home />
                            </PrivatePage>
                        }>
                    </Route>
                    <Route 
                        path="/:productId" 
                        element={
                            <PrivatePage>
                                <Product />
                            </PrivatePage>
                        }>
                    </Route>
                    <Route 
                        path="/checkout" 
                        element={
                            <PrivatePage>
                                <Checkout />
                            </PrivatePage>
                        }>
                    </Route>
                    <Route 
                        path="/success" 
                        element={
                            <PrivatePage>
                                <Success />
                            </PrivatePage>
                        }>
                    </Route>
                </Routes>
            </BrowserRouter>
        </CartContext.Provider>
</>

    )
}