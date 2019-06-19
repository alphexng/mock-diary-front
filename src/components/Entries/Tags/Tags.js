import React from 'react';
import classes from '../Entries.module.css';

const tags = (props) => {
    const list = props.tags.map(tag => {
        return <article className={classes.Tag}>#{tag}</article>;
    });
    return (
        <div className={classes.Tags}>
            {list}
        </div>
    );
}   

export default tags;