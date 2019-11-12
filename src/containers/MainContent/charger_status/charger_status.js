import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Progress } from 'reactstrap';
import { Link } from 'react-router-dom';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';
import Firebase from 'firebase';
import { Dropdown, Button, OverlayTrigger } from 'react-bootstrap';
import { Manager, Reference, Popper } from 'react-popper';
import Popover from 'react-bootstrap/Popover';
import { css } from '@emotion/core';
import PropagateLoader from 'react-spinners/PropagateLoader';

let query = Firebase.database().ref("Site_Power").orderByChild("island");

class Charger_Status extends Component {
    _isMounted = false

    constructor(props) {
        super(props);
        this.generateGaussianPoint = this.generateGaussianPoint.bind(this);
        this.generateDataSet = this.generateDataSet.bind(this);
        this.randData = [];

        for(let item = 0; item < 16; item++) {
            this.randData.push(this.generateDataSet(100, 0, 85, .5));
        }

        this.state = {
            dataIndex: 0,
            chargers: [],
            chargerUsage: 0
        }
    }

    // TODO: Should probably move this to a data generation module or helper function file
    generateGaussianPoint = (min, max, skew) => {
        // Generates a random point that fits within a gaussian distribution
        // Args:
        // min (int): The minimum possible value
        // max (int): The maximum possible value
        // skew (float): Skew
        let u = 0, v = 0;
        while(u === 0) u = Math.random();
        while(v === 0) v = Math.random();
        let num = -1;
        while (num > 1 || num < 0) {
            num = Math.sqrt( -2.0 * Math.log( u )) * Math.cos(2.0 * Math.PI * v);
            num = num / 10.0 + 0.5
        }

        num = Math.pow(num, skew);
        num *= max - min;
        num += min;

        return Math.round(num);
    }

    generateDataSet = (numItems, min, max, skew) => {
        let dataSet = [];

        for (let itemCount = 0; itemCount < numItems; itemCount++) {
            dataSet.push(this.generateGaussianPoint(min, max, skew))
        }

        return dataSet;
    }

    componentDidMount() {
        this._isMounted = true;
        this.props.activateAuthLayout();

        query.on('value', snapshot => {
            if (this._isMounted) {
                let chargersTemp = [];

                let id = 0;
                snapshot.forEach(function(childSnapshot) {
                    let chargerData = childSnapshot.val();
                    chargerData['id'] = id;

                    chargersTemp.push(chargerData);
                    id++;
                });

                this.setState({chargers: chargersTemp})
            }})
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    iterateRotatingIndex = () => {
        this.state.dataIndex === 99 ? this.setState({dataIndex: 0 }) : this.setState({dataIndex: this.state.dataIndex + 1});
    }

    onclickName = (chargers) => {
        console.log(this.state.chargers);
        console.log(chargers);
        chargers.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        console.log(this.state.chargers);
        console.log(chargers);
    }


    render() {
        setTimeout(this.iterateRotatingIndex.bind(this), 5000);

        const popover = (
            <Popover id="popover-basic">
              <Popover.Title as="h3">Popover right</Popover.Title>
              <Popover.Content>
                And here's some <strong>amazing</strong> content. It's very engaging.
                right?
              </Popover.Content>
            </Popover>
        );
        const Example = () => (
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
              <Button variant="success">Click me to see</Button>
            </OverlayTrigger>
        );

        const rows = this.state.chargers.map((charger, cIndex) =>
            <tr>
                <th scope="row">{charger.name}</th>
                <td>
                    <span
                        style={charger.status === "Offline" ? {color: '#de4040', backgroundColor: 'rgba(222, 64, 64, 0.2)'} : {color: '#47bd9a'}}
                        className="badge badge-soft-success badge-pill"
                    >
                        <i className="mdi mdi-checkbox-blank-circle mr-1"></i>{charger.status}
                    </span>
                </td>
                <td>{charger.island}</td>
                <td><p className="float-right mb-0 ml-3">{charger.status === "Online" ? this.randData[cIndex][this.state.dataIndex] : 0}</p>
                <Progress className="mt-2" style={{ height: '5px' }} color="success" value={charger.status === "Online" ? this.randData[cIndex][this.state.dataIndex] : 0} /></td>

                <td></td>
                <td>
                    <div>
                    <Link to="#" id="t1" className="text-success mr-4"> <i className="dripicons-map h5 m-0"></i></Link>
                    </div>
                </td>
                <td>
                    <div>
                    <Link to="#" id="t1" className="text-success mr-4">
                      <OverlayTrigger trigger="click" placement="left" overlay={popover}>
                        <i className="dripicons-warning h5 m-0" style={charger.status === "Offline" ? {color: 'rgb(255,50,50)'} : {color : 'rgb(71, 189, 154)'}}></i>
                      </OverlayTrigger>
                    </Link>
                    </div>
                </td>
            </tr>
        )

        let onlineChargers = 0;

        this.state.chargers.forEach(charger =>
            charger.status === "Online" ? onlineChargers++ : onlineChargers = onlineChargers)


        return (
            <React.Fragment>
                <div className="content">
                    <div className="container-fluid">
                        <PropagateLoader
                            css={"position: absolute; z-index: 1; left: 50%; top: 45%; transform: translate(-50%, -50%); border-color: black"}
                            sizeUnit={"px"}
                            size={20}
                            color={'#553c8b'}
                            loading={this.state.loading}
                        />
                        <div className="page-title-box">
                            <Row className="align-items-center">
                                <Col sm="6">
                                    <h4 className="page-title">Charger Status</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                        <li className="breadcrumb-item active">Charger Status</li>
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
                            <Col xl="3" md="6">
                                <Card className="bg-pattern-blue">
                                    <CardBody>
                                        <div className="float-right">
                                            <i className="dripicons-graph-bar text-primary h4 ml-3"></i>
                                        </div>

                                        <h5 className="font-20 mt-0 pt-1">{this.state.chargers.length}</h5>
                                        <p className="text-muted mb-0">Total Chargers</p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xl="3" md="6">
                                <Card className="bg-pattern">
                                    <CardBody>
                                        <div className="float-right">
                                            <i className="dripicons-power text-primary h4 ml-3"></i>
                                        </div>
                                        <h5 className="font-20 mt-0 pt-1">{onlineChargers}</h5>
                                        <p className="text-muted mb-0">Chargers Online</p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xl="3" md="6">
                                <Card className="bg-pattern-red">
                                    <CardBody>
                                        <div className="float-right">
                                            <i className="dripicons-wrong text-primary h4 ml-3"></i>
                                        </div>
                                        <h5 className="font-20 mt-0 pt-1">{this.state.chargers.length - onlineChargers}</h5>
                                        <p className="text-muted mb-0">Chargers Offline</p>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="12">
                                <Card>
                                    <CardBody>
                                        <div className="table-responsive project-list">
                                            <table className="table project-table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col" onClick={this.onclickName.bind(this, this.state.chargers)}>Charger Name <i className="dripicons-chevron-down ml-1"></i></th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col">Island</th>
                                                        <th scope="col">Average Usage (1 Week)</th>
                                                        <th></th>
                                                        <th scope="col">Map</th>
                                                        <th scope="col">Alerts</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {rows}
                                                </tbody>
                                            </table>
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


export default connect(null, { activateAuthLayout })(Charger_Status);


