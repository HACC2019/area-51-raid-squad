import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';
import { Link } from 'react-router-dom';

class FormValidation extends Component {

    constructor(props) {
        super(props);
        this.state = {}
        this.add_bClass = this.add_bClass.bind(this);
        this.add_vClass = this.add_vClass.bind(this);
    }
    add_bClass = () => {
        document.getElementById('bootstrap_validation').classList.add('was-validated');
    }
    add_vClass = () => {
        document.getElementById('b_validation').classList.add('was-validated');
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
                                    <h4 className="page-title">Form Validation</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Forms</Link></li>
                                        <li className="breadcrumb-item active">Form Validation</li>
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
                                        <h4 className="mt-0 header-title">Bootstrap Validation - Normal</h4>
                                        <p className="text-muted mb-4">Provide valuable, actionable feedback to your users with HTML5 form validation–available in all our supported browsers.</p>
                                        <form className="needs-validation" id="bootstrap_validation" novalidate>
                                            <Row>
                                                <Col md="6">
                                                    <div className="form-group">
                                                        <label for="validationCustom01">First name</label>
                                                        <input type="text" className="form-control" id="validationCustom01" placeholder="First name" value="Mark" />
                                                        <div className="valid-feedback">
                                                            Looks good!
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md="6">
                                                    <div className="form-group">
                                                        <label for="validationCustom02">Last name</label>
                                                        <input type="text" className="form-control" id="validationCustom02" placeholder="Last name" value="Otto" />
                                                        <div className="valid-feedback">
                                                            Looks good!
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="4">
                                                    <div className="form-group">
                                                        <label for="validationCustom03">City</label>
                                                        <input type="text" className="form-control" id="validationCustom03" placeholder="City" />
                                                        <div className="invalid-feedback">
                                                            Please provide a valid city.
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md="4">
                                                    <div className="form-group">
                                                        <label for="validationCustom04">State</label>
                                                        <input type="text" className="form-control" id="validationCustom04" placeholder="State" />
                                                        <div className="invalid-feedback">
                                                            Please provide a valid state.
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md="4">
                                                    <div className="form-group">
                                                        <label for="validationCustom05">Zip</label>
                                                        <input type="text" className="form-control" id="validationCustom05" placeholder="Zip" />
                                                        <div className="invalid-feedback">
                                                            Please provide a valid zip.
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg="12">
                                                    <div className="form-group">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="invalidCheck" />
                                                            <label className="custom-control-label" for="invalidCheck">Agree to terms and conditions</label>
                                                            <div className="invalid-feedback">
                                                                You must agree before submitting.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <button className="btn btn-primary" onClick={this.add_bClass} type="button">Submit form</button>
                                        </form>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title">Bootstrap Validation (Tooltips)</h4>
                                        <p className="text-muted mb-4">If your form layout allows it, you can swap the <code>.valid|invalid-feedback</code> classNamees for <code>.valid|invalid-tooltip</code> classNamees to display validation feedback in a styled tooltip.</p>
                                        <form className="needs-validation" id="b_validation" novalidate>
                                            <Row>
                                                <Col md="4">
                                                    <div className="form-group position-relative">
                                                        <label for="validationTooltip01">First name</label>
                                                        <input type="text" className="form-control" id="validationTooltip01" placeholder="First name" value="Mark" />
                                                        <div className="valid-tooltip">
                                                            Looks good!
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md="4">
                                                    <div className="form-group position-relative">
                                                        <label for="validationTooltip02">Last name</label>
                                                        <input type="text" className="form-control" id="validationTooltip02" placeholder="Last name" value="Otto" />
                                                        <div className="valid-tooltip">
                                                            Looks good!
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md="4">
                                                    <div className="form-group position-relative">
                                                        <label for="validationTooltipUsername">Username</label>
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                                                            </div>
                                                            <input type="text" className="form-control" id="validationTooltipUsername" placeholder="Username" aria-describedby="validationTooltipUsernamePrepend" />
                                                            <div className="invalid-tooltip">
                                                                Please choose a unique and valid username.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="6">
                                                    <div className="form-group position-relative">
                                                        <label for="validationTooltip03">City</label>
                                                        <input type="text" className="form-control" id="validationTooltip03" placeholder="City" />
                                                        <div className="invalid-tooltip">
                                                            Please provide a valid city.
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md="6">
                                                    <div className="form-group position-relative">
                                                        <label for="validationTooltip04">State</label>
                                                        <input type="text" className="form-control" id="validationTooltip04" placeholder="State" />
                                                        <div className="invalid-tooltip">
                                                            Please provide a valid state.
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <button className="btn btn-primary" onClick={this.add_vClass} type="button">Submit form</button>
                                        </form>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="6">
                                <Card>
                                    <CardBody>

                                        <h4 className="mt-0 header-title">Validation Type</h4>
                                        <p className="text-muted mb-4">Parsley is a javascript form validation
                                            library. It helps you provide your users with feedback on their form
                                            submission before sending it to your server.</p>
                                        <AvForm>
                                            <AvField name="username" label="Required : " placeholder="Type Something" type="text" errorMessage="Enter Name" validate={{ required: { value: true } }} />
                                            <label>Equal To</label>
                                            <AvField name="password" type="text" placeholder="Password" errorMessage="Enter password" validate={{ required: { value: true } }} />
                                            <AvField name="password1" type="text" placeholder="Re-type Password" errorMessage="Enter Re-password" validate={{ required: { value: true }, match: { value: 'password' } }} />
                                            <AvField name="email" label="E-Mail : " placeholder="Enter Valid Email" type="email" errorMessage="Invalid Email" validate={{ required: { value: true }, email: { value: true } }} />
                                            <AvField name="digits" label="Digits : " placeholder="Enter Only Digits" type="number" errorMessage="Enter Only Digits" validate={{ required: { value: true }, pattern: { value: '^[0-9]+$', errorMessage: 'Only Digits' } }} />
                                            <AvField name="number" label="Number : " placeholder="Enter Only number" type="number" errorMessage="Enter Only Number" validate={{ required: { value: true }, pattern: { value: '^[0-9]+$', errorMessage: 'Only Numbers' } }} />
                                            <AvField name="alphanumeric" label="Alphanumeric : " placeholder="Enter Only alphanumeric value" type="text" errorMessage="Enter Only Alphanumeric" validate={{ required: { value: true }, pattern: { value: '^[0-9a-zA-Z]+$', errorMessage: 'Only Alphanumeric' } }} />
                                            <div className="form-group  m-b-0">
                                                <Button color="primary">Submit</Button>  &nbsp;
                                            <Button type="reset">cancel</Button>
                                            </div>
                                        </AvForm>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title">Range Validation</h4>
                                        <p className="text-muted mb-4">Parsley is a javascript form validation
                                            library. It helps you provide your users with feedback on their form
                                            submission before sending it to your server.</p>
                                        <AvForm>
                                            <AvField name="Min_Length" label="Min Length : " placeholder="Min 6 chars" type="number" errorMessage="Min 6 chars." validate={{ required: { value: true }, minLength: { value: 6, errorMessage: 'Min 6 chars.' } }} />
                                            <AvField name="Max_Length" label="Max Length : " placeholder="Max 6 chars" type="number" errorMessage="Max 6 chars." validate={{ required: { value: true }, maxLength: { value: 6, errorMessage: 'Max 6 chars.' } }} />
                                            <AvField name="Min_Value" label="Min Value : " placeholder="Min 6 Chars" min={6} type="number" errorMessage="Min Value 6" validate={{ required: { value: true }, min: { value: 6 } }} />
                                            <AvField name="Max_Value" label="Max Value : " placeholder="max 5 Chars" max={6} type="number" errorMessage="Max Value 6" validate={{ required: { value: true }, max: { value: 6 } }} />
                                            <AvField name="Range_Value" label="Range Length : " placeholder="Text between 5 - 10 chars length" type="number" errorMessage="range between 5 to 10" validate={{ required: { value: true } }} />
                                            <AvField name="Regular_Exp" label="Regular Exp : " placeholder="Hex. Color" type="number" errorMessage="Hex Value" validate={{ required: { value: true }, pattern: { value: '^[#0-9]+$', errorMessage: 'Only Hex Value' } }} />
                                            <div className="form-group  m-b-0">
                                                <Button color="primary">Submit</Button>  &nbsp;
                                            <Button type="reset">cancel</Button>
                                            </div>
                                        </AvForm>
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


export default connect(null, { activateAuthLayout })(FormValidation);


