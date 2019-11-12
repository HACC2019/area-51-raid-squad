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
            chargerUsage: 0,
            loading: true,
            nameReverse: false,
            statusReverse: false,
            islandReverse: false
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
        this.state.loading = true;
        this.state.islandReverse = false;
        this.state.statusReverse = false;
        if (!this.state.nameReverse) { chargers.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)); this.state.nameReverse = true;} else { chargers.sort((a,b) => (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0)); this.state.nameReverse = false; };
    }

    onclickStatus = (chargers) => {
        this.state.loading = true;
        this.state.islandReverse = false;
        this.state.nameReverse = false;
        if (!this.state.statusReverse) { chargers.sort((a,b) => (a.status > b.status) ? 1 : ((b.status > a.status) ? -1 : 0)); this.state.statusReverse = true; } else { chargers.sort((a,b) => (a.status < b.status) ? 1 : ((b.status < a.status) ? -1 : 0)); this.state.statusReverse = false; }
    }

    onclickIsland = (chargers) => {
        this.state.loading = true;
        this.state.nameReverse = false;
        this.state.statusReverse = false;
        if (!this.state.islandReverse) { chargers.sort((a,b) => (a.island > b.island) ? 1 : ((b.island > a.island) ? -1 : 0)); this.state.islandReverse = true; } else { chargers.sort((a,b) => (a.island < b.island) ? 1 : ((b.island < a.island) ? -1 : 0)); this.state.islandReverse = false; }
    }

    sneak() {
        this.state.loading = false;

        return <span/>
    }

    render() {
        setTimeout(this.iterateRotatingIndex.bind(this), 5000);

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
                      <OverlayTrigger trigger="click" placement="left" overlay={
                            <Popover id="popover-basic">
                                <Popover.Title>{charger.name === "Kapolei Commons" ? "Charger Offline!" : "Report Available"}</Popover.Title>
                                <Popover.Content>
                                    {charger.name === "Kapolei Commons" ? "This charger is offline. Please send a maintenance crew to check out this site." : charger.name === "Hawaii Electric Ward Office" ? "There has been an average of over 70% charger usage over the last week, this may be a good indication this location may need more charging stations." : charger.name === "Iwilei Costco Parking Lot" ? "There has been a 45% drop in RFID readings in the past week. Please send a crew out to check the RFID reader." : charger.name === "Hawaii Electric Light Hilo Office" ? "There has been a 23% drop in CHADEMO charge sessions. Please send out a crew to check out the CHADEMO charging ports." : ""}
                                </Popover.Content>
                            </Popover>}>
                        {charger.name === "Hawaiian Electric Ward Office" || charger.name === "Kapolei Commons" ||  charger.name === "Iwilei Costco Parking Lot" || charger.name === "Hawaii Electric Light Hilo Office" ? <i className="dripicons-warning h5 m-0" style={charger.status === "Offline" ? {color: 'rgb(255,50,50)'} : {color : 'rgb(71, 189, 154)'}}></i> : <span/>}
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
                                                        <th scope="col" onClick={this.onclickName.bind(this, this.state.chargers)}>Charger Name <i className={!this.state.nameReverse ? "dripicons-chevron-down ml-1" :  "dripicons-chevron-up ml-1"}></i></th>
                                                        <th scope="col" onClick={this.onclickStatus.bind(this, this.state.chargers)}>Status <i className={!this.state.statusReverse ? "dripicons-chevron-down ml-1" :  "dripicons-chevron-up ml-1"}></i></th>
                                                        <th scope="col" onClick={this.onclickIsland.bind(this, this.state.chargers)}>Island <i className={!this.state.islandReverse ? "dripicons-chevron-down ml-1" :  "dripicons-chevron-up ml-1"}></i></th>
                                                        <th scope="col">Average Usage (1 Week)</th>
                                                        <th></th>
                                                        <th scope="col">Map</th>
                                                        <th scope="col">Alerts</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                {this.sneak()}
                                                <tbody>
                                                    {rows}
                                                </tbody>
                                            </table>
                                            {this.sneak()}
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


