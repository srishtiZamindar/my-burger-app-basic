import React from 'react';

import classes from './Button.css';

const button = (props) => (
    <button
        className={[classes.Button, classes[props.btnType]].join(' ')}
            //in the class name here, we have to pass the string in the end, so we add an array because I always want to assign the button class but then conditionally add the
            //success or danger class, classes.Button is one element of this array, and then classes so we can dynamically pull out a certain type with props button type 
            //for example, button type is a prop I have to set through outside and button type will have to be either Danger with a capital D or a Success with a capital S.
        onClick={props.clicked}>{props.children}</button>
);

export default button;