import React, { Component } from 'react';

class Gallery extends Component {
    render() {
        return (
        	<div>
        	<div data-currenthook="Home" classname="gallery">
	            <img className="gallery-pics" src={process.env.PUBLIC_URL + '/img/finalbridalshower.jpg'} alt="poop"/>
	            <img className="gallery-pics" src={process.env.PUBLIC_URL + '/img/finalgreatimage.jpg'} alt="poop"/>
	            <img className="gallery-pics" src={process.env.PUBLIC_URL + '/img/finaldancefloor.jpg'} alt="poop"/>
	            <video autoPlay controls preload muted loop>
  								<source className="gallery-pics" src={process.env.PUBLIC_URL + '/img/dancingwedding.mp4'}  type="video/mp4" />
									Your browser does not support the video tag.
							</video>
	            <img className="gallery-pics" src={process.env.PUBLIC_URL + '/img/finalKrisWed.jpg'} alt="poop"/>
	            <img className="gallery-pics" src={process.env.PUBLIC_URL + '/img/finalstrocke.jpg'} alt="poop"/>
	            <video autoPlay controls preload muted loop>
  								<source className="gallery-pics" src={process.env.PUBLIC_URL + '/img/groomsmenvid.mp4'}  type="video/mp4" />
									Your browser does not support the video tag.
							</video>
	            <img className="gallery-pics" src={process.env.PUBLIC_URL + '/img/finalblackwhite.jpg'} alt="poop"/>
          </div>
    			<div data-currenthook="home" className="hexagon-wrapper" onClick={this.props.handleClick}>
	        		<div id="color2" className="hexagon">
	        			<p className="hexagon-wrapper-paragrapgh">Back</p>
	        		</div>
        	</div>
        	</div>
        );
    }
};

export default Gallery