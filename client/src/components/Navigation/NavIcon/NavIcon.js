import React, {Component} from 'react';
import Transition from 'react-transition-group/Transition';
import PropTypes from 'prop-types';


const propTypes = {
    toggleNav: PropTypes.func,
    navShow: PropTypes.bool,
 };
/**
 * @return {*} Container for opener
 */
class NavIcon extends Component {
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
     * Function the handle click to toggle nav
     */
    handleClick() {
        this.props.toggleNav();
    };

    /**
     * @return {*} Container
     */
    render() {
        const rotate = this.props.navShow;
        return (
            <Transition
                in={rotate}
                timeout={0}
                >
                {
                    (state) => {
                        return (
                            <div className={`my-nav-icon my-nav-${state}`}onClick={this.handleClick.bind(this)}>
                                <span className={`icon-line1 rotate1-${state}`}></span>
                                <span className={`icon-line2 rotate2-${state}`}></span>
                                <span className={`icon-line3 rotate3-${state}`}></span>
                                <div className="nav-icon-border"></div>
                            </div>
                        );
                    }
                }
            </Transition>
        );
    }
};

NavIcon.propTypes = propTypes;
export default NavIcon;
