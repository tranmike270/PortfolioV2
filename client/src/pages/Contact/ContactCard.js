import React, {Component} from 'react';
import Transition from 'react-transition-group/Transition';
import {Card, CardTitle, CardText} from 'reactstrap';
import PropTypes from 'prop-types';

const propTypes = {
    cardTitle: PropTypes.string.isRequired,
    cardSVG: PropTypes.any.isRequired,
    cardText: PropTypes.string.isRequired,
    cardLink: PropTypes.string,
    cardPosition: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,
};

/**
 * @return {*} ContactCard Container
 */
class ContactCard extends Component {
    /**
     * Construct function for setting state
     * @param {*} props
     */
    constructor(props) {
        super(props);
        this.state = {

        };
    };

    /**
     * @return {*} ContactCard Container
     */
    render() {
        return (
            <Transition
                in={this.props.show}
                timeout={{
                    enter: 0,
                    exit: 1000,
                }}
                unmountOnExit
                appear>
                {(state) => {
                    return (
                        <div className={`d-flex justify-content-center carosel-card ${state} ${this.props.cardPosition}`}>
                            <Card className={`cards`} body>
                                {this.props.cardSVG}
                                <CardTitle>{this.props.cardTitle}</CardTitle>
                                <CardText>{this.props.cardText}</CardText>
                            </Card>
                        </div>
                    );
                }}
            </Transition>
        );
    }
};

ContactCard.propTypes = propTypes;

export default ContactCard;
