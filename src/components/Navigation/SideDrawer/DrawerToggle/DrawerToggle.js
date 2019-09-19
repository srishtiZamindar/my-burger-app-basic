import React from 'react';

import classes from './DrawerToggle.css';

const drawerToggle = (props) => (
    // to add hamburger icon
    // <div onClick={props.clicked}>Menu</div>
    <div className={classes.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;