import React from "react";
import classes from '../Entries.module.css';
import Tags from "../Tags/Tags";

const entry = props => {
	return (
		<article className={classes.Entry}>
			<div className={classes.Entry_Top}>
				<Tags tags={props.tags}/>
				<h3>{props.date}</h3>
			</div>
			<p>
				{props.text}
			</p>
		</article>
	);
};

export default entry;
