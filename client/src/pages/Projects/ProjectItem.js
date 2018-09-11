import React, {Component} from 'react';
import Transition from 'react-transition-group/Transition';
import PropTypes from 'prop-types';

const propTypes = {
    projectInfo: PropTypes.object,
    show: PropTypes.bool,
};
/**
 * @return {ProjectItem} container
 */
class ProjectItem extends Component {
    /**
     * Constructor function for setting state
     * @param {*} props
     */
    constructor(props) {
        super(props);
        this.state = {
            projectID: 0,
            projectName: '',
            projectDetails: '',
            projectLink: '',
            projectGH: '',
            showProject: false,
            projectImage: '',
        };
    }

    /**
     * function to set state
     */
    componentDidMount() {
        const proj = this.props.projectInfo;
        this.setState({
            projectID: proj.ID,
            projectName: proj.name,
            projectDetails: proj.details,
            projectLink: proj.link,
            projectGH: proj.GHLink,
            showProject: this.props.show,
            projectImage: proj.image,
        });
    }
    /**
     * @return {ProjectItem} Container
     */
    render() {
        return (
            <Transition
                in={this.props.show}
                timeout={0}
                unmountOnExit
                appear>
                {(state) => {
                    return (
                        <div className={`row project-container project-${this.state.projectID} ${state}`}>
                                <div className={`col-md-5`}>
                                    <h3 className={`project-name`}>
                                        {this.state.projectName}
                                    </h3>
                                    <img src={this.state.projectImage} alt={`${this.state.projectName}`} className={`project-image`} />
                                </div>
                                <div className={`col-md-7`}>
                                    <p className={`project-details`}>
                                        {this.state.projectDetails}
                                    </p>
                                    <p className={`project-links project-link-container`}>
                                        Link to Project: <a className={`project-link`} href={this.state.projectLink} target='_blank'>{this.state.projectLink}</a>
                                    </p>
                                    <p className={`project-links project-gh-container`}>
                                        Project GitHub: <a className={`project-link`} href={this.state.projectGH} target='_blank'>{this.state.projectGH}</a>
                                    </p>
                                </div>
                        </div>

                    );
                }}
            </Transition>
        );
    }
};

ProjectItem.propTypes = propTypes;

export default ProjectItem;
