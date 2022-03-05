import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {faFacebook,faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppURL";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class Footer extends Component {
    constructor() {
        super();
        this.state={
            address:"",
            email:"",
            phone:"",
            fbLink:"",
            ytLink:"",
            footerCredit:"",
            error:false
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.Footer).then(result=>{
            if (result==null){
                this.setState({error:true,loading:false})

            }
            else{
                this.setState({address:result[0]['address'],
                    email:result[0]['email'],
                    phone:result[0]['phone'],
                    fbLink:result[0]['facebook_link'],
                    ytLink:result[0]['youtube_link'],
                    footerCredit:result[0]['footer_credit']
                })
            }
        }).catch(error=>{
            this.setState({error:true,loading:false})
        })
    }
    render() {
        if (this.state.error==false){
            return (
                <Fragment>
                    <Container fluid={true} className="footerSection text-center">
                        <Row>
                            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                                <h1 className="footerTitle">Follow Me</h1>
                                <a className="footerSocialLinkFb" href={"//"+this.state.fbLink}><FontAwesomeIcon  icon={faFacebook} /> Facebook</a><br/>
                                <a href={"//"+this.state.ytLink} className="footerSocialLink"><FontAwesomeIcon className="" icon={faYoutube} /> YouTube</a>
                            </Col>
                            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                                <h1 className="footerTitle">Address</h1>
                                <p className="footerItemName"> {this.state.address}</p>
                                <p className="footerItemName"><FontAwesomeIcon className="" icon={faEnvelope} /> {this.state.email}</p>
                                <p className="footerItemName"><FontAwesomeIcon className="" icon={faPhone} /> {this.state.phone}</p>
                            </Col>
                            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                                <h1 className="footerTitle">Information</h1>
                                <Link to="/about" className="footerSocialLink">About Me</Link><br/>
                                <Link to="/contact" className="footerSocialLink">Contact Me</Link>
                            </Col>
                            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                                <h1 className="footerTitle">Legal</h1>
                                <Link to="/refund" className="footerSocialLink">Refund Policy</Link><br/>
                                <Link to="/term" className="footerSocialLink">Terms And Condition</Link><br/>
                                <Link to="/privacy" className="footerSocialLink">Privacy Policy</Link>
                            </Col>
                        </Row>
                    </Container>
                    <Container fluid={true} className="text-center copyWriteSection">
                        <Link className="copyWriteSectionText" to="#"> {this.state.footerCredit}</Link>

                    </Container>

                </Fragment>
            );

        }
        else if (this.state.error==true){
            return <WentWrong/>
        }
    }
}

export default Footer;