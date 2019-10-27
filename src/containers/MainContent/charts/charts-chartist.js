import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';
import { Link } from 'react-router-dom';

import Bar from '../../../containers/charts/chartist/Bar';
import BiPolar from '../../../containers/charts/chartist/BiPolar';
import OverlapBar from '../../../containers/charts/chartist/OverlapBar';
import Area from '../../../containers/charts/chartist/Area';
import SimpleLine from '../../../containers/charts/chartist/SimpleLine';
import LineWithArea from '../../../containers/charts/chartist/LineWithArea';
import DiffLine from '../../../containers/charts/chartist/DiffLine';
import MultipleBar from '../../../containers/charts/chartist/MultipleBar';

import '../../../css/chartist.min.css';

class ChartistChart extends Component {

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
                                    <h4 className="page-title"> Chartist Chart </h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Charts</Link></li>
                                        <li className="breadcrumb-item active">Chartist Chart</li>
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
                                        <h4 className="mt-0 header-title mb-4">Overlapping Bars On Mobile</h4>
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

                                      

                                        <div id="overlapping-bars" >
                                            <MultipleBar />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title mb-4">Advanced Smil Animations</h4>
                                        <ul className="list-inline widget-chart text-center">
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">5241</h5>
                                                <p className="text-muted">Activated</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">65411</h5>
                                                <p className="text-muted">Pending</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">51654</h5>
                                                <p className="text-muted">Deactivated</p>
                                            </li>
                                        </ul>

                                        <div id="stacked-bar-chart">
                                            <Area />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="6">
                                <Card>
                                    <CardBody>

                                        <h4 className="mt-0 header-title mb-4">Bar Chart</h4>

                                        <ul className="list-inline widget-chart text-center">
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">748949</h5>
                                                <p className="text-muted">Activated</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">5181</h5>
                                                <p className="text-muted">Pending</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">101025</h5>
                                                <p className="text-muted">Deactivated</p>
                                            </li>
                                        </ul>

                                        <div id="animating-donut" >
                                            <Bar />

                                        </div>

                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="6">
                                <Card>
                                    <CardBody>

                                        <h4 className="mt-0 header-title mb-4">Bi-polar Line Chart With Area Only</h4>

                                        <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">48484</h5>
                                                <p className="text-muted">Activated</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">48652</h5>
                                                <p className="text-muted">Pending</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">85412</h5>
                                                <p className="text-muted">Deactivated</p>
                                            </li>
                                        </ul>

                                        <div id="simple-pie" >
                                            <BiPolar />
                                        </div>

                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title mb-4">Line Chart</h4>

                                        <ul className="list-inline widget-chart text-center">
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">45410</h5>
                                                <p className="text-muted">Activated</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">4442</h5>
                                                <p className="text-muted">Pending</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">3201</h5>
                                                <p className="text-muted">Deactivated</p>
                                            </li>
                                        </ul>

                                        <div id="smil-animations">
                                            <OverlapBar />
                                        </div>

                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg="6">
                                <Card>
                                    <CardBody>

                                        <h4 className="mt-0 header-title mb-4">Multiple Line Chart</h4>

                                        <ul className="list-inline widget-chart text-center">
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">44242</h5>
                                                <p className="text-muted">Activated</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">75221</h5>
                                                <p className="text-muted">Pending</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">65212</h5>
                                                <p className="text-muted">Deactivated</p>
                                            </li>
                                        </ul>

                                        <div id="simple-line-chart">
                                            <SimpleLine />
                                        </div>

                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="6">
                                <Card>
                                    <CardBody>

                                        <h4 className="mt-0 header-title">Different Configuration For Different Series</h4>

                                        <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">5677</h5>
                                                <p className="text-muted">Activated</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">5542</h5>
                                                <p className="text-muted">Pending</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">12422</h5>
                                                <p className="text-muted">Deactivated</p>
                                            </li>
                                        </ul>

                                        <div id="scatter-diagram">
                                            <DiffLine />
                                        </div>

                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg="6">
                                <Card>
                                    <CardBody>

                                        <h4 className="mt-0 header-title">Line Chart With Area</h4>

                                        <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">4234</h5>
                                                <p className="text-muted">Activated</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">64521</h5>
                                                <p className="text-muted">Pending</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">94521</h5>
                                                <p className="text-muted">Deactivated</p>
                                            </li>
                                        </ul>
                                        <div id="chart-with-area" >
                                            <LineWithArea />
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

export default connect(null, { activateAuthLayout })(ChartistChart);

