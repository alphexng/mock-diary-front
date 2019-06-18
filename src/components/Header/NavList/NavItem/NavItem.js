import React from 'react';
import { Link } from "react-router-dom";
import classes from '../../Header.module.css';


const navItem = (props) => {
    return <li className={classes.NavList_Item}><Link to={props.path}>{props.text}</Link></li>;
};  

export default navItem;