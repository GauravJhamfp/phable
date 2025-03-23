import React from 'react'
import { Link } from 'react-router-dom'
import ProductDetails from './ProductDetails'
const Store = () => {
    return (
        <>
            <div className="bg-light py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-0"><a href="">Home</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">Store</strong></div>
                    </div>
                </div>
            </div>

            <div className="site-section">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-6">
                            <h3 className="mb-3 h6 text-uppercase text-black d-block">Filter by Price</h3>
                            <div id="slider-range" className="border-primary"></div>
                            <input type="text" name="text" id="amount" className="form-control border-0 pl-0 bg-white" disabled="" />
                        </div>
                        <div className="col-lg-6">
                            <h3 className="mb-3 h6 text-uppercase text-black d-block">Filter by Reference</h3>
                            <button type="button" className="btn btn-secondary btn-md dropdown-toggle px-4" id="dropdownMenuReference"
                                data-toggle="dropdown">Reference</button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuReference">
                                <a className="dropdown-item" href="#">Relevance</a>
                                <a className="dropdown-item" href="#">Name, A to Z</a>
                                <a className="dropdown-item" href="#">Name, Z to A</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Price, low to high</a>
                                <a className="dropdown-item" href="#">Price, high to low</a>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6 col-lg-4 text-center item mb-4">
                            <span className="tag">Sale</span>
                            <Link to={<ProductDetails />}> <img src="images/product_01.png" alt="Image" /></Link>
                            <h3 className="text-dark"><Link to={<ProductDetails />}>Bioderma</Link></h3>
                            <p className="price"><del>95.00</del> &mdash; $55.00</p>
                        </div>
                        <div className="col-sm-6 col-lg-4 text-center item mb-4">
                            <Link to={<ProductDetails />}> <img src="images/product_02.png" alt="Image" /></Link>
                            <h3 className="text-dark"><Link to={<ProductDetails />}>Chanca Piedra</Link></h3>
                            <p className="price">$70.00</p>
                        </div>
                        <div className="col-sm-6 col-lg-4 text-center item mb-4">
                            <Link to={<ProductDetails />}> <img src="images/product_03.png" alt="Image" /></Link>
                            <h3 className="text-dark"><Link to={<ProductDetails />}>Umcka Cold Care</Link></h3>
                            <p className="price">$120.00</p>
                        </div>

                        <div className="col-sm-6 col-lg-4 text-center item mb-4">

                            <Link to={<ProductDetails />}> <img src="images/product_04.png" alt="Image" /></Link>
                            <h3 className="text-dark"><Link to={<ProductDetails />}>Cetyl Pure</Link></h3>
                            <p className="price"><del>45.00</del> &mdash; $20.00</p>
                        </div>
                        <div className="col-sm-6 col-lg-4 text-center item mb-4">
                            <Link to={<ProductDetails />}> <img src="images/product_05.png" alt="Image" /></Link>
                            <h3 className="text-dark"><Link to={<ProductDetails />}>CLA Core</Link></h3>
                            <p className="price">$38.00</p>
                        </div>
                        <div className="col-sm-6 col-lg-4 text-center item mb-4">
                            <span className="tag">Sale</span>
                            <Link to={<ProductDetails />}> <img src="images/product_06.png" alt="Image" /></Link>
                            <h3 className="text-dark"><Link to={<ProductDetails />}>Poo Pourri</Link></h3>
                            <p className="price"><del>$89</del> &mdash; $38.00</p>
                        </div>

                        <div className="col-sm-6 col-lg-4 text-center item mb-4">
                            <span className="tag">Sale</span>
                            <Link to={<ProductDetails />}> <img src="images/product_01.png" alt="Image" /></Link>
                            <h3 className="text-dark"><Link to={<ProductDetails />}>Bioderma</Link></h3>
                            <p className="price"><del>95.00</del> &mdash; $55.00</p>
                        </div>
                        <div className="col-sm-6 col-lg-4 text-center item mb-4">
                            <Link to={<ProductDetails />}> <img src="images/product_02.png" alt="Image" /></Link>
                            <h3 className="text-dark"><Link to={<ProductDetails />}>Chanca Piedra</Link></h3>
                            <p className="price">$70.00</p>
                        </div>
                        <div className="col-sm-6 col-lg-4 text-center item mb-4">
                            <Link to={<ProductDetails />}> <img ˀsrc="images/product_03.png" alt="Image" /></Link>
                            <h3 className="text-dark"><Link to={<ProductDetails />}>Umcka Cold Care</Link></h3>
                            <p className="price">$120.00</p>
                        </div>

                        <div className="col-sm-6 col-lg-4 text-center item mb-4">

                            <Link to={<ProductDetails />}> <img src="images/product_04.png" alt="Image" /></Link>
                            <h3 className="text-dark"><Link to={<ProductDetails />}>Cetyl Pure</Link></h3>
                            <p className="price"><del>45.00</del> &mdash; $20.00</p>
                        </div>
                        <div className="col-sm-6 col-lg-4 text-center item mb-4">
                            <Link to={<ProductDetails />}> <img src="images/product_05.png" alt="Image" /></Link>
                            <h3 className="text-dark"><Link to={<ProductDetails />}>CLA Core</Link></h3>
                            <p className="price">$38.00</p>
                        </div>
                        <div className="col-sm-6 col-lg-4 text-center item mb-4">
                            <span className="tag">Sale</span>
                            <Link to={<ProductDetails />}> <img src="images/product_06.png" alt="Image" /></Link>
                            <h3 className="text-dark"><Link to={<ProductDetails />}>Poo Pourri</Link></h3>
                            <p className="price"><del>$89</del> &mdash; $38.00</p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-12 text-center">
                            <div className="site-block-27">
                                <ul>
                                    <li><a href="#">&lt;</a></li>
                                    <li className="active"><span>1</span></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#">5</a></li>
                                    <li><a href="#">&gt;</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Store