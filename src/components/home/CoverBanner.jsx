import React from 'react'
import { Link } from 'react-router-dom'

const CoverBanner = () => {
    return (
        <>
            <div className="site-section">
                <div className="container">
                    <div className="row align-items-stretch section-overlap">
                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div className="banner-wrap bg-primary h-100">
                                <Link to="#" classNameName="h-100">
                                    <h5>
                                        Free <br /> Shipping
                                    </h5>
                                    <p>
                                        Amet sit amet dolor <strong>Lorem, ipsum dolor sit amet consectetur adipisicing.</strong>
                                    </p>
                                </Link>

                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div className="banner-wrap h-100">
                                <a href="#" className="h-100">
                                    <h5>Season <br /> Sale 50% Off</h5>
                                    <p>
                                        Amet sit amet dolor
                                        <strong>Lorem, ipsum dolor sit amet consectetur adipisicing.</strong>
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div className="banner-wrap bg-warning h-100">
                                <a href="#" className="h-100">
                                    <h5>Buy <br /> A Gift Card</h5>
                                    <p>
                                        Amet sit amet dolor
                                        <strong>Lorem, ipsum dolor sit amet consectetur adipisicing.</strong>
                                    </p>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CoverBanner