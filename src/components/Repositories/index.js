import React, { Component } from 'react';

class Respositories extends Component {
  constructor(props) {
    super(props);
    this.state = { repos : [] };
  }
  componentDidMount() {
    return fetch('https://api.github.com/users/nebulr/repos?type=owner&direction=desc')
    .then((response) => response.json())
    .then((responseJson) => {
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
                <h2 className="background repositories">repos</h2>
            </div>
            <div className="row">
                <div className="portfolio-items" id="grid">
                  {this.state.repos.map ((item) => {
                    return (<div className="col-md-4 col-sm-6 col-xs-6">
                        <div className="img-thumb margin-desktop">
                          <a href={item.html_url} target="_blank">
                            {item.full_name}
                          </a>
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

export default Respositories;
