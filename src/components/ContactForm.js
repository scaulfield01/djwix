import React, {Component} from 'react';


class ContactFrom extends Component {
	render(){
		return (
			<div className="field is-grouped is-grouped-centered">
			  <p className="control">
			    <a className="button is-large" href="tel:+1-555-555-5555">
			      <span className="icon is-medium">
			        <i className="fas fa-phone"></i>
			      </span>
			      <span>Call Me</span>
			    </a>
			  </p>
			  <p className="control">
			    <a className="button is-large" target="_top" href="mailto:s.caulfield88@gmail.com" onClick={this.handleClick}>
			        <span className="icon is-medium">
			          <i className="fas fa-envelope"></i>
			        </span>
			        <span>Email</span>
			      </a>
			  </p>
			</div>
		)
	}
	handleClick(e){
		console.log(e)
		let emailTo = "s.caulfield88@gmail.com";
		let emailCC = "";
		let emailSub = "Hey DJ WIX!";
		let emailBody = "";
		// window.open("mailto:"+emailTo+'?cc='+emailCC+'&subject='+emailSub+'&body='+emailBody);
		window.location.href = "mailto:"+emailTo+'?cc='+emailCC+'&subject='+emailSub+'&body='+emailBody;
	}
}
export default ContactFrom;
    