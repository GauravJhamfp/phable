import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const products = [
    { id: 1, name: "Bioderma", price: "$55.00", oldPrice: "$95.00", img: "images/product_01.png", sale: true },
    { id: 2, name: "Chanca Piedra", price: "$70.00", img: "images/product_02.png", sale: false },
    { id: 3, name: "Umcka Cold Care", price: "$120.00", img: "images/product_03.png", sale: false },
    { id: 4, name: "Cetyl Pure", price: "$20.00", oldPrice: "$45.00", img: "images/product_04.png", sale: true },
    { id: 5, name: "CLA Core", price: "$38.00", img: "images/product_05.png", sale: false },
    { id: 6, name: "Poo Pourri", price: "$38.00", oldPrice: "$89.00", img: "images/product_06.png", sale: true }
];

const Store = () => {
    const navigate = useNavigate();

    const handleProductClick = id => {
        navigate(`/shop-single/${id}`);
    };

    return (
        <>
            {/* Breadcrumb */}
            <div className="bg-light py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-0">
                            <Link to="/">Home</Link> <span className="mx-2 mb-0">/</span>
                            <strong className="text-black">Store</strong>
                        </div>
                    </div>
                </div>
            </div>

            {/* Store Section */}
            <div className="site-section">
                <div className="container">
                    <div className="row">
                        {/* Filter by Price */}
                        <div className="col-lg-6">
                            <h3 className="mb-3 h6 text-uppercase text-black d-block">Filter by Price</h3>
                            <div id="slider-range" className="border-primary"></div>
                            <input type="text" id="amount" className="form-control border-0 pl-0 bg-white" disabled />
                        </div>

                        {/* Filter by Reference */}
                        <div className="col-lg-6">
                            <h3 className="mb-3 h6 text-uppercase text-black d-block">Filter by Reference</h3>
                            <button type="button" className="btn btn-secondary btn-md dropdown-toggle px-4"
                                id="dropdownMenuReference" data-bs-toggle="dropdown">
                                Reference
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuReference">
                                <Link className="dropdown-item" to="#">Relevance</Link>
                                <Link className="dropdown-item" to="#">Name, A to Z</Link>
                                <Link className="dropdown-item" to="#">Name, Z to A</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="#">Price, low to high</Link>
                                <Link className="dropdown-item" to="#">Price, high to low</Link>
                            </div>
                        </div>
                    </div>

                    {/* Product List */}
                    <div className="row">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="col-sm-6 col-lg-4 text-center item mb-4"
                                onClick={() => handleProductClick(product.id)}
                                style={{ cursor: "pointer" }}
                            >
                                {product.sale && <span className="tag">Sale</span>}
                                <Link to={`/product-details/${product.id}`}>
                                    <img src={product.img} alt={product.name} />
                                </Link>
                                <h3 className="text-dark">
                                    <Link to={`/product-details/${product.id}`}>{product.name}</Link>
                                </h3>
                                <p className="price">
                                    {product.oldPrice && <del>{product.oldPrice}</del>} &mdash; {product.price}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="row mt-5">
                        <div className="col-md-12 text-center">
                            <div className="site-block-27">
                                <ul>
                                    <li><Link to="#">&lt;</Link></li>
                                    <li className="active"><span>1</span></li>
                                    <li><Link to="#">2</Link></li>
                                    <li><Link to="#">3</Link></li>
                                    <li><Link to="#">4</Link></li>
                                    <li><Link to="#">5</Link></li>
                                    <li><Link to="#">&gt;</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Store;
