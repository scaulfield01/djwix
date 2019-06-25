import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class AboutMe extends Component {
    render() {
        return (
        	<section>
	        	<div className="aboutme-container" data-currenthook="Home">
			        <img className="aboutme-item" src={process.env.PUBLIC_URL + '/img/finalaboutmephoto.jpeg'} alt="poop"/>
							<article className="aboutme-item">
								<h1>What Does WWF Do?</h1>
								<p>WWF's mission is to stop the degradation of our planet's natural environment,
								and build a future in which humans live in harmony with nature.</p>
							</article>
		        </div>
		        <div data-currenthook="Home" className="hexagon-wrapper aboutme-item" onClick={this.props.handleClick}>
	        		<div id="color2" className="hexagon">
	        			<p className="hexagon-wrapper-paragrapgh">Back</p>
	        		</div>
        		</div>
    			</section>
        );
    }
};

export default AboutMe