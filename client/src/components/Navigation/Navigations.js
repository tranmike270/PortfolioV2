import React, {Component} from 'react';
import Transition from 'react-transition-group/Transition';
import NavIcon from './NavIcon/NavIcon';
import NavBody from './NavBody/NavBody';
import {Col} from 'reactstrap';
import PropTypes from 'prop-types';

const propTypes = {
    toggleDisplay: PropTypes.func,
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
                        <Col md={this.state.navShow ? '12' : '1'} className={`my-navbar nav-${state}`}>
                            <div className='row'>
                                <NavBody toggleNav={this.toggleNav} navShow={this.state.navShow} />
                                    <NavIcon toggleNav={this.toggleNav.bind(this)} navShow={this.state.navShow}/>
                            </div>
                        </Col>
                        );
                    }
                }
            </Transition>
        );
    }
};

Navigations.propTypes = propTypes;
export default Navigations;
