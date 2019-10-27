import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { Sparklines, SparklinesLine, SparklinesBars, SparklinesSpots, SparklinesNormalBand, SparklinesReferenceLine, SparklinesCurve } from 'react-sparklines';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';
import { Link } from 'react-router-dom';

class SparklineChart extends Component {

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
                                    <h4 className="page-title">Sparkline Chart </h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Charts</Link></li>
                                        <li className="breadcrumb-item active">Sparkline Chart</li>
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
                            <Col lg="4">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title">Bar Chart</h4>
                                        <Sparklines height={80} data={[3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12]}>
                                            <SparklinesBars style={{ fill: "#f0643b" }} />
                                        </Sparklines>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="4">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title">Line Chart</h4>
                                        <Sparklines height={80} data={[5, 10, 5, 20, 18, 17, 29, 10, 18, 8, 17, 29, 10, 18]}>
                                            <SparklinesLine color="#56c2d6" />
                                        </Sparklines>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="4">
                                <Card>
                                    <CardBody className="analytics-info">
                                        <h4 className="mt-0 header-title">Spots Chart</h4>
                                        <Sparklines height={80} data={[5, 10, 5, 20, 18, 17, 29, 10, 18]} margin={6}>
                                            <SparklinesLine style={{ strokeWidth: 3, stroke: "#23b397", fill: "none" }} />
                                            <SparklinesSpots size={4}
                                                style={{ stroke: "#23b397", strokeWidth: 3, fill: "white" }} />
                                        </Sparklines>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="4">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title">Composite Bar Chart</h4>
                                        <Sparklines height={80} data={[3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12]}>
                                            <SparklinesCurve />
                                            <SparklinesBars style={{ fill: "#23b397" }} />
                                        </Sparklines>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="4">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title">Reference Line Charts</h4>
                                        <Sparklines height={80} data={[5, 10, 5, 20, 18, 17, 29, 10, 18, 15, 20, 18, 17, 29, 10, 18]}>
                                            <SparklinesBars style={{ fill: '#23b397', fillOpacity: ".5" }} />
                                            <SparklinesReferenceLine />
                                        </Sparklines>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="4">
                                <Card className="bg-primary">
                                    <CardBody>
                                        <h4 className="mt-0 header-title text-white">Real World Chart</h4>
                                        <Sparklines height={67} data={[5, 10, 5, 20, 18, 17, 29, 10, 18, 5, 10, 5, 20, 18, 17, 29, 10, 28, 5, 10, 5, 7, 18, 17, 5, 10, 18, 5, 10, 5, 20, 18, 17, 19, 10, 18, 5, 10, 5, 23, 18, 17, 29, 10, 18]} width={200}>
                                            <SparklinesLine style={{ stroke: "#ffffff", fill: "none" }} />
                                            <SparklinesSpots />
                                            <SparklinesNormalBand style={{ fill: "#2991c8", fillOpacity: .1 }} />
                                        </Sparklines>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="4">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="mt-0 header-title">Normal Band</h4>
                                        <Sparklines height={80} data={[5, 10, 5, 20, 18, 17, 29, 10, 18]}>
                                            <SparklinesLine style={{ fill: "none" }} />
                                            <SparklinesNormalBand />
                                            <SparklinesReferenceLine type="mean" />
                                        </Sparklines>
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


export default connect(null, { activateAuthLayout })(SparklineChart);


