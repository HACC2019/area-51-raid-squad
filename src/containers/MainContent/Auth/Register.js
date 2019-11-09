import React, { Component } from 'react';
import { Row, Col, Alert,Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {  registerUser, clearError, clearErrorLogin} from '../../../store/actions';
import logolight from '../../../images/logo-light.png';
import { AvForm, AvField } from 'availity-reactstrap-validation';

class Pagesregister extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event, values) {
        this.props.registerUser(values)
    }


    componentDidMount()
    {
        document.body.classList.add('bg-primary');
        this.props.clearError();
        this.props.clearErrorLogin();
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
                                <div className="card bg-pattern shadow-none">
                                    <div className="card-body">
                                        <div className="text-center mt-4">
                                            <div className="mb-3">
                                                <Link to="/" className="logo"><img src={logolight} height="20" alt="logo" /></Link>
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <h4 className="font-18 text-center mb-3">Register</h4>
                                            <p class="text-muted text-center mb-4">Sign up to view dashboard.</p>

                                            {this.props.user && <Alert color="success">
                                           Registration Done Successfully.</Alert>}

                                            {this.props.registrationError && <Alert color="danger">
                                                {this.props.registrationError}</Alert>}

                                                <AvForm onValidSubmit={this.handleSubmit} >
                                                    <AvField name="username"  value={this.state.username} placeholder="Username" type="text" required   />
                                                    <AvField name="email"  value={this.state.email} placeholder="Email" type="email" validate={{email: true, required: true}} />
                                                    <AvField name="password"  value={this.state.password} placeholder="Password" type="password" required />
                                                 <div className="mt-4 text-center">
                                                     {this.props.loading ?   <Button color="primary" className="btn-block waves-effect waves-light">Loading ...</Button> : 
                                                     <Button color="primary" className="btn-block waves-effect waves-light" type="submit">Register</Button> }
                                                  </div>
                                               </AvForm>
                                        </div>
                                    </div>
                                </div>
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

    const { user, registrationError, loading } = state.Account;
    return { user, registrationError, loading };
}

export default connect(mapStatetoProps, { registerUser, clearError, clearErrorLogin })(Pagesregister);





