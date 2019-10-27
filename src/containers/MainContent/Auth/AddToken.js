import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Alert,Button } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import logolight from '../../../images/logo-light.png';
import { verifyToken } from '../../../store/actions';
import { AvForm, AvField } from 'availity-reactstrap-validation';

class AddToken extends Component {

    constructor(props) {
        super(props);
        this.state = {  token : "",email: ""  }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount()
    {
        document.body.classList.add('bg-primary');
    }

    handleSubmit(event, values) {
            this.props.verifyToken(this.props.match.params.email, values.token, this.props.history);
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
                                    <h4 className="font-18 text-center mb-3">Match Token</h4>
                                    <Alert color="success"> Enter token that we had been sent in your mailbox!</Alert>
                                    {this.props.tokenError && <Alert color="danger">
                                                {this.props.tokenError}</Alert>}
                                             
                                        <AvForm className="form-horizontal" onValidSubmit={this.handleSubmit} >
                                       
                                        <AvField name="token" value={this.state.token} placeholder="Token" type="number" required />
                                        <div className="mt-3">
                                        <Button className="btn btn-primary btn-block waves-effect waves-light" type="submit">Send</Button>
                                        </div>
                                     
                                    </AvForm>
                                </div>
                            </CardBody>
                        </Card>
                        <div className="mt-5 text-center text-white-50">
                            <p>Already have an account ? <Link to="/login" className="font-500 text-white"> Sign In here </Link> </p>
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
    const { tuser, tokenError, loading } = state.Token;
    return { tuser, tokenError, loading };
}

export default withRouter(connect(mapStatetoProps, { verifyToken })(AddToken));

