import React from 'react';
import { Routes, Route } from 'react-router';
import useScrollRestore from '../hooks/useScrollRestore';
import AllProducts from '../pages/AllProducts';
import AddProducts from '../pages/Addproduct';
import EditProduct from '../pages/ModalContent';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import ErrorPage from '../pages/ErrorPage';

const RouterRoutes = () => {

    useScrollRestore();

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/" element={<AddProducts />} /> */}
                <Route path="/cart" element={<Cart />} />
                <Route path="/add_product" element={<AddProducts />} />
                {/* <Route path="/editProduct/:id" element={<EditProduct />} /> */}
                <Route path="/all-products" element={<AllProducts />} />
                <Route path="/product-details/:productId" element={<ProductDetails />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    );
};

export default RouterRoutes;