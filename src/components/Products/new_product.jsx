import React from 'react'
import ProductImage from '/images/product_03.png';

const new_product = () => {
    return (
        <>
            <div className="site-section bg-light">
                <div className="container">
                    <div className="row">
                        <div className="title-section text-center col-12">
                            <h2 className="text-uppercase">New Products</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 block-3 products-wrap">
                            <div className="nonloop-block-3 owl-carousel">

                                <div className="text-center item mb-4">
                                    <a href="shop-single.html"> <img src={ProductImage} alt="Image" /></a>
                                    <h3 className="text-dark"><a href="shop-single.html">Umcka Cold Care</a></h3>
                                    <p className="price">$120.00</p>
                                </div>

                                <div className="text-center item mb-4">
                                    <a href="shop-single.html"> <img src={ProductImage} alt="Image" /></a>
                                    <h3 className="text-dark"><a href="shop-single.html">Umcka Cold Care</a></h3>
                                    <p className="price">$120.00</p>
                                </div>

                                <div className="text-center item mb-4">
                                    <a href="shop-single.html"> <img src={ProductImage} alt="Image" /></a>
                                    <h3 className="text-dark"><a href="shop-single.html">Umcka Cold Care</a></h3>
                                    <p className="price">$120.00</p>
                                </div>

                                <div className="text-center item mb-4">
                                    <a href="shop-single.html"> <img src={ProductImage} alt="Image" /></a>
                                    <h3 className="text-dark"><a href="shop-single.html">Umcka Cold Care</a></h3>
                                    <p className="price">$120.00</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default new_product