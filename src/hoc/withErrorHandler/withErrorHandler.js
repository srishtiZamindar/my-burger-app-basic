import React, {Component} from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxiliary/Auxiliary';
import { tsMethodSignature } from '@babel/types';

// const withErrorHandler = (WrappedComponent, axios) => { //axios to see if it failed or not to setup a global error handler so we will convert this to class based comp
//     return (props) => {  //it will be a function, withErrorHandler, and this should be a function which takes the wrapped component
//         //as an input and which then returns a function which receives props and of course simply returns some JSX including the wrapped component,
//         return (
//             <Aux>
//                 <Modal>
//                     Something didn't work!
//                 </Modal>
//                 {/* return the wrapped component and distribute any props this component might receive on it  */}
//                 <WrappedComponent {...props} />
//             </Aux>
//         );
//     }
// };

const withErrorHandler = (WrappedComponent, axios) => { //axios to see if it failed or not to setup a global error handler so we will convert this to class based comp
    return class extends Component{ // no class name since we dont use but we return it, so its a class factory
        state = {
            error: null
        }
        // we can setup axios listener
        componentWillUpdate() {
            axios.interceptors.request.use(req => {
                this.setState({error: null}); //  here we will clear the error so that whenever I send a request, I don't have my error set up anymore,
            return req;
            });
            axios.interceptors.response.use( res => res, error => {       //response: not really use here so instead we pass null/ res) //lobal interceptor
                //here we will show the eror modal; so we need state
                this.setState({error: error}); //second error is coming back from firebase
            });
        }

        errorConfirmedHandler = ()=> {
            this.setState({error: null});
        }


        render () {
            return (
                <Aux>
                    <Modal 
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        {/* Something didn't work! */}
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    {/* return the wrapped component and distribute any props this component might receive on it  */}
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }

    } 
};
export default withErrorHandler;