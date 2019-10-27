import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Alert } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import logolight from '../../../images/logo-light.png';

class ResetPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount() {
        document.body.classList.add('bg-primary');
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
                                            <h4 className="font-18 text-center mb-3">Password Reset Successfully !</h4>
                                        
                                            <br />
                                              <Alert color="success"> Your password reset successfully. Now You can <Link className="text-primary" to="/login">Login</Link></Alert>
                                        </div>
                                    </CardBody>
                                </Card>
                                <div className="mt-5 text-center text-white-50">
                                    <p>Already have an account ? <Link to="/login" className="font-500 text-white"> Sign In  </Link> </p>
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

export default withRouter(ResetPassword);


