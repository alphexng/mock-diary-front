import React from "react";
import classes from '../Header.module.css';
import NavItem from "./NavItem/NavItem";

const navList = props => {
	const unAuthList = {
		"/login": "Sign In"
	};
	const authList = {
		"/": "Welcome"
	};
	const actualList = props.authenticated ? authList : unAuthList;
	const list = Object.keys(actualList).map(key => {
		return <NavItem key={key} path={key} text={actualList[key]} />;
	});
	return (
		<nav className={classes.NavList}>
			<ul className={classes.NavList_List}>
                {list}
            </ul> 
		</nav>
	);
};

export default navList;
