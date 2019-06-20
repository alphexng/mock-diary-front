import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import classes from "../Entries.module.css";
import Tags from "../Tags/Tags";

class Entry extends Component {
	state = {
		redirect: false
	};
	toggleRedirect = () => {
		this.setState({ redirect: !this.state.redirect });
	};
	render() {
		const redirectPage = <Redirect to={`/single-entry/${this.props.id}`} />;
		return (
			<React.Fragment>
				{this.state.redirect ? redirectPage : null}
				<article className={classes.Entry} onClick={this.toggleRedirect}>
					<div className={classes.Entry_Top}>
						<Tags tags={this.props.tags} />
						<h3>{this.props.date}</h3>
					</div>
					<p>{this.props.text}</p>
				</article>
			</React.Fragment>
		);
	}
}

export default Entry;
