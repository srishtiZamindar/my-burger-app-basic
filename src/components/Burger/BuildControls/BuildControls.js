import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

//array for which I can loop to build all these build controls and render them.

const controls = [
    { label: 'Salad', type: 'salad' }, // types should match the switch case types in burgetInredient component
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl => (
            <BuildControl key={ctrl.label}  label={ctrl.label}/>
        ))}
    </div>
);

export default buildControls;