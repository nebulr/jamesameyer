import React, { Component } from 'react';

import './About.css';

class About extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <section id="about-me">
          <div className="container">
              <div className="row">
                  <div className="col-md-5 col-sm-12">
                      <div className="about-avatar"> <img className="img-responsive" src="images/personal.jpg" alt="" /></div>
                  </div>
                  <div className="col-md-7 col-sm-12">
                      <div className="about-content">
                          <h2 className="background">About Me</h2>
                          <p>I'm a professional fullstack developer. My passion is designing networked systems and computer science. I have more than eight years working experience in this field.</p>
                          <p>I have experience in the defense industry, finance, e-commerce, consulting, file storage and mobile app development. I have experience managing smaller teams to teams of up to 20 developers.</p>
                          <p>If you have a time sensitive or high profile deployment I am your guy!</p> <a className="button" href="https://raw.github.com/nebulr/nebulr.github.io/master/static/media/JamesMeyerResume.4S32Df3D2d.pdf" download>Download CV</a></div>
                  </div>
              </div>
          </div>
      </section>
    )
  }
}

export default About;
