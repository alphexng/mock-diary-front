import React, { Component } from 'react';
import classes from './Header.module.css';
import NavList from './NavList/NavList';

class Header extends Component {
    render(){
        return (
            <header className={classes.Header}>
                <h1 className={classes.Logo}>Diary</h1>
                <NavList />
            </header>
        );
    }
}

export default Header;