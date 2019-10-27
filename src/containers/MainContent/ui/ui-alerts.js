import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';

class Uialerts extends Component {

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
                                    <h4 className="page-title">Alerts</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                        <li className="breadcrumb-item"><Link to="#">UI Elements</Link></li>
                                        <li className="breadcrumb-item active">Alerts</li>
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
                            <Col lg="6">
                                <Card>
                                    <CardBody>

                                        <h4 className="mt-0 header-title">Default Alerts</h4>
                                        <p className="text-muted mb-4">Alerts are available for any length of
                                            text, as well as an optional dismiss button. For proper styling, use one
                                            of the four <strong>required</strong> contextual property color (e.g. <code
                                                className="highlighter-rouge">primary</code></p>
                                        <div className="">
                                            <Alert color="primary"> A simple primary alert—check it out! </Alert>
                                            <Alert color="secondary"> A simple secondary alert—check it out! </Alert>
                                            <Alert color="success"> A simple success alert—check it out! </Alert>
                                            <Alert color="danger"> A simple danger alert—check it out! </Alert>
                                            <Alert color="warning"> A simple warning alert—check it out! </Alert>
                                            <Alert color="info" className="mb-0"> A simple info alert—check it out! </Alert>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg="6">
                                <Card>
                                    <CardBody>

                                        <h4 className="mt-0 header-title">Link Color</h4>
                                        <p className="text-muted mb-4">Use the <code
                                            className="highlighter-rouge">.alert-link</code> utility class to
                                            quickly provide matching colored links within any alert.</p>

                                        <div className="">
                                            <Alert color="primary">A simple primary alert with <Link to="#" className="alert-link">an example link</Link>. Give it a click if you like.</Alert>
                                            <Alert color="secondary">A simple secondary alert with <Link to="#" className="alert-link">an example link</Link>. Give it a click if you like.</Alert>
                                            <Alert color="success">A simple success alert with <Link to="#" className="alert-link">an example link</Link>. Give it a click if you like.</Alert>
                                            <Alert color="danger">A simple danger alert with <Link to="#" className="alert-link">an example link</Link>. Give it a click if you like.</Alert>
                                            <Alert color="warning">A simple warning alert with <Link to="#" className="alert-link">an example link</Link>. Give it a click if you like.</Alert>
                                            <Alert color="info" className="mb-0">A simple info alert with <Link to="#" className="alert-link">an example link</Link>. Give it a click if you like.</Alert>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="6">
                                <Card>
                                    <CardBody>

                                        <h4 className="mt-0 header-title">Dismissing</h4>
                                        <p className="text-muted mb-4">
                                            Add a dismiss button and the <code>.alert-dismissible</code> class, which adds extra padding
                                            to the right of the alert and positions the <code>.close</code> button.
                                        </p>
                                        <div className="">
                                            <Alert color="primary" isOpen={this.state.alert1} toggle={() => this.setState({ alert1: false })}>
                                                A simple primary alert—check it out!
                                    </Alert>
                                            <Alert color="secondary" isOpen={this.state.alert2} toggle={() => this.setState({ alert2: false })}>
                                                A simple secondary alert—check it out!
                                    </Alert>
                                            <Alert color="success" isOpen={this.state.alert3} toggle={() => this.setState({ alert3: false })}>
                                                A simple success alert—check it out!
                                    </Alert>
                                            <Alert color="danger" isOpen={this.state.alert4} toggle={() => this.setState({ alert4: false })}>
                                                A simple danger alert—check it out!
                                    </Alert>
                                            <Alert color="warning" isOpen={this.state.alert5} toggle={() => this.setState({ alert5: false })}>
                                                A simple warning alert—check it out!
                                    </Alert>
                                            <Alert color="info" className="mb-0" isOpen={this.state.alert6} toggle={() => this.setState({ alert6: false })}>
                                                A simple info alert—check it out!
                                    </Alert>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title mb-3">With Icon</h4>
                                        <div className="">
                                            <Alert color="primary" isOpen={this.state.alert11} toggle={() => this.setState({ alert11: false })}>
                                                <i className="mdi mdi-bullseye-arrow mr-2"></i> A simple primary alert—check it out!
                                    </Alert>

                                            <Alert color="secondary" isOpen={this.state.alert12} toggle={() => this.setState({ alert12: false })}>
                                                <i className="mdi mdi-grease-pencil mr-2"></i> A simple secondary alert—check it out!
                                    </Alert>

                                            <Alert color="success" isOpen={this.state.alert13} toggle={() => this.setState({ alert13: false })}>
                                                <i className="mdi mdi-check-all mr-2"></i> A simple success alert—check it out!
                                    </Alert>

                                            <Alert color="danger" isOpen={this.state.alert14} toggle={() => this.setState({ alert14: false })}>
                                                <i className="mdi mdi-block-helper mr-2"></i> A simple danger alert—check it out!
                                    </Alert>

                                            <Alert color="warning" isOpen={this.state.alert15} toggle={() => this.setState({ alert15: false })}>
                                                <i className="mdi mdi-alert-outline mr-2"></i> A simple warning alert—check it out!
                                    </Alert>

                                            <Alert color="info" isOpen={this.state.alert16} toggle={() => this.setState({ alert16: false })}>
                                                <i className="mdi mdi-alert-circle-outline mr-2"></i> A simple info alert—check it out!
                                    </Alert>

                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="6">
                                <Card>
                                    <CardBody>

                                        <h4 className="mt-0 header-title">Custom Background Alert</h4>
                                        <p className="text-muted mb-4">
                                            Use <code>.bg-*</code>, <code>.text-white</code> classes.
                                        </p>

                                        <div className="">

                                            <Alert color="primary" className="bg-primary text-white">
                                                A simple primary alert—check it out!
                                </Alert>

                                            <Alert color="success" className="bg-success text-white">
                                                A simple success alert—check it out!
                                </Alert>

                                            <Alert color="danger" className="bg-danger text-white">
                                                A simple danger alert—check it out!
                                </Alert>

                                            <Alert color="warning" className="bg-warning text-white">
                                                A simple warning alert—check it out!
                                </Alert>

                                            <Alert color="info" className="bg-info text-white mb-0">
                                                A simple info alert—check it out!
                                </Alert>

                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg="6">
                                <Card>
                                    <CardBody>

                                        <h4 className="mt-0 header-title">Custom Outline Alert</h4>
                                        <p className="text-muted mb-4">
                                            Use <code>.bg-white</code>, <code>.border</code>, <code>.border-*</code> classes.
                                        </p>

                                        <div className="">

                                            <Alert color="primary" className="bg-white border border-primary">
                                                A simple primary alert—check it out!
                                </Alert>

                                            <Alert color="success" className="bg-white border border-success">
                                                A simple success alert—check it out!
                                </Alert>

                                            <Alert color="danger" className="bg-white border border-danger">
                                                A simple danger alert—check it out!
                                </Alert>

                                            <Alert color="warning" className="bg-white border border-warning">
                                                A simple warning alert—check it out!
                                </Alert>

                                            <Alert color="info" className="bg-white border border-info mb-0">
                                                A simple info alert—check it white!
                                </Alert>

                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="12">
                                <Card>
                                    <CardBody>

                                        <h4 className="mt-0 header-title">Additional Content</h4>
                                        <p className="text-muted mb-4">Alerts can also contain additional HTML elements like headings and paragraphs.</p>

                                        <Row>
                                            <Col lg="4">

                                                <Alert isOpen={this.state.alert21} toggle={() => this.setState({ alert21: false })} color="success" className="mb-lg-0">
                                                    <div className="text-center">
                                                        <div className="mb-4">
                                                            <i className="mdi mdi-checkbox-marked-circle-outline display-4"></i>
                                                        </div>
                                                        <h4 className="alert-heading font-18">Well done!</h4>
                                                        <p>At vero eos et accusamus et iusto odio</p>
                                                        <div className="py-2">
                                                            <Link to="#" className="btn btn-success btn-rounded w-lg">Go to Next</Link>
                                                        </div>
                                                    </div>
                                                </Alert>

                                            </Col>

                                            <Col lg="4" >

                                                <Alert isOpen={this.state.alert22} toggle={() => this.setState({ alert22: false })} color="warning" className="mb-lg-0">
                                                    <div className="text-center">
                                                        <div className="mb-4">
                                                            <i className="mdi mdi-alert-outline display-4"></i>
                                                        </div>
                                                        <h4 className="alert-heading font-18"> Something went wrong</h4>
                                                        <p>At vero eos et accusamus et iusto odio</p>
                                                        <div className="py-2">
                                                            <Link to="#" className="btn btn-warning btn-rounded w-lg">Go to Next</Link>
                                                        </div>
                                                    </div>
                                                </Alert>
                                            </Col>

                                            <Col lg="4">
                                                <Alert isOpen={this.state.alert23} toggle={() => this.setState({ alert23: false })} color="danger" className="mb-lg-0">
                                                    <div className="text-center">
                                                        <div className="mb-4">
                                                            <i className="mdi mdi-block-helper display-4"></i>
                                                        </div>
                                                        <h4 className="alert-heading font-18">Error</h4>
                                                        <p>At vero eos et accusamus et iusto odio</p>
                                                        <div className="py-2">
                                                            <Link to="#" className="btn btn-danger btn-rounded w-lg">Try again</Link>
                                                        </div>
                                                    </div>
                                                </Alert>
                                            </Col>
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


export default connect(null, { activateAuthLayout })(Uialerts);
