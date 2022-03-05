import React, {Component, Fragment} from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {Col} from "react-bootstrap";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppURL";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";
class ContactSection extends Component {
    constructor() {
        super();
        this.state={
            address:"",
            email:"",
            phone:"",
            loading:true,
            error:false
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.Footer).then(result=>{
            if (result==null){
                this.setState({error:true,loading:false})
            }
            else{
                this.setState({address:result[0]['address'],
                    email:result[0]['email'],
                    phone:result[0]['phone'],
                    loading:false
                })
            }

        }).catch(error=>{
            this.setState({error:true,loading:false})
        })

    }
    sendContactInfo(){
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let subject = document.getElementById("subject").value;
        let message = document.getElementById("message").value;

        let jasonObject={name:name,email:email,subject:subject,message:message};

        RestClient.PostRequest(AppUrl.ContactSend,JSON.stringify(jasonObject)).then(result=>{
               return result;

        }).catch(error=>{
               return null;
        })

    }

    render() {
        if(this.state.loading==true){
            return <Loading/>
        }
        else if(this.state.loading==false){
            return (
                <Fragment>
                    <MDBContainer className="mt-5">
                        <MDBRow>
                            <MDBCol lg={6} md={6} sm={12}>
                                <form>
                                    <h1 className="footerTitle">Quick Contact</h1>
                                    <div className="grey-text mt-5">
                                        <MDBInput id="name" label="Your name" icon="user" group type="text" validate error="wrong"
                                                  success="right" />
                                        <MDBInput id="email" label="Your email" icon="envelope" group type="email" validate error="wrong"
                                                  success="right" />
                                        <MDBInput id="subject" label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
                                        <MDBInput id="message" type="textarea" rows="2" label="Your message" icon="pencil-alt" />
                                    </div>
                                    <div className="text-center">
                                        <MDBBtn onClick={this.sendContactInfo} gradient="peach">Send<MDBIcon far icon="paper-plane" className="ml-1" /></MDBBtn>
                                    </div>
                                </form>
                            </MDBCol>
                            <MDBCol lg={6} md={6} sm={12} className="text-center">
                                <h1 className="footerTitle">Discuss Now</h1>
                                <p className="footerItemName mt-5"> {this.state.address}</p>
                                <p className="footerItemName"><FontAwesomeIcon className="" icon={faEnvelope} /> {this.state.email}</p>
                                <p className="footerItemName"><FontAwesomeIcon className="" icon={faPhone} /> {this.state.phone}</p>

                            </MDBCol>

                        </MDBRow>
                    </MDBContainer>

                </Fragment>
            );
        }
        else if (this.state.error==true){

            return <WentWrong/>

        }

    }
}

export default ContactSection;