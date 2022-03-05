import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppURL";


class Services extends Component {
    constructor() {
        super();
        this.state={
            myData:[],

        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.Service).then(result=>{
            this.setState({myData:result})
        }).catch(error=>{

        })
    }
    render() {

            const myList=this.state.myData;
            const myView=myList.map(myList=>{
                return<Col lg={4} md={6} sm={12}>
                    <div className="serviceCard text-center">
                        <img height={70} src={myList.service_img}/>
                        <h2 className="serviceName">{myList.service_name}</h2>
                        <p className="serviceDes">
                            {myList.service_des}
                        </p>
                    </div>
                </Col>
            })
            return (
                <Fragment>
                    <Container className="text-center">
                        <h1 className="commonMainTitle">MY SERVICES</h1>
                        <Row>
                            {myView}
                        </Row>
                    </Container>
                </Fragment>
            );


    }
}

export default Services;