import React, { Component } from 'react';

import './Skills.css';

class Skills extends Component {
  render () {

    return (
      <section id="skills">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="skills-nested margin-desktop">
                        <p>NodeJS <span>94%</span></p>
                        <div className="progress-background">
                            <div className="progress-a"></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="skills-nested margin-desktop">
                        <p>AngularJS <span>90%</span></p>
                        <div className="progress-background">
                            <div className="progress-a" style={{ width : '90%' }}></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="skills-nested margin-desktop">
                        <p>Agile Development <span>85%</span></p>
                        <div className="progress-background">
                            <div className="progress-a" style={{ width : '85%' }}></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="skills-nested margin-desktop">
                        <p>Big Data <span>92%</span></p>
                        <div className="progress-background">
                            <div className="progress-a"></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="skills-nested margin-tablet margin-mobile">
                        <p>ReactJS (what this site was built with)<span>80%</span></p>
                        <div className="progress-background">
                            <div className="progress-a" style={{ width : '80%' }}></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="skills-nested">
                        <p>Project Management <span>84%</span></p>
                        <div className="progress-background">
                            <div className="progress-a"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    )
  }
}

export default Skills;
