import React, {Component} from 'react';
import Transition from 'react-transition-group/Transition';
import PropTypes from 'prop-types';

const propTypes = {
    show: PropTypes.bool,
    listItem: PropTypes.object,
    top: PropTypes.string,
    left: PropTypes.string,
    fontFamily: PropTypes.string,
};
/**
 * @return {*} Container
 */
class ListItem extends Component {
    /**
     * @return {number} a number for timeout
     **/
    getRandomTimeout() {
        return Math.floor((Math.random() * 3000) + 0);
    };

    /**
     * @return {*} Container
     */
    render() {
        const show = this.props.show;
        const fontSize = this.props.listItem.fontSize;
        const styling = {
            top: this.props.top,
            left: this.props.left,
            fontSize: `${fontSize}px`,
            fontFamily: this.props.fontFamily,
        };

        const randomTimeout = this.getRandomTimeout();
        return (
            <Transition
                in={show}
                timeout={randomTimeout}
                unmountOnExit
                appear>
                {
                    (state) => {
                        return (
                            <li style={styling} className={`phrase phrase-${state}`}>
                                {this.props.listItem.phrase}
                            </li>
                        );
                    }
                }
            </Transition>
        );
    }
};

ListItem.propTypes = propTypes;

export default ListItem;
