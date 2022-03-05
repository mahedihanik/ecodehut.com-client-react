import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppURL";
import Loading from "../Loading/Loading";
class TopBanner extends Component {
    constructor() {
        super();
        this.state={
            title:"",
            subTitle:"",
            loaderClass:"d-block"
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.HomeTopTitle).then(result=>{
            this.setState({title:result[0]['home_title'],subTitle: result[0]['home_subtitle'],loaderClass:"d-none"})
        }).catch(error=>{
            this.setState({title:"????",subTitle:"????"})
        })
    }

    render() {
        if(this.state.loading==true){
            return <Loading/>
        }
        else{
            return (
                <Fragment>
                    <Container fluid={true} className={"topFixedBanner p-0"}>
                        <div className={"topBannerOverlay"}>
                            <Container className={"topContent"}>
                                <Row>
                                    <Col className="text-center">
                                        <span className={this.state.loaderClass}><Loading /></span>
                                        <h5 className="topBannerTitle">{this.state.title}</h5>
                                        <h5 className="topBannerSubTitle">{this.state.subTitle}</h5>
                                        <Button variant="info">More Info</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </div>

                    </Container>

                </Fragment>
            );
        }

    }
}

export default TopBanner;