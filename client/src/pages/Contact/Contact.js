import React, {Component} from 'react';
import Transition from 'react-transition-group/Transition';
import {GitHubsvg, LinkedInsvg, StackOFsvg, Gmailsvg, Slacksvg} from '../../components/SVGS';
import {Carosel} from '../../components';
import uniqid from 'uniqid';
/**
 * @return {*} Container
 */
class Contact extends Component {
    /**
     * Constructor function for setting state
     * @param {*} props
     */
    constructor(props) {
        super(props);
        this.state= {
            display: false,
            cards: [
                {
                    cardTitle: 'LinkedIn',
                    cardSVG: <LinkedInsvg/>,
                    cardText: 'Join my network!',
                    cardTextB: '',
                    cardLink: 'https://www.linkedin.com/in/michael-ttt/',
                    cardLinkText: 'My LinkedIn Page',
                    cardNum: 0,
                },
                {
                    cardTitle: 'GitHub',
                    cardSVG: <GitHubsvg/>,
                    cardText: 'View My Repositories',
                    cardTextB: '',
                    cardLink: 'https://github.com/tranmike270',
                    cardLinkText: 'My GitHub Page',
                    cardNum: 1,
                },
                {
                    cardTitle: 'Google Mail',
                    cardSVG: <Gmailsvg/>,
                    cardText: 'Email Me ',
                    cardTextB: 'mikettran196@gmail.com',
                    cardLink: 'https://www.google.com/gmail/',
                    cardLinkText: 'Link To Gmail',
                    cardNum: 2,
                },
                {
                    cardTitle: 'Slack',
                    cardSVG: <Slacksvg/>,
                    cardText: 'Email me to join my slack workspace',
                    cardTextB: '',
                    cardLink: '',
                    cardLinkText: '',
                    cardNum: 3,
                },
                {
                    cardTitle: 'Stack Overflow',
                    cardSVG: <StackOFsvg/>,
                    cardText: 'Find me on StackOverflow',
                    cardTextB: '',
                    cardLink: 'https://stackoverflow.com/users/9284779/mr-tran',
                    cardLinkText: 'My Profile Page',
                    cardNum: 4,
                },
            ],
            currentTitle: '',
            currentDescription: '',
            currentLinks: [],
        };
        this.toggleInfo = this.toggleInfo.bind(this);
    };

    /**
     * Function the triggers the display animation onmount
     */
    componentDidMount() {
        this.setState({display: !this.state.display});
    };

    /**
     * @param {string} title
     */
    toggleInfo(title) {
        const newTitle = title;
        let description = '';
        const newLinks =[];
        switch (newTitle) {
            case 'LinkedIn':
                description = 'Be apart of my connections on LinkedIn! You may also direct message me from here as well.';
                newLinks.push({
                    link: 'https://www.linkedin.com/in/michael-ttt/',
                    text: 'Visit my LinkedIn Page',
                });
            break;
            case 'GitHub':
                description = `View any of my finished or current project's repositories on my GitHub.`;
                newLinks.push({
                    link: 'https://github.com/tranmike270',
                    text: 'View my repositories',
                });
            break;
            case 'Google Mail':
                description = 'Email me at mikettran196@gmail.com about anything!';
                newLinks.push({
                    link: 'https://www.google.com/gmail/',
                    text: 'Go to your gmail now!',
                });
            break;
            case 'Slack':
                description = `Email me to recieve an invitation to my slack workspace. I opened my workspace to help others with their code. Join if you want to lend a helping hand, or need any help`;
                newLinks.push({
                    link: 'https://slack.com/',
                    text: 'Join My Workspace',
                });
            break;
            case 'Stack Overflow':
                description = `Stack overflow is my favorite place to learn new things and help others!`;
                newLinks.push({
                    link: 'https://stackoverflow.com/users/9284779/mr-tran',
                    text: 'My Stack Overflow Profile Page',
                });
            break;
            default:
        }
        this.setState({
            currentTitle: newTitle,
            currentDescription: description,
            currentLinks: newLinks,
        });
    };
    /**
     * @return {*} Container
     */
    render() {
        const infoLinks = this.state.currentLinks.map((link) => {
            return (
                <div key={`contact-info-${uniqid()}`} className={`col-md-12 d-flex justify-content-center contact-info-links-container`}>
                    <a className={`contact-info-link`} href={`${link.link}`} target='_blank'>{link.text}</a>
                </div>
            );
        });
        return (
            <Transition
                in={this.state.display}
                timeout={1500}
                unmountOnExit
                appear>
                {(state) => {
                    return (
                        <div className={`row page-body contact-page ${state}`}>
                            <div className={`col-md-12 d-flex justify-content-center page-content`}>
                                <div className={`row contact-page-holder`}>
                                    <div className={`col-md-3 no-pad contact-header`}>
                                        <div className={`row contact-title-holder`}>
                                            <div className={`col-md-12 d-flex justify-content-center contact-title`}>
                                                Contact Me / Connect With Me
                                            </div>
                                        </div>
                                        <hr className={`hr-white-blur`}/>
                                        <div className={`row contact-body-holder`}>
                                            <div className={`col-md-12 d-flex justify-content-center contact-info-title`}>{this.state.currentTitle}</div>
                                            <div className={`col-md-12 d-flex justify-content-center contact-info-description`}>{this.state.currentDescription}</div>
                                            {infoLinks}
                                        </div>
                                        <div className={`row contact-intructions-holder`}>
                                            <div className={`col-md-12 d-flex justify-content-center contact-intructions`}>
                                               Click arrows to view other ways to connect or contact me
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`col-md-9 no-pad carosel-holder`}>
                                       <Carosel cardInfo = {this.state.cards} size={4} toggleInfo={this.toggleInfo}/>
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

export default Contact;
