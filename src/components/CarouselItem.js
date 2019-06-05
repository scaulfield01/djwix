import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

class CarouselItem extends Component {
    render() {
        return (
        	<div>
	        	<Carousel arrows infinite>
	            <img src={process.env.PUBLIC_URL + '/img/finalbridalshower.jpg'} alt="poop"/>
	            <img src={process.env.PUBLIC_URL + '/img/finalgreatimage.jpg'} alt="poop"/>
	            <img src={process.env.PUBLIC_URL + '/img/finaldancefloor.jpg'} alt="poop"/>
	            <img src={process.env.PUBLIC_URL + '/img/finalKrisWed.jpg'} alt="poop"/>
	            <img src={process.env.PUBLIC_URL + '/img/finalstrocke.jpg'} alt="poop"/>
	            <img src={process.env.PUBLIC_URL + '/img/finalblackwhite.jpg'} alt="poop"/>
	          </Carousel>
          </div>
        );
    }
};

export default CarouselItem
