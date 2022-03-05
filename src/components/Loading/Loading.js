import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import loading from "../../asset/images/loading.svg"

class Loading extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <Row>
                        <Col>
                            <img src={loading} alt=""/>
                        </Col>
                    </Row>

                </Container>

            </Fragment>
        );
    }
}

export default Loading;