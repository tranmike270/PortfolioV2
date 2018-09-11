import React, {Component} from 'react';
/**
 * @return {*} Container
 */
class Exp extends Component {
    /**
     * constructor function
     */
    constructor() {
        super();
        this.state = {
            currentEmploy: {
                employeer: '',
                dates: '',
                description: 'Click one of the tabs above to display information about my employment at that specific place.',
            },
        };
    }

    /**
     * @param {string} tab
     */
    toggleTab(tab) {
        let newEmp = {};
        switch (tab) {
            case 'nam':
                newEmp.employeer = 'NAM Noodles And More';
                newEmp.dates = 'October 2015 to January 2017 - Driver/Cashier | Since January 2017 - Assistant Manager';
                newEmp.description = `Working here as a cashier & delivery driver, I gained the majority of my intrapersonal skills dealing with communications and problem solving. This was where I began to think - 'How would they like their experience?' - In January 2017 I was given the opportunity to be the Assistant Manager due to my highly saught after intrapersonal skills.`;
            break;
            case 'sher':
                newEmp.employeer = 'Sherwin Williams';
                newEmp.dates = 'November 2014 to October 2015 - Sales Associate';
                newEmp.description = `My duties and responsibilities at Sherwin Williams were to assist customers - DIY or Contactors - in selecting the right type and color paint product to fit their project. I learned many things about paint product as well as communication skills.`;
            break;
            case 'sonic':
                newEmp.employeer = 'Sonic Drive-In';
                newEmp.dates = '2012 to 2013 - Crew / Car Hopper';
                newEmp.description = `This was my first job at 16 years old. Keeping it short and simple, I was young and made the most of this job. I learned how to have a sense of urgency as I performed the task of a fast-food worker... on skates...`;
            break;
            case 'ched':
                newEmp.employeer = `Cheddar's`;
                newEmp.dates = 'August 2014 to November 2014 - Waiter';
                newEmp.description = `My first job coming into College, and it was overall fun. I didn't spend too much time here due to personal conflicts at home, but I learned how to work with a large staff as well as how to work under high pressure.`;
            break;
            default:
        }

        this.setState({currentEmploy: newEmp});
    };
    /**
     * @return {*} Container
     */
    render() {
        return (
            <div className={'col-md-12 about-display-body'}>
                <div className={'row about-display-title-holder'}>
                    <div className={'col-md-12 d-flex justify-content-front about-display-title'}>
                        Education &#38; Employment
                    </div>
                </div>
                <hr className={`hr-white-blur about-display-hr`}/>
                <div className={`row about-display-content`}>
                    <div className={`col-md-12 exp-holder`}>
                        <div className={`row employ-status`}>
                            <div className={`col-md-12`}>
                                Employment Status - Currently looking for opportunities in development
                            </div>
                        </div>
                        <div className={'row employment-history-holder'}>
                            <div className={'col-md-12'}>
                                <div className={`row exp-title-holder`}>
                                    <div className={`col-md-12 exp-title`}>
                                        Employment History
                                    </div>
                                </div>
                                <div className={`row exp-tabs-holder`}>
                                    <ul className={`col-md-12 exp-tabs`}>
                                        <li className='exp-tab' onClick={() => this.toggleTab('sonic')}>
                                            <div className={`exp-hover-ani`}></div>
                                            <p className={`tab-p`}>Sonic</p><p className={`tab-p`}>(2012 - 2013)</p>
                                        </li>
                                        <li className='exp-tab' onClick={() => this.toggleTab('ched')}>
                                            <div className={`exp-hover-ani`}></div>
                                            <p className={`tab-p`}>Cheddar&#8216;s</p><p className={`tab-p`}>(2014 - 2014)</p>
                                        </li>
                                        <li className='exp-tab' onClick={() => this.toggleTab('sher')}>
                                            <div className={`exp-hover-ani`}></div>
                                            <p className={`tab-p`}>Sherwin Williams</p><p className={`tab-p`}>(2014 - 2015)</p>
                                        </li>
                                        <li className='exp-tab' onClick={() => this.toggleTab('nam')}>
                                            <div className={`exp-hover-ani`}></div>
                                            <p className={`tab-p`}>NAM Noodles &#38; More</p><p className={`tab-p`}>(2015 - Current)</p>
                                        </li>
                                    </ul>
                                </div>
                                <hr className={`hr-center`} />
                                <div className={`row exp-tab-display`}>
                                    <div className={`col-md-12 exp-tab-content`}>
                                        <p className={`employ-title`}>
                                            {this.state.currentEmploy.employeer}
                                        </p>
                                        <p className={`employ-bold`}>
                                            {this.state.currentEmploy.dates}
                                        </p>
                                        <hr className={`exp-hr`}/>
                                        <p className={`employ-description`}>
                                            {this.state.currentEmploy.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                            <div className={`col-md-4`}>
                                                <p className={`school`}>The University of Texas at Austin - Houston Coding Boot Camp</p>
                                                <p className={`school-grad`}>Completed July 19, 2018</p>
                                            </div>
                                            <div className={`col-md-4`}>
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

export default Exp;
