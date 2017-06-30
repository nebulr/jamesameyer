import React, { Component } from 'react';
import './Navbar.css';
import classNames from 'classnames';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = { openMenu : false, transform : false };
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll (event) {
    let scrollTop = event.srcElement.body.scrollTop,
        itemTranslate = Math.min(0, scrollTop - 60);
    this.setState({
      transform: (itemTranslate === 0)
    });
  }

  toggle() {
    this.setState ({ openMenu : !this.state.openMenu })
  }
  render () {
    var nestedMenu = classNames({
      'nested-menu' : true,
      'open' : this.state.openMenu
    });

    var menuVisible = classNames({
      'menu-items' : true,
      'menu-visible' : this.state.openMenu
    });

    var scrolledMenu = classNames({
      'menu' : true,
      'scroll' : this.state.transform
    })

    return (
      <nav className={scrolledMenu}>
        <div className="container-fluid">
          <div className="brand">
            <a href="https://nebulr.github.io/"> James A. Meyer </a>
          </div>
          <div className={nestedMenu}>
            <ul className={menuVisible} role="tablist">
              <li><a href="#home" className="link">Home</a></li>
              <li><a href="#about-me" className="link">About</a></li>
              <li><a href="#services" className="link">Services</a></li>
              <li><a href="#portfolio" className="link">Portfolio</a></li>
              <li><a href="#pencil-testimonials" className="link">Testimonials</a></li>
              <li><a href="#contact-me" className="link">contact</a></li>
              <li className="social"><a href="https://github.com/nebulr" target="_blank"><i className="fa fa-github"></i></a></li>
              <li className="social"><a href="https://github.com/nebulr" target="_blank"><i className="fa fa-linkedin"></i></a></li>
            </ul>
            <div className="menu-trigger" onClick={this.toggle.bind(this)}>
              <div className="menu-bar">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="text">
                <span>Menu</span>
                <span>Close</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;
