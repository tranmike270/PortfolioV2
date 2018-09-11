import React, {Component} from 'react';

/**
 * @return {*} Container
 */
class Skills extends Component {
    /**
     * @return {*} Container
     */
    render() {
        return (
            <div className={'col-md-12 about-display-body'}>
                <div className={'row about-display-title-holder'}>
                    <div className={'col-md-12 d-flex justify-content-front about-display-title'}>
                        Skill Set
                    </div>
                </div>
                <hr className={`hr-white-blur about-display-hr`}/>
                <div className={`row about-display-content`}>
                    <div className={`col-md-12 skills-holder`}>
                        <div className={`row skills-body`}>
                            <div className={`col-md-6 skills-left`}>
                                <div className={`row skills-title-holder`}>
                                    <div className={'col-md-12 skills-title'}>
                                        Intrapersonal
                                    </div>
                                </div>
                                <hr className={`hr-white-blur about-display-hr skills-hr skills-hr-left`}/>
                                <div className={`row skills-context-holder ctx-left`}>
                                    <ul className={'col-md-12 skills-context'}>
                                        <li>Analytical</li>
                                        <li>Optimistic</li>
                                        <li>Quick Learner</li>
                                        <li>Leadership</li>
                                        <li>Team Work</li>
                                        <li>Problem Solver</li>
                                        <li>Patience</li>
                                        <li>Bilingual (VN &#38; ENG)</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={`col-md-6 skills-right`}>
                                <div className={`row skills-title-holder`}>
                                    <div className={'col-md-12 skills-title'}>
                                        Tools / Technologies
                                    </div>
                                </div>
                                <hr className={`hr-white-blur about-display-hr skills-hr skills-hr-right`}/>
                                <div className={`row skills-context-holder`}>
                                    <ul className={'col-md-12 skills-context'}>
                                        <li>HTML5</li>
                                        <li>CSS3</li>
                                        <li>SCSS</li>
                                        <li>JavaScript</li>
                                        <li>Node.js</li>
                                        <li>React.js</li>
                                        <li>MongoDB</li>
                                        <li>MySQL</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Skills;
