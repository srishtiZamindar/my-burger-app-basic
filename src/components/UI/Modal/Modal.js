import React, { Component } from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

//change to class comp
class Modal extends Component {
    // react.memo can also be used
    shouldComponentUpdate(nextProps, nextState) {
        // only updates if show changes

        // if(nextProps.show !== this.props.show) {
        //     return true;
        // }
        //or
        return nextProps.show !== this.props.show;
    }

    componentWillUpdate() {
        console.timeLog('[Modal] willUpdate');
    }

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                >
                    {this.props.children}
                </div>
            </Aux>
        );
    }

}

export default Modal;

// add this to burgerbuilder