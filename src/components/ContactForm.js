import React, {Component} from 'react';


class ContactFrom extends Component {
	render(){
		return (
			<div data-currenthook="Home">
				<a className="button is-large" href="tel:+1-555-555-5555">number</a>
				<a className="button is-large" target="_top" href="mailto:s.caulfield88@gmail.com" onClick={this.handleClick}>email</a>
				<button onClick={this.props.handleClick}>back</button>
			</div>
		)
	}
	handleClick(e){
		let emailTo = "s.caulfield88@gmail.com";
		let emailCC = "";
		let emailSub = "Hey DJ WIX!";
		let emailBody = "";
		window.location.href = "mailto:"+emailTo+'?cc='+emailCC+'&subject='+emailSub+'&body='+emailBody;
	}
}
export default ContactFrom;
    