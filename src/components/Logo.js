import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TweenLite from "gsap/TweenMax";

class Logo extends Component {
	componentDidMount() {
		var svg = document.querySelector("#svg");
		var mouse = svg.createSVGPoint();

		var leftEye = createEye("#left-eye");
		var rightEye = createEye("#right-eye");

		var requestId = null;

		window.addEventListener("mousemove", onMouseMove)

		function onFrame() {
		  
		  var point = mouse.matrixTransform(svg.getScreenCTM().inverse());
		  
		  leftEye.rotateTo(point);
		  rightEye.rotateTo(point);
		  
		  requestId = null;
		}

		function onMouseMove(event) {
		  mouse.x = event.clientX;
		  mouse.y = event.clientY;
		  
		  if (!requestId) {
		    requestId = requestAnimationFrame(onFrame);
		  }
		}

		function createEye(selector) {
		  
		  var element = document.querySelector(selector);
		  
		  TweenLite.set(element, {
		    transformOrigin: "center"
		  });
		  
		  var bbox = element.getBBox();
		  var centerX = bbox.x + bbox.width / 2;
		  var centerY = bbox.y + bbox.height / 2;
		  
		  function rotateTo(point) {
		    
		    var dx = point.x - centerX;
		    var dy = point.y - centerY;
		    
		    var angle = Math.atan2(dy, dx);
		    
		    TweenLite.to(element, 0.3, {
		      rotation: angle + "_rad_short"
		    });
		  }
		  
		  return {
		    element: element,
		    rotateTo: rotateTo
		  };
		}
	}

  render () {
    return ( 
	    <div className="Logo-Box">
	      <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 923.13 799.45">
      		<defs>
	      	</defs>
	      	<title>logosmaller</title>
	      	<g id="Layer_1" data-name="Layer 1">
	      		<polygon className="cls-1" points="692.35 0 230.78 0 0 399.73 230.78 799.45 692.35 799.45 923.13 399.73 692.35 0"/>
	      		<polygon className="cls-2" points="722.02 60.28 305.58 0.02 45.16 330.54 201.19 721.33 617.64 781.59 878.05 451.07 722.02 60.28"/>
	      		<polygon className="cls-3" points="687.44 143.07 780.59 465.62 547.83 707.56 221.92 626.95 128.77 304.41 361.53 62.47 687.44 143.07"/>
	      		<polygon className="cls-1" points="454.92 115.46 688.41 250.26 688.41 519.87 454.92 654.67 221.43 519.87 221.43 250.26 454.92 115.46"/>
	      		<path className="cls-4" d="M499.31,564.63a28.41,28.41,0,0,1,.52-3.8c2.07-7.42,2.53-14.83-.48-22.08a12.9,12.9,0,0,0-3.67-5c-5.4-4.33-6.69-10.34-7.4-16.66a13.61,13.61,0,0,1-.07-2.63A47.51,47.51,0,0,0,482,486.75c-3.37-6.11-4.56-13.5-6.25-20.44-.55-2.26.47-4.89.65-7.36.34-4.87.48-9.75.9-14.61,1.38-15.84,4.5-31.13,11.88-45.53,3.44-6.7,4.68-14.5,7.26-21.68,1.43-4,2.6-8.88,5.56-11.37,6.22-5.23,7.87-12.79,11.86-19.09a4,4,0,0,0,.8-1.7c.38-7.58,5.18-13.21,9-19a74.17,74.17,0,0,1,24.65-23.8c7.41-4.34,15.56-6.69,23-10.7,2.59-1.39,5.65-1.91,8.5-2.81,3.82-1.21,7.77-2.12,11.44-3.67,5.52-2.33,11.09-4,17.14-3.57a12.25,12.25,0,0,0,2.64,0c14.34-2.24,28.16,1.79,42.21,3.25a45.63,45.63,0,0,1,23.12,9c8.83,6.55,17.61,13.18,26.44,19.74a11.31,11.31,0,0,0,3,1.58,13.19,13.19,0,0,1,8.59,8.29,26.87,26.87,0,0,0,9.27,12.53c2.36,1.74,4,4.45,6,6.64,2.39,2.55,5,4.9,7.3,7.52,5.47,6.19,11.05,12.3,16.15,18.79,4.87,6.21,9.41,12.71,13.7,19.33,5.45,8.39,10.31,17.15,15.79,25.51,4.73,7.21,10.31,13.87,14.88,21.17,3.19,5.11,5.41,10.84,7.85,16.39,1.3,2.93,2.78,6,3.08,9.11a233.1,233.1,0,0,1,1.47,26.65c-.08,4.35-2.1,8.72-3.56,13-1.85,5.38-4.65,10.51-5.92,16-2.34,10-3.87,20.29-5.73,30.45-.11.6.09,1.42-.24,1.81-3.62,4.25-4.63,10.54-11.16,12.59-4.6,1.45-8.24,5.09-13.54,5.74-4.31.53-6.85,4.6-8.14,8.67-2.65,8.36-4.95,16.83-7.43,25.24a6.71,6.71,0,0,1-1.38,3c-3.74,3.44-4.76,8.07-6.21,12.64s-3.67,8.73-5.39,13.14c-.94,2.42-1.51,5-2.36,7.45a19.28,19.28,0,0,1-1.93,4.46c-3,4.49-6.07,8.88-9.13,13.31a3.84,3.84,0,0,1-.67.9c-8,6.16-9.45,16.56-15.45,24-1.62,2-3.27,4-5,5.93-1.93,2.09-4.43,3.8-5.93,6.15-4.38,6.92-9.38,13.43-16,18-5.54,3.82-10.44,8.61-17.21,11-3.19,1.13-6.47,2.37-9.78,3.34a78.09,78.09,0,0,1-10.91,2.91c-2.86.4-5.86-.21-8.79-.46-8.44-.74-16.87-2.08-25.32-2.15-7.51-.06-13.43-2.59-19.11-7.25-3.31-2.73-7.8-4-11.4-6.4a34.93,34.93,0,0,1-7.46-7,140.57,140.57,0,0,1-10.79-14.83c-3.54-5.82-6.37-12.08-9.52-18.14a3.15,3.15,0,0,0-.83-1.23c-5.11-3.14-4.71-8.7-6.1-13.52S544,646,542.7,641a68.59,68.59,0,0,1-1.63-11.73c-.57-7.15-2.59-13.9-6.8-19.6-1.78-2.42-5.33-3.56-8.12-5.2-3.38-2-3.63-3-1.3-6.06s2.12-6.6,0-10.72a20.74,20.74,0,0,1-2.24-8.68c-.1-4.52-.33-5.63-4.89-6.44-3.23-.59-4.74-2.08-5.27-5.31-.59-3.62-2.93-4.72-6.5-3.79C504,564,501.87,564.2,499.31,564.63Z" transform="translate(-178.87 -113)"/>
	      		<path className="cls-4" d="M724.24,371.25c-3.42,1.92-6,3.67-8.88,4.92-5.23,2.31-10.53,4.52-15.93,6.36-2.54.86-5.61.26-8.07,1.23-7.71,3-15.69,4.07-23.87,4.62A170.12,170.12,0,0,0,647,390.92c-8.49,1.64-15.43,6.26-21.29,12.64a25,25,0,0,1-6.15,4.82c-4.37,2.45-8.89,4.64-13.44,6.75-2.94,1.37-6,2.46-9.07,3.56-6,2.16-12.11,4.09-18,6.45-1.72.68-3,2.48-4.44,3.83-2.36,2.2-4.65,4.47-7,6.67-1.49,1.38-3.06,2.68-4.58,4l.21,1.43c2.54.7,5.05,1.84,7.63,2,12.22.87,24.6.25,36.27,5.27,3.27,1.41,5.1,3.67,4.91,9-.11,2.87-2.18,4.27-4.86,4.09-6.59-.44-13.15-1.27-19.75-1.7-10.24-.65-20.5-1.64-30.73-1.38-4.8.12-9.63,2.54-14.25,4.41a9.73,9.73,0,0,0-6.37,7.89c-1.35,12.31-5.17,23.93-8.91,35.65a164.67,164.67,0,0,0-5.68,24.51c-.94,6,1.14,11.59,3.42,17.37,2.7,6.86,3.77,14.58,4.3,22,.61,8.65,2.82,16.74,5.3,24.94s6,15.82,12.83,21.53c3,2.53,9,2.42,11.36-.77a88.27,88.27,0,0,0,6.66-9.51c4.9-8.79,11.68-14.8,21.83-16.83a10,10,0,0,0,5.53-3.88c4.81-6.83,9.24-9.9,16.9-7.34,2.61.87,5.31,1.53,7.84,2.6,11.36,4.78,22.48,3.69,33.44-1.26,5.5-2.48,9.23-2.25,12.5,2.41,4.49,6.4,11.94,8.9,18.76,11.77,6,2.51,11.94,4.54,14.16,11.37,1.61,5,2.93,10,4.4,15,2.33,7.92.21,17,6.89,23.88,3.31,3.42,4.38,4.55,8.78,2.4A31.53,31.53,0,0,0,733,627.17a74.35,74.35,0,0,1,2.84-7.35c2.45-5.43,6-10.6,7.29-16.28,1.67-7.39,1.54-15.18,2.3-22.79a80.78,80.78,0,0,1,1.51-9.92c1.11-4.73,2.79-9.32,3.8-14.07,2.87-13.39,1.76-27,1.89-40.55a54.23,54.23,0,0,0-.72-8.23c-.15-1.06-.68-2.74-1.36-2.92-2.77-.71-2.27-3-2.65-4.78-.46-2.2-.51-4.51-1.19-6.62-1.44-4.5-3.72-8.79-4.63-13.37-1-5.12-.89-10.46-1.21-15.7-.51-8.44-.86-16.89-1.47-25.32-.85-11.66-5.66-22.25-9.14-33.21-3.18-10-6.5-20.08-5.4-30.88C725,374.13,724.53,373,724.24,371.25Z" transform="translate(-178.87 -113)"/>
	      		<path className="cls-4" d="M579.93,626.27c-.52,6.43,1.93,11.5,7.4,14.77a161.33,161.33,0,0,0,15.93,8.28c1,.48,3.14-.72,4.47-1.58,2.31-1.47,4.2-4.26,6.62-4.77,5.07-1.05,10.38-1,15.59-1.33,2.72-.16,5.45-.17,8.17-.13s5.6-.39,8,.49c3.81,1.4,7.22,3.85,10.92,5.57a9.57,9.57,0,0,0,4.67.64c1.72-.15,3.37-1,5.09-1.29,6.8-1.24,9.6-6.77,12.22-12,1.12-2.24,1.35-6,.16-8.06-1.64-2.79-4.84-4.82-7.7-6.69-2.57-1.69-5.57-2.74-8.39-4a30.44,30.44,0,0,0-5.17-2.23c-5.19-1.27-10.44-2.32-15.66-3.46a52,52,0,0,0-22.78.11c-11,2.47-21.67,6.2-33.16,5.91-4.06-.1-6.63,3.41-6.4,7.58C580,624.77,579.93,625.52,579.93,626.27Z" transform="translate(-178.87 -113)"/>
	      		<path className="cls-5" d="M724.24,371.25c.29,1.79.71,2.88.6,3.93-1.1,10.8,2.22,20.89,5.4,30.88,3.48,11,8.29,21.55,9.14,33.21.61,8.43,1,16.88,1.47,25.32.32,5.24.21,10.58,1.21,15.7.91,4.58,3.19,8.87,4.63,13.37.68,2.11.73,4.42,1.19,6.62.38,1.82-.12,4.07,2.65,4.78.68.18,1.21,1.86,1.36,2.92a54.23,54.23,0,0,1,.72,8.23c-.13,13.54,1,27.16-1.89,40.55-1,4.75-2.69,9.34-3.8,14.07a80.78,80.78,0,0,0-1.51,9.92c-.76,7.61-.63,15.4-2.3,22.79-1.3,5.68-4.84,10.85-7.29,16.28a74.35,74.35,0,0,0-2.84,7.35,31.53,31.53,0,0,1-16.66,19.42c-4.4,2.15-5.47,1-8.78-2.4-6.68-6.92-4.56-16-6.89-23.88-1.47-5-2.79-10-4.4-15-2.22-6.83-8.2-8.86-14.16-11.37-6.82-2.87-14.27-5.37-18.76-11.77-3.27-4.66-7-4.89-12.5-2.41-11,5-22.08,6-33.44,1.26-2.53-1.07-5.23-1.73-7.84-2.6-7.66-2.56-12.09.51-16.9,7.34a10,10,0,0,1-5.53,3.88c-10.15,2-16.93,8-21.83,16.83a88.27,88.27,0,0,1-6.66,9.51c-2.4,3.19-8.33,3.3-11.36.77-6.84-5.71-10.31-13.2-12.83-21.53s-4.69-16.29-5.3-24.94c-.53-7.43-1.6-15.15-4.3-22-2.28-5.78-4.36-11.41-3.42-17.37a164.67,164.67,0,0,1,5.68-24.51c3.74-11.72,7.56-23.34,8.91-35.65a9.73,9.73,0,0,1,6.37-7.89c4.62-1.87,9.45-4.29,14.25-4.41,10.23-.26,20.49.73,30.73,1.38,6.6.43,13.16,1.26,19.75,1.7,2.68.18,4.75-1.22,4.86-4.09.19-5.36-1.64-7.62-4.91-9-11.67-5-24-4.4-36.27-5.27-2.58-.19-5.09-1.33-7.63-2l-.21-1.43c1.52-1.34,3.09-2.64,4.58-4,2.36-2.2,4.65-4.47,7-6.67,1.43-1.35,2.72-3.15,4.44-3.83,5.93-2.36,12-4.29,18-6.45,3.05-1.1,6.13-2.19,9.07-3.56,4.55-2.11,9.07-4.3,13.44-6.75a25,25,0,0,0,6.15-4.82c5.86-6.38,12.8-11,21.29-12.64a170.12,170.12,0,0,1,20.52-2.54c8.18-.55,16.16-1.58,23.87-4.62,2.46-1,5.53-.37,8.07-1.23,5.4-1.84,10.7-4,15.93-6.36C718.2,374.92,720.82,373.17,724.24,371.25Zm13.68,92.36a11.65,11.65,0,0,0-5.14-9.66c-6.18-4.69-12.46-9.28-18.4-14.27-2.37-2-4.69-2.82-7.54-2.34-10.87,1.86-21.75,3.7-32.59,5.73-4.8.91-9.51,2.26-14.26,3.42-3.41.83-7,1.29-10.15,2.7-1.47.66-2.35,3.1-3,4.91-.17.48,1.61,2.35,2.51,2.36,8.58.09,17.17.11,25.73-.24a110.61,110.61,0,0,0,15.29-1.74c13-2.34,25.06,2.07,37.29,5.1,2.46.61,4.66,2.2,7,3.23A20.14,20.14,0,0,0,737.92,463.61ZM558.65,480.72c1.17,1.74,1.76,2.51,2.23,3.34,3.22,5.75,5.62,6.95,12.22,6.06,7.88-1.07,10.14-3.13,11.86-10.6a4.15,4.15,0,0,1,1.52-2.26c2.45-1.73,1.45-3-.65-3.41a60.85,60.85,0,0,0-11.43-1.53c-9.84-.07-18.76,3.55-27.48,7.67-.85.4-1.31,1.62-1.94,2.47a18.28,18.28,0,0,0-1.51,2.13c-.82,1.55-1.56,3.15-2.33,4.73,1.15.47,2.29,1,3.46,1.41a9.16,9.16,0,0,0,2.15.59c3.06.35,5.41-.16,6.81-3.59C554.53,485.32,556.66,483.38,558.65,480.72Zm146.93-.33c3-1.24,4.39,1,5.58,3a8.37,8.37,0,0,0,9.37,4.35c-3.53-7.78-9.91-12.34-17.82-15.12-8.12-2.85-16-2.64-23.24,1.12.8,1.69,1.82,2.93,1.92,4.23.53,7.14,4.41,11.16,11.37,12.1S704.12,486.53,705.58,480.39Z" transform="translate(-178.87 -113)"/>
	      		<path className="cls-5" d="M579.93,626.27c0-.75,0-1.5,0-2.25-.23-4.17,2.34-7.68,6.4-7.58,11.49.29,22.2-3.44,33.16-5.91a52,52,0,0,1,22.78-.11c5.22,1.14,10.47,2.19,15.66,3.46a30.44,30.44,0,0,1,5.17,2.23c2.82,1.3,5.82,2.35,8.39,4,2.86,1.87,6.06,3.9,7.7,6.69,1.19,2,1,5.82-.16,8.06-2.62,5.25-5.42,10.78-12.22,12-1.72.31-3.37,1.14-5.09,1.29a9.57,9.57,0,0,1-4.67-.64c-3.7-1.72-7.11-4.17-10.92-5.57-2.41-.88-5.32-.45-8-.49s-5.45,0-8.17.13c-5.21.31-10.52.28-15.59,1.33-2.42.51-4.31,3.3-6.62,4.77-1.33.86-3.42,2.06-4.47,1.58A161.33,161.33,0,0,1,587.33,641C581.86,637.77,579.41,632.7,579.93,626.27Z" transform="translate(-178.87 -113)"/>
	      		<path className="cls-4" d="M737.92,463.61a20.14,20.14,0,0,1-3.2-.8c-2.36-1-4.56-2.62-7-3.23-12.23-3-24.27-7.44-37.29-5.1a110.61,110.61,0,0,1-15.29,1.74c-8.56.35-17.15.33-25.73.24-.9,0-2.68-1.88-2.51-2.36.61-1.81,1.49-4.25,3-4.91,3.16-1.41,6.74-1.87,10.15-2.7,4.75-1.16,9.46-2.51,14.26-3.42,10.84-2,21.72-3.87,32.59-5.73,2.85-.48,5.17.35,7.54,2.34,5.94,5,12.22,9.58,18.4,14.27A11.65,11.65,0,0,1,737.92,463.61Z" transform="translate(-178.87 -113)"/>
	      		<path className="cls-4" d="M558.65,480.72c-2,2.66-4.12,4.6-5.09,7-1.4,3.43-3.75,3.94-6.81,3.59a9.16,9.16,0,0,1-2.15-.59c-1.17-.43-2.31-.94-3.46-1.41.77-1.58,1.51-3.18,2.33-4.73a18.28,18.28,0,0,1,1.51-2.13c.63-.85,1.09-2.07,1.94-2.47,8.72-4.12,17.64-7.74,27.48-7.67a60.85,60.85,0,0,1,11.43,1.53c2.1.43,3.1,1.68.65,3.41a4.15,4.15,0,0,0-1.52,2.26c-1.72,7.47-4,9.53-11.86,10.6-6.6.89-9-.31-12.22-6.06C560.41,483.23,559.82,482.46,558.65,480.72Z" transform="translate(-178.87 -113)"/>
	      		<path className="cls-4" d="M705.58,480.39c-1.46,6.14-5.77,10.61-12.82,9.66s-10.84-5-11.37-12.1c-.1-1.3-1.12-2.54-1.92-4.23,7.25-3.76,15.12-4,23.24-1.12,7.91,2.78,14.29,7.34,17.82,15.12a8.37,8.37,0,0,1-9.37-4.35C710,481.35,708.61,479.15,705.58,480.39Z" transform="translate(-178.87 -113)"/>
	      		</g>
	      	
	      		<g id="left-eye">
	      			<circle className="eye-outer" cx="395.13" cy="369" r="8"/>
	      			<circle className="eye-inner" cx="397.63" cy="370.5" r="3.5"/>
	      		</g>
	      		<g id="right-eye">
	      			<circle className="eye-outer" cx="515.13" cy="369" r="8"/>
	      			<circle className="eye-inner" cx="517.63" cy="370.5" r="3.5"/>
	      		</g>
	      	</svg>
	    </div>
    );
  }
}

export default Logo;