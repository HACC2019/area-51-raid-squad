import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';
import { Link } from 'react-router-dom';

import BarChart from '../../../containers/charts/chartjs/BarChart';
import DonutChart from '../../../containers/charts/chartjs/DonutChart';
import LineChart from '../../../containers/charts/chartjs/LineChart';
import PieChart from '../../../containers/charts/chartjs/PieChart';
import PolarChart from '../../../containers/charts/chartjs/PolarChart';
import RadarChart from '../../../containers/charts/chartjs/RadarChart';


class ChartJSChart extends Component {

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
                                    <h4 className="page-title">Chartjs</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Charts</Link></li>
                                        <li className="breadcrumb-item active">Chartjs</li>
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
                                        <ul className="list-inline widget-chart text-center">
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">86541</h5>
                                                <p className="text-muted">Activated</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">2541</h5>
                                                <p className="text-muted">Pending</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">102030</h5>
                                                <p className="text-muted">Deactivated</p>
                                            </li>
                                        </ul>
                                        <LineChart />
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title mb-4">Bar Chart</h4>
                                        <ul className="list-inline widget-chart text-center">
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">2541</h5>
                                                <p className="text-muted">Activated</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">84845</h5>
                                                <p className="text-muted">Pending</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">12001</h5>
                                                <p className="text-muted">Deactivated</p>
                                            </li>
                                        </ul>
                                        <BarChart />
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title mb-4">Pie Chart</h4>
                                        <ul className="list-inline widget-chart text-center">
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">2536</h5>
                                                <p className="text-muted">Activated</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">69421</h5>
                                                <p className="text-muted">Pending</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">89854</h5>
                                                <p className="text-muted">Deactivated</p>
                                            </li>
                                        </ul>
                                        <PieChart />
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title mb-4">Donut Chart</h4>
                                        <ul className="list-inline widget-chart text-center">
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">9595</h5>
                                                <p className="text-muted">Activated</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">36524</h5>
                                                <p className="text-muted">Pending</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">62541</h5>
                                                <p className="text-muted">Deactivated</p>
                                            </li>
                                        </ul>
                                        <DonutChart />
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title mb-4">Polar Chart</h4>
                                        <ul className="list-inline widget-chart text-center">
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">4852</h5>
                                                <p className="text-muted">Activated</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">3652</h5>
                                                <p className="text-muted">Pending</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">85412</h5>
                                                <p className="text-muted">Deactivated</p>
                                            </li>
                                        </ul>
                                        <PolarChart />
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title mb-4">Radar Chart</h4>
                                        <ul className="list-inline widget-chart text-center">
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">694</h5>
                                                <p className="text-muted">Activated</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">55210</h5>
                                                <p className="text-muted">Pending</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">489498</h5>
                                                <p className="text-muted">Deactivated</p>
                                            </li>
                                        </ul>
                                        <RadarChart />
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

export default connect(null, { activateAuthLayout })(ChartJSChart);


