import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';
import { Link } from 'react-router-dom';


class Uirangeslider extends Component {

    constructor(props, context) {
        super(props, context)

        this.state = {
            default: 15, min_max: 70, step: 25, prefix: 50, postfix: 85, custom_val: 5, handleLabel: 10, float_val: 55.5, extra: 52,
            hide: 5, labels: { 1: 'Jan', 2: 'Feb', 3: 'Mar', 4: 'Apr', 5: 'May', 6: 'Jun', 7: 'Jul', 8: 'Aug', 9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dec' }
        }
    }

    componentDidMount() {
        this.props.activateAuthLayout();
    }

    render() {

        const formatkg = value => '$ ' + value;
        const formatdollar = value => value + ' kg';
        const extra_age = value => value + ' Age';

        return (
            <React.Fragment>

                <div className="content">
                    <div className="container-fluid">
                        <div className="page-title-box">
                            <Row className="align-items-center">
                                <Col sm="6">
                                    <h4 className="page-title">Range Slider</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                        <li className="breadcrumb-item"><Link to="#">UI Elements</Link></li>
                                        <li className="breadcrumb-item active">Range Slider</li>
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

                                        <h4 className="mt-0 header-title">React Rangeslider</h4>
                                        <Row>
                                            <Col md="6">
                                                <div className="p-3">
                                                    <h5 className="font-14 m-b-20 mt-0">Default</h5>
                                                    <span className="float-left mt-4">0</span> <span className="float-right  mt-4">100</span>
                                                    <Slider value={this.state.default} orientation="horizontal" onChange={(value) => { this.setState({ default: value }) }} />
                                                </div>
                                            </Col>

                                            <Col md="6">
                                                <div className="p-3">
                                                    <h5 className="font-14 m-b-20 mt-0">Min-Max</h5>
                                                    <span className="float-left mt-4">30</span> <span className="float-right  mt-4">90</span>
                                                    <Slider value={this.state.min_max} min={30} max={90} orientation="horizontal" onChange={(value) => { this.setState({ min_max: value }) }} />
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col md="6">
                                                <div className="p-3">
                                                    <h5 className="font-14 m-b-20 mt-0">Prefix</h5>
                                                    <span className="float-left mt-4">0</span> <span className="float-right  mt-4">100</span>
                                                    <Slider min={0} max={100} format={formatkg} value={this.state.prefix} onChange={(value) => { this.setState({ prefix: value }) }} />
                                                </div>
                                            </Col>

                                            <Col md="6">
                                                <div className="p-3">
                                                    <h5 className="font-14 m-b-20 mt-0">Postfixes</h5>
                                                    <span className="float-left mt-4">0</span> <span className="float-right  mt-4">100</span>
                                                    <Slider min={0} max={100} format={formatdollar} value={this.state.postfix} onChange={(value) => { this.setState({ postfix: value }) }} />
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col md="6">
                                                <div className="p-3">
                                                    <h5 className="font-14 m-b-20 mt-0">Step</h5>
                                                    <span className="float-left mt-4">0</span> <span className="float-right  mt-4">100</span>
                                                    <Slider value={this.state.step} step={10} orientation="horizontal" onChange={(value) => { this.setState({ step: value }) }} />
                                                </div>
                                            </Col>

                                            <Col md="6">
                                                <div className="p-3">
                                                    <h5 className="font-14 m-b-20 mt-0">Custom Values</h5>
                                                    <Slider value={this.state.custom_val} min={1} max={12} labels={this.state.labels} orientation="horizontal" onChange={(value) => { this.setState({ custom_val: value }) }} />
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col md="6">
                                                <div className="p-3">
                                                    <h5 className="font-14 m-b-20 mt-0">Extra Example</h5>
                                                    <span className="float-left mt-4">0</span> <span className="float-right  mt-4">100</span>
                                                    <Slider min={0} max={100} format={extra_age} value={this.state.extra} onChange={(value) => { this.setState({ extra: value }) }} />
                                                </div>
                                            </Col>

                                            <Col md="6">
                                                <div className="p-3">
                                                    <h5 className="font-14 m-b-20 mt-0">Reverse</h5>
                                                    <span className="float-left mt-4">100</span> <span className="float-right  mt-4">0</span>
                                                    <Slider min={0} max={100} value={this.state.hide} reverse={true} onChange={(value) => { this.setState({ hide: value }) }} />
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col md="6">
                                                <div className="p-3">
                                                    <h5 className="font-14 m-b-20 mt-0">Prettify Numbers</h5>
                                                    <span className="float-left mt-4">1</span> <span className="float-right  mt-4">100</span>
                                                    <Slider value={this.state.float_val} step={0.5} orientation="horizontal" onChange={(value) => { this.setState({ float_val: value }) }} />
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


export default connect(null, { activateAuthLayout })(Uirangeslider);

