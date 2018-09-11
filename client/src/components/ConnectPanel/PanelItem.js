import React, {Component} from 'react';
import PropTypes from 'prop-types';
const propTypes = {
    svg: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};
/**
 * @return {PanelItem}
 */
class PanelItem extends Component {
    /**
     * @param {*} props
     */
    constructor(props) {
        super(props);
    };
    /**
     * @return {*} PanelItem
     */
    render() {
        return (
            <div className={`d-flex justify-content-center col-md-12 panel-item`}>
                <div className={`row panel-item-body`}>
                    <div className={`d-flex justify-content-center col-md-12 panel-item-svg`}>
                        {this.props.svg}
                        <div className={`row panel-item-text`}>
                            <h4 className={`d-flex justify-content-center col-md-12 panel-title`}>
                                {this.props.title}
                            </h4>
                            <a className={`d-flex justify-content-center col-md-12 panel-link`} href={`${this.props.link}`} target='_blank'>
                                Link
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

PanelItem.propTypes = propTypes;
export default PanelItem;
