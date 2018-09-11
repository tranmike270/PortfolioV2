import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Transition from 'react-transition-group/Transition';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';


const propTypes = {
    show: PropTypes.bool,
    navItem: PropTypes.object,
    toggleNav: PropTypes.func,
};
/**
 * @return {*} Container for opener
 */
class NavItem extends Component {
    /**
     * function to set states
     * @param {*} props
     */
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
    };

    /**
     * Function that toggles the navbar
     */
    toggleNav() {
        this.props.toggleNav();
    };
    /**
     * @return {*} Container
     */
    render() {
        const show = this.props.show;
        return (
            <Transition
                in={show}
                timeout={0}
                unmountOnExit
                >
                {
                    (state) => {
                        return (
                            <li className={`my-nav-item nav-${this.props.navItem.item} nav-${this.props.navItem.item}-${state}`}>
                                <Link onClick={this.toggleNav} to={`${this.props.navItem.link}`}>
                                        {this.props.navItem.title}  <FontAwesomeIcon icon={this.props.navItem.fontAwesome} />
                                </Link>
                            </li>
                        );
                    }
                }
            </Transition>
        );
    }
};

NavItem.propTypes = propTypes;

export default NavItem;
