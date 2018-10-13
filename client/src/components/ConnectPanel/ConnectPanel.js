import React, {Component} from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import PanelItem from './PanelItem';
const propTypes = {
    panelItemsInfo: PropTypes.array.isRequired,
    opacityState: PropTypes.string.isRequired,
};

/**
 * @return {ConnectPanel}
 */
class ConnectPanel extends Component {
    /**
     * @param {*} props
     */
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            panelItems: [
                {
                    title: '',
                    svg: null,
                    link: '',
                },
            ],
            openAnimate: false,
        };

        // this.toggleExpand = this.toggleExpand.bind(this);
    };

    /**
     * sets panelItems
     */
    componentDidMount() {
        this.setState({
            panelItems: this.props.panelItemsInfo,
            openAnimate: true,
        });
    };

    /**
     * Functiont o toggle expand
     */
    toggleExpand() {
        this.setState({expanded: !this.state.expanded});
    };
    /**
     * @return {*} Connect Panel Container
     */
    render() {
        const panelItems = this.state.panelItems.map((item) => {
            return (
                <PanelItem key={`panelItem-${uniqid()}`} svg={item.svg} title={item.title} link={item.link} />
            );
        });
        return (
            <div className={`d-flex justify-content-center col side-panel main-panel-${this.props.opacityState}`}>
                <div className={`row panel-item-container`}>
                    {panelItems}
                </div>
            </div>
        );
    }
};
ConnectPanel.propTypes = propTypes;

export default ConnectPanel;
