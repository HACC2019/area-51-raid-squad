import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';


import img1 from '../../../images/small/img-1.jpg';
import img2 from '../../../images/small/img-2.jpg';
import img3 from '../../../images/small/img-3.jpg';
import img4 from '../../../images/small/img-4.jpg';
import img5 from '../../../images/small/img-5.jpg';
import img6 from '../../../images/small/img-6.jpg';
import img7 from '../../../images/small/img-7.jpg';


class Uicards extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    componentDidMount() {
        this.props.activateAuthLayout();
    }

    render() {


        return (
            <React.Fragment>


                <div className="content">
                    <div className="container-fluid">
                        <div className="page-title-box">
                            <Row className="align-items-center">
                                <Col sm="6">
                                    <h4 className="page-title">Cards</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                        <li className="breadcrumb-item"><Link to="#">UI Elements</Link></li>
                                        <li className="breadcrumb-item active">Cards</li>
                                    </ol>
                                </Col>
                                <Col sm="6">
                                    <div className="float-right d-none d-md-block">
                                        <Settingmenu />
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <Row>
                            <Col md="6" xl="3">
                                <Card>
                                    <img className="card-img-top img-fluid" src={img1} alt="Veltrix" />
                                    <CardBody>
                                        <h4 className="card-title font-16 mt-0">Card Title</h4>
                                        <p className="card-text">Some quick example text to build on the card title and make
                                            up the bulk of the card's content.</p>
                                        <Link to="#" className="btn btn-primary waves-effect waves-light">Button</Link>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col md="6" xl="3">
                                <Card>
                                    <img className="card-img-top img-fluid" src={img2} alt="Veltrix" />
                                    <CardBody>
                                        <h4 className="card-title font-16 mt-0">Card Title</h4>
                                        <p className="card-text">Some quick example text to build on the card title and make
                                            up the bulk of the card's content.</p>
                                    </CardBody>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Cras justo odio</li>
                                        <li className="list-group-item">Dapibus ac facilisis in</li>
                                    </ul>
                                    <CardBody>
                                        <Link to="#" className="card-link">Card link</Link>
                                        <Link to="#" className="card-link">Another link</Link>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col md="6" xl="3">
                                <Card>
                                    <img className="card-img-top img-fluid" src={img3} alt="Veltrix" />
                                    <CardBody>
                                        <p className="card-text">Some quick example text to build on the card title and make
                                            up the bulk of the card's content.</p>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col md="6" xl="3">
                                <Card>
                                    <CardBody>
                                        <h4 className="card-title font-16 mt-0">Card Title</h4>
                                        <h6 className="card-subtitle font-14 text-muted">Support card subtitle</h6>
                                    </CardBody>
                                    <img className="img-fluid" src={img4} alt="Veltrix" />
                                    <CardBody>
                                        <p className="card-text">Some quick example text to build on the card title and make
                                            up the bulk of the card's content.</p>
                                        <Link to="#" className="card-link">Card link</Link>
                                        <Link to="#" className="card-link">Another link</Link>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <div className="col-md-6">
                                <div className="card card-body">
                                    <h3 className="card-title font-16 mt-0">Special Title Treatment</h3>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional
                                        content.</p>
                                    <Link to="#" className="btn btn-primary waves-effect waves-light">Go somewhere</Link>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card card-body">
                                    <h3 className="card-title font-16 mt-0">Special Title Treatment</h3>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional
                                        content.</p>
                                    <Link to="#" className="btn btn-primary waves-effect waves-light">Go somewhere</Link>
                                </div>
                            </div>
                        </Row>

                        <Row>
                            <Col lg="4">
                                <div className="card card-body">
                                    <h4 className="card-title font-16 mt-0">Special Title Treatment</h4>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional
                                        content.</p>
                                    <Link to="#" className="btn btn-primary waves-effect waves-light">Go somewhere</Link>
                                </div>
                            </Col>

                            <Col lg="4">
                                <div className="card card-body text-center">
                                    <h4 className="card-title font-16 mt-0">Special Title Treatment</h4>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional
                                        content.</p>
                                    <Link to="#" className="btn btn-primary waves-effect waves-light">Go somewhere</Link>
                                </div>
                            </Col>

                            <Col lg="4">
                                <div className="card card-body text-right">
                                    <h4 className="card-title font-16 mt-0">Special Title Treatment</h4>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional
                                        content.</p>
                                    <Link to="#" className="btn btn-primary waves-effect waves-light">Go somewhere</Link>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="4">
                                <Card>
                                    <h4 className="card-header font-16 mt-0">Featured</h4>
                                    <CardBody>
                                        <h4 className="card-title font-16 mt-0">Special Title Treatment</h4>
                                        <p className="card-text">With supporting text below as a natural lead-in to
                                            additional content.</p>
                                        <Link to="#" className="btn btn-primary">Go somewhere</Link>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg="4">
                                <Card>
                                    <div className="card-header">
                                        Quote
                                    </div>
                                    <CardBody>
                                        <blockquote className="card-blockquote mb-0">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                                erat a ante.</p>
                                            <footer className="blockquote-footer font-12">
                                                Someone famous in <cite title="Source Title">Source Title</cite>
                                            </footer>
                                        </blockquote>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg="4">
                                <Card>
                                    <div className="card-header">
                                        Featured
                                    </div>
                                    <CardBody>
                                        <h4 className="card-title font-16 mt-0">Special Title Treatment</h4>
                                        <p className="card-text">With supporting text below as a natural lead-in to
                                            additional content.</p>
                                        <Link to="#" className="btn btn-primary waves-effect waves-light">Go somewhere</Link>
                                    </CardBody>
                                    <div className="card-footer text-muted">
                                        2 days ago
                                    </div>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="4">
                                <Card>
                                    <img className="card-img-top img-fluid" src={img5} alt="Veltrix" />
                                    <CardBody>
                                        <h4 className="card-title font-16 mt-0">Card Title</h4>
                                        <p className="card-text">This is a wider card with supporting text below as a
                                            natural lead-in to additional content. This content is a little bit
                                            longer.</p>
                                        <p className="card-text">
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                        </p>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg="4">
                                <Card>
                                    <CardBody>
                                        <h4 className="card-title font-16 mt-0">Card Title</h4>
                                        <p className="card-text">This is a wider card with supporting text below as a
                                            natural lead-in to additional content. This content is a little bit
                                            longer.</p>
                                        <p className="card-text">
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                        </p>
                                    </CardBody>
                                    <img className="card-img-bottom img-fluid" src={img7} alt="Veltrix" />
                                </Card>
                            </Col>

                            <Col lg="4">
                                <Card>
                                    <img className="card-img img-fluid" src={img6} alt="Veltrix" />
                                    <div className="card-img-overlay">
                                        <h4 className="card-title text-white font-16 mt-0">Card Title</h4>
                                        <p className="card-text text-light">This is a wider card with supporting text below as a
                                            natural lead-in to additional content. This content is a little bit
                                            longer.</p>
                                        <p className="card-text">
                                            <small className="text-white">Last updated 3 mins ago</small>
                                        </p>
                                    </div>
                                </Card>
                            </Col>

                        </Row>

                        <Row>
                            <Col lg="6">
                                <Card>
                                    <div className="row no-gutters">
                                        <div className="col-md-4">
                                            <img className="card-img img-fluid" src={img2} alt="Veltrix" />
                                        </div>
                                        <div className="col-md-8">
                                            <CardBody>
                                                <h5 className="card-title font-16">Card title</h5>
                                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                            </CardBody>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col lg="6">
                                <Card>
                                    <div className="row no-gutters">
                                        <div className="col-md-8">
                                            <CardBody>
                                                <h5 className="card-title font-16">Card Title</h5>
                                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                            </CardBody>
                                        </div>
                                        <div className="col-md-4">
                                            <img className="card-img img-fluid" src={img3} alt="Veltrix" />
                                        </div>

                                    </div>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="4">
                                <div className="card text-white bg-primary">
                                    <div className="card-header">
                                        <h5 className="font-16 my-0"><i className="mdi mdi-bullseye-arrow mr-3"></i>Primary Card</h5>
                                    </div>
                                    <CardBody>
                                        <h5 className="card-title font-16 mt-0">card title</h5>
                                        <p className="card-text text-white-50">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </CardBody>
                                </div>
                            </Col>

                            <Col lg="4">
                                <div className="card text-white bg-success">
                                    <div className="card-header">
                                        <h5 className="font-16 my-0"><i className="mdi mdi-check-all mr-3"></i>Success Card</h5>
                                    </div>
                                    <CardBody>
                                        <h5 className="card-title font-16 mt-0">card title</h5>
                                        <p className="card-text text-white-50">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </CardBody>
                                </div>
                            </Col>

                            <Col lg="4">
                                <div className="card text-white bg-info">
                                    <div className="card-header">
                                        <h5 className="font-16 my-0"><i className="mdi mdi-alert-circle-outline mr-3"></i>Info Card</h5>
                                    </div>
                                    <CardBody>
                                        <h5 className="card-title font-16 mt-0">card title</h5>
                                        <p className="card-text text-white-50">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </CardBody>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="4">
                                <Card className="text-white bg-warning">
                                    <div className="card-header">
                                        <h5 className="font-16 my-0"><i className="mdi mdi-alert-outline mr-3"></i>Warning Card</h5>
                                    </div>
                                    <CardBody>
                                        <h5 className="card-title font-16 mt-0">card title</h5>
                                        <p className="card-text text-white-50">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg="4">
                                <Card className="text-white bg-danger">
                                    <div className="card-header">
                                        <h5 className="font-16 my-0"><i className="mdi mdi-block-helper mr-3"></i>Danger Card</h5>
                                    </div>
                                    <CardBody>
                                        <h5 className="card-title font-16 mt-0">card title</h5>
                                        <p className="card-text text-white-50">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg="4">
                                <Card className="text-white bg-dark">
                                    <div className="card-header">
                                        <h5 className="font-16 my-0"><i className="mdi mdi-alert-circle-outline mr-3"></i>Dark Card</h5>
                                    </div>
                                    <CardBody>
                                        <h5 className="card-title font-16 mt-0">card title</h5>
                                        <p className="card-text text-white-50">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="4">
                                <div className="card border border-primary text-primary">
                                    <div className="card-header bg-white border-primary">
                                        <h5 className="font-16 my-0"><i className="mdi mdi-bullseye-arrow mr-3"></i>Primary outline Card</h5>
                                    </div>
                                    <CardBody>
                                        <h5 className="card-title font-16 mt-0">card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </CardBody>
                                </div>
                            </Col>

                            <Col lg="4">
                                <div className="card border border-danger text-danger">
                                    <div className="card-header bg-white border-danger">
                                        <h5 className="font-16 my-0"><i className="mdi mdi-block-helper mr-3"></i>Danger outline Card</h5>
                                    </div>
                                    <CardBody>
                                        <h5 className="card-title font-16 mt-0">card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </CardBody>
                                </div>
                            </Col>

                            <Col lg="4">
                                <div className="card border border-success text-success">
                                    <div className="card-header bg-white border-success">
                                        <h5 className="font-16 my-0"><i className="mdi mdi-check-all mr-3"></i>Success Card</h5>
                                    </div>
                                    <CardBody>
                                        <h5 className="card-title font-16 mt-0">card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </CardBody>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <h4 className="mb-3">Decks</h4>
                                <div className="card-deck-wrapper">
                                    <div className="card-deck">
                                        <Card className="mb-4">
                                            <img className="card-img-top img-fluid" src={img4} alt="Veltrix" />
                                            <CardBody>
                                                <h4 className="card-title font-16 mt-0">Card Title</h4>
                                                <p className="card-text">This is a longer card with supporting text below as
                                                    a natural lead-in to additional content. This content is a little
                                                    bit longer.</p>
                                                <p className="card-text">
                                                    <small className="text-muted">Last updated 3 mins ago</small>
                                                </p>
                                            </CardBody>
                                        </Card>
                                        <Card className="mb-4">
                                            <img className="card-img-top img-fluid" src={img5} alt="Veltrix" />
                                            <CardBody>
                                                <h4 className="card-title font-16 mt-0">Card Title</h4>
                                                <p className="card-text">This card has supporting text below as a natural
                                                    lead-in to additional content.</p>
                                                <p className="card-text">
                                                    <small className="text-muted">Last updated 3 mins ago</small>
                                                </p>
                                            </CardBody>
                                        </Card>
                                        <Card className="mb-4">
                                            <img className="card-img-top img-fluid" src={img6} alt="Veltrix" />
                                            <CardBody>
                                                <h4 className="card-title font-16 mt-0">Card Title</h4>
                                                <p className="card-text">This is a wider card with supporting text below as
                                                    a natural lead-in to additional content. This card has even longer
                                                    content than the first to show that equal height action.</p>
                                                <p className="card-text">
                                                    <small className="text-muted">Last updated 3 mins ago</small>
                                                </p>
                                            </CardBody>
                                        </Card>
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


export default connect(null, { activateAuthLayout })(Uicards);

