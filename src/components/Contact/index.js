import React, { Component } from 'react';

import './Contact.css';

class Contact extends Component {
  render () {
    return (
      <section id="contact-me">
        <div className="container">
            <h2 className="background">contact me</h2>
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="contact-me-nested">
                        <form name="ajax-form" id="ajax-form" action="mail-it.php" method="post">
                            <div className="col-lg-5">
                                <div className="form-filed-container"> <span className="error-name">please enter name</span> <input name="name" id="name" type="text" placeholder="Name *" /></div>
                            </div>
                            <div className="col-lg-7">
                                <div className="form-filed-container"> <span className="error-emailEmpty">please enter e-mail</span> <span className="error-notValid">e-mail is not a valid format</span> <input name="email" id="email" type="email" placeholder="Email *" /></div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-filed-container"><textarea name="message" id="message" placeholder="Your Message"></textarea></div>
                            </div>
                            <div className="col-lg-12"> <button className="send_message" id="send_message">Send</button></div>
                        </form>
                    </div>
                    <div className="success">
                        <h4> Message Sent Successfully</h4>
                    </div>
                </div>
            </div>
        </div>
        <section id="map"></section>
      </section>
    )
  }
}

export default Contact;
