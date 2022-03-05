import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import card1 from '../../asset/images/recentprocard1.svg'
import card3 from '../../asset/images/recentprocard3.svg'
import {Link} from "react-router-dom";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppURL";
import Loading from "../Loading/Loading";
class RecentProjects extends Component {
    constructor() {
        super();
        this.state={
            myData:[],
            loading:true
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.ProjectHome).then(result=>{
            this.setState({myData:result,loading:false})
        }).catch(error=>{

        })
    }
    render() {
        if(this.state.loading==true){
            return <Loading/>
        }
        else{
            const myList=this.state.myData;
            const myView=myList.map(myList=>{
                return <Col sm={12} md={6} lg={4} className="p-2">
                    <Card className="RProjectCard">
                        <Card.Img className="RProjectCardImage" variant="top" src={myList.small_image} />
                        <Card.Body>
                            <Card.Title className="RProjectCardTitle">{myList.project_name}</Card.Title>
                            <Card.Text className="RProjectCardDes">
                                {myList.short_description}
                            </Card.Text>
                            <Button className="RProjectCardButton" variant="danger"><Link className="projectDetailsBtn" to={"/projectDetails/"+myList.id+"/"+myList.project_name}>Details</Link></Button>
                        </Card.Body>
                    </Card>
                </Col>
            })
            return (
                <Fragment>
                    <Container className="text-center" >
                        <h1 className="commonMainTitle">RECENT PROJECTS</h1>
                        <Row>
                            {myView}
                        </Row>
                    </Container>
                </Fragment>
            );
        }

    }
}

export default RecentProjects;