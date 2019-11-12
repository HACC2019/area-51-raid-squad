import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { activateAuthLayout } from '../../../store/actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';
import ButtonDD from '../Subpages/ButtonDD_Stations';
// import { Link } from 'react-router-dom';
// import classnames from 'classnames';

import Rightsidebar from '../../../components/RightSidebar';
//Charts
import Apexarea from '../energy_charts/chart1';
import Apexarea2 from '../../charts/apex/apexarea';

import Donutchart from '../../../containers/charts/apex/donut_chart_port';
import RadialChart from '../../../containers/charts/apex/radial_chart_initiated';

import Firebase from 'firebase';

import DashboardRightSidebar from './rightbar';

const siteAData = require('./../../../Data_HACC.json');

// Initialize firebase
// open API key because this is prototype
// you cant write to it anyways hehe xd

Firebase.initializeApp({
    apiKey: "AIzaSyC7B4lfv4_ls8_0JSEPsPvK5sLEnfmcuQs",
    authDomain: "area-51-rs.firebaseapp.com",
    databaseURL: "https://area-51-rs.firebaseio.com",
    projectId: "area-51-rs",
    storageBucket: "area-51-rs.appspot.com",
    messagingSenderId: "805985707758",
    appId: "1:805985707758:web:25c29503f7d055fd17f5ff"
  });



class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = { activeTab: '1', activeother: '1', startDate: new Date() }
        this.toggleStock = this.toggleStock.bind(this);
        this.toggleMessages = this.toggleMessages.bind(this);
    }

    componentDidMount() {
        this.props.activateAuthLayout();
    }

    toggleStock(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    toggleMessages(tab) {
        if (this.state.activeother !== tab) {
            this.setState({
                activeother: tab
            });
        }
    }

    render() {

        let totalRevenue = 0;
        siteAData.forEach(function(item) {
          totalRevenue += parseFloat(item.amount.substring(1, item.amount.length));
          // console.log(item.amount);
        });
        totalRevenue = Math.round(totalRevenue * 100) / 100;

        return (
            <React.Fragment>
                <div className="content dasboard-content">
                    <div className="container-fluid">
                        <div className="page-title-box">
                            <div className="row align-items-center">
                                <div className="col-sm-6">
                                    <h4 className="page-title">Station Information</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item active"></li>
                                    </ol>
                                </div>
                                <div className="col-sm-6">
                                    <div className="float-right d-none d-md-block">
                                         <Settingmenu/>
                                    </div>
                                  <div className="float-right d-none d-md-block">
                                    <ButtonDD/>
                                  </div>
                                </div>
                            </div>
                        </div>

                        <Row>
                            <Col lg="4">
                                <Card className="mini-stat bg-pattern">
                                    <CardBody className="mini-stat-img">
                                        <div className="mini-stat-icon">
                                            <i className="dripicons-direction bg-soft-primary text-primary float-right h4"></i>
                                        </div>
                                        <h6 className="text-uppercase mb-3 mt-0">Amount Made</h6>
                                        <h5 className="mb-3">{`$${totalRevenue}`}</h5>
                                        <p className="text-muted mb-0"><span className="text-success mr-2"> 12% <i className="mdi mdi-arrow-up"></i> </span> From previous period</p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="4">
                                <Card className="mini-stat bg-pattern">
                                    <CardBody className="mini-stat-img">
                                        <div className="mini-stat-icon">
                                            <i className="dripicons-graph-line bg-soft-primary text-primary float-right h4"></i>
                                        </div>
                                        <h6 className="text-uppercase mb-3 mt-0">Total Revenue Generated</h6>
                                        <h5 className="mb-3">$48,265</h5>
                                        <p className="text-muted mb-0"><span className="text-danger mr-2"> -26% <i className="mdi mdi-arrow-down"></i> </span> From previous period</p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="4">
                                <Card className="mini-stat bg-pattern">
                                    <CardBody className="mini-stat-img">
                                        <div className="mini-stat-icon">
                                            <i className="dripicons-stopwatch bg-soft-primary text-primary float-right h4"></i>
                                        </div>
                                        <h6 className="text-uppercase mb-3 mt-0">Average Charge Duration</h6>
                                        <h5 className="mb-3">00:10:20</h5>
                                        <p className="text-muted mb-0"><span className="text-danger mr-2"> -26% <i className="mdi mdi-arrow-down"></i>
                                        </span> From previous period</p>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col xl="4">
                              <Card className="radial-chart">
                                <CardBody>
                                  <h4 className="header-title mt-0 mb-4">Initialization Method</h4>
                                  <div id="radial_chart" className="apex-charts" dir="ltr">
                                    <RadialChart />
                                  </div>
                                </CardBody>
                              </Card>
                            </Col>

                          <Col xl="8">
                            <Card>
                              <CardBody>
                                <h4 className="mt-0 header-title mb-4">Average Weekly Energy Charged</h4>
                                <div id="area-chart">
                                  <Apexarea />
                                </div>
                              </CardBody>
                            </Card>
                          </Col>

                        </Row>
                    </div>
                </div>

                <Rightsidebar>
                    <DashboardRightSidebar />
                </Rightsidebar>
            </React.Fragment>
        );
    }
}

export default withRouter(connect(null, { activateAuthLayout })(Dashboard));


