import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppURL";
import Loading from "../Loading/Loading";

class Video extends Component {
    constructor() {
        super();
        this.state={
            show:false,
            videoDes:"",
            videoUrl:"",
            loading:true
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.VideoHome).then(result=>{
            this.setState({videoDes:result[0]['video_des'],
                videoUrl:result[0]['video_url'],
                loading:false
            })
        }).catch(error=>{

        })

    }
    modalClose=()=>this.setState({show:false})
    modalOpen=()=>this.setState({show:true})
    render() {
        if(this.state.loading==true){
            return <Loading/>
        }
        else{
            return (
                <Fragment>
                    <Container className="text-center">
                        <Row>
                            <Col lg={12} md={12} sm={12} className="videoCard">
                                <div>
                                    <p className="videoTitle">How I Do</p>
                                    <p className="videoDes">{this.state.videoDes}</p>
                                    <p><FontAwesomeIcon onClick={this.modalOpen} className="playButton" icon={faPlayCircle} /></p>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                    <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>How I Do</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src={this.state.videoUrl} allowFullScreen></iframe>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="danger" onClick={this.modalClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </Fragment>
            );
        }

    }
}

export default Video;