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
                    <div className="social-icons">
                      <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank"><span className="fa fa-linkedin"></span></a>
                      <a href="https://github.com/nebulr" target="_blank"><span className="fa fa-github"></span></a>
                    </div>
                </div>
            </div>
        </div>
      </section>
    )
  }
}

export default Footer;
