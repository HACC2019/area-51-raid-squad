import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';
import { Link } from 'react-router-dom';

class Pagesfaq extends Component {

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
                                    <h4 className="page-title">Faqs</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Extra Pages</Link></li>
                                        <li className="breadcrumb-item active">Faqs</li>
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
                                        <Row className="justify-content-center mb-5">
                                            <Col lg="5">
                                                <div className="text-center py-4">
                                                    <div className="py-3">
                                                        <i className="ti-comments text-danger h3"></i>
                                                    </div>
                                                    <h5>Can't find what you are looking for?</h5>
                                                    <p className="text-muted">If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.</p>
                                                    <button type="button" className="btn btn-primary mt-1 mr-1 waves-effect waves-light">Email Us</button>
                                                    <button type="button" className="btn btn-danger mt-1 waves-effect waves-light">Send us a tweet</button>
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row className="justify-content-center">
                                            <Col lg="5">
                                                <div className="mt-4">
                                                    <h4 className="font-18 faq-title mb-5"><i className="ti-help-alt mr-3 text-danger"></i>General Questions</h4>

                                                    <div className="faq-box mb-4">
                                                        <div className="float-left faq-icon mr-4">
                                                            <i className="mdi mdi-help font-16 bg-lighten-danger text-danger"></i>
                                                        </div>
                                                        <div className="overflow-hidden">
                                                            <h5 className="font-16 mt-0">What is Lorem Ipsum?</h5>
                                                            <p className="text-muted">New common language will be more simple and regular than the existing European languages. It will be as simple as occidental.</p>
                                                        </div>
                                                    </div>
                                                    <div className="faq-box mb-4">
                                                        <div className="float-left faq-icon mr-4">
                                                            <i className="mdi mdi-help font-16 bg-lighten-danger text-danger"></i>
                                                        </div>
                                                        <div className="overflow-hidden">
                                                            <h5 className="font-16 mt-0">Where does it come from?</h5>
                                                            <p className="text-muted">Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators to achieve this it would be necessary</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </Col>
                                            <div className="col-lg-5 offset-lg-1">
                                                <div className="mt-4">
                                                    <h4 className="font-18 faq-title mb-5"><i className="ti-shield mr-3 text-danger"></i> Privacy Policy</h4>

                                                    <div className="faq-box mb-4">
                                                        <div className="float-left faq-icon mr-4">
                                                            <i className="mdi mdi-help font-16 bg-lighten-danger text-danger"></i>
                                                        </div>
                                                        <div className="overflow-hidden">
                                                            <h5 className="font-16 mt-0">Where can I get some?</h5>
                                                            <p className="text-muted">Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary pronunciation.</p>
                                                        </div>
                                                    </div>
                                                    <div className="faq-box mb-4">
                                                        <div className="float-left faq-icon mr-4">
                                                            <i className="mdi mdi-help font-16 bg-lighten-danger text-danger"></i>
                                                        </div>
                                                        <div className="overflow-hidden">
                                                            <h5 className="font-16 mt-0">Why do we use it?</h5>
                                                            <p className="text-muted">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </Row>

                                        <Row className="justify-content-center">
                                            <Col lg="5">
                                                <div className="mt-4">
                                                    <h4 className="font-18 mb-5 faq-title"><i className="ti-headphone-alt mr-3 text-danger"></i>Support</h4>

                                                    <div className="faq-box mb-4">
                                                        <div className="float-left faq-icon mr-4">
                                                            <i className="mdi mdi-help font-16 bg-lighten-danger text-danger"></i>
                                                        </div>
                                                        <div className="overflow-hidden">
                                                            <h5 className="font-16 mt-0">Why do we use it?</h5>
                                                            <p className="text-muted">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas</p>
                                                        </div>
                                                    </div>

                                                    <div className="faq-box mb-4">
                                                        <div className="float-left faq-icon mr-4">
                                                            <i className="mdi mdi-help font-16 bg-lighten-danger text-danger"></i>
                                                        </div>
                                                        <div className="overflow-hidden">
                                                            <h5 className="font-16 mt-0">Where does it come from?</h5>
                                                            <p className="text-muted">Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators to achieve this it would be necessary</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <div className="col-lg-5 offset-lg-1">
                                                <div className="mt-4">
                                                    <h4 className="font-18 mb-5 faq-title"><i className="ti-bookmark-alt mr-3 text-danger"></i> Pricing & Plans</h4>

                                                    <div className="faq-box mb-4">
                                                        <div className="float-left faq-icon mr-4">
                                                            <i className="mdi mdi-help font-16 bg-lighten-danger text-danger"></i>
                                                        </div>
                                                        <div className="overflow-hidden">
                                                            <h5 className="font-16 mt-0">Where can I get some?</h5>
                                                            <p className="text-muted">Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary pronunciation.</p>
                                                        </div>
                                                    </div>
                                                    <div className="faq-box mb-4">
                                                        <div className="float-left faq-icon mr-4">
                                                            <i className="mdi mdi-help font-16 bg-lighten-danger text-danger"></i>
                                                        </div>
                                                        <div className="overflow-hidden">
                                                            <h5 className="font-16 mt-0">What is Lorem Ipsum?</h5>
                                                            <p className="text-muted">New common language will be more simple and regular than the existing European languages. It will be as simple as occidental.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Row>
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


export default connect(null, { activateAuthLayout })(Pagesfaq);
