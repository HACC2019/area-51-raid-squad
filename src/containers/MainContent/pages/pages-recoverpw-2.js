import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {  activateNonAuthLayout } from '../../../store/actions';
import logolight from '../../../images/logo-light.png';

class Pagesrecoverpw2 extends Component {

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
                                                <Link to="dashboard" className="logo"><img src={logolight} height="20" alt="logo" /></Link>
                                            </div>
                                            <div className="text-left p-3">
                                                <h4 className="font-18 text-center">Reset Password</h4>
                                                <div className="alert alert-success mt-4 text-center" role="alert">
                                                    Enter your Email and instructions will be sent to you!
                                        </div>


                                                <form className="form-horizontal mt-5" action="index.html">

                                                    <div className="form-group">
                                                        <label htmlFor="useremail">Email</label>
                                                        <input type="email" className="form-control" id="useremail" placeholder="Enter email" />
                                                    </div>


                                                    <Row className="form-group">
                                                        <div className="col-12 text-right">
                                                            <button className="btn btn-primary w-md waves-effect waves-light" type="submit">Reset</button>
                                                        </div>
                                                    </Row>

                                                </form>
                                            </div>
                                            <div className="mt-5 text-center">
                                                <p>Remember It ? <Link to="pages-login-2" className="font-500 text-primary"> Sign In here </Link> </p>
                                                <p>©  {new Date().getFullYear()} Veltrix. Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand</p>

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

export default withRouter(connect(mapStatetoProps, { activateNonAuthLayout })(Pagesrecoverpw2));


