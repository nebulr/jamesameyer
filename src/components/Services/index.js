import React, { Component } from 'react';

import './Services.css';

class Services extends Component {
  render () {
    return (<section id="services">
      <div className="container">
          <div className="row">
              <h2 className="background">Services</h2>
              <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="services-nested text-center margin-desktop"> <i className="fa fa-cog" aria-hidden="true"></i>
                      <h3>customize</h3>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                  </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="services-nested text-center margin-desktop"> <i className="fa fa-mobile" aria-hidden="true"></i>
                      <h3>Responsive</h3>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                  </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="services-nested text-center margin-desktop"> <i className="fa fa-headphones" aria-hidden="true"></i>
                      <h3>Free Support</h3>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                  </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="services-nested text-center margin-tablet margin-mobile"> <i className="fa fa-line-chart" aria-hidden="true"></i>
                      <h3>Statistics</h3>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                  </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="services-nested text-center margin-tablet margin-mobile"> <i className="fa fa-clock-o" aria-hidden="true"></i>
                      <h3>Time Saving</h3>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                  </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="services-nested text-center"> <i className="fa fa-code" aria-hidden="true"></i>
                      <h3>Less Code</h3>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                  </div>
              </div>
          </div>
      </div>
    </section>
    )
  }
}

export default Services;
