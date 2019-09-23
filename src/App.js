import React, { Component } from 'react';
import './App.css';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  // to check componentWillUnmount in withErrorHandlers
  // state = {
  //   show: true
  // };

  // to unset show for testin
  // componentDidMount () {
  //   setTimeout(() => {
  //     this.setState({show: false});
  //   }, 5000);
  // }

  render() {
    return (
      <div >
        <Layout>
          {/* {this.state.show ?  */}
          <BurgerBuilder /> 
          {/* // : null }  */}
          {/* null to remove the burger BurgerBuilder */}
        </Layout>
      </div>
    );
  }
}

export default App;
