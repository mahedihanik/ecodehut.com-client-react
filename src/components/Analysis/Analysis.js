import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Area, Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppURL";
import ReactHtmlParser from 'react-html-parser';
import Loading from "../Loading/Loading";


class Analysis extends Component {
    constructor() {
        super();
        this.state={
            data:[],
            desc:"",
            loading:true
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.ChartData).then(result=>{
            this.setState({data:result,loading:false})
        }).catch(error=>{

        })
        RestClient.GetRequest(AppUrl.TechDesHome).then(result=>{
            this.setState({desc:result[0]['tech_des']})
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
                    <Container className="text-center p-0">
                        <h1 className="commonMainTitle">TECHNOLOGY USED</h1>
                        <Row>
                            <Col style={{width:'100%', height:'450px'}} lg={6} md={12} sm={12} className="analysisChart">
                                <ResponsiveContainer >
                                    <ComposedChart data={this.state.data} >
                                        <CartesianGrid stroke="#f5f5f5" />
                                        <XAxis dataKey="websiteTypes" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Area type="monotone" dataKey="lumenapi" fill="#ffff00" stroke="#ffff00" />
                                        <Area type="monotone" dataKey="mysql" fill="#7fffd4" stroke="#7fffd4" />
                                        <Bar dataKey="reactjs" barSize={30} fill="#DC143C" />
                                        <Line type="monotone" dataKey="laravel" stroke="#ff7300" />
                                    </ComposedChart>
                                </ResponsiveContainer>
                            </Col>
                            <Col lg={6} md={12} sm={12} className="p-4">
                                <p className="text-justify techDes">
                                    {ReactHtmlParser(this.state.desc)}
                                </p>

                            </Col>

                        </Row>

                    </Container>

                </Fragment>
            );
        }

    }
}

export default Analysis;