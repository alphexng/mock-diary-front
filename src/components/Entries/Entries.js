import React from "react";
import classes from './Entries.module.css';
import Entry from "./Entry/Entry";

const Entries = props => {
	const entries = props.entries.map(entry => {
		return (
			<Entry
				key={entry.id}
				date={entry.date}
				text={entry.text}
				tags={entry.tags}
			/>
		);
	});
	return (
        <section className={classes.Entries}>
            {entries}
        </section>
    );
};

export default Entries;
