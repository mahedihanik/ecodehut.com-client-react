import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import courseImg1 from '../../asset/images/laravel.jpg'
import {Link} from "react-router-dom";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppURL";
import Loading from "../Loading/Loading";



class Courses extends Component {
    constructor() {
        super();
        this.state={
            myData:[],
            loading:true
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.CourseHome).then(result=>{
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
                return <Col lg={6} md={12} sm={12} className="p-2">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img className="CourseImage" src={courseImg1} alt=""/>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h5 className="text-justify courseTitle">{myList.short_title}</h5>
                            <p className="text-justify courseDes">{myList.short_des}</p>
                            <Link className="CourseDetailsLink float-left courseDetailsLink" to={"/courseDetails/"+myList.id+"/"+myList.long_title}>Details</Link>
                        </Col>
                    </Row>
                </Col>
            })
            return (
                <Fragment>
                    <Container className="text-center">
                        <h1 className="commonMainTitle">OUR COURSES</h1>
                        <Row>
                            {myView}
                        </Row>
                    </Container>
                </Fragment>
            );
        }

    }
}

export default Courses;