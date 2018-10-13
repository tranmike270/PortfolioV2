import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Wrapper} from './components';


/**
 * @return {*} Container
 */
class App extends Component {
  /**
   * Constructor function for setting state
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = {

    };
  };
  /**
   * @return {*} Container
   */
  render() {
    return (
      <Router>
        <Wrapper className=''/>
      </Router>
    );
  }
}


export default App;
