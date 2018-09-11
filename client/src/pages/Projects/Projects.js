import React, {Component} from 'react';
import Transition from 'react-transition-group/Transition';
import hangmanimg from '../../assets/images/hangman.jpg';
import legendimg from '../../assets/images/legendmons.png';
import bamazonimg from '../../assets/images/bamazon.jpg';
import karaokeimg from '../../assets/images/karaoke.jpg';
import redditimg from '../../assets/images/reddit-scrapper.png';
import triviaimg from '../../assets/images/trivia.jpg';
import {Carosel} from '../../components';
import {Imagesvg} from '../../components/SVGS';
import uniqid from 'uniqid';
/**
 * @return {*} Container
 */
class Projects extends Component {
    /**
     * Constructor function for setting state
     * @param {*} props
     */
    constructor(props) {
        super(props);
        this.state = {
            display: false,
            projects: [
                {
                    cardNum: 0,
                    cardTitle: 'Hangman Anime Ed.',
                    cardText: 'Anime themed Hangman game',
                    cardTextB: '',
                    cardLink: 'https://hangman-anime-edition.herokuapp.com/',
                    cardLinkText: 'Play Now',
                    cardSVG: <Imagesvg image={hangmanimg} />,
                },
                {
                    cardNum: 1,
                    cardTitle: 'League of Legendmon RPG',
                    cardText: `LOL themed Pokemon game`,
                    cardTextB: '',
                    cardLink: 'https://tranmike270.github.io/Legendmons-RPG/',
                    cardLinkText: 'Play Now',
                    cardSVG: <Imagesvg image={legendimg} />,
                },
                {
                    cardNum: 2,
                    cardTitle: 'CLI - Bamazon',
                    cardText: `CLI Mini-store`,
                    cardTextB: '',
                    cardLink: 'https://github.com/tranmike270/CLI-Bamazon',
                    cardLinkText: 'GitHub Repo',
                    cardSVG: <Imagesvg image={bamazonimg} />,
                },
                {
                    cardNum: 3,
                    cardTitle: 'Kickass Karaoke!',
                    cardText: `Karaoke Machine!`,
                    cardTextB: '',
                    cardLink: 'https://shielded-gorge-35242.herokuapp.com/',
                    cardLinkText: 'Sing Now',
                    cardSVG: <Imagesvg image={karaokeimg} />,
                },
                {
                    cardNum: 4,
                    cardTitle: 'Reddit Scrapper',
                    cardText: `Save Reddit post and leave notes`,
                    cardTextB: '',
                    cardLink: 'https://reddit-scrapper.herokuapp.com/',
                    cardLinkText: 'Scrape',
                    cardSVG: <Imagesvg image={redditimg} />,
                },
                {
                    cardNum: 5,
                    cardTitle: 'Pokemon Trivia',
                    cardText: `Test your Poke-knowledge`,
                    cardTextB: '',
                    cardLink: 'https://tranmike270.github.io/TriviaGame/',
                    cardLinkText: 'Take the Test',
                    cardSVG: <Imagesvg image={triviaimg} />,
                },
            ],
            currentTitle: '',
            currentDescription: '',
            currentTech: [''],
            currentLink: '',
            currentLinkText: '',
            currentRepo: '',
            currentRepoText: '',
            currentVersion: '',

        };
        this.hangmanInfo = {
            currentTitle: 'Hangman Anime Ed.',
            currentDescription: `A hangman game with Anime themed surprises! The game adds competitive features to spice up the game. I update the word list constantly for my users`,
            currentTech: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express.js', 'MySQL'],
            currentLink: 'https://hangman-anime-edition.herokuapp.com/',
            currentLinkText: 'Play now!',
            currentRepo: 'https://github.com/tranmike270/hangmanGame',
            currentRepoText: 'GitHub Repository',
            currentVersion: 'V0.8',
        };
        this.legendmonInfo = {
            currentTitle: 'League of Legendmon RPG',
            currentDescription: `A fully front-end mini-game that combines League of Legends Characters, with a Pokemon styled fighting experience. I'm still working on adding more features to this game.`,
            currentTech: ['HTML5', 'CSS3', 'JavaScript'],
            currentLink: 'https://tranmike270.github.io/Legendmons-RPG/',
            currentLinkText: 'Play now!',
            currentRepo: 'https://github.com/tranmike270/Legendmons-RPG',
            currentRepoText: 'GitHub Repository',
            currentVersion: 'V0.3',
        };
        this.bamazonInfo = {
            currentTitle: 'CLI - Bamazon',
            currentDescription: `A CLI application that replicates a store using MySQL database, with customer, manager, and supervisor abilities.`,
            currentTech: ['JavaScript', 'Node.js', 'MySQL'],
            currentLink: '#',
            currentLinkText: 'No Link',
            currentRepo: 'https://github.com/tranmike270/CLI-Bamazon',
            currentRepoText: 'GitHub Repository',
            currentVersion: '',
        };
        this.kickassInfo = {
            currentTitle: 'Kickass Karaoke!',
            currentDescription: `My first group project where I was also first introduced to back-end development. A karaoke machine that pulls songs and lyrics so you can sing along!`,
            currentTech: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express.js'],
            currentLink: 'https://shielded-gorge-35242.herokuapp.com/',
            currentLinkText: 'Sing now!',
            currentRepo: 'https://github.com/tranmike270/Kickass-Karaoke',
            currentRepoText: 'GitHub Repository',
            currentVersion: '',
        };
        this.redditInfo = {
            currentTitle: 'Reddit Scrapper',
            currentDescription: `A web application that allows its users to save their favorite reddit post, and leave any notes they may like.`,
            currentTech: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'Passport.js'],
            currentLink: 'https://reddit-scrapper.herokuapp.com/',
            currentLinkText: 'Scrape Reddit Now!',
            currentRepo: 'https://github.com/tranmike270/Reddit-Scrapper',
            currentRepoText: 'GitHub Repository',
            currentVersion: 'V0.5',
        };
        this.triviaInfo = {
            currentTitle: 'Pokemon Trivia!',
            currentDescription: `A trivia game that will test if you really know Pokemon.`,
            currentTech: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'Passport.js'],
            currentLink: 'https://reddit-scrapper.herokuapp.com/',
            currentLinkText: 'Test your Knowledge',
            currentRepo: 'https://github.com/tranmike270/TriviaGame',
            currentRepoText: 'GitHub Repository',
            currentVersion: 'V1.0',
        };
        this.toggleIndex = this.toggleIndex.bind(this);
    };


    /**
     * Function the triggers the display animation onmount
     */
    componentDidMount() {
        this.setState({display: !this.state.display});
    };

    /**
     * @param {string} title
     * Function to toggle info
     */
    toggleIndex(title) {
        let newState = {};
        switch (title) {
            case 'Hangman Anime Ed.':
                newState = this.hangmanInfo;
            break;
            case 'League of Legendmon RPG':
                newState = this.legendmonInfo;
            break;
            case 'CLI - Bamazon':
                newState = this.bamazonInfo;
            break;
            case 'Kickass Karaoke!':
                newState = this.kickassInfo;
            break;
            case 'Reddit Scrapper':
                newState = this.redditInfo;
            break;
            case 'Pokemon Trivia':
                newState = this.triviaInfo;
            break;
            default:
        };
        console.log(newState);
        this.setState(newState);
    };
    /**
     * @return {*} Container
     */
    render() {
        const infoTech = this.state.currentTech.map((tech) => {
            return (
                <li key={`projects-${uniqid()}`} className={`col-md-6 d-flex justify-content-center project-info-tech`}>{tech}</li>
            );
        });
        console.log(this.state.projects);
        return (
            <Transition
                in={this.state.display}
                timeout={1500}
                unmountOnExit
                appear>
                {(state) => {
                    return (
                        <div className={`row page-body projects-page ${state}`}>
                            <div className={`col-md-12 d-flex justify-content-center page-content`}>
                                <div className={`row project-page-holder`}>
                                    <div className={`col-md-3 no-pad project-header`}>
                                        <div className={`row project-title-holder`}>
                                            <div className={`col-md-12 d-flex justify-content-center projects-title`}>
                                                My Projects
                                            </div>
                                        </div>
                                        <hr className={`hr-white-blur`}/>
                                        <div className={`row projects-body-holder`}>
                                            <div className={`col-md-12 d-flex justify-content-center projects-info-title`}>{this.state.currentTitle}</div>
                                            <div className={`col-md-12 d-flex justify-content-center projects-info-description`}>{this.state.currentDescription}</div>
                                            <ul className={`row no-pad projects-info-tech-list`}>
                                                <li className={`col-md-12 d-flex justify-content-center project-info-tech-title`}>Technologies/Tools Used</li>
                                                <li className={`col-md-12 project-info-tech-title-hr`}><hr className={`hr-white-blur`}/></li>
                                                {infoTech}
                                            </ul>
                                            <div className={`col-md-12 d-flex justify-content-center projects-links-container`}>
                                                <a className={`projects-info-link`} href={`${this.state.currentLink}`} target='_blank'>{this.state.currentLinkText}</a>
                                                <div className={`vertical-line`}></div>
                                                <a className={`projects-info-link`} href={`${this.state.currentRepo}`} target='_blank'>{this.state.currentRepoText}</a>
                                            </div>
                                            <div className={`col-md-12 d-flex justify-content-center projects-info-version`}>
                                                {this.state.currentVersion}
                                            </div>
                                        </div>
                                        <div className={`row project-intructions-holder`}>
                                            <div className={`col-md-12 projects-intructions`}>
                                                ** Scroll to the cards to view technologies used and more information **
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`col-md-9 no-pad`}>
                                        <Carosel cardInfo = {this.state.projects} size={4} toggleInfo={this.toggleIndex} />
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

export default Projects;
