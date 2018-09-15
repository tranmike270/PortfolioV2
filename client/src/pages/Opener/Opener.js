import React, {Component} from 'react';
import Clock from './Clock/Clock';
import StartBtn from './StartBtn/StartBtn';
import PropTypes from 'prop-types';
import {Col, Row, Container} from 'reactstrap';
import $ from 'jquery';


const propTypes = {
    loadPage: PropTypes.func,
    opener: PropTypes.bool,
};
/**
 * @return {*} Container for opener
 */
class Opener extends Component {
    /**
     * Constructor function for setting state
     * @param {*} props
     */
    constructor(props) {
        super(props);
        this.state = {
            clockDimensions: 500,
        };
    };

    // /**
    //  * ComponentDidMount to set state.clockDimensions
    //  */
    // componentDidMount() {
    //     this.getDimensions();
    // };

    // /**
    //  * Function to set dimensions for canvas
    //  */
    // getDimensions() {
    //     let windowWidth = $(window).width();
    //     let clockDimensions = this.state.clockDimensions;
    //         if (windowWidth < 965 && windowWidth >= 850) {
    //             clockDimensions = 450;
    //         } else if (windowWidth < 850 && windowWidth >= 500) {
    //             clockDimensions = 400;
    //         } else if (windowWidth < 500) {
    //             clockDimensions = 300;
    //         };

    //         this.setState({clockDimensions: clockDimensions});
    // };


    /**
     * Function that triggers parent to load page
     */
    buttonLoadPage() {
        this.props.loadPage();
    };

    /**
     * @return {*} Container
     */
    render() {
        const showOpener = this.props.opener;
        return (
            <Container className="opener-container">
                <Row>
                    <Col className='d-flex justify-content-center'>
                        <Clock
                            show={showOpener}
                            clockDimensions={this.state.clockDimensions}/>
                    </Col>
                </Row>
                <Row >
                    <Col className='d-flex justify-content-center'>
                        <StartBtn
                            clockDimensions={this.state.clockDimensions}
                            show={showOpener}
                            loadPage={this.buttonLoadPage.bind(this)}/>
                    </Col>
                </Row>
            </Container>


        );
    }
}

Opener.propTypes = propTypes;

export default Opener;
