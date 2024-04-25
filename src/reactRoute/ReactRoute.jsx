import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./RouteConstants";

import OrderInfo from "../pages/orderInfo/OrderInfo.jsx";
import Products from "../pages/products/Products.jsx";
import Sidebar from '../components/sidebar/Sidebar.jsx'
import Navbar from '../components/navbar/Navbar.jsx'

const ReactRoute = () => {
    return (
        <BrowserRouter>
            <div className="flex">
                <Sidebar />
                <div className="flex flex-col w-full">
                    <Navbar />
                    <Routes>
                        <Route path={ROUTES.orderInfo} element={<OrderInfo />} />
                        <Route path={ROUTES.products} element={<Products />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default ReactRoute;