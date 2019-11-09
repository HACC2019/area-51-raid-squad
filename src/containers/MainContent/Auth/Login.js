import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Alert,Button } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkLogin, clearErrorLogin, clearError } from '../../../store/actions';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import logolight from '../../../images/logo-light.png';

class Pageslogin extends Component {

    constructor(props) {
        super(props);
        this.state = {  username : "test@gmail.com", password : "test" }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event, values) {
        this.props.checkLogin("test@gmail.com", "test", this.props.history);
    }

    componentDidMount()
    {
        document.body.classList.add('bg-primary');
        this.props.clearErrorLogin();
        this.props.clearError();
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
                                <h4 className="font-18 text-center">Login</h4>
                                    <p className="text-muted text-center mb-4">Sign in to view dashboard.</p>

                           {this.props.user && <Alert color="success">
                                    Your Login is successful.</Alert>}

                            {this.props.loginError && <Alert color="danger">
                                {this.props.loginError}</Alert>}

                                        <AvForm className="form-horizontal" onValidSubmit={this.handleSubmit}>
                                        <AvField name="username"  value={this.state.username} placeholder="Email" type="text"  validate={{email: true, required: true}}  />
                                        <AvField name="password"  value={this.state.password} placeholder="Password" type="password" required />

                                        <div className="mt-3">
                                        <Button className="btn btn-primary btn-block waves-effect waves-light" type="submit">Login</Button>
                                        </div>
                                
                                        <div className="mt-4 text-center">
                                            <Link to="/forget-password"> Forgot your password ?</Link>
                                        </div>
                                    </AvForm>
                                </div>
                            </CardBody>
                        </Card>
                        <div className="mt-5 text-center text-white-50">
                            <p>Don't have an account ? <Link to="/register" className="font-500 text-white"> Signup now </Link> </p>
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
    const { user, loginError, loading } = state.Login;
    return { user, loginError, loading };
}

export default withRouter(connect(mapStatetoProps, { checkLogin, clearErrorLogin, clearError })(Pageslogin));



