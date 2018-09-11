import React, {Component} from 'react';
import {TransitionGroup} from 'react-transition-group';
import Transition from 'react-transition-group/Transition';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import {Card, CardTitle, CardText, CardLink} from 'reactstrap';
import {Arrowsvg} from '../SVGS';
const propTypes = {
    cardInfo: PropTypes.array,
    size: PropTypes.number,
    toggleInfo: PropTypes.func,
};

/**
 * @return {*} Carosel Component Container
 */
class Carosel extends Component {
    /**
     * @param {*} props
     */
    constructor(props) {
        super(props);
        this.state = {
            showCarosel: this.caroselElements,
        };
        this.caroselElements = [];
        this.cards = [];
        this.handleCarosel = this.handleCarosel.bind(this);
        this.pendCard = this.pendCard.bind(this);
        this.addCard = this.addCard.bind(this);
        this.cardElement = this.cardElement.bind(this);
        this.shift = this.shift.bind(this);
    };

    /**
     * Function that displays cards upon page open
     */
    componentDidMount() {
        let card = this.props.cardInfo[this.props.size];
        card.cardPosition = 'card-hidden';
        card.show = false;
        card.id = uniqid();
        this.addCard(card, 'append');
        for (let i = 0; i <= this.props.size; i++) {
            card = this.props.cardInfo[i];
            card.show = true;
            card.id = uniqid();
            switch (i) {
                case 0: card.cardPosition = 'card-left';
                break;
                case 1:
                    card.cardPosition = 'card-middle';
                    console.log(card.cardTitle);
                    this.props.toggleInfo(card.cardTitle);
                break;
                case 2: card.cardPosition = 'card-right';
                break;
                default:
                 card.cardPosition = 'card-hidden';
                 card.show = false;
            };
            this.addCard(card, 'append');
        }
     };

    /**
     * @param {string} direction
     */
    handleCarosel(direction) {
        const cards = this.cards;
        const leftIndex = cards.findIndex((card) => card.cardPosition === 'card-left');
        const rightIndex = cards.findIndex((card) => card.cardPosition === 'card-right');
        if (direction === 'right') {
            if (leftIndex === 1) {
                let lastCardNum = cards[0].cardNum;
                let newCardObj;
                if (lastCardNum > 0) {
                    for (let i = 0; (typeof newCardObj) === 'undefined'; i++) {
                        if (cards[i].cardNum === (lastCardNum - 1)) {
                            newCardObj = cards[i];
                        };
                    };
                } else if (lastCardNum === 0) {
                    for (let i = 0; (typeof newCardObj) === 'undefined'; i++) {
                        if (cards[i].cardNum === this.props.size) {
                            newCardObj = cards[i];
                        };
                    };
                };
                newCardObj.id = uniqid();
                newCardObj.cardPosition = 'card-hidden';
                newCardObj.show = false;
                this.addCard(newCardObj, 'prepend', 'handle-right');
            } else {
                this.shift('right');
            };
        } else if (direction === 'left') {
            if (rightIndex === (cards.length - 2)) {
                let lastCardNum = cards[cards.length - 1].cardNum;
                let newCardObjLeft;
                if (lastCardNum < this.props.size) {
                    for (let i = 0; (typeof newCardObjLeft) === 'undefined'; i++) {
                        if (cards[i].cardNum === (lastCardNum + 1)) {
                            newCardObjLeft = cards[i];
                        };
                    };
                } else if (lastCardNum === this.props.size) {
                    for (let i = 0; (typeof newCardObjLeft) === 'undefined'; i++) {
                        if (cards[i].cardNum === 0) {
                            newCardObjLeft = cards[i];
                        };
                    };
                };
                newCardObjLeft.id = uniqid();
                newCardObjLeft.cardPosition = 'card-hidden';
                newCardObjLeft.show = false;
                this.addCard(newCardObjLeft, 'append', 'handle-left');
            } else {
                this.shift('left');
            }
        };
    };

    /**
     * @param {object} card
     * @param {string} pend
     * @param {string} nxtoption
     */
    addCard(card, pend, nxtoption) {
        const newCard = {
            id: card.id,
            cardTitle: card.cardTitle,
            cardSVG: card.cardSVG,
            cardText: card.cardText,
            cardLink: card.cardLink,
            cardLinkText: card.cardLinkText,
            cardTextB: card.cardTextB,
            cardNum: card.cardNum,
            cardPosition: card.cardPosition,
            show: card.show,
        };
        this.setState({[`card-${card.cardNum}-${card.id}`]: newCard}, this.pendCard(newCard, pend, nxtoption));
    };


    /**
     * appendCard
     * @param {object} card
     * @param {string} direction
     * @param {string} nxtoption
     */
    pendCard(card, direction, nxtoption) {
        const newCard = <this.cardElement
                key={`cardNo${card.cardNum}-${card.id}`}
                id={card.id}
                cardSVG={card.cardSVG}
                cardTitle={card.cardTitle}
                cardText={card.cardText}
                cardLink={card.cardLink}
                cardNum={card.cardNum}
                cardLinkText={card.cardLinkText}
                cardTextB={card.cardTextB}
                />;

        const newCardItem = {
            cardPosition: card.cardPosition,
            cardNum: card.cardNum,
            cardSVG: card.cardSVG,
            cardTitle: card.cardTitle,
            cardText: card.cardText,
            cardLink: card.cardLink,
            cardLinkText: card.cardLinkText,
            cardTextB: card.cardTextB,
            cardKey: `card-${card.cardNum}-${card.id}`,
        };
        console.log(newCardItem);
        if (direction === 'append') {
            this.cards.push(newCardItem);
            this.caroselElements.push(newCard);
        };

        if (direction === 'prepend') {
            this.cards.unshift(newCardItem);
            this.caroselElements.unshift(newCard);
        };
        this.setState({showCarosel: this.caroselElements}, () => {
            switch (nxtoption) {
                case 'handle-right': this.handleCarosel('right');
                break;
                case 'handle-left': this.handleCarosel('left');
                break;
                default:
            };
        });
    };

    /**
     * @param {*} props
     * @return {*} Element
     */
    cardElement(props) {
        const {id, cardSVG, cardTitle, cardText, cardLink, cardNum, cardTextB, cardLinkText} = props;
        const showLink = (cardLink.length > 0) ? true : false;
        return (
            <Transition
            in={this.state[`card-${cardNum}-${id}`].show}
            timeout={{
                enter: 0,
                exit: 1000,
            }}
            appear>
            {(state) => (
                    <div className={`d-flex justify-content-center carosel-card ${state} ${this.state[`card-${cardNum}-${id}`].cardPosition}`}>
                        <Card className={`cards`} body>
                            {cardSVG}
                            <CardTitle className={`carosel-text title bold`}>{cardTitle}</CardTitle>
                            <CardText className={`carosel-text text`}>{cardText} <span className={`carosel-text text bold`}>{cardTextB}</span></CardText>
                            {showLink && (
                            <CardLink className={`carosel-text link`} href={`${cardLink}`} target='_blank'>
                                {cardLinkText}
                            </CardLink>
                                )
                            }
                        </Card>
                    </div>
                )
            }
        </Transition>
        );
    };

    /**
     * @param {string} direction
     */
    shift(direction) {
        const changedCards = {};
        const cards = this.cards;
        console.log(cards);
        const leftIndex = cards.findIndex((card) => card.cardPosition === 'card-left');
        const rightIndex = cards.findIndex((card) => card.cardPosition === 'card-right');
        console.log(`left index is ${leftIndex}`);
        if (direction === 'right') {
            cards[leftIndex + 2].cardPosition = 'card-hidden';
            cards[leftIndex + 2].show = false;

            cards[leftIndex + 1].cardPosition = 'card-right';
            cards[leftIndex + 1].show = true;

            cards[leftIndex].cardPosition = 'card-middle';
            cards[leftIndex].show = true;
            this.props.toggleInfo(cards[leftIndex].cardTitle);
            cards[leftIndex - 1].cardPosition = 'card-left';
            cards[leftIndex - 1].show = true;

            changedCards[cards[leftIndex + 2].cardKey] = cards[leftIndex + 2];
            changedCards[cards[leftIndex + 1].cardKey] = cards[leftIndex + 1];
            changedCards[cards[leftIndex].cardKey] = cards[leftIndex];
            changedCards[cards[leftIndex - 1].cardKey] = cards[leftIndex - 1];

            this.cards = cards;
            this.setState(changedCards);
        } else if (direction === 'left') {
            let NewCard1 = cards[rightIndex - 2];
            let NewCard2 = cards[rightIndex - 1];
            let NewCard3 = cards[rightIndex];
            let NewCard4 = cards[rightIndex + 1];

            NewCard1.cardPosition = 'card-hidden';
            NewCard1.show = false;
            NewCard2.cardPosition = 'card-left';
            NewCard2.show = true;
            NewCard3.cardPosition = 'card-middle';
            NewCard3.show = true;
            NewCard4.cardPosition = 'card-right';
            NewCard4.show = true;
            cards[rightIndex - 2] = NewCard1;
            cards[rightIndex - 1] = NewCard2;
            cards[rightIndex] = NewCard3;
            cards[rightIndex + 1] = NewCard4;
            changedCards[NewCard1.cardKey] = NewCard1;
            changedCards[NewCard2.cardKey] = NewCard2;
            changedCards[NewCard3.cardKey] = NewCard3;
            changedCards[NewCard4.cardKey] = NewCard4;

            this.props.toggleInfo(NewCard3.cardTitle);
            this.cards = cards;
            this.setState(changedCards);
        };
    };
    /**
     * @return {*} Carosel Container
     */
    render() {
        console.log(this.cards);
        return (
            <div className='carosel-body mar-15'>
                <div className={`row carosel-arrows pad-15 `}>
                    <div className={`col-md-1 d-flex justify-content-center arrow-container`}>
                        <div className={`carosel-arrow mar-15 left`} onClick={() => this.handleCarosel('left')}>
                            <Arrowsvg />
                        </div>
                    </div>
                    <div className={`col-md-10`}>
                    </div>
                    <div className={`col-md-1 d-flex justify-content-center arrow-container`}>
                        <div className={`carosel-arrow mar-15 right`} onClick={() => this.handleCarosel('right')}>
                            <Arrowsvg />
                        </div>
                    </div>
                </div>
                <TransitionGroup className={`row carosel-cards`}>
                    <div className={'col-md-12'}>
                        <div className={`row`}>
                            {this.caroselElements}
                        </div>
                    </div>
                </TransitionGroup>
            </div>
        );
    }
}

Carosel.propTypes = propTypes;
export default Carosel;
