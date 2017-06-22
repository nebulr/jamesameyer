import React, { Component } from 'react';
import Particles from 'react-particles-js';

import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      particle : {
        "particles": {
          "number": {
            "value": 100,
            "density": {
              "enable": false,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "star",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "http://wiki.lexisnexis.com/academic/images/f/fb/Itunes_podcast_icon_300.jpg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 4,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 1.5782952832645452,
            "direction": "top",
            "random": false,
            "straight": true,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false,
              "mode": "grab"
            },
            "onclick": {
              "enable": false,
              "mode": "repulse"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 200,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }
    };
  }

  render () {
    return (
      <section id="home">
        <div className="overlay">
          <Particles  />
          <div className="text-content">
              <h1>hi, I'm James</h1>
              <p>web developer & architect</p>
              <a className="button" href="#contact-me">contact me</a>
          </div>
        </div>
      </section>
    )
  }
}

export default Header;
