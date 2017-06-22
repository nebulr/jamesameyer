import React, { Component } from 'react';

import './Portfolio.css';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = { repos : [] };
  }
  componentDidMount() {
    return fetch('https://api.github.com/users/nebulr/repos?type=owner&direction=desc')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log (responseJson);
      // this.setState({
      //   isLoading: false,
      //   dataSource: ds.cloneWithRows(responseJson.movies),
      // }, function() {
      //   // do something with new state
      // });
      this.setState({
        repos : responseJson
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }
  render () {
    return (
      <section id="portfolio" className="portfolio text-center">
        <div className="container">
            <div className="heading">
                <h2 className="background">portfolio</h2>
            </div>
            <div className="row">
                <div className="portfolio-items" id="grid">
                  {this.state.repos.map ((item) => {
                    return (<div className="col-md-4 col-sm-6 col-xs-6">
                        <div className="img-thumb margin-desktop">
                          <a href="images/portfolio2.jpg" data-lightbox="gallery">
                          <img className="img-responsive" src="images/portfolio2.jpg" alt="portfolio" data-animation="animated rotateInDownLeft" /> </a>
                        </div>
                    </div>)
                  })}
                </div>
            </div>
        </div>
      </section>
    )
  }
}

export default Portfolio;
