import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ShopSingle = () => {
    const [quantity, setQuantity] = useState(1);

  // Effect to ensure quantity remains within valid limits
  useEffect(() => {
    if (quantity < 1) setQuantity(1);
  }, [quantity]);

  return (
    <>
      {/* Breadcrumb Navigation */}
      <div className="bg-light py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-0">
              <Link to="/">Home</Link> <span className="mx-2 mb-0">/</span>
              <Link to="/shop">Store</Link> <span className="mx-2 mb-0">/</span>
              <strong className="text-black">Ibuprofen Tablets, 200mg</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="site-section">
        <div className="container">
          <div className="row">
            {/* Product Image */}
            <div className="col-md-5 mr-auto">
              <div className="border text-center">
                <img src="/images/product_07_large.png" alt="Ibuprofen Tablets" className="img-fluid p-5" />
              </div>
            </div>
            {/* Product Description */}
            <div className="col-md-6">
              <h2 className="text-black">Ibuprofen Tablets, 200mg</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, vitae, explicabo? Incidunt facere, natus soluta dolores iusto!</p>
              <p><del>$95.00</del> <strong className="text-primary h4">$55.00</strong></p>

              {/* Quantity Selector */}
            <div className="mb-5">
                <div className="input-group mb-3" style={{ maxWidth: "220px" }}>
                  <div className="input-group-prepend">
                    <button className="btn btn-outline-primary" onClick={() => setQuantity(quantity - 1)}>-</button>
                  </div>
                  <input type="text" className="form-control text-center" value={quantity} readOnly />
                  <div className="input-group-append">
                    <button className="btn btn-outline-primary" onClick={() => setQuantity(quantity + 1)}>+</button>
                  </div>
                </div>
              </div>

              {/* Add to Cart Button */}
              <p><Link to="/cart" className="btn btn-primary px-4 py-3">Add To Cart</Link></p>

              {/* Tabs Section */}
              <div className="mt-5">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab">Ordering Information</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab">Specifications</a>
                  </li>
                </ul>

                <div className="tab-content" id="pills-tabContent">
                  {/* Ordering Information */}
                  <div className="tab-pane fade show active" id="pills-home" role="tabpanel">
                    <table className="table custom-table">
                      <thead>
                        <tr>
                          <th>Material</th>
                          <th>Description</th>
                          <th>Packaging</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>OTC022401</td>
                          <td>Pain Management: Acetaminophen PM Extra-Strength Caplets, 500 mg, 100/Bottle</td>
                          <td>1 BT</td>
                        </tr>
                        <tr>
                          <td>OTC022401</td>
                          <td>Pain Management: Acetaminophen PM Extra-Strength Caplets, 500 mg, 100/Bottle</td>
                          <td>144/CS</td>
                        </tr>
                        <tr>
                          <td>OTC022401</td>
                          <td>Pain Management: Acetaminophen PM Extra-Strength Caplets, 500 mg, 100/Bottle</td>
                          <td>1 EA</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Specifications */}
                  <div className="tab-pane fade" id="pills-profile" role="tabpanel">
                    <table className="table custom-table">
                      <tbody>
                        <tr>
                          <td>HPIS CODE</td>
                          <td className="bg-light">999_200_40_0</td>
                        </tr>
                        <tr>
                          <td>HEALTHCARE PROVIDERS ONLY</td>
                          <td className="bg-light">No</td>
                        </tr>
                        <tr>
                          <td>LATEX FREE</td>
                          <td className="bg-light">Yes, No</td>
                        </tr>
                        <tr>
                          <td>MEDICATION ROUTE</td>
                          <td className="bg-light">Topical</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Promotional Banners */}
      <div className="site-section bg-secondary bg-image" style={{ backgroundImage: "url(/images/bg_2.jpg)" }}>
        <div className="container">
          <div className="row align-items-stretch">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <Link to="#" className="banner-1 h-100 d-flex" style={{ backgroundImage: "url(/images/bg_1.jpg)" }}>
                <div className="banner-1-inner align-self-center">
                  <h2>Pharma Products</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
              </Link>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0">
              <Link to="#" className="banner-1 h-100 d-flex" style={{ backgroundImage: "url(/images/bg_2.jpg)" }}>
                <div className="banner-1-inner ml-auto align-self-center">
                  <h2>Rated by Experts</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopSingle;
