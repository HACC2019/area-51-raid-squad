import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import Vector from "./Vectormap";
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';
import { Link } from 'react-router-dom';


class Mapsvector extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        this.props.activateAuthLayout();
    }

    render() {
        return (
            <React.Fragment>

                <div className="content">
                    <div className="container-fluid">
                        <div className="page-title-box">
                            <Row className="align-items-center">
                                <Col sm="6">
                                    <h4 className="page-title">Vector Map</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Maps</Link></li>
                                        <li className="breadcrumb-item active">Vector Map</li>
                                    </ol>
                                </Col>
                                <Col sm="6">
                                    <div className="float-right d-none d-md-block">
                                        <Settingmenu />
                                    </div>
                                </Col>
                            </Row>
                        </div>


                        <Row>
                            <Col lg="12">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title">World Map</h4>
                                        <p className="text-muted mb-4">Example of vector map.</p>
                                        <div id="world-map-markers" style={{ height: "350px" }}>
                                            <Vector value="world_mill" width="500" color="#d5e7f2" />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title">USA Map</h4>
                                        <p className="text-muted mb-4">Example of USA vector map.</p>
                                        <div id="world-map-markers" style={{ height: "350px" }}>
                                            <Vector value="us_aea" width="500" color="#4090cb" />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg="6">
                                <Card>
                                    <CardBody>

                                        <h4 className="mt-0 header-title">Canada Map</h4>
                                        <p className="text-muted mb-4">Example of Canada vector map.</p>
                                        <div id="world-map-markers" style={{ height: "350px" }}>
                                            <Vector value="ca_lcc" width="500" color="#4090cb" />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="6">
                                <Card>
                                    <CardBody>

                                        <h4 className="mt-0 header-title">Asia Vector Map</h4>
                                        <p className="text-muted m-b-30">Example of vector map.</p>
                                        <div id="world-map-markers" style={{ height: "350px" }}>
                                            <Vector value="asia_mill" width="500" color="#4090cb" />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title">Brazil Map</h4>
                                        <p className="text-muted mb-4">Example of Brazil vector map.</p>
                                        <div id="world-map-markers" style={{ height: "350px" }}>
                                            <Vector value="brazil" width="500" color="#4090cb" />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                    </div>
                </div>

            </React.Fragment>
        );
    }
}


export default connect(null, { activateAuthLayout })(Mapsvector);
