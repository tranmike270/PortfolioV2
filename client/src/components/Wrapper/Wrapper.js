import React, {Component} from 'react';
import Opener from '../../pages/Opener/Opener';
import Transition from 'react-transition-group/Transition';
import MainPage from '../../pages/MainPage/MainPage';
import backgroundImage from '../../assets/images/bodybackground.jpg';

const propTypes = {
};
/**
 * @return {*} Container for opener
 */
class Wrapper extends Component {
    /**
     * Constructor function for setting state
     * @param {*} props
     */
  constructor(props) {
    super(props);
    this.state = {
        opener: true,
        main: false,

    };
  };

  /**
   * Function to load the main page
   */
  buttonLoadPage() {
    console.log(this.state.opener);
    this.setState({
      opener: false,
      main: true,
    });
  };

    /**
     * @return {*} Container
     */
  render() {
    const showOpener = this.state.opener;
    const showMain = this.state.main;
    return (
        <Transition
            in={showMain}
            timeout={0}>
            {
                (state) => {
                    return (
                        <div className={`wrapper`}>
                            <div style = {{backgroundImage: `url(${backgroundImage}`}} className={`background background-${state}`} />
                            <MainPage show={showMain} />
                            <Opener opener={showOpener} loadPage = {this.buttonLoadPage.bind(this)} />
                        </div>
                    );
                }
            }
        </Transition>
    );
  }
}
Wrapper.propTypes = propTypes;

export default Wrapper;
