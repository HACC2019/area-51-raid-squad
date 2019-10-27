import React, { Component } from 'react';
import { Row, Col  } from 'reactstrap';
import { Link,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import logolight from '../../../images/logo-light.png';
import {  activateNonAuthLayout } from '../../../store/actions';

class Pageslogin2 extends Component {

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
                <div className="account-page-full-height bg-primary">
                    <div className="container-fluid">
                        <Row className="align-items-center">
                            <Col xl="3" className="bg-white">
                                <div className="account-page-full-height">
                                    <div className="p-3">
                                        <div>
                                            <div className="text-center py-4">
                                                <Link to="/dashboard"  className="logo"><img src={logolight} height="20" alt="logo" /></Link>
                                            </div>
                                            <div className="text-left p-3">
                                                <h4 className="font-18 text-center">Welcome Back !</h4>
                                                <p className="text-muted text-center">Sign in to continue to Veltrix.</p>

                                                <form className="form-horizontal mt-5" action="/dashboard">

                                                    <div className="form-group">
                                                        <label htmlFor="username">Username</label>
                                                        <input type="text" className="form-control" id="username" placeholder="Enter username" />
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="userpassword">Password</label>
                                                        <input type="password" className="form-control" id="userpassword" placeholder="Enter password" />
                                                    </div>

                                                    <Row className="form-group">
                                                        <Col sm="6">
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                                                <label className="custom-control-label" htmlFor="customControlInline">Remember me</label>
                                                            </div>
                                                        </Col>
                                                        <div className="col-sm-6 text-right">
                                                            <button className="btn btn-primary w-md waves-effect waves-light" type="submit">Log In</button>
                                                        </div>
                                                    </Row>

                                                    <Row className="form-group mt-2 mb-0">
                                                        <div className="col-12 mt-3">
                                                            <Link to="pages-recoverpw-2"><i className="mdi mdi-lock"></i> Forgot your password?</Link>
                                                        </div>
                                                    </Row>


                                                </form>
                                            </div>
                                            <div className="mt-5 text-center">
                                                <p>Don't have an account ? <Link to="pages-register-2" className="font-500 text-primary"> Signup now </Link> </p>
                                                <p>© {new Date().getFullYear()}  Veltrix. Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xl="9">
                                <div className="text-white">
                                    <Row>
                                        <Col xl="4">
                                            <div className="text-center account-process p-4">
                                                <h5 className="mt-0 mb-5 d-inline-block p-3 bg-primary rounded-circle border border-light position-relative">01</h5>
                                                <div className="mb-4">
                                                    <i className="ti-pencil-alt h1"></i>
                                                </div>
                                                <h5>Free register</h5>
                                                <p className="text-white-50">Sed ut perspiciatis unde omnis iste</p>
                                            </div>
                                        </Col>
                                        <Col xl="4">
                                            <div className="text-center account-process p-4">
                                                <h5 className="mt-0 mb-5 d-inline-block p-3 bg-primary rounded-circle border border-light position-relative">02</h5>
                                                <div className="mb-4">
                                                    <i className="ti-user h1"></i>
                                                </div>
                                                <h5>Log in account</h5>
                                                <p className="text-white-50">emo enim ipsam voluptatem quia</p>
                                            </div>
                                        </Col>
                                        <Col xl="4">
                                            <div className="text-center p-4">
                                                <h5 className="mt-0 mb-5 d-inline-block p-3 bg-primary rounded-circle border border-light position-relative">03</h5>
                                                <div className="mb-4">
                                                    <i className="ti-bookmark-alt h1"></i>
                                                </div>
                                                <h5>Get product</h5>
                                                <p className="text-white-50">Sed ut perspiciatis unde omnis iste</p>
                                            </div>
                                        </Col>
                                    </Row>
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
    return {  };
}

export default withRouter(connect(mapStatetoProps, { activateNonAuthLayout })(Pageslogin2));




