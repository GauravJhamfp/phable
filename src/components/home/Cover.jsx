import React from 'react'
import { Link } from 'react-router-dom';

const siteBlockCoverStyle = {
    backgroundImage: `url(/images/hero_1.jpg)`
};

const Cover = () => {
    return (
        <>
            <div className="site-blocks-cover" style={siteBlockCoverStyle}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 mx-auto order-lg-2 align-self-center">
                            <div className="site-block-cover-content text-center">
                                <h2 className="sub-title">Effective Medicine, New Medicine Everyday</h2>
                                <h1>Welcome To Phable</h1>
                                <p>
                                    <Link to="#" className="btn btn-primary px-5 py-3">Shop Now</Link>
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