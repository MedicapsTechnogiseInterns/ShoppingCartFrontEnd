import React from 'react';
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/home-page/HomePage';
import CartPage from './pages/cart-page/CartPage';
import { CartContextProvider } from './store/CartContext';
import PaymentPage from "./pages/payment-page/PaymentPage";
import OrdersPage from "./pages/orders-page/OrdersPage";


const  App:React.FC = () => {        
    
    return (
        <div>
            <CartContextProvider >
            <Routes> 
            <Route path='/' element = {<HomePage />}> </Route> 
            <Route path='/cart' element = {<CartPage />} ></Route>
            <Route path='/payment' element = {<PaymentPage />} ></Route>
            <Route path='/orders' element = {<OrdersPage />}></Route>
            </Routes>
            </CartContextProvider>
        </div>
    )

}

export default App;