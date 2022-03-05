import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

class Summary extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="summaryBanner summarySectionMarginTop p-0">
                    <div className="summaryBannerOverlay">
                        <Container className="text-center">
                            <Row>
                                <Col lg={8} md={6} sm={12}>
                                    <Row className="countSectionTop">
                                        <Col>
                                            <h1 className="countNumber">
                                                <CountUp start={0} end={12}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className="countTitle">Total Projects</h4>
                                            <hr className="bg-white w-25"/>
                                        </Col>
                                        <Col>
                                            <h1 className="countNumber">
                                                <CountUp start={0} end={15}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className="countTitle">Total Clients</h4>
                                            <hr className="bg-white w-25"/>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={4} md={6} sm={12}>
                                    <Card className="summaryWorkCard">
                                        <Card.Body>
                                            <Card.Title className="cardSummaryTitle text-justify">How We Work</Card.Title>
                                            <Card.Text>
                                                <p className="cardSummarySubTitle text-justify"><FontAwesomeIcon className="iconBulletSummaryCard" icon={faCheckCircle} /> Requirement Gathering</p>
                                                <p className="cardSummarySubTitle text-justify"><FontAwesomeIcon className="iconBulletSummaryCard" icon={faCheckCircle} /> Planing</p>
                                                <p className="cardSummarySubTitle text-justify"><FontAwesomeIcon className="iconBulletSummaryCard" icon={faCheckCircle} /> System Analysis</p>
                                                <p className="cardSummarySubTitle text-justify"><FontAwesomeIcon className="iconBulletSummaryCard" icon={faCheckCircle} /> Structure Design</p>
                                                <p className="cardSummarySubTitle text-justify"><FontAwesomeIcon className="iconBulletSummaryCard" icon={faCheckCircle} /> Module Generation</p>
                                                <p className="cardSummarySubTitle text-justify"><FontAwesomeIcon className="iconBulletSummaryCard" icon={faCheckCircle} /> Start Coding</p>
                                                <p className="cardSummarySubTitle text-justify"><FontAwesomeIcon className="iconBulletSummaryCard" icon={faCheckCircle} /> Testing</p>
                                                <p className="cardSummarySubTitle text-justify"><FontAwesomeIcon className="iconBulletSummaryCard" icon={faCheckCircle} /> Implementation</p>
                                                <p className="cardSummarySubTitle text-justify"><FontAwesomeIcon className="iconBulletSummaryCard" icon={faCheckCircle} /> Maintenance</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default Summary;