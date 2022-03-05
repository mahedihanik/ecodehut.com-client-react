import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import PrivacySection from "../components/PrivacySection/PrivacySection";

class PrivacyPolicyPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Privacy Policy"/>
                <PageTop pagetitle="Privacy Policy"/>
                <PrivacySection/>
                <Footer/>
            </Fragment>
        );
    }
}

export default PrivacyPolicyPage;