import React from 'react'
import ProductImage from '/images/product_03.png';
import { Link, useNavigate } from "react-router-dom";  // Import the useNavigate hook

const products = [
    { id: 1, name: "Bioderma", price: 55.0, originalPrice: 95.0, onSale: true },
    {
        id: 2,
        name: "Chanca Piedra",
        price: 70.0,
        originalPrice: null,
        onSale: false
    },
    {
        id: 3,
        name: "Umcka Cold Care",
        price: 120.0,
        originalPrice: null,
        onSale: false
    },
    { id: 4, name: "Cetyl Pure", price: 20.0, originalPrice: 45.0, onSale: true },
    { id: 5, name: "CLA Core", price: 38.0, originalPrice: null, onSale: false },
    { id: 6, name: "Poo Pourri", price: 38.0, originalPrice: 89.0, onSale: true }
];

const NewProduct = () => {
    const navigate = useNavigate();


    // Function to handle navigation to product details
    const handleProductClick = id => {
        navigate(`/shop-single/${id}`);
    };
    // const NewProduct = () => {
    return (
        <>
            <div className="site-section bg-light">
                <div className="container">
                    {/* Section Title */}
                    <div className="row">
                        <div className="title-section text-center col-12">
                            <h2 className="text-uppercase">New Products</h2>
                        </div>
                    </div>

                    {/* Product Listing */}
                    <div className="row">
                        {products.map(product =>
                            <div
                                key={product.id}
                                className="col-sm-6 col-lg-4 text-center item mb-4"
                                onClick={() => handleProductClick(product.id)}
                                style={{ cursor: "pointer" }}
                            >
                                {/* Sale Tag */}
                                {product.onSale && <span className="tag">Sale</span>}

                                {/* Product Image */}
                                <img src={ProductImage} alt={product.name} />

                                {/* Product Name */}
                                <h3 className="text-dark">
                                    {product.name}
                                </h3>

                                {/* Product Price */}
                                <p className="price">
                                    {product.originalPrice &&
                                        <del>
                                            ${product.originalPrice.toFixed(2)}
                                        </del>}{" "}
                                    &mdash; ${product.price.toFixed(2)}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewProduct