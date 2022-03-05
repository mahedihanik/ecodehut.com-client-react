import React, {Component, Fragment} from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Radar } from "react-chartjs-2";
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";

class AllSkills extends Component {
    constructor() {
        super();
        this.state={
            dataRadar: {
                labels: ["PHP-Laravel", "ReactJS", "MySQL", "Bootstrap", "Axios", "jQuery", "HTML5", "CSS3", "MaterialUI", "LumenAPI", "NodeJS"],
                datasets: [
                    {
                        label: "Technology We Used at 2019",
                        backgroundColor: "rgba(255, 99, 71, 0.5)",
                        borderColor: "rgb(194, 116, 161)",
                        data: [75, 20, 90, 70, 10, 55, 94, 80, 0, 10 ,40]
                    },
                    {
                        label: "Technology We Used at 2020",
                        backgroundColor: "rgba(60, 179, 113, 0.5)",
                        borderColor: "rgb(71, 225, 167)",
                        data: [95, 85, 97, 98, 96, 94,98, 96, 70 ,85 ,82]
                    }
                ]
            }
        }
    }
    render() {
        return (
            <Fragment>
                <MDBContainer className="text-center ">

                        <h3 className="mt-5 radarTopFont">Technology We Used</h3><br/><br/>
                     
                        <MDBRow>
                            <MDBCol lg={12} md={12} sm={12}>
                                <Radar  data={this.state.dataRadar} options={{ responsive: true }} />
                            </MDBCol>
                        </MDBRow>

                </MDBContainer>
            </Fragment>
        );
    }
}

export default AllSkills;