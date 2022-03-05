import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import wentWrong from "../../asset/images/error.svg";

class WentWrong extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <Row>
                        <Col>
                            <img src={wentWrong} alt=""/>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default WentWrong;