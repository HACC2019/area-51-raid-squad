import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Alert, Button, CustomInput } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import logodark from '../../../images/logo-dark.png';
import { forgetpassword, activateNonAuthLayout } from '../../../store/actions';
import { AvForm, AvField } from 'availity-reactstrap-validation';

class forgetPwd extends Component {

    constructor(props) {
        super(props);
        this.state = { email: "", redirectToReferrer: false }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.activateNonAuthLayout();
    }

    handleSubmit(event, values) {
        console.log(values.email);
        this.props.forgetpassword(values.email, this.props.history);
    }

    render() {

        return (
            <React.Fragment>
                <div className="home-btn d-none d-sm-block">
                    <Link to="/" className="text-white"><i className="fas fa-home h2"></i></Link>
                </div>
                <div className="account-pages my-5 pt-5">
                    <div className="container">
                        <Row className="justify-content-center">
                            <Col md="8" lg="6" xl="5">
                                <Card className="bg-pattern shadow-none">
                                    <CardBody>
                                        <div className="text-center mt-4">
                                            <div className="mb-3">
                                                <Link to="/" className="logo"><img src={logodark} height="20" alt="logo" /></Link>
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <h4 className="font-18 text-center">Forget Password ?</h4>

                                            {this.props.forget_pwd_failed && <Alert color="danger">
                                                {this.props.forget_pwd_failed}</Alert>}

                                            <AvForm className="form-horizontal" onValidSubmit={this.handleSubmit} >
                                                <AvField name="email" label="Enter Email" value={this.state.email} placeholder="Enter Email" type="text" required />
                                              
                                                <div className="mt-3">
                                                    <Button className="btn btn-primary btn-block waves-effect waves-light" type="submit">Submit</Button>
                                                </div>
                                            </AvForm>
                                        </div>
                                    </CardBody>
                                </Card>
                                <div className="mt-5 text-center text-white-50">
                                    <p>Already have an account ? <Link to="login" className="font-500 text-white"> Login </Link> </p>
                                    <p>Area 51 Raid Squad</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => {
    console.log(state.Forgetpwd)
    const { user, forget_pwd_successful,forget_pwd_failed, loading } = state.Forgetpwd;
    return { user, forget_pwd_successful,forget_pwd_failed, loading };
}

export default withRouter(connect(mapStatetoProps, { forgetpassword, activateNonAuthLayout })(forgetPwd));

