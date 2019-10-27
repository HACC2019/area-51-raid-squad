import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';

import img1 from '../../../images/small/img-1.jpg';
import img2 from '../../../images/small/img-2.jpg';

class Pagestimeline extends Component {

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
                                    <h4 className="page-title">Timeline </h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Extra Pages</Link></li>
                                        <li className="breadcrumb-item active">Timeline</li>
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
                            <Col lg="12">
                                <Card>
                                    <CardBody>
                                        <h4 className="header-title mt-0 mb-5">Horizontal Timeline</h4>
                                        <div className="hori-timeline">
                                            <ul className="list-inline events">
                                                <li className="list-inline-item event-list">
                                                    <div className="px-4">
                                                        <div className="event-date bg-lighten-primary text-primary">2 June</div>
                                                        <h5 className="font-16">Event One</h5>
                                                        <p className="text-muted">It will be as simple as occidental in fact it will be Occidental Cambridge friend</p>
                                                        <div>
                                                            <Link to="#" className="btn btn-primary btn-sm">Read more</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-inline-item event-list ml-1">
                                                    <div className="px-4">
                                                        <div className="event-date bg-lighten-success text-success">5 June</div>
                                                        <h5 className="font-16">Event Two</h5>
                                                        <p className="text-muted">Everyone realizes why a new common language one could refuse translators.</p>
                                                        <div>
                                                            <Link to="#" className="btn btn-primary btn-sm">Read more</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-inline-item event-list ml-1">
                                                    <div className="px-4">
                                                        <div className="event-date bg-lighten-danger text-danger">7 June</div>
                                                        <h5 className="font-16">Event Three</h5>
                                                        <p className="text-muted">If several languages coalesce the grammar of the resulting simple and regular</p>
                                                        <div>
                                                            <Link to="#" className="btn btn-primary btn-sm">Read more</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-inline-item event-list  ml-1">
                                                    <div className="px-4">
                                                        <div className="event-date bg-lighten-warning text-warning">8 June</div>
                                                        <h5 className="font-16">Event Four</h5>
                                                        <p className="text-muted">Languages only differ in their pronunciation and their most common words.</p>
                                                        <div>
                                                            <Link to="#" className="btn btn-primary btn-sm">Read more</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="12">
                                <Card>
                                    <CardBody>
                                        <h4 className="header-title mt-0 mb-5">Vertical Timeline</h4>
                                        <Row className="justify-content-center">
                                            <Col lg="10">
                                                <ul className="verti-timeline list-unstyled">
                                                    <li className="event-list">
                                                        <div className="timeline-icon">
                                                            <i className="mdi mdi-adjust bg-success"></i>
                                                        </div>
                                                        <div className="event-content p-4">
                                                            <h5 className="mt-0 mb-3 font-18">Timeline Event One</h5>
                                                            <div className="text-muted">
                                                                <p className="mb-2">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et</p>
                                                                <p className="mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
                                                            </div>
                                                        </div>
                                                        <div className="event-date bg-primary">
                                                            <h5 className="mt-0">02</h5>
                                                            <p className="mb-0 text-white-50">June</p>
                                                        </div>
                                                    </li>
                                                    <li className="event-list">
                                                        <div className="timeline-icon">
                                                            <i className="mdi mdi-adjust bg-danger"></i>
                                                        </div>
                                                        <div className="event-content p-4">
                                                            <h5 className="mt-0 mb-3 font-18">Timeline Event Two</h5>
                                                            <div className="text-muted">
                                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo enim ipsam voluptatem quia voluptas sit</p>
                                                                <button type="button" className="btn btn-primary waves-effect waves-light">See more detail</button>
                                                            </div>
                                                        </div>
                                                        <div className="event-date bg-primary">
                                                            <h5 className="mt-0">05</h5>
                                                            <p className="mb-0 text-white-50">June</p>
                                                        </div>
                                                    </li>
                                                    <li className="event-list">
                                                        <div className="timeline-icon">
                                                            <i className="mdi mdi-adjust bg-primary"></i>
                                                        </div>
                                                        <div className="event-content p-4">
                                                            <h5 className="mt-0 mb-3 font-18">Timeline Event Three</h5>
                                                            <div className="text-muted">
                                                                <p className="mb-4">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et</p>
                                                                <img src={img1} alt="" className="rounded m-1" style={{ width: "120px" }} />
                                                                <img src={img2} alt="" className="rounded m-1" style={{ width: "120px" }} />
                                                            </div>
                                                        </div>
                                                        <div className="event-date bg-primary">
                                                            <h5 className="mt-0">07</h5>
                                                            <p className="mb-0 text-white-50">June</p>
                                                        </div>
                                                    </li>
                                                    <li className="event-list">
                                                        <div className="timeline-icon">
                                                            <i className="mdi mdi-adjust bg-warning"></i>
                                                        </div>
                                                        <div className="event-content p-4">
                                                            <h5 className="mt-0 mb-3 font-18">Timeline Event Four</h5>
                                                            <div className="text-muted">
                                                                <p className="mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo enim ipsam sit aspernatur aut odit aut fugit</p>
                                                            </div>
                                                        </div>
                                                        <div className="event-date bg-primary">
                                                            <h5 className="mt-0">08</h5>
                                                            <p className="mb-0 text-white-50">June</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default connect(null, { activateAuthLayout })(Pagestimeline);
