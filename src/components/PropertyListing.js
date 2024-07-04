import React from 'react';
import '../styles/PropertyListing.css';

const PropertyListing = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-0 gx-5 align-items-end">
          <div className="col-lg-6">
            <div className="text-start mx-auto mb-5">
              <h1 className="mb-3">Property Listing</h1>
              <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit diam justo sed rebum.</p>
            </div>
          </div>
          <div className="col-lg-6 text-start text-lg-end">
            <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
              <li className="nav-item me-2">
                <a className="btn btn-outline-primary active" data-bs-toggle="pill" href="#tab-1">Featured</a>
              </li>
              <li className="nav-item me-2">
                <a className="btn btn-outline-primary" data-bs-toggle="pill" href="#tab-2">For Sell</a>
              </li>
              <li className="nav-item me-0">
                <a className="btn btn-outline-primary" data-bs-toggle="pill" href="#tab-3">For Rent</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="tab-content">
          <div id="tab-1" className="tab-pane fade show p-0 active">
            <div className="row g-4">
              <div className="col-lg-4 col-md-6">
                <div className="property-item rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <a href="#"><img className="img-fluid" src="img/property-1.jpg" alt="" /></a>
                    <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                    <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Apartment</div>
                  </div>
                  <div className="p-4 pb-0">
                    <h5 className="text-primary mb-3">$12,345</h5>
                    <a className="d-block h5 mb-2" href="#">Golden Urban House For Sell</a>
                    <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                  </div>
                  <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                    <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-4 col-md-6">
                <div className="property-item rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <a href="#"><img className="img-fluid" src="img/property-1.jpg" alt="" /></a>
                    <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                    <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Apartment</div>
                  </div>
                  <div className="p-4 pb-0">
                    <h5 className="text-primary mb-3">$12,345</h5>
                    <a className="d-block h5 mb-2" href="#">Golden Urban House For Sell</a>
                    <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                  </div>
                  <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                    <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="property-item rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <a href="#"><img className="img-fluid" src="img/property-1.jpg" alt="" /></a>
                    <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                    <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Apartment</div>
                  </div>
                  <div className="p-4 pb-0">
                    <h5 className="text-primary mb-3">$12,345</h5>
                    <a className="d-block h5 mb-2" href="#">Golden Urban House For Sell</a>
                    <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                  </div>
                  <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                    <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="property-item rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <a href="#"><img className="img-fluid" src="img/property-1.jpg" alt="" /></a>
                    <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                    <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Apartment</div>
                  </div>
                  <div className="p-4 pb-0">
                    <h5 className="text-primary mb-3">$12,345</h5>
                    <a className="d-block h5 mb-2" href="#">Golden Urban House For Sell</a>
                    <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                  </div>
                  <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                    <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="property-item rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <a href="#"><img className="img-fluid" src="img/property-1.jpg" alt="" /></a>
                    <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                    <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Apartment</div>
                  </div>
                  <div className="p-4 pb-0">
                    <h5 className="text-primary mb-3">$12,345</h5>
                    <a className="d-block h5 mb-2" href="#">Golden Urban House For Sell</a>
                    <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                  </div>
                  <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                    <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="property-item rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <a href="#"><img className="img-fluid" src="img/property-1.jpg" alt="" /></a>
                    <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                    <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Apartment</div>
                  </div>
                  <div className="p-4 pb-0">
                    <h5 className="text-primary mb-3">$12,345</h5>
                    <a className="d-block h5 mb-2" href="#">Golden Urban House For Sell</a>
                    <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                  </div>
                  <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                    <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          {/* Include tab-2 and tab-3 content similarly */}
        </div>
      </div>
    </div>
  );
};

export default PropertyListing;
