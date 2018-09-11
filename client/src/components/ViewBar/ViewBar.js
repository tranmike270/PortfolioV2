import React, {Component} from 'react';
import PropTypes from 'prop-types';
import arrowSVG from './arrow.svg';
import {ListGroup, ListGroupItem} from 'reactstrap';
const propTypes = {
    currentPage: PropTypes.string,
    toggleIndex: PropTypes.func,
    indexInfos: PropTypes.array,
};
/**
 * @return {ViewBar} container
 */
class ViewBar extends Component {
    /**
     * Constructor function for setting state
     * @param {*} props
     */
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            expanded: false,
            indexes: [{}],
        };

        this.toggleIndex = this.toggleIndex.bind(this);
        };

    /**
     * Sets Components state on mount
     */
    componentDidMount() {
        this.setOptions();
    };

    /**
     * sets state of viewbar options
     */
    setOptions() {
        let options = this.props.indexInfos.map((option) => {
            let i = {
                ID: option.ID,
                name: option.name,
                show: option.show,
            };
            return i;
        });
        this.setState({indexes: options});
    };

    /**
     * @param {string} index
     * Function to passback which index to toggle
     */
    toggleIndex(index) {
        this.props.toggleIndex(index);
    };

    /**
     * Function to expand the viewbar
     */
    expandIndex() {
        this.setState({expanded: !this.state.expanded});
    };

    // /**
    //  * @param {*} e Handle Scroll Function
    //  */
    // handleScroll(e) {
    //     console.log(e);
    // };
    /**
     * @return {ViewBar} Container
     */
    render() {
        console.log(this.state);
        const indexies = this.props.indexInfos.map((item) => {
            let itemDisabled = item.show;
            return (
                <ListGroupItem key={`index-${item.name}`} className={`view-index-item ${item.show ? `current-index` : ``}` }>
                    <div className={`btn item-index-btn ${item.show ? `index-selected` : `hover-animation`}` } onClick={() => this.toggleIndex(item.ID)} disabled={itemDisabled}>{item.name}</div>
                </ListGroupItem>
            );
        });
        return (
            <div className={`row justify-content-center align-items-center view-bar`}>
                <div className={`col view-wrapper`}>
                    <div className={`view-body ${this.state.expanded ? `body-expanded` : `hover-animate`}`}>
                        <img className={`view-parts arrow-up ${this.state.expanded ? `flip-top` : ``}`} src={arrowSVG} alt='temp'/>
                        <div className={`row justify-content-center align-items-center view-parts middle ${this.state.expanded ? `expand` : ``}`}>
                            {this.state.expanded ? (
                                <ListGroup className={`view-list`}>
                                    {indexies}
                                </ListGroup>
                            )
                                : (<p onClick={this.expandIndex.bind(this)} className={`col middle-text`}>Enlarge Index</p>)}
                        </div>
                        <img className={`view-parts arrow-down ${this.state.expanded ? `flip-bottom` : ``}`} src={arrowSVG} alt='temp'/>
                    </div>

                </div>
            </div>
        );
    }
};

ViewBar.propTypes = propTypes;

export default ViewBar;
