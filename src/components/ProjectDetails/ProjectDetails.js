import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import img1 from '../../asset/images/course1.svg'
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppURL";
import ReactHtmlParser from "react-html-parser";
import Loading from "../Loading/Loading";

class ProjectDetails extends Component {
    constructor(props) {
        super();
        this.state={
            MyProjectId:props.id,
            bigImage:"",
            shortDesc:"",
            projectFea:"",
            liveUrl:"",
            projectName:"",
            loading:true
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.ProjectDetails+this.state.MyProjectId).then(result=>{
            this.setState({bigImage:result[0]['big_image'],
                shortDesc:result[0]['short_description'],
                projectFea:result[0]['project_features'],
                liveUrl:result[0]['live_preview_url'],
                projectName:result[0]['project_name'],
                loading:false
            })
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
                    <Container className="mt-5">
                        <Row>
                            <Col lg={6} md={12} sm={12}>
                                <img className="projectDetailsImg" src={this.state.bigImage} alt=""/>

                            </Col>
                            <Col lg={6} md={12} sm={12}>
                                <h2 className="aboutTitle">{this.state.projectName}</h2>
                                <p className="aboutDes">{this.state.shortDesc}</p>
                                {ReactHtmlParser(this.state.projectFea)}
                                <Button className="RProjectCardButton" variant="info">Live Preview</Button>
                            </Col>
                        </Row>

                    </Container>
                </Fragment>
            );
        }

    }
}

export default ProjectDetails;