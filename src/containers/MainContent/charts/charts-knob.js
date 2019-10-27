import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';
import { Link } from 'react-router-dom';
import Knob from '../../../containers/charts/knob/Knob';


class ChartsKnob extends Component {

    state = {
        value: 50, value_cur: 12, value_prev: 62, angle: 85, steps: 45,
        angleArc: 70, ang_offset_arc: 52, readonly: 85
    };

    handleChange = (newValue) => {
        this.setState({ value: newValue });
    };
    handleChangecursor = (newValue) => {
        this.setState({ value_cur: newValue });
    };
    handleChangeprev = (newValue) => {
        this.setState({ value_prev: newValue });
    };

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
                                    <h4 className="page-title">Knob Chart </h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Charts</Link></li>
                                        <li className="breadcrumb-item active">Knob Chart</li>
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
                            <Col>
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title">Examples</h4>
                                        <Row className="mb-2">
                                            <Col lg="4">
                                                <div className="text-center" dir="ltr">
                                                    <h5 className="font-16 m-b-20">Default display input</h5>
                                                    <Knob
                                                        value={this.state.value}
                                                        height={150}
                                                        width={150}
                                                        fgColor="#6362b8"
                                                        displayCustom="false"
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg="4">
                                                <div className="text-center" dir="ltr">
                                                    <h5 className="font-16 m-b-20">Cursor mode</h5>
                                                    <Knob
                                                        value={this.state.value_cur}
                                                        height={150}
                                                        width={150}
                                                        fgColor="#2bd3ac"
                                                        cursor={true}
                                                        displayCustom="false"
                                                        onChange={this.handleChangecursor}
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg="4">
                                                <div className="text-center" dir="ltr">
                                                    <h5 className="font-16 m-b-20">Display previous value</h5>
                                                    <Knob
                                                        value={this.state.value_prev}
                                                        height={150}
                                                        width={150}
                                                        fgColor="#11bdfc"
                                                        onChange={this.handleChangeprev}
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="4">
                                                <div className="text-center" dir="ltr">
                                                    <h5 className="font-16 m-b-20">Angle offset</h5>
                                                    <Knob
                                                        value={this.state.angle}
                                                        fgColor="#ffc107"
                                                        lineCap="round"
                                                        height={150}
                                                        width={150}
                                                        onChange={(e) => { this.setState({ angle: e }); }}
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg="4">
                                                <div className="text-center" dir="ltr">
                                                    <h5 className="font-16 m-b-20"> 5-digit values, step 1000</h5>
                                                    <Knob
                                                        value={this.state.steps}
                                                        fgColor="#dc3545"
                                                        step="10"
                                                        height={150}
                                                        width={150}
                                                        onChange={(e) => { this.setState({ steps: e }); }}
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg="4">
                                                <div className="text-center" dir="ltr">
                                                    <h5 className="font-16 m-b-20">Angle offset and arc</h5>
                                                    <Knob
                                                        value={this.state.angleArc}
                                                        fgColor="#343a40"
                                                        angleArc="360"
                                                        angleOffset="5"
                                                        cursor={true}
                                                        height={150}
                                                        width={150}
                                                        onChange={(e) => { this.setState({ angleArc: e }); }}
                                                    />
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col lg="4">
                                                <div className="text-center" dir="ltr">
                                                    <h5 className="font-16 m-b-20">Readonly</h5>
                                                    <Knob
                                                        value={this.state.readonly}
                                                        fgColor="#e83e8c"
                                                        thickness="0.12"
                                                        readOnly={true}
                                                        height={150}
                                                        width={150}

                                                    />

                                                </div>
                                            </Col>
                                            <Col lg="4">
                                                <div className="text-center" dir="ltr">
                                                    <h5 className="font-16 m-b-20"> Angle offset and arc</h5>
                                                    <Knob
                                                        value={this.state.ang_offset_arc}
                                                        fgColor="#8d6e63"
                                                        thickness="0.18"
                                                        angleArc="300"
                                                        angleOffset="5"
                                                        cursor={true}
                                                        height={150}
                                                        width={150}
                                                        onChange={(e) => { this.setState({ ang_offset_arc: e }); }}
                                                    />
                                                </div>
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

export default connect(null, { activateAuthLayout })(ChartsKnob);


