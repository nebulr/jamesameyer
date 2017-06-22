import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
  render () {
    return (
      <section id="footer" className="text-center">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <p> All rights reserved © 2017 Nebulr LLC</p>
                    <div className="social-icons"> <a href="#"><span className="fa fa-facebook"></span></a> <a href="#"><span className="fa fa-twitter"></span></a> <a href="#"><span className="fa fa-pinterest-p"></span></a> <a href="#"><span className="fa fa-youtube"></span></a></div>
                </div>
            </div>
        </div>
      </section>
    )
  }
}

export default Footer;
