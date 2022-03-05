import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import AllSkills from "../components/AllSkills/AllSkills";
import Footer from "../components/Footer/Footer";

class SkillsPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Technology"/>
                <PageTop pagetitle="Technology We Used"/>
                <AllSkills/>
                <Footer/>
            </Fragment>
        );
    }
}

export default SkillsPage;