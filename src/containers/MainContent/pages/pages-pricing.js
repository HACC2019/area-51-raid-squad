import React, { Component } from 'react';
import { Row, Col, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';

class Pagespricing extends Component {

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
                                    <h4 className="page-title">Pricing </h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Extra Pages</Link></li>
                                        <li className="breadcrumb-item active">Pricing</li>
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
                            <Col xl="3" md="6">
                                <div className="card plan-box text-center">
                                    <CardBody>
                                        <div className="py-3">
                                            <h5 className="mt-0">Starter</h5>
                                            <p className="text-muted">Neque porro quis est</p>
                                            <div className="py-4">
                                                <h2><sup><small>$</small></sup>19/<span className="font-14">Per month</span></h2>
                                            </div>
                                            <div className="plan-icon py-3">
                                                <i className="ti-package h2 px-4 position-relative bg-white"></i>
                                            </div>
                                        </div>
                                        <div className="plan-features mb-4">
                                            <p>Free Live Support</p>
                                            <p>Unlimited User</p>
                                            <p>No Time Tracking</p>
                                            <p>Free Setup</p>
                                        </div>

                                        <div className="pt-3">
                                            <Link to="#" className="btn btn-primary btn-block waves-effect waves-light">Sign up Now</Link>
                                        </div>
                                    </CardBody>
                                </div>
                            </Col>
                            <Col xl="3" md="6">
                                <div className="card plan-box text-center">
                                    <CardBody>
                                        <div className="py-3">
                                            <h5 className="mt-0">Professional</h5>
                                            <p className="text-muted">Quis autem vel iure</p>
                                            <div className="py-4">
                                                <h2><sup><small>$</small></sup>29/<span className="font-14">Per month</span></h2>
                                            </div>
                                            <div className="plan-icon py-3">
                                                <i className="ti-cup h2 px-4 position-relative bg-white"></i>
                                            </div>
                                        </div>
                                        <div className="plan-features mb-4">
                                            <p>Free Live Support</p>
                                            <p>Unlimited User</p>
                                            <p>No Time Tracking</p>
                                            <p>Free Setup</p>
                                        </div>

                                        <div className="pt-3">
                                            <Link to="#" className="btn btn-primary btn-block waves-effect waves-light">Sign up Now</Link>
                                        </div>
                                    </CardBody>
                                </div>
                            </Col>
                            <Col xl="3" md="6">
                                <div className="card plan-box text-center">
                                    <CardBody>
                                        <div className="py-3">
                                            <h5 className="mt-0">Enterprise</h5>
                                            <p className="text-muted">Sed ut neque unde</p>
                                            <div className="py-4">
                                                <h2><sup><small>$</small></sup>39/<span className="font-14">Per month</span></h2>
                                            </div>
                                            <div className="plan-icon py-3">
                                                <i className="ti-shield h2 px-4 position-relative bg-white"></i>
                                            </div>
                                        </div>
                                        <div className="plan-features mb-4">
                                            <p>Free Live Support</p>
                                            <p>Unlimited User</p>
                                            <p>No Time Tracking</p>
                                            <p>Free Setup</p>
                                        </div>

                                        <div className="pt-3">
                                            <Link to="#" className="btn btn-primary btn-block waves-effect waves-light">Sign up Now</Link>
                                        </div>
                                    </CardBody>
                                </div>
                            </Col>
                            <Col xl="3" md="6">
                                <div className="card plan-box text-center">
                                    <CardBody>
                                        <div className="py-3">
                                            <h5 className="mt-0">Unlimited</h5>
                                            <p className="text-muted">Itaque earum rerum hic</p>
                                            <div className="py-4">
                                                <h2><sup><small>$</small></sup>49/<span className="font-14">Per month</span></h2>
                                            </div>
                                            <div className="plan-icon py-3">
                                                <i className="ti-headphone-alt h2 px-4 position-relative bg-white"></i>
                                            </div>
                                        </div>
                                        <div className="plan-features mb-4">
                                            <p>Free Live Support</p>
                                            <p>Unlimited User</p>
                                            <p>No Time Tracking</p>
                                            <p>Free Setup</p>
                                        </div>

                                        <div className="pt-3">
                                            <Link to="#" className="btn btn-primary btn-block waves-effect waves-light">Sign up Now</Link>
                                        </div>
                                    </CardBody>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default connect(null, { activateAuthLayout })(Pagespricing);
