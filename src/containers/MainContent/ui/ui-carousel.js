import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';

import { Link } from 'react-router-dom';

// Carousel 
import Slide from './CarouselTypes/slide';
import Slidewithcontrol from './CarouselTypes/slidewithcontrol';
import Slidewithindicator from './CarouselTypes/slidewithindicator';
import Slidewithcaption from './CarouselTypes/slidewithcaption';
import Slidewithfade from './CarouselTypes/slidewithfade';



class Uicarousel extends Component {

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
                                    <h4 className="page-title">Carousel</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                        <li className="breadcrumb-item"><Link to="#">UI Elements</Link></li>
                                        <li className="breadcrumb-item active">Carousel</li>
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
                            <Col lg="6">
                                <Card>
                                    <CardBody>

                                        <h4 className="mt-0 header-title">Slides Only</h4>
                                        <p className="text-muted mb-4">Here’s a carousel with slides only. </p>

                                        <Slide />
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg="6">
                                <Card>
                                    <CardBody>

                                        <h4 className="mt-0 header-title">With Controls</h4>
                                        <p className="text-muted mb-4">Adding in the previous and next controls:</p>

                                        <Slidewithcontrol />
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="6">
                                <Card>
                                    <CardBody>

                                        <h4 className="mt-0 header-title">With Indicators</h4>
                                        <p className="text-muted mb-4">You can also add the indicators to the
                                            carousel, alongside the controls, too.</p>

                                        <Slidewithindicator />
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg="6">
                                <Card>
                                    <CardBody>

                                        <h4 className="mt-0 header-title">With Captions</h4>
                                        <p className="text-muted mb-4">Add captions to your slides easily.</p>

                                        <Slidewithcaption />
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title">Crossfade</h4>
                                        <p className="text-muted mb-4">Animate slides with a fade transition instead of a slide.</p>
                                        <Slidewithfade />
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div></div>
            </React.Fragment>
        );
    }
}

export default connect(null, { activateAuthLayout })(Uicarousel);


