import React from 'react';

const AboutUs = () => {
    return (
        <>
            <div
                className="site-blocks-cover inner-page"
                style={{ backgroundImage: "url('images/hero_1.jpg')" }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 mx-auto align-self-center">
                            <div className="text-center">
                                <h1>About Us</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum obcaecati natus iure voluptatum eveniet harum recusandae ducimus saepe.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* How We Started Section */}
            <div className="site-section bg-light custom-border-bottom" data-aos="fade">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-6">
                            <div className="block-16">
                                <figure>
                                    <img src="images/bg_1.jpg" alt="Image placeholder" className="img-fluid rounded" />
                                    <a href="https://vimeo.com/channels/staffpicks/93951774" className="play-button popup-vimeo">
                                        <span className="icon-play"></span>
                                    </a>
                                </figure>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <div className="site-section-heading pt-3 mb-4">
                                <h2 className="text-black">How We Started</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trusted Company Section */}
            <div className="site-section bg-light custom-border-bottom" data-aos="fade">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-6 order-md-2">
                            <div className="block-16">
                                <figure>
                                    <img src="images/hero_1.jpg" alt="Image placeholder" className="img-fluid rounded" />
                                    <a href="https://vimeo.com/channels/staffpicks/93951774" className="play-button popup-vimeo">
                                        <span className="icon-play"></span>
                                    </a>
                                </figure>
                            </div>
                        </div>
                        <div className="col-md-5 mr-auto">
                            <div className="site-section-heading pt-3 mb-4">
                                <h2 className="text-black">We Are Trusted Company</h2>
                            </div>
                            <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="site-section site-section-sm site-blocks-1 border-0" data-aos="fade">
                <div className="container">
                    <div className="row">
                        {[
                            { icon: "icon-truck", title: "Free Shipping" },
                            { icon: "icon-refresh2", title: "Free Returns" },
                            { icon: "icon-help", title: "Customer Support" }
                        ].map((feature, index) => (
                            <div key={index} className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="icon mr-4 align-self-start">
                                    <span className={`${feature.icon} text-primary`}></span>
                                </div>
                                <div className="text">
                                    <h2>{feature.title}</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* The Team Section */}
            <div className="site-section bg-light custom-border-bottom" data-aos="fade">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-7 site-section-heading text-center pt-4">
                            <h2>The Team</h2>
                        </div>
                    </div>
                    <div className="row">
                        {[
                            { name: "Gaurav Jha", role: "Frontend Developer", image: "images/person_3.jpg" },
                            { name: "Ditipriya sen", role: "Backend Developer", image: "images/person_1.jpg" },
                            { name: "Shubhangi Roy", role: "Marketing", image: "images/person_2.jpg" },
                            { name: "Vaishali jaishwal", role: "Sales Manager", image: "images/person_4.jpg" }
                        ].map((teamMember, index) => (
                            <div key={index} className="col-md-6 col-lg-6 mb-5">
                                <div className="block-38 text-center">
                                    <div className="block-38-img">
                                        <div className="block-38-header">
                                            <img src={teamMember.image} alt="Image placeholder" className="mb-4" />
                                            <h3 className="block-38-heading h4">{teamMember.name}</h3>
                                            <p className="block-38-subheading">{teamMember.role}</p>
                                        </div>
                                        <div className="block-38-body">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUs;
