import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCheck, faCrosshairs, faBarChart } from '@fortawesome/free-solid-svg-icons';
import '../styles/Service.css';

const Service = () => {
    return (
      <section id="aa-service">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-service-area">
                <div className="aa-title">
                  <h2>Our Service</h2>
                  <span></span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum sit ea nobis quae vero voluptatibus.</p>
                </div>
                {/* Service content */}
                <div className="aa-service-content">
                  <div className="row">
                    {/* Single Service Item */}
                    <div className="col-md-3">
                      <div className="aa-single-service">
                        <div className="aa-service-icon">
                          <FontAwesomeIcon icon={faHome} />
                        </div>
                        <div className="aa-single-service-content">
                          <h4><a href="#">Property Sale</a></h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto repellendus quasi asperiores itaque dolorem at.</p>
                        </div>
                      </div>
                    </div>
                    {/* Repeat for other service items similarly */}
                    <div className="col-md-3">
                      <div className="aa-single-service">
                        <div className="aa-service-icon">
                          <FontAwesomeIcon icon={faCheck} />
                        </div>
                        <div className="aa-single-service-content">
                          <h4><a href="#">Property Rent</a></h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto repellendus quasi asperiores itaque dolorem at.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="aa-single-service">
                        <div className="aa-service-icon">
                          <FontAwesomeIcon icon={faCrosshairs} />
                        </div>
                        <div className="aa-single-service-content">
                          <h4><a href="#">Property Development</a></h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto repellendus quasi asperiores itaque dolorem at.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="aa-single-service">
                        <div className="aa-service-icon">
                          <FontAwesomeIcon icon={faBarChart} />
                        </div>
                        <div className="aa-single-service-content">
                          <h4><a href="#">Market Analysis</a></h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto repellendus quasi asperiores itaque dolorem at.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Service;
  