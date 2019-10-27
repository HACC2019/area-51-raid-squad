import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import error from '../../../images/error.png';
import { activateNonAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';

class Pages404 extends Component {

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
                <div className="home-btn d-none d-sm-block">
                    <Link to="dashboard" className="text-white"><i className="fas fa-home h2"></i></Link>
                </div>

                <div className="account-pages my-5 pt-5">
                    <div className="container">
                        <Row className="justify-content-center">
                            <Col md="8" lg="6" xl="5">
                                <Card className="shadow-none overflow-hidden">
                                    <CardBody>
                                        <div className="text-center">
                                            <h1 className="display-2 font-weight-normal mt-0">404!</h1>
                                            <h4>Sorry, Page Not Found</h4>
                                            <p className="text-muted mb-5">If several languages coalesce, the grammar peson</p>
                                        </div>
                                    </CardBody>
                                    <div>
                                        <img src={error} alt="" className="img-fluid mx-auto d-block" />
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => {
    return {};
}

export default withRouter(connect(mapStatetoProps, { activateNonAuthLayout })(Pages404));

