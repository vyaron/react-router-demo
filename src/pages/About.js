import React, { Component } from 'react';


const About = ({ match }) => {
    return <h1>
        About {match.params.who}
        {(match.params.andWho) ? ` and ${match.params.andWho}` : ''}
    </h1>
}


export default About;