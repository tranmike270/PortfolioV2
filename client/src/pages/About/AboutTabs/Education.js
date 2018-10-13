import React, {Component} from 'react';
/**
 * @return {*} Container
 */
class Education extends Component {
    /**
     * @return {*} Container
     */
    render() {
        return (
            <div className={`col-md-12 about-display-body`}>
                <div className={`row about-display-title-holder`}>
                    <div className={'col-md-12 d-flex justify-content-front about-display-title'}>
                        Education
                    </div>
                </div>
                <hr className={`hr-white-blur about-display-hr`}/>
                <div className={`row about-display-content`}>
                    <div className={`col-md-12 exp-holder`}>
                    <div className={`row education-history-holder`}>
                            <div className={'col-md-12'}>
                                <div className={`row edu-title-holder`}>
                                    <div className={`col-md-12 exp-title`}>
                                        Education
                                    </div>
                                </div>
                                <div className={`row edu-content-holder`}>
                                    <div className={`col-md-12`}>
                                        <div className={`row edu-row`}>
                                            {/* <div className={`col-md-4`}>
                                                <p className={`school`}>Alief Hastings High School</p>
                                                <p className={`school-grad`}>Class of 2014</p>
                                            </div> */}
                                            <div className={`col-md-4 edu-splitter`}>
                                                <p className={`school`}>The University of Texas at Austin - Houston Coding Boot Camp</p>
                                                <p className={`school-grad`}>Completed July 19, 2018</p>
                                            </div>
                                            <div className={`col-md-4 edu-splitter`}>
                                                <p className={`school`}>Udemy Courses</p>
                                                <p className={`school-ud`}>Colt Steele - The Web Developer Bootcamp (completed)</p>
                                                <p className={`school-ud`}>Colt Steele - The Modern Python 3 Bootcamp (in progress)</p>
                                                <p className={`school-ud`}>Brad Traversy - React Front to Back (in progress)</p>
                                            </div>
                                            <div className={`col-md-4`}>
                                                <p className={`school`}>University of Houston - Computer Science, B.S.</p>
                                                <p className={`school-grad`}>Currently Attending</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Education;
