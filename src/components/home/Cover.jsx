import React from 'react'
import coverImage from '/images/hero_1.jpg';

const Cover = () => {
    return (
        <>
            <div className="site-blocks-cover" style={{ backgroundImage: `url(${coverImage})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 mx-auto order-lg-2 align-self-center">
                            <div className="site-block-cover-content text-center">
                                <h2 className="sub-title">Effective Medicine, New Medicine Everyday</h2>
                                <h1>Welcome To Pharma</h1>
                                <p>
                                    <a href="#" className="btn btn-primary px-5 py-3">Shop Now</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Cover;