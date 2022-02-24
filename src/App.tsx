import React from 'react';
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/home-page/HomePage';
import CartPage from './pages/cart-page/CartPage'


const  App:React.FC = () => {        
    
    return (
        <div>
            <Routes> 
            <Route path='/' element = {<HomePage />}> </Route> 
            <Route path='/cart' element = {<CartPage />} ></Route>
            </Routes> 
        </div>
    )

}

export default App;