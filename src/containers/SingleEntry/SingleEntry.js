import React, { Component } from "react";
import ContentEditable from "react-contenteditable";
import classes from "./SingleEntry.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/UI/Button/Button";

class SingleEntry extends Component {
	state = {
		entry: {
			id: 1,
			date: "18th June 2019",
			text:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis beatae laborum animi reiciendis impedit corporis vel magni nisi nesciunt sunt. Alias veritatis fugiat aspernatur, beatae illum numquam. Laboriosam, nisi ducimus?",
			tags: ["happy", "joy", "funny"]
		},
		editing: false
	};

	editEntry = () => {
		this.setState({ editing: true });
	};

	updateEntryText = e => {
		const entry = { ...this.state.entry };
		entry.text = e.target.value;
		this.setState({ entry });
	};

	render() {
		return (
			<React.Fragment>
				<Header />
				<main className={classes.SingleEntry}>
					<p className={classes.EntryDate}>Date: {this.state.entry.date}</p>
					<ContentEditable
						tagName="p"
						html={this.state.entry.text}
						className={classes.Entry}
						onChange={this.updateEntryText}
						disabled={!this.state.editing}
					/>
					{this.state.editing ? (
						<div className={classes.RightBottom}>
							<Button text="Delete" />
							<Button text="Save" />
						</div>
					) : (
						<Button text="Edit" clicked={this.editEntry} />
					)}
				</main>
				<Footer />
			</React.Fragment>
		);
	}
}

export default SingleEntry;
