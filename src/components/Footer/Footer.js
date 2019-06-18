import React from 'react';
import classes from './Footer.module.css';

const footer = (props) => {
    return (
        <footer className={classes.Footer}>
            <p>&copy; 2019 Diary App</p>
        </footer>
    );
}           

export default footer;