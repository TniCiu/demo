import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home/index'
import Login from './Components/AppBar/Accounts/login'
import SignUp from './Components/AppBar/Accounts/signUp';
import OrderAirPlane from './Components/AppBar/Menu/OrderAirPlan';
import Location  from './Home/location';
import Product from './Home/product';
const AppRouter = () => {
    return(
    <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/account/login" element = {<Login/>} />
        <Route path="/account/signup" element = {<SignUp/>} />
        <Route path="/OrderAirPlane" element = {<OrderAirPlane/>} />
        <Route path="/location" element = {<Location/>} />
        <Route path="/product" element = {<Product/>} />

    </Routes>
    )
}

export default AppRouter

