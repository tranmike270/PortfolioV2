import React, {Component} from 'react';
import {About, Contact, Home, Plans, Projects} from '../../pages';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';

const propTypes = {
    show: PropTypes.bool,
};
/**
 * @return {*} Mainbody Container
 */
class MainBody extends Component {
    /**
     * @return {*} Render container
     */
    render() {
        return (
            <Switch>
                <Route exact path = '/' component={Home} />
                <Route exact path = '/about' component={About} />
                <Route exact path = '/projects' component={Projects} />
                <Route exact path = '/plans' component={Plans} />
                <Route exact path = '/contact' component={Contact} />
            </Switch>
        );
    }
};

MainBody.propTypes= propTypes;

export default MainBody;
