import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return <>
        <div className="site-navbar py-2">
            <div className="search-wrap">
                <div className="container">
                    <a href="#" className="search-close js-search-close"><span className="icon-close2"></span></a>
                    <form action="#" method="post">
                        <input type="text" className="form-control" placeholder="Search keyword and hit enter..." />
                    </form>
                </div>
            </div>

            <div className="container">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <div className="site-logo">
                            <a href="/" className="js-logo-clone">Phable</a>
                        </div>
                    </div>
                    <div className="main-nav d-none d-lg-block">
                        <nav className="site-navigation text-right text-md-center" role="navigation">
                            <ul className="site-menu js-clone-nav d-none d-lg-block">
                                <li className="active"><a href="/">Home</a></li>
                                <li><Link to={"/store"}>Store</Link></li>
                                <li className="has-children">
                                    <a href="#">Dropdown</a>
                                    <ul className="dropdown">
                                        <li><a href="#">Supplements</a></li>
                                        <li className="has-children">
                                            <a href="#">Vitamins</a>
                                            <ul className="dropdown">
                                                <li><a href="#">Supplements</a></li>
                                                <li><a href="#">Vitamins</a></li>
                                                <li><a href="#">Diet &amp; Nutrition</a></li>
                                                <li><a href="#">Tea &amp; Coffee</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Diet &amp; Nutrition</a></li>
                                        <li><a href="#">Tea &amp; Coffee</a></li>

                                    </ul>
                                </li>
                                <li><Link to={"/about"}>About</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="icons">
                        <a href="#" className="icons-btn d-inline-block js-search-open"><span className="icon-search"></span></a>
                        <a href="cart.html" className="icons-btn d-inline-block bag">
                            <span className="icon-shopping-bag"></span>
                            <span className="number">2</span>
                        </a>
                        <a href="#" className="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"><span
                            className="icon-menu"></span></a>
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default Navbar;
