import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


//we typically name constants you want to use as global constants in all capital characters.
const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 1.3,
    cheese: 0.7,
    meat: 0.4
};

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { ...}  //this because inside a method
    // }  or 

    state = {
        ingredients: { // this is an object not an array so cant use .map in Burger.js
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
           
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
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    }

    removeIngredientHandler = (type) => {// hook this handler to LESS button on controls
        // this below logic will throw an error when there is no ingrd to be removed as the value of salad becomes -1 and we cant create an array to render from a negative value.
        // so we add and if condition
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;  //return so that nothing happens
        }// to pass some information about which button should be enabled and which button should be disabled to my build controls go to render and create disabledInfo
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients // distributr the properties of this.state.ingrd which is the ingredients object in state above so copied  in an immutable way
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0  // disabledInfo[key] is value of each key in ingrd object in state
        } // this wil be true or false {salad: true, meat: false etc } so we need to know the type of control so we will use (ctrl.type)
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler} 
                    disabled={disabledInfo}
                    price={this.state.totalPrice}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;