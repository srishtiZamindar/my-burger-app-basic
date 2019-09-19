import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />;
        });
        //to pull out the values of inner arrays and trade one array only which contains all these values,we add .reduce
    }).reduce((arr, el) => {
        return arr.concat(el); // loop through the element and add to this array
    }, []); // reduce is a built-in array function which allows us to transform an array into something else.    
    // It takes a function as an input and this function receives two arguments passed in automatically by javascript,the previous value and the current value.
    // The reduce method does not only accept these callback here which is executed on every element in this array we return here, it also accepts an initial value, like empty array []
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    console.log(transformedIngredients);

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;