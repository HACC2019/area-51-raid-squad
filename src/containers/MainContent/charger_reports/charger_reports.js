import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';
import Firebase from 'firebase';
import * as Bootstrap from 'react-bootstrap';

let Site_Power_query = Firebase.database().ref("Site_Power").orderByChild("island");

class Charger_Reports extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            chargers: [],
            chargerUsage: 0,
            collapseBanner: ""
        }
    }

    componentDidMount() {
        this._isMounted = true;
        this.props.activateAuthLayout();

        Site_Power_query.on('value', snapshot => {
            if (this._isMounted) {
                let chargersTemp = []

                snapshot.forEach(function(childSnapshot) {
                    chargersTemp.push(childSnapshot.val());
                })

                this.setState({chargers: chargersTemp})
            }
        });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    generateRandomNumber = (min, max) => {
        const random = (Math.floor(Math.random() * (max - min + 1)) + min)
        this.setState({
          chargerUsage: random
        })
    }

    toggle(e) {
        let event = e.target.dataset.event;
        let key = e.target.dataset.type;
        switch(key) {
            case "collapseBanner": {
                this.setState({ collapseBanner: event});
                break;
            }
            default: break;
        }
    }
    countChargerType = (charger) => {
        let currentRFID = {
            total: 0,
            concurrent: 0,
            broken : 'false',
            startCurr: [],
            endCurr: []
        }

        let currentCredit = {
            total: 0,
            concurrent: 0,
            broken : 'false',
            startCurr: [],
            endCurr: []
        }


            for (let i = 0; i < charger.power.length; i++) {
                charger.power[i].payment === "RFID" ? (currentRFID.total = currentRFID.total + 1) && (currentRFID.concurrent = currentRFID.concurrent + 1) : currentCredit.concurrent = 0;
                charger.power[i].payment === "CREDITCARD" ? (currentCredit.total = currentCredit.total + 1) && (currentCredit.concurrent = currentCredit.concurrent + 1) : currentRFID.concurrent = 0;

                if (currentRFID.concurrent >= 100) { if (currentCredit.broken === 'false') { currentCredit.startCurr.push(charger.power[i - 200].start); } currentCredit.broken = 'true'; }
                if (currentCredit.concurrent >= 100) { if (currentRFID.broken === 'false') { currentRFID.startCurr.push(charger.power[i - 200].start); } currentRFID.broken = 'true'; }
            }

        currentRFID.startCurr.push('9/5/17 5:12 PM');
        currentRFID.startCurr.push('9/10/17 3:45 AM');

        let domRFID = <span>Total RFID sessions : {currentRFID.total}</span>;

        let domCredit = <span>Total Credit Card sessions : {currentCredit.total}</span>;


        return <div><div>{domRFID}</div><div>{domCredit}</div></div>;
    }

    render() {

        const rows = this.state.chargers.map(charger =>
                <div>
                    <Card style={{ marginBotttom: '1rem'}} key={charger.name}>
                        <CardHeader onClick={this.toggle} data-event={charger.name} data-type='collapseBanner'>{charger.name}</CardHeader>
                        <Collapse isOpen={this.state.collapseBanner === charger.name}>
                            <CardBody>
                                <span>For station : {charger.name} the system has dected voltage output of 0.00 between 9/1/17 8:37 AM and 9/3/17 9:30 AM.</span>
                                <br/>
                                {this.countChargerType(charger)}
                            </CardBody>
                        </Collapse>
                    </Card>
                </div>
            );

        let onlineChargers = 0;

        this.state.chargers.forEach(charger =>
            charger.status === "Online" ? onlineChargers++ : onlineChargers = onlineChargers)

        return (
            <React.Fragment>
                <div className="content">
                    <div className="container-fluid">
                        <div className="page-title-box">
                            <Row className="align-items-center">
                                <Col sm="6">
                                    <h4 className="page-title">Reports</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                        <li className="breadcrumb-item active">Reports</li>
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
                                        <p className="text-muted mb-0">Healthy Chargers</p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xl="3" md="6">
                                <Card className="bg-pattern-red">
                                    <CardBody>
                                        <div className="float-right">
                                            <i className="dripicons-warning text-primary h4 ml-3"></i>
                                        </div>
                                        <h5 className="font-20 mt-0 pt-1">{this.state.chargers.length - onlineChargers}</h5>
                                        <p className="text-muted mb-0">Warnings</p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xl="3" md="6">
                                <Card className="bg-pattern-red">
                                    <CardBody>
                                        <div className="float-right">
                                            <i className="dripicons-warning text-primary h4 ml-3"></i>
                                        </div>
                                        <h5 className="font-20 mt-0 pt-1">{this.state.chargers.length - onlineChargers}</h5>
                                        <p className="text-muted mb-0">Malfunctions</p>
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
                                                        <th scope="col">Charger Name</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {rows}
                                                </tbody>
                                            </table>
                                        </div>


                                        <div className="pt-3">
                                            <ul className="pagination justify-content-end mb-0">
                                                <li className="page-item disabled">
                                                    <Link className="page-link" to="#" tabIndex="-1" aria-disabled="true">Previous</Link>
                                                </li>
                                                <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                                <li className="page-item active"><Link className="page-link" to="#">2</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="#">Next</Link>
                                                </li>
                                            </ul>
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


export default connect(null, { activateAuthLayout })(Charger_Reports);


