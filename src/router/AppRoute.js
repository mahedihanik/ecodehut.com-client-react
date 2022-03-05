import React, {Component, Fragment} from 'react';
import {Route,Switch} from "react-router-dom"
import HomePage from "../pages/HomePage";
import CoursesPage from "../pages/CoursesPage";
import PortfolioPage from "../pages/PortfolioPage";
import SkillsPage from "../pages/SkillsPage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import RefundPolicyPage from "../pages/RefundPolicyPage";
import TermsAndConditionPage from "../pages/TermsAndConditionPage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";
import CourseDetailsPage from "../pages/CourseDetailsPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/courses" component={CoursesPage}/>
                    <Route exact path="/portfolio" component={PortfolioPage}/>
                    <Route exact path="/skill" component={SkillsPage}/>
                    <Route exact path="/contact" component={ContactPage}/>
                    <Route exact path="/about" component={AboutPage}/>
                    <Route exact path="/refund" component={RefundPolicyPage}/>
                    <Route exact path="/term" component={TermsAndConditionPage}/>
                    <Route exact path="/privacy" component={PrivacyPolicyPage}/>
                    <Route exact path="/projectDetails/:projectID/:projectName" component={ProjectDetailsPage}/>
                    <Route exact path="/courseDetails/:courseID/:courseName" component={CourseDetailsPage}/>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;