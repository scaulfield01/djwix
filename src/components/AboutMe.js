import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class AboutMe extends Component {
    render() {
        return (
        	<div data-currenthook="Home">
		        <img className="AboutMe-photo" src={process.env.PUBLIC_URL + '/img/finalaboutmephoto.jpeg'} alt="poop"/>
		        <button onClick={this.props.handleClick}>back</button>
	        </div>
        );
    }
};

export default AboutMe