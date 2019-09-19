import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}>
        {/* <img src="../../assets/images/burger-logo.png" /> */}
        {/* this wont work because in dev mode all the assets are bundled and optimized in diff folder 
        so the path will differ. Hence we should also make webpack aware of the fact that we're using this image and we're actually doing
        that by importing the image into our javascript file. */}
        <img
            src={burgerLogo}
            alt="MyBurger" />
    </div>
);

export default logo;