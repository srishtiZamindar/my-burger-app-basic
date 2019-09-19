import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
        totalPrice: 4,
        purchasable: false
    }

    //to determine if wwe need to disable the order now button
    // updatePurchaseState() {
    //     // create a copy of ingrd
    //     const ingredients = {
    //         ...this.state.ingredients
    //     };

    updatePurchaseState(ingredients) { // ingredients passed to use updated ingrs for the handlers so we can use 'ingredients' instead of the copy we created above
        // convert this object into an array again
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey] //igKey is salad, bacon and so on so we get number values
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0); // we call reduce not to flatten array but to get sum of all numbers
        this.setState({ purchasable: sum > 0 });
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
        //to activate the order now button when adding ingrds
        // this.updatePurchaseState(); // this will enable the ordernow button only after two ingrds are selected so we need to pass updatedingredients
        //and pass ingredinet to the handler above
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
        //to de activate the order now button when adding ingrds
        // this.updatePurchaseState(); // this will keep the order now button enabled even after removing all the ingrds so we need to pass updatedingredients 
        //and pass ingredinet to the handler above
        this.updatePurchaseState(updatedIngredients);
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
                <Modal>
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    price={this.state.totalPrice} />
            </Aux>
        );
    }
}

export default BurgerBuilder;