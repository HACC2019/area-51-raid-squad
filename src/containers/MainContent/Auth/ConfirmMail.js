import React, { Component } from 'react';
import { Row, Col, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { emptyError,confirmMail } from '../../../store/actions';
import logolight from '../../../images/logo-light.png';

class ConfirmEmail extends Component {

    constructor(props) {
        super(props);
        this.state = {   }
    }

    componentDidMount()
    {
        this.props.emptyError();
        console.log(this.props.match.params.token,this.props.match.params.userId);
        this.props.confirmMail(this.props.match.params.token,this.props.match.params.userId);
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
                                <div className="card bg-pattern shadow-none">
                                    <div className="card-body">
                                        <div className="text-center mt-4">
                                            <div className="mb-3">
                                                <Link to="/" className="logo"><img src={logolight} height="20" alt="logo" /></Link>
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <h4 className="font-18 text-center mb-3">Mail Confirmation </h4>

                                            {this.props.confirmSuccess ? 
                                            <React.Fragment>
                                             <Alert color="success">{this.props.confirmSuccess.user} </Alert>     
                                             <div className="mt-4 text-center">
                                             <Link to="/login" className="btn btn-success">Login</Link>
                                             </div> 
                                             </React.Fragment>
                                             : null }
                                           
                                           {this.props.confirmError && <Alert color="danger">
                                                {this.props.confirmError}</Alert>}

                                        </div>
                                    </div>
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
    const { user, confirmSuccess, confirmError } = state.Account;
    return { user,confirmSuccess, confirmError };
}

export default connect(mapStatetoProps, { emptyError,confirmMail })(ConfirmEmail);


