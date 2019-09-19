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
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                // type={ctrl.type} //this is an extra loop so we can omit this and add a funct below
                // added={props.ingredientAdded}
                added={() => props.ingredientAdded(ctrl.type)} // this added will be heard by onClick listener in buildcontrol in more button
            />
        ))}
    </div>
);

export default buildControls;