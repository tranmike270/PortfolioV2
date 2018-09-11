import React, {Component} from 'react';
import Transition from 'react-transition-group/Transition';
import {Exp, Skills, WordWall, Personal, Intro} from './AboutTabs';
/**
 * @return {*} Container
 */
class About extends Component {
    /**
     * Constructor function for setting state
     * @param {*} props
     */
    constructor(props) {
        super(props);
        this.currentDisplay = <Intro />;
        this.state= {
            display: false,
            currentTab: this.currentDisplay,
        };

        this.togglePage = this.togglePage.bind(this);
    };

    /**
     * Function the triggers the display animation onmount
     */
    componentDidMount() {
        this.setState({display: !this.state.display});
    };

    /**
     * @param {string} page
     */
    togglePage(page) {
        console.log(page);
       let newDisplay;
        switch (page) {
            case 'intro':
                newDisplay = <Intro />;
            break;
            case 'skill':
                newDisplay = <Skills/>;
            break;
            case 'exp':
                newDisplay = <Exp/>;
            break;
            case 'personal':
                newDisplay = <Personal/>;
            break;
            case 'wall':
                newDisplay = <WordWall/>;
            break;
            default:
        };

        this.currentDisplay = newDisplay;
        this.setState({currentTab: this.currentDisplay});
    }
    /**
     * @return {*} Container
     */
    render() {
        const currentDisplay = this.state.currentTab;
        return (
            <Transition
                in={this.state.display}
                timeout={1500}
                unmountOnExit
                appear>
                {(state) => {
                    return (
                        <div className={`row page-body about-page ${state}`}>
                            <div className={`col-md-12 d-flex justify-content-center page-content`}>
                                <div className={`row no-mar about-page-container`}>
                                    <div className={`col-md-3 about-page-tab-holder`}>
                                        <div className={`row no-mar about-title-holder`}>
                                            <div className={`col-md-12 d-flex justify-content-center about-title`}>
                                                About Me
                                            </div>
                                        </div>
                                        <hr className={`hr-white-blur`}/>
                                        <div className={`row no-mar about-page-tabs-body`}>
                                            <div className={`col-md-12 tabs-body-holder`}>
                                                <div className={`row no-mar tab-holder`}>
                                                    <div className={`col-md-12 d-flex justify-content-center about-tab`} onClick={() => this.togglePage('intro')}>Introduction</div>
                                                    <div className={`hover-animations`}></div>
                                                </div>
                                                <div className={`row no-mar tab-holder`}>
                                                    <div className={`col-md-12 d-flex justify-content-center about-tab`} onClick={() => this.togglePage('skill')}>Skill Set</div>
                                                    <div className={`hover-animations h-ani-1`}></div>
                                                </div>
                                                <div className={`row no-mar tab-holder`}>
                                                    <div className={`col-md-12 d-flex justify-content-center about-tab`} onClick={() => this.togglePage('exp')}>Education / Employment</div>
                                                    <div className={`hover-animations h-ani-2`}></div>
                                                </div>
                                                <div className={`row no-mar tab-holder`}>
                                                    <div className={`col-md-12 d-flex justify-content-center about-tab`} onClick={() => this.togglePage('personal')}>Personal</div>
                                                    <div className={`hover-animations h-ani-3`}></div>
                                                </div>
                                                <div className={`row no-mar tab-holder`}>
                                                    <div className={`col-md-12 d-flex justify-content-center about-tab`} onClick={() => this.togglePage('wall')}>Me</div>
                                                    <div className={`hover-animations h-ani-4`}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`col-md-9 about-page-info-display-holder`}>
                                        <div className={`row about-display`}>
                                            {currentDisplay}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </Transition>
        );
    }
};

export default About;
