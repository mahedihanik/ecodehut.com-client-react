import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import 'mdbreact/dist/css/mdb.css';
import {MDBBtn, MDBCol, MDBContainer, MDBRow} from 'mdbreact'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppURL";



class CourseDetails extends Component {
    constructor(props) {
        super();
        this.state={
            myCourseId:props.id,
            bigTitle:"",
            longDesc:"",
            skillAll:"",
            videoUrl:"",
            totalLecture:"",
            totalStudent:"",
            courseLink:"",
            countStart:0
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.CourseDetails+this.state.myCourseId).then(result=>{
            this.setState({
                longDesc:result[0]['long_des'],
                skillAll:result[0]['skill_all'],
                totalLecture:result[0]['totai_lecture'],
                totalStudent:result[0]['total_student'],
                videoUrl:result[0]['video_url'],
                courseLink:result[0]['course_link']

            })
        }).catch(error=>{

        })
    }
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="mt-5">
                        <Container className="text-center">
                            <Row>
                                <Col lg={8} md={6} sm={12} className="mt-5">
                                    <Row>
                                        <div className="courseCounterDiv">
                                                <Col>
                                                    <h1 className="countNumberCourse">
                                                        <CountUp start={0} end={60}>
                                                            {({ countUpRef, start }) => (
                                                                <VisibilitySensor onChange={start} delayedCall>
                                                                    <span ref={countUpRef} />
                                                                </VisibilitySensor>
                                                            )}
                                                        </CountUp>
                                                    </h1>
                                                    <h4 className="countTitleCourse">Student Enroll</h4>

                                                </Col>
                                        </div>
                                        <div className="courseCounterDiv ">
                                                <Col>
                                                    <h1 className="countNumberCourse">
                                                        <CountUp start={0} end={70} delay={0} duration={10}>
                                                            {({ countUpRef }) => (
                                                                    <span ref={countUpRef} />
                                                            )}
                                                        </CountUp>
                                                    </h1>
                                                    <h4 className="countTitleCourse">Total Lectures</h4>

                                                </Col>
                                        </div>
                                    </Row>
                                </Col>
                                <Col lg={4} md={6} sm={12} className="text-justify mt-5">
                                   <p>{this.state.longDesc}</p>
                                </Col>
                            </Row>
                        </Container>
                </Container>
                <MDBContainer className="mt-5">
                    <MDBRow>
                        <MDBCol lg={6} md={6} sm={12}>
                            <h2 className="aboutTitle">Skill You Get</h2><br/>
                            <p className="cardSummarySubTitle text-justify"><FontAwesomeIcon className="iconBulletSummaryCard" icon={faCheckCircle} /> Requirement Gathering</p>
                            <p className="cardSummarySubTitle text-justify"><FontAwesomeIcon className="iconBulletSummaryCard" icon={faCheckCircle} /> System Analysis</p>
                            <p className="cardSummarySubTitle text-justify"><FontAwesomeIcon className="iconBulletSummaryCard" icon={faCheckCircle} /> Coding Testing</p>
                            <p className="cardSummarySubTitle text-justify"><FontAwesomeIcon className="iconBulletSummaryCard" icon={faCheckCircle} /> Implementation</p>
                            <p className="cardSummarySubTitle text-justify"><FontAwesomeIcon className="iconBulletSummaryCard" icon={faCheckCircle} /> Requirement Gathering</p>
                            <p className="cardSummarySubTitle text-justify"><FontAwesomeIcon className="iconBulletSummaryCard" icon={faCheckCircle} /> System Analysis</p>
                            <p className="cardSummarySubTitle text-justify"><FontAwesomeIcon className="iconBulletSummaryCard" icon={faCheckCircle} /> Coding Testing</p>
                            <p className="cardSummarySubTitle text-justify"><FontAwesomeIcon className="iconBulletSummaryCard" icon={faCheckCircle} /> Implementation</p>
                            <MDBBtn gradient="blue">More Info</MDBBtn>
                        </MDBCol>
                        <MDBCol lg={6} md={6} sm={12} className="mt-5">
                            <div className="embed-responsive embed-responsive-16by9 w-100">
                                <iframe className="embed-responsive-item" src={this.state.videoUrl} allowFullScreen></iframe>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </Fragment>
        );
    }
}

export default CourseDetails;