import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

class PageTop extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className={"topFixedBannerPage p-0"}>
                    <div className={"topBannerOverlayPage"}>
                        <Container className={"topContentPage"}>
                            <Row>
                                <Col className="text-center">
                                    <h5 className={"topBannerTitlePage"}>{this.props.pagetitle}</h5>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>

            </Fragment>
        );
    }
}

export default PageTop;