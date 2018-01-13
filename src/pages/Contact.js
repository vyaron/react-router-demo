import React from 'react';
import logo from '../logo.svg';


const Contact = ({ match }) => (
    <section className="contact">
        <h1>
            Contact {match.params.at}
        </h1>
        <img src={logo} alt="Logo" />


    </section>
)

export default Contact;