import React, {Component, Fragment} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Col, Container, Row} from "react-bootstrap";
import img1 from '../../asset/images/course1.svg'
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppURL";
import courseImg1 from "../../asset/images/laravel.jpg";
import {Link} from "react-router-dom";
import Loading from "../Loading/Loading";

class ClientReview extends Component {
    constructor() {
        super();
        this.state={
            myData:[],
            loading:true
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.ClientReview).then(result=>{
            this.setState({myData:result,loading:false})
        }).catch(error=>{

        })
    }
    render() {
        if(this.state.loading==true){
            return <Loading/>
        }
        else{
            let settings = {
                autoplaySpeed: 2000,
                autoplay:true,
                dots: true,
                infinite: true,
                speed: 1000,
                vertical:true,
                verticalSwiping:true,
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            initialSlide: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            };

            const myList=this.state.myData;
            const myView=myList.map(myList=>{
                return <div>
                    <Row className="text-center justify-content-center">
                        <Col lg={6} md={6} sm={12}>
                            <img className="circleImageCarousal" src={myList.client_img}/>
                            <h1 className="clientReviewTitle">{myList.client_title}</h1>
                            <p className="clientReviewDes">{myList.client_des}</p>
                        </Col>
                    </Row>
                </div>
            })
            return (
                <Fragment>
                    <Container className="text-center">
                        <h1 className="commonMainTitle">CLIENT SAYS</h1>
                        <Slider {...settings}>
                            {myView}
                        </Slider>
                    </Container>
                </Fragment>
            );
        }

    }
}

export default ClientReview;