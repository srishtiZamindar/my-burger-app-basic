import React from 'react';

import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    //const ingredientSummary = props.ingredients; // this ingrd is in obj format an dnot in [] so transform, use object.keys
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
                </li>);// salad is the igKey<li>Salad: 1 </li> <span > for uppercase first letter
        });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price}</strong></p>
            <p>Contine to checkout?</p>
            {/* <button>CANCEL</button>
            <button>CONTINUE</button> we can now use our custom button comp */}
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button  btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    );
};

export default orderSummary;