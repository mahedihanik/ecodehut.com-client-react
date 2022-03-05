import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import TermsSection from "../components/TermsSection/TermsSection";

class TermsAndConditionPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Terms & Condition"/>
                <PageTop pagetitle="Terms & Condition"/>
                <TermsSection/>
                <Footer/>
            </Fragment>
        );
    }
}

export default TermsAndConditionPage;