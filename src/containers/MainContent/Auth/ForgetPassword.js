import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Alert,Button } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import logolight from '../../../images/logo-light.png';
import { forgetUser } from '../../../store/actions';
import { AvForm, AvField } from 'availity-reactstrap-validation';

class ForgetPassword extends Component {

    constructor(props) {
        super(props);
        this.state = { username: "" }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount()
    {
        document.body.classList.add('bg-primary');
    }

    handleSubmit(event, values) {
        this.props.forgetUser(values.username, this.props.history);
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
                                        <Link to="/" className="logo"><img src={logolight} height="20" alt="logo" /></Link>
                                    </div>
                                </div>
                                <div className="p-3">
                                    <h4 className="font-18 text-center mb-3">Forget Password ?</h4>
                                  
                                    {this.props.user && <Alert color="success">
                                    Your Login is successfull.</Alert>}

                                    {this.props.loginError && <Alert color="danger">
                                                {this.props.loginError}</Alert>}

                                        <AvForm className="form-horizontal" onValidSubmit={this.handleSubmit} >
                                        <AvField name="username"  value={this.state.username} placeholder="Email" type="text" validate={{email: true, required: true}} />
                                     
                                        <div className="mt-3">
                                        {this.props.loading ? <Button color="primary" className="btn-block waves-effect waves-light">Loading ...</Button> : 
                                            <Button color="primary" className="btn-block waves-effect waves-light" type="submit">Reset Password</Button> }
                                       </div>
                                    </AvForm>
                                </div>
                            </CardBody>
                        </Card>
                        <div className="mt-5 text-center text-white-50">
                            <p>Already have an account ? <Link to="/login" className="font-500 text-white"> Sign In </Link> </p>
                            <p>© {new Date().getFullYear()} Veltrix. Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand</p>
                               
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
    const { user, loginError, loading } = state.Forget;
    return { user, loginError, loading };
}

export default withRouter(connect(mapStatetoProps, { forgetUser })(ForgetPassword));







