import React, {Component} from 'react';
import PropTypes from 'prop-types';
const propTypes ={
    image: PropTypes.any,
};
/**
 * @return {*} Container
 */
class Imagesvg extends Component {
    /**
     * @return {*} Container
     */
    render() {
        return (
            <svg className='image-svg' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fillRule='evenodd' clipRule='evenodd' style = {{backgroundImage: `url(${this.props.image}`}}>

            </svg>
        );
    }
};

Imagesvg.propTypes = propTypes;
export default Imagesvg;
