import React, { Component } from 'react';
import './Testimonials.css';

class Testimonials extends Component {

  render () {
    return (
      <div id="pencil-testimonials" className="carousel slide" data-ride="carousel" data-pause="hover" data-interval="10000" data-duration="1000">
        <ol className="carousel-indicators">
            <li data-target="#pencil-testimonials" data-slide-to="0" className="active"></li>
            <li data-target="#pencil-testimonials" data-slide-to="1"></li>
            <li data-target="#pencil-testimonials" data-slide-to="2"></li>
            <li data-target="#pencil-testimonials" data-slide-to="3"></li>
        </ol>
        <div className="container">
            <div className="heading-left">
                <h2 className="background">People Say</h2>
            </div>
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <div className="text-image">
                                <h3>Former Manager</h3>
                                <p>If you have mission critical projects James is the person you want on your team</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="text-image">
                                <h3>Former Client</h3>
                                <p>We had an impossible task and James pulled through under pressure</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="text-image">
                                <h3>William Wallace</h3>
                                <p> LComplete template, can be used for any kind of web site. The layout and colors are clean and simple</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="text-image">
                                <h3>William Wallace</h3>
                                <p> Awesome theme. Using it for two different sites at the moment and it keeps on giving! Thanks SemiColonWeb!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Testimonials;
