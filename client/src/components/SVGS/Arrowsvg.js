import React, {Component} from 'react';
/**
 * @return {*} Container
 */
class Arrowsvg extends Component {
    /**
     * @return {*} Container
     */
    render() {
        return (
            <svg xmlns="https://www.w3.org/2000/svg" className={`connect-svg arrows`} viewBox="0 0 24 24">
                <g className={`arrow-g`}>
                    <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
                </g>
            </svg>
        );
    }
};

export default Arrowsvg;
