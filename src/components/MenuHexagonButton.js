import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class MenuHexagonButton extends Component {
    render(){
    	const hexes = [
    	    {id:'About',key: 1},
    	    {id:'Contact', key: 2},
    	    {id:'Gallery', key: 3},
    	];
      return <div>
      	{hexes.map(i =>
      			<div id={i.id} key={i.key} data-currenthook={i.id} className="hexagon-wrapper" onClick={this.props.handleClick}>
	        		<div id="color2" className="hexagon">
	        			<p className="hexagon-wrapper-paragrapgh">{i.id}</p>
	        		</div>
	        	</div>
      	)}
      </div>
    }
};

export default MenuHexagonButton;