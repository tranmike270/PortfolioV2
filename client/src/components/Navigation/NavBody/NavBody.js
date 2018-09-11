import React, {Component} from 'react';
import Transition from 'react-transition-group/Transition';
import NavItem from '../NavItem/NavItem';
import {faHome, faCode, faAddressBook, faClipboardList, faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import myName from '../../../assets/images/name.png';
const propTypes = {
    navShow: PropTypes.bool,
    toggleNav: PropTypes.func,
};
/**
 * @return {*} Container for opener
 */
class NavBody extends Component {
    /**
     * Constructor function for setting state
     * @param {*} props
     */
    constructor(props) {
        super(props);
        this.state = {
        };
        this.options = [
                            {
                                title: 'Home',
                                link: '/',
                                fontAwesome: faHome,
                                item: 1,
                            },
                            {
                                title: 'About',
                                link: '/about',
                                fontAwesome: faAddressBook,
                                item: 2,
                            },
                            {
                                title: 'Projects',
                                link: '/projects',
                                fontAwesome: faCode,
                                item: 3,
                            },
                            {
                                title: 'Connect/Contact',
                                link: '/contact',
                                fontAwesome: faEnvelopeSquare,
                                item: 4,
                            },
                            {
                                title: 'Plans',
                                link: '/plans',
                                fontAwesome: faClipboardList,
                                item: 5,
                            },
                        ];
        this.handleNavClick = this.handleNavClick.bind(this);
    };

    /**
     * Function to handle nav click
     */
    handleNavClick() {
        this.props.toggleNav();
    };
    /**
     * @return {*} Container
     */
    render() {
        const navItems = this.options.map((navItem) => {
            return (
                <NavItem toggleNav={this.handleNavClick} show={this.props.navShow} key={navItem.item} navItem={navItem} handleNavClick={this.handleNavClick.bind(this)} />
            );
        });
        const show = this.props.navShow;
        return (
            <div className='nav-body-container'>
                <div className='row my-nav-body'>
                    <Transition
                        in={show}
                        timeout={0}
                        unmountOnExit>
                        {
                            (state) => {
                                return (
                                    <div className='col-md-12 d-flex justify-content-center'>
                                        <img src={myName} alt='Michael Tran' className={`nav-name ${state}`} />
                                    </div>
                                );
                            }
                        }
                    </Transition>
                    <Transition
                        in={show}
                        timeout={0}
                        unmountOnExit>
                        {
                            (state) => {
                                return (
                                    <ul className={`col-md-12 nav-ul nav-ul-${state}`}>
                                        {navItems}
                                    </ul>
                                );
                            }
                        }
                    </Transition>
                </div>
            </div>
        );
    }
};

NavBody.propTypes = propTypes;
export default NavBody;
