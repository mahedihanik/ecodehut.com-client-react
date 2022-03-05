import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import courseImg1 from "../../asset/images/laravel.jpg";
import {Link} from "react-router-dom";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppURL";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class AllCourses extends Component {
    constructor() {
        super();
        this.state={
            myData:[],
            loading:true,
            error:false
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.CourseAll).then(result=>{
            if (result==null){
                this.setState({error:true,loading:false})
            }
            else{
                this.setState({myData:result,loading:false})
            }

        }).catch(error=>{
            this.setState({error:true,loading:false})

        })
    }
    render() {
        if(this.state.loading==true){
            return <Loading/>
        }
        else if (this.state.loading==false){
            const myList=this.state.myData;
            const myView=myList.map(myList=>{
                return <Col lg={6} md={12} sm={12} className="p-2">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img className="CourseImage" src={courseImg1}/>
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
                    <Container className="text-center mt-5">
                        <Row>
                            {myView}
                        </Row>
                    </Container>
                </Fragment>
            );

        }
        else if (this.state.error==true){

            return <WentWrong/>

        }
    }
}

export default AllCourses;