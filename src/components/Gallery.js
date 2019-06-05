import React, { Component } from 'react';

class Gallery extends Component {
    render() {
        return (
        	<div data-currenthook="Home">
	            <img src={process.env.PUBLIC_URL + '/img/finalbridalshower.jpg'} alt="poop"/>
	            <img src={process.env.PUBLIC_URL + '/img/finalgreatimage.jpg'} alt="poop"/>
	            <img src={process.env.PUBLIC_URL + '/img/finaldancefloor.jpg'} alt="poop"/>
	            <img src={process.env.PUBLIC_URL + '/img/finalKrisWed.jpg'} alt="poop"/>
	            <img src={process.env.PUBLIC_URL + '/img/finalstrocke.jpg'} alt="poop"/>
	            <img src={process.env.PUBLIC_URL + '/img/finalblackwhite.jpg'} alt="poop"/>
	            <button onClick={this.props.handleClick}>back</button>
          </div>
        );
    }
};

export default Gallery