import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    // since the ingred. props coming from burgerbuilder.js is an object not an array we need to convert it to array

    //this is a way to transform an object of key value pairs into an array of burger ingredients
    //where the value of that object is important to decide how many ingredients are needed and the keys
    //important for which type of ingredient needed.

    //It has a keys method which extracts the keys of a given object and turns that into an array, so it gives you an array of the keys.
    const transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {    // _ is for blank and i for index   // array(length) [ , ] array with two empty spaces
            return <BurgerIngredient key={igKey + i} type={igKey} />;   // igKey is like salad and i is like 1 or 2
        }); //maps the  object into an array of ingredients in the end
    });

    // now we can return transformedingrd in place of chese and meat
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            {/* <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" /> */}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;