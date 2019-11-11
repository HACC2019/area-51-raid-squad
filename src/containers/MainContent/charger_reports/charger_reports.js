import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Progress, Tooltip } from 'reactstrap';
import { Link } from 'react-router-dom';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';
import Firebase from 'firebase';
import * as Bootstrap from 'react-bootstrap';

let Site_Power_query = Firebase.database().ref("Site_Power").orderByChild("island");
let SiteX_Power_query = Firebase.database().ref("SiteX_Power").orderByChild("start");

class Charger_Reports extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);

        this.state = {
            chargers: [],
            chargerUsage: 0
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

    render() {
        setTimeout(this.generateRandomNumber.bind(this, 60, 75), 5000);

        const rows = this.state.chargers.map(charger =>
                <div>
                    <Bootstrap.Accordion defaultActiveKey="1">
                        <Bootstrap.Card>
                            <Bootstrap.Accordion.Toggle as={Card.Header} eventKey="0">
                                {charger.name}
                                <i className="dripicons-chevron-down text-primary h4 ml-3"></i>
                            </Bootstrap.Accordion.Toggle>
                            <Bootstrap.Accordion.Collapse eventKey="0">
                                <Bootstrap.Card.Body>
                                    <div>For station : {charger.name} the system has dected voltage output of 0.00 between 9/1/17 8:37 AM and 9/3/17 9:30 AM.</div>
                                </Bootstrap.Card.Body>
                            </Bootstrap.Accordion.Collapse>
                        </Bootstrap.Card>
                    </Bootstrap.Accordion>
                </div>
            );

        let onlineChargers = 0;
        
        this.state.chargers.forEach(charger => 
            charger.status == "Online" ? onlineChargers++ : onlineChargers = onlineChargers)

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
                                <Card className="bg-pattern">
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
                                <Card className="bg-pattern">
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
                                <Card className="bg-pattern">
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
                                                        <th scope="col">Status</th>
                                                        <th scope="col">Island</th>
                                                        <th scope="col">Average Usage (1 Week)</th>
                                                        <th></th>
                                                        <th scope="col">Map</th>
                                                        <th scope="col"></th>
                                                        <th></th>
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


