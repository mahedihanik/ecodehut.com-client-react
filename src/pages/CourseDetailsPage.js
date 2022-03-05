import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import CourseDetails from "../components/CourseDetails/CourseDetails";

class CourseDetailsPage extends Component {
    constructor({match}) {
        super();
        this.state={
            coursePassedID:match.params.courseID,
            coursePassedName:match.params.courseName
        }
    }
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Course Details"/>
                <PageTop pagetitle={this.state.coursePassedName}/>
                <CourseDetails id={this.state.coursePassedID}/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CourseDetailsPage;