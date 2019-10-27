import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';
import { Link } from 'react-router-dom';

import Linechartdatalabel from '../../../containers/charts/apex/line_chart_datalabel';
import Linechartdashed from '../../../containers/charts/apex/line_chart_dashed';
import Splinearea from '../../../containers/charts/apex/spline_area';
import Columnchart from '../../../containers/charts/apex/column_chart';
import Columnchartdatalabel from '../../../containers/charts/apex/column_chart_datalabel';
import Barchart from '../../../containers/charts/apex/bar_chart';
import Mixedchart from '../../../containers/charts/apex/mixed_chart';
import Radialchart from '../../../containers/charts/apex/radial_chart';
import Piechart from '../../../containers/charts/apex/pie_chart';
import Donutchart from '../../../containers/charts/apex/donut_chart';

class Chartsapex extends Component {

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
                                    <h4 className="page-title">Apex Chart </h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Charts</Link></li>
                                        <li className="breadcrumb-item active">Apex Chart</li>
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
                                        <h4 className="header-title mt-0 mb-4">Line with Data Labels</h4>
                                        <div id="line_chart_datalabel" className="apex-charts" dir="ltr">
                                            <Linechartdatalabel />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="header-title mt-0 mb-4">Dashed Line</h4>
                                        <div id="line_chart_dashed" className="apex-charts" dir="ltr">
                                            <Linechartdashed />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="header-title mt-0 mb-4">Spline Area</h4>
                                        <div id="spline_area" className="apex-charts" dir="ltr">
                                            <Splinearea />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="header-title mt-0 mb-4">Column Charts</h4>
                                        <div id="column_chart" className="apex-charts" dir="ltr">
                                            <Columnchart />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="header-title mt-0 mb-4">Column with Data Labels</h4>
                                        <div id="column_chart_datalabel" className="apex-charts" dir="ltr">
                                            <Columnchartdatalabel />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="header-title mt-0 mb-4">Bar Chart</h4>
                                        <div id="bar_chart" className="apex-charts" dir="ltr">
                                            <Barchart />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="header-title mt-0 mb-4">Line, Column & Area Chart</h4>
                                        <div id="mixed_chart" className="apex-charts" dir="ltr">
                                            <Mixedchart />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="6">
                                <Card className="radial-chart">
                                    <CardBody>
                                        <h4 className="header-title mt-0 mb-4">Radial Chart</h4>
                                        <div id="radial_chart" className="apex-charts" dir="ltr">
                                            <Radialchart />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="header-title mt-0 mb-4">Pie Chart</h4>
                                        <div id="pie_chart" className="apex-charts" dir="ltr">
                                            <Piechart />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="header-title mt-0 mb-4">Donut Chart</h4>
                                        <div id="donut_chart" className="apex-charts" dir="ltr">
                                            <Donutchart />
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



export default connect(null, { activateAuthLayout })(Chartsapex);

