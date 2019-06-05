import React, {Component} from 'react';
import Logo from './components/Logo';
import MenuHexagonButton from './components/MenuHexagonButton';
import AboutMe from './components/AboutMe';
import ContactForm from './components/ContactForm';
import Gallery from './components/Gallery';
import './App.css';


class App extends Component {
	constructor(props) {
	  super(props);
	  this.state = { view: "Home" }; // Home, About, Contact, Gallery
	  this.handleClick = this.handleClick.bind(this);
	}
	render(){
		let elementToShow = (<div>Blank</div>);
		switch(this.state.view) {
		  case "Home":
		    elementToShow = (
  	    	<div className="menu-container">
  					<Logo/>
  					<MenuHexagonButton handleClick={this.handleClick}/>
  	    	</div>
		    );
		    break;
		  case "About":
		    elementToShow = (
		    	<div className="menu-container">
		    		<AboutMe handleClick={this.handleClick}/>
		    	</div>
		    );
		    break;
		  case "Contact":
		    elementToShow = (
		    	<div className="menu-container">
		    		<ContactForm handleClick={this.handleClick}/>
		    	</div>
		    );
		    break;
		  case "Gallery":
		    elementToShow = (
					<div className="menu-container">
		    		<Gallery handleClick={this.handleClick}/>
		    	</div>
		    );
		    break;
		  default:
				elementToShow = (
					<div className="menu-container">
						<Logo/>
						<MenuHexagonButton handleClick={this.handleClick}/>
					</div>
				);
		}
		  return (
		    <div className="App">
		    	{elementToShow}
		    </div>
		  );
	}
	handleClick(e){
		e.preventDefault();
		this.setState({view: e.currentTarget.dataset.currenthook});
	}
}

export default App;
