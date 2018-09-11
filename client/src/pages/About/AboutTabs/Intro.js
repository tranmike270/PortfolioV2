import React, {Component} from 'react';
import mypic from '../../../assets/images/michael.jpg';
import Imagesvg from '../../../components/SVGS/Imagesvg';
/**
 * @return {*} Container
 */
class Intro extends Component {
    /**
     * @return {*} Container
     */
    render() {
        return (
            <div className={'col-md-12 about-display-body'}>
                <div className={'row about-display-title-holder'}>
                    <div className={'col-md-12 d-flex justify-content-front about-display-title'}>
                        INTRODUCTION
                    </div>
                </div>
                <hr className={`hr-white-blur about-display-hr`}/>
                <div className={`row about-display-content`}>
                    <div className={`col-md-12 display-body`}>
                        <div className={`row intro-basic`}>
                                <div className={`col-md-6 d-flex justify-content-front my-picture-holder`}>
                                    <div className={'my-picture'}>
                                        <Imagesvg image={mypic} />
                                    </div>
                                </div>
                                <div className={`col-md-6 intro-mains`}>
                                    <div className={'about-intro-bold'}> Name: <span className={`about-intro-stuff`}> Michael Tran </span> </div>
                                    <div className={'about-intro-bold'}> Age: <span className={`about-intro-stuff`}> 22 </span> </div>
                                    <div className={'about-intro-bold'}> Gender: <span className={`about-intro-stuff`}> Male </span> </div>
                                    <div className={'about-intro-bold'}> Ethnicity/Race: <span className={`about-intro-stuff`}> Vietnamese American </span> </div>
                                </div>
                        </div>
                        <div className={'row intro-sum'}>
                            <div className={'col-md-12'}>
                                <div className={'row sum-title-holder'}>
                                    <div className={'col-md-12 sum-title'}>
                                        Let Me Introduce Myself
                                    </div>
                                </div>
                                <hr className={`hr-white-blur sum-display-hr`}/>
                                <div className={'row sum-text-holder'}>
                                    <div className={'col-md-12 sum-text'}>
                                        My name is <i>Michael Tran</i>, and I enjoy coming up with and <i>developing</i> new ideas, tools, and applications that can add convenience to the daily life.
                                        Convenience is important in a person's life due to its ability to allow them to efficiently meet any task and/or goals they may have.
                                        From making task easier or quicker to do, to simple entertainment - all of it plays an important role in adding convenience to <i>my users'</i> lives so they may efficiently enjoy their life.
                                        I'm constantly looking for <i>new ways to improve</i> upon what's been built, based off our world's rapid change in how we approach our day-to-day lives.
                                        By bouncing ideas off the <i>open-sourced community</i>, I believe we can make anything become convenient and enjoyable.
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

export default Intro;
