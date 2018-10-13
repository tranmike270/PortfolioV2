import React, {Component} from 'react';
import Transition from 'react-transition-group/Transition';
import NavIcon from './NavIcon/NavIcon';
import NavBody from './NavBody/NavBody';
import PropTypes from 'prop-types';

const propTypes = {
    toggleDisplay: PropTypes.func,
    opacityState: PropTypes.string,
 };
 /**
 * @return {*} Container for opener
 */
class Navigations extends Component {
    /**
     * Constructor function for setting state
     * @param {*} props
     */
    constructor() {
        super();
        this.state = {
            navShow: false,
        };
        this.toggleNav = this.toggleNav.bind(this);
    };

    /**
     * Function that toggles Nav in and out
     */
    toggleNav() {
        this.props.toggleDisplay();
        this.setState({navShow: !this.state.navShow});
    };

    /**
     * @return {*} Container
     */
    render() {
        const navShown = this.state.navShow;
        return (
            <Transition
                in={navShown}
                timeout={0}>
                {
                    (state) => {
                        return (
                        <div className={`col-md-${this.state.navShow ? '12' : '1'} my-navbar nav-${state} main-nav-${this.props.opacityState}`}>
                            <div className='row'>
                                <NavBody toggleNav={this.toggleNav} navShow={this.state.navShow} />
                                    <NavIcon toggleNav={this.toggleNav.bind(this)} navShow={this.state.navShow}/>
                            </div>
                        </div>
                        );
                    }
                }
            </Transition>
        );
    }
};

Navigations.propTypes = propTypes;
export default Navigations;
