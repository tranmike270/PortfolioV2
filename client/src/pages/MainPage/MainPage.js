import React, {Component} from 'react';
import Transition from 'react-transition-group/Transition';
import {Navigations, MainBody, ConnectPanel} from '../../components';
import PropTypes from 'prop-types';
import {Col, Row, Container} from 'reactstrap';
import {LinkedInsvg, GitHubsvg, StackOFsvg} from '../../components/SVGS';
const propTypes = {
    show: PropTypes.bool,
};
/**
 * @return {*} Container
 */
class MainPage extends Component {
    /**
     * sets state
     */
    constructor() {
        super();
        this.state = {
            display: false,
        };
    }

    /**
     * toggle display
     */
    toggleDisplay() {
        this.setState({display: !this.state.display});
    }
    /**
     * @return {*} Container
     */
    render() {
        const show = this.props.show;
        const connectItems = [
            {
                title: 'LinkedIn',
                svg: <LinkedInsvg />,
                link: 'https://www.linkedin.com/in/michael-ttt/',
            },
            {
                title: 'GitHub',
                svg: <GitHubsvg />,
                link: 'https://github.com/tranmike270',
            },
            {
                title: 'Stack Overflow',
                svg: <StackOFsvg />,
                link: 'https://stackoverflow.com/users/9284779/mr-tran',
            },
        ];
        return (
            <Transition
                in={show}
                timeout={4000}
                unmountOnExit
                appear>
                {(state) => {
                    return (
                        <Container fluid className={`mainPage main-${state}`}>
                            <Row>
                                <Navigations toggleDisplay={this.toggleDisplay.bind(this)}/>
                                <div hidden={this.state.display}>
                                    <Col className={'d-flex justify-content-center pages'}>
                                        <MainBody />
                                    </Col>
                                    <ConnectPanel panelItemsInfo={connectItems} />
                                </div>
                            </Row>
                        </Container>
                        );
                }}
            </Transition>
        );
    }
};

MainPage.propTypes = propTypes;


export default MainPage;
