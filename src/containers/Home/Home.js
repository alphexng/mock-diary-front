import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Entries from "../../components/Entries/Entries";
import Footer from '../../components/Footer/Footer';

class Home extends Component {
	state = {
		entries: [
			{
				id: 1,
				date: "18th June 2019",
				text:
					"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis beatae laborum animi reiciendis impedit corporis vel magni nisi nesciunt sunt. Alias veritatis fugiat aspernatur, beatae illum numquam. Laboriosam, nisi ducimus?",
				tags: ["happy", "joy", "funny"]
			},
			{
				id: 2,
				date: "18th June 2019",
				text:
					"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis beatae laborum animi reiciendis impedit corporis vel magni nisi nesciunt sunt. Alias veritatis fugiat aspernatur, beatae illum numquam. Laboriosam, nisi ducimus?",
				tags: ["happy", "joy", "funny"]
			},
			{
				id: 3,
				date: "18th June 2019",
				text:
					"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis beatae laborum animi reiciendis impedit corporis vel magni nisi nesciunt sunt. Alias veritatis fugiat aspernatur, beatae illum numquam. Laboriosam, nisi ducimus?",
				tags: ["happy", "joy", "funny"]
			},
			{
				id: 4,
				date: "18th June 2019",
				text:
					"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis beatae laborum animi reiciendis impedit corporis vel magni nisi nesciunt sunt. Alias veritatis fugiat aspernatur, beatae illum numquam. Laboriosam, nisi ducimus?",
				tags: ["happy", "joy", "funny"]
			}
		]
	};
	render() {
		return (
			<React.Fragment>
				<Header />
				<Entries entries={this.state.entries} />
				<Footer />
			</React.Fragment>
		);
	}
}

export default Home;
