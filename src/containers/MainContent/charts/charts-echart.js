import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';
import { Link } from 'react-router-dom';

import Line from '../../../containers/charts/echart/Line';
import LineBar from '../../../containers/charts/echart/LineBar';
import Doughnut from '../../../containers/charts/echart/Doughnut';
import Pie from '../../../containers/charts/echart/Pie';
import Scatter from '../../../containers/charts/echart/Scatter';
import Bubble from '../../../containers/charts/echart/Bubble';
import Candlestick from '../../../containers/charts/echart/Candlestick';

class EChart extends Component {

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
                                    <h4 className="page-title">E - Chart</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Charts</Link></li>
                                        <li className="breadcrumb-item active">E - Chart</li>
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
                                        <h4 className="mt-0 header-title mb-4">Line Chart</h4>
                                        <div id="line-chart" className="e-chart">
                                            <Line />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title mb-4">Mix Line-Bar</h4>
                                        <div id="mix-line-bar" className="e-chart">
                                            <LineBar />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title mb-4">Doughnut Chart</h4>
                                        <div id="doughnut-chart" className="e-chart">
                                            <Doughnut />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title mb-4">Pie Chart</h4>
                                        <div id="pie-chart" className="e-chart">
                                            <Pie />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title mb-4">Scatter Chart</h4>
                                        <div id="scatter-chart" className="e-chart">
                                            <Scatter />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title mb-4">Bubble Chart</h4>
                                        <div id="bubble-chart" className="e-chart">
                                            <Bubble />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title mb-4">Candlestick Chart</h4>
                                        <div id="candlestick-chart" className="e-chart">
                                            <Candlestick />
                                        </div>
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

export default connect(null, { activateAuthLayout })(EChart);

