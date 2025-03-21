import React from 'react'
import testimonialImage from '/images/person_1.jpg';

const testimonial = () => {
    return (
        <>
            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="title-section text-center col-12">
                            <h2 className="text-uppercase">Testimonials</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 block-3 products-wrap">
                            <div className="nonloop-block-3 no-direction owl-carousel">
                                <div className="testimony">
                                    <blockquote>
                                        <img src={testimonialImage} alt="Image" className="img-fluid w-25 mb-4 rounded-circle" />
                                        <p>&ldquo;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis voluptatem consectetur quam tempore obcaecati maiores voluptate aspernatur iusto eveniet, placeat ab quod tenetur ducimus. Minus ratione sit quaerat unde.&rdquo;</p>
                                    </blockquote>

                                    <p>&mdash; Kelly Holmes</p>
                                </div>

                                <div className="testimony">
                                    <blockquote>
                                        <img src={testimonialImage} alt="Image" className="img-fluid w-25 mb-4 rounded-circle" />
                                        <p>&ldquo;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis voluptatem consectetur quam tempore
                                            obcaecati maiores voluptate aspernatur iusto eveniet, placeat ab quod tenetur ducimus. Minus ratione sit quaerat
                                            unde.&rdquo;</p>
                                    </blockquote>

                                    <p>&mdash; Rebecca Morando</p>
                                </div>

                                <div className="testimony">
                                    <blockquote>
                                        <img src={testimonialImage} alt="Image" className="img-fluid w-25 mb-4 rounded-circle" />
                                        <p>&ldquo;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis voluptatem consectetur quam tempore
                                            obcaecati maiores voluptate aspernatur iusto eveniet, placeat ab quod tenetur ducimus. Minus ratione sit quaerat
                                            unde.&rdquo;</p>
                                    </blockquote>

                                    <p>&mdash; Lucas Gallone</p>
                                </div>

                                <div className="testimony">
                                    <blockquote>
                                        <img src={testimonialImage} alt="Image" className="img-fluid w-25 mb-4 rounded-circle" />
                                        <p>&ldquo;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis voluptatem consectetur quam tempore
                                            obcaecati maiores voluptate aspernatur iusto eveniet, placeat ab quod tenetur ducimus. Minus ratione sit quaerat
                                            unde.&rdquo;</p>
                                    </blockquote>

                                    <p>&mdash; Andrew Neel</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default testimonial;