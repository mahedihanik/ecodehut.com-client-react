import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppURL";
import ReactHtmlParser from "react-html-parser";
import Loading from "../Loading/Loading";

class PrivacySection extends Component {
    constructor() {
        super();
        this.state={
            desc:"",
            loading:true
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.InformationEtc).then(result=>{
            this.setState({desc:result[0]['privacy'],loading:false})
        }).catch(error=>{

        })

    }
    render() {
        if(this.state.loading==true){
            return <Loading/>
        }
        else{
            return (
                <Fragment>
                    <Container className="mt-5 p-5">
                        <Row>
                            <Col sm={12} md={12} lg={12} className="text-justify">
                                {ReactHtmlParser(this.state.desc)}
                            </Col>
                        </Row>

                    </Container>
                </Fragment>
            );
        }

    }
}

export default PrivacySection;