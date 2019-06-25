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
  	    	<div>
  					<Logo/>
  					<MenuHexagonButton handleClick={this.handleClick}/>
  	    	</div>
		    );
		    break;
		  case "about":
		    elementToShow = (
		    	<div>
		    		<AboutMe handleClick={this.handleClick}/>
		    	</div>
		    );
		    break;
		  case "contact":
		    elementToShow = (
		    	<div>
		    		<ContactForm handleClick={this.handleClick}/>
		    	</div>
		    );
		    break;
		  case "media":
		    elementToShow = (
					<div>
		    		<Gallery handleClick={this.handleClick}/>
		    	</div>
		    );
		    break;
		  default:
				elementToShow = (
					<div>
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
		debugger
		this.setState({view: e.currentTarget.id});
	}
}

export default App;
