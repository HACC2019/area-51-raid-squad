import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { Link,withRouter } from 'react-router-dom';
import {  activateNonAuthLayout } from '../../../store/actions';

import { connect } from 'react-redux';
import logolight from '../../../images/logo-light.png';
import maintenanceimg from '../../../images/maintenance-img.png';

class Pagesmaintenance extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.activateNonAuthLayout();
    }


    render() {

        return (
            <React.Fragment>
                <div className="home-btn d-none d-sm-block">
                    <Link to="dashboard" className="text-white"><i className="fas fa-home h2"></i></Link>
                </div>
                <div className="pt-5 my-5">
                    <div className="container">
                        <Row>
                            <Col lg="12">
                                <div className="text-center">
                                    <div className="mb-5">
                                        <img src={logolight} className="mx-auto d-block" alt="logo" height="20" />
                                    </div>
                                    <h3 className="text-white">Site is Under Maintenance</h3>
                                    <p className="text-white-50 mb-5">Please check back in sometime.</p>
                                </div>
                            </Col>
                        </Row>

                        <Row className="align-items-center">
                            <Col lg="6">
                                <div className="mb-4 mb-lg-0">
                                    <img src={maintenanceimg} className="img-fluid mx-auto d-block" alt="" />
                                </div>
                            </Col>

                            <div className="col-lg-5 offset-lg-1">
                                <div className="card maintenance-box shadow-none">
                                    <div className="card-body p-4">
                                        <div className="float-left mr-4">
                                            <i className="ti-signal text-danger h4"></i>
                                        </div>
                                        <div className="overflow-hidden">
                                            <h6 className="text-uppercase mt-0">Why is the Site Down?</h6>
                                            <p className="text-muted mb-0">There are many variations of passages of
                                        Lorem Ipsum available, but the majority have suffered alteration.</p>
                                        </div>
                                    </div>
                                </div>
                                <Card className="maintenance-box shadow-none">
                                    <CardBody className="p-4">
                                        <div className="float-left mr-4">
                                            <i className="ti-timer text-danger h4"></i>
                                        </div>
                                        <div className="overflow-hidden">
                                            <h6 className="text-uppercase mt-0">What is the Downtime?</h6>
                                            <p className="text-muted mb-0">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.</p>
                                        </div>
                                    </CardBody>
                                </Card>
                                <Card className="maintenance-box shadow-none">
                                    <CardBody className="p-4">
                                        <div className="float-left mr-4">
                                            <i className="ti-email text-danger h4"></i>
                                        </div>
                                        <div className="overflow-hidden">
                                            <h6 className="text-uppercase mt-0">Do you need Support?</h6>
                                            <p className="text-muted mb-0">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embar.. <Link to="mailto:no-reply@domain.com" className="text-decoration-underline">no-reply@domain.com</Link></p>
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>
                        </Row>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => {
    return {};
}

export default withRouter(connect(mapStatetoProps, { activateNonAuthLayout })(Pagesmaintenance));


