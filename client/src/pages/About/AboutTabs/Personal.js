import React, {Component} from 'react';
import {UnderConstruction} from '../../../components/SVGS';
/**
 * @return {*} Container
 */
class Personal extends Component {
    /**
     * @return {*} Container
     */
    render() {
        return (
            <div className={'col-md-12 about-display-body'}>
                <div className={'row about-display-title-holder'}>
                    <div className={'col-md-12 d-flex justify-content-front about-display-title'}>
                        Personal
                    </div>
                </div>
                <hr className={`hr-white-blur about-display-hr`}/>
                <div className={`row about-display-content`}>
                    <div className={`col-md-12`}>
                        <UnderConstruction />
                    </div>
                </div>
            </div>
        );
    }
};

export default Personal;
