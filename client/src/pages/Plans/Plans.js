import React, {Component} from 'react';
import Transition from 'react-transition-group/Transition';
import {UnderConstruction} from '../../components/SVGS';
/**
 * @return {*} Container
 */
class Plans extends Component {
    /**
     * Constructor function for setting state
     * @param {*} props
     */
    constructor(props) {
        super(props);
        this.state= {
            display: false,
        };
    };

    /**
     * Function the triggers the display animation onmount
     */
    componentDidMount() {
        this.setState({display: !this.state.display});
    };

    /**
     * @return {*} Container
     */
    render() {
        return (
            <Transition
                in={this.state.display}
                timeout={1500}
                unmountOnExit
                appear>
                {(state) => {
                    return (
                        <div className={`row page-body plans-page ${state}`}>
                            <div className={`col-md-12 d-flex justify-content-center page-content`}>
                                <UnderConstruction/>
                            </div>
                        </div>
                    );
                }}
            </Transition>
        );
    }
};

export default Plans;
