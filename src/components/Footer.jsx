import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">

                            <div className="block-7">
                                <h3 className="footer-heading mb-4">About Us</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quae reiciendis distinctio voluptates
                                    sed dolorum excepturi iure eaque, aut unde.</p>
                            </div>

                        </div>
                        <div className="col-lg-3 mx-auto mb-5 mb-lg-0">
                            <h3 className="footer-heading mb-4">Quick Links</h3>
                            <ul className="list-unstyled">
                                <li><Link to="#">Supplements</Link></li>
                                <li><Link to="#">Vitamins</Link></li>
                                <li><Link to="#">Diet &amp; Nutrition</Link></li>
                                <li><Link to="#">Tea &amp; Coffee</Link></li>
                            </ul>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="block-5 mb-5">
                                <h3 className="footer-heading mb-4">Contact Info</h3>
                                <ul className="list-unstyled">
                                    <li className="address">Techno College Hooghly, Chuchura, West Bengal, India</li>
                                    <li className="phone"><Link to="tel://23923929210">+91 7370857827</Link></li>
                                    <li className="email">phableIndia@gmail.com</li>
                                </ul>
                            </div>


                        </div>
                    </div>
                    <div className="row pt-5 mt-5 text-center">
                        <div className="col-md-12">
                            <p>
                                Copyright &copy;
                                <script>document.write(new Date().getFullYear());</script> All rights reserved to Phable Team
                                <i className="icon-heart" aria-hidden="true"></i> by <Link to=""
                                    className="text-primary">PHABLE</Link>
                            </p>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer