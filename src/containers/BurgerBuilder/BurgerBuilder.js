import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


//we typically name constants you want to use as global constants in all capital characters.
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 1.3,
    meat: 0.7,
    bacon: 0.4
};

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { ...}  //this because inside a method
    // }  or 

    state = { 
        ingredients: { // this is an object not an array so cant use .map in Burger.js
            salad: 0,
            cheese: 0,
            meat: 0,
            bacon: 0
        },
        totalPrice: 4
    }

    // will receive type to know which type to add
    addIngredientHandler = (type) => { // hook this handler to MORE button on controls
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        //state should be upgraded in an imutable way
        const updatedIngredients = {
            ...this.state.ingredients  // ... to distribute the properties of old ingrd state to new object
        };
        updatedIngredients[type] = updatedCount;
        //this setState to update ingredients in state. 
        // to update price we need to have a mapping of which ingredient costs what, so create constant, outside of the class but in the same file INGREDIENT_PRICES
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients}); 

    }

    removeIngredientHandler = (type) => {
        
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}/>
                {/* <div>Build Controls</div> */}
            </Aux>
        );
    }
}

export default BurgerBuilder;