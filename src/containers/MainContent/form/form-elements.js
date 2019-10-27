import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';

import Toggle from 'react-toggle';
import "react-toggle/style.css";

import { Link } from 'react-router-dom';

class FormElements extends Component {

    constructor(props) {
        super(props);
        this.state = { tofuIsReady: true }  
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
                                    <h4 className="page-title">Form Elements</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Forms</Link></li>
                                        <li className="breadcrumb-item active">Form Elements</li>
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
                            <Col>
                                <Card>
                                    <CardBody>

                                        <h4 className="mt-0 header-title">Textual Inputs</h4>
                                        <p className="text-muted mb-4">Here are examples of <code>.form-control</code> applied to each
                                            textual HTML5 <code>&lt;input&gt;</code> <code>type</code>.</p>

                                        <Row className="form-group">
                                            <label htmlFor="example-text-input" className="col-sm-2 col-form-label">Text</label>
                                            <Col sm="10">
                                                <input className="form-control" type="text" value="Artisanal kale" id="example-text-input" />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <label htmlFor="example-search-input" className="col-sm-2 col-form-label">Search</label>
                                            <Col sm="10">
                                                <input className="form-control" type="search" value="How do I shoot web" id="example-search-input" />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <label htmlFor="example-email-input" className="col-sm-2 col-form-label">Email</label>
                                            <Col sm="10">
                                                <input className="form-control" type="email" value="bootstrap@example.com" id="example-email-input" />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <label htmlFor="example-url-input" className="col-sm-2 col-form-label">URL</label>
                                            <Col sm="10">
                                                <input className="form-control" type="url" value="https://getbootstrap.com" id="example-url-input" />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <label htmlFor="example-tel-input" className="col-sm-2 col-form-label">Telephone</label>
                                            <Col sm="10">
                                                <input className="form-control" type="tel" value="1-(555)-555-5555" id="example-tel-input" />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <label htmlFor="example-password-input" className="col-sm-2 col-form-label">Password</label>
                                            <Col sm="10">
                                                <input className="form-control" type="password" value="hunter2" id="example-password-input" />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <label htmlFor="example-number-input" className="col-sm-2 col-form-label">Number</label>
                                            <Col sm="10">
                                                <input className="form-control" type="number" value="42" id="example-number-input" />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <label htmlFor="example-datetime-local-input" className="col-sm-2 col-form-label">Date and time</label>
                                            <Col sm="10">
                                                <input className="form-control" type="datetime-local" value="2011-08-19T13:45:00" id="example-datetime-local-input" />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <label htmlFor="example-date-input" className="col-sm-2 col-form-label">Date</label>
                                            <Col sm="10">
                                                <input className="form-control" type="date" value="2011-08-19" id="example-date-input" />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <label htmlFor="example-month-input" className="col-sm-2 col-form-label">Month</label>
                                            <Col sm="10">
                                                <input className="form-control" type="month" value="2011-08" id="example-month-input" />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <label htmlFor="example-week-input" className="col-sm-2 col-form-label">Week</label>
                                            <Col sm="10">
                                                <input className="form-control" type="week" value="2011-W33" id="example-week-input" />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <label htmlFor="example-time-input" className="col-sm-2 col-form-label">Time</label>
                                            <Col sm="10">
                                                <input className="form-control" type="time" value="13:45:00" id="example-time-input" />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <label htmlFor="example-color-input" className="col-sm-2 col-form-label">Color</label>
                                            <Col sm="10">
                                                <input className="form-control" type="color" value="#4090cb" id="example-color-input" />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <label className="col-sm-2 col-form-label">Select</label>
                                            <Col sm="10">
                                                <select className="form-control">
                                                    <option>Select</option>
                                                    <option>Large select</option>
                                                    <option>Small select</option>
                                                </select>
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <label className="col-sm-2 col-form-label">Custom Select</label>
                                            <Col sm="10">
                                                <select className="custom-select">
                                                    <option selected>Open this select menu</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <label htmlFor="example-text-input-lg" className="col-sm-2 col-form-label">Large</label>
                                            <Col sm="10">
                                                <input className="form-control form-control-lg" type="text" placeholder=".form-control-lg" id="example-text-input-lg" />
                                            </Col>
                                        </Row>
                                        <Row className="form-group mb-0">
                                            <label htmlFor="example-text-input-sm" className="col-sm-2 col-form-label">Small</label>
                                            <Col sm="10">
                                                <input className="form-control form-control-sm" type="text" placeholder=".form-control-sm" id="example-text-input-sm" />
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title mb-4">Checkboxes</h4>

                                        <Row>
                                            <Col md="6">
                                                <div>
                                                    <h5 className="font-14 mb-4">Default Checkboxes</h5>
                                                    <div className="form-check mb-3">
                                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                        <label className="form-check-label" htmlFor="defaultCheck1">
                                                            Default checkbox
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" checked />
                                                        <label className="form-check-label" htmlFor="defaultCheck2">
                                                            Default checkbox
                                                        </label>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md="6">
                                                <div>
                                                    <h5 className="font-14 mb-4">Custom Checkboxes</h5>
                                                    <div className="custom-control custom-checkbox mb-2">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck1" checked />
                                                        <label className="custom-control-label" htmlFor="customCheck1">Custom checkbox</label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                                        <label className="custom-control-label" htmlFor="customCheck2">Custom checkbox</label>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title mb-4">Radios</h4>

                                        <Row>
                                            <Col md="6">
                                                <div>
                                                    <h5 className="font-14 mb-4">Default Radios</h5>
                                                    <div className="form-check mb-3">
                                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                                        <label className="form-check-label" htmlFor="exampleRadios1">
                                                            Default radio
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                                        <label className="form-check-label" htmlFor="exampleRadios2">
                                                            Default radio
                                                        </label>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md="6">
                                                <div>
                                                    <h5 className="font-14 mb-4">Custom Radios</h5>
                                                    <div className="custom-control custom-radio mb-2">
                                                        <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                                                        <label className="custom-control-label" htmlFor="customRadio1">Toggle this custom radio</label>
                                                    </div>
                                                    <div className="custom-control custom-radio">
                                                        <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" checked />
                                                        <label className="custom-control-label" htmlFor="customRadio2">Or toggle this other custom radio</label>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title">React Switch</h4>
                                        <div className="mb-2 ml-0">
                                            <label className="d-flex align-items-center mb-1">
                                                <Toggle
                                                    defaultChecked={this.state.tofuIsReady}
                                                    icons={false}
                                                    onChange={this.handleTofuChange} />
                                                <span className="ml-2">Toggle this switch element</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label className="d-flex align-items-center">
                                                <Toggle
                                                    defaultChecked={false}
                                                    icons={false}
                                                    disabled={true} />
                                                <span className='label-text ml-2'>Disabled switch element</span>
                                            </label>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title">File Browser</h4>
                                        <p className="text-muted mb-4">The file input is the most gnarly of the bunch and requires additional JavaScript if you’d like to hook them up with functional <em>Choose file…</em> and selected file name text.</p>
                                        <div className="custom-file">
                                            <input type="file" className="custom-file-input" id="customFile" />
                                            <label className="custom-file-label" htmlFor="customFile">Choose file</label>
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


export default connect(null, { activateAuthLayout })(FormElements);

