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
// fullworking1
import Apexarea from '../energy_charts/chart1'; // 9-1
import Apexarea2 from '../energy_charts/chart2'; // 9-2
import Apexarea3 from '../energy_charts/chart3'; // 9-3
import Apexarea4 from '../energy_charts/chart4'; // 9-4
import Apexarea5 from '../energy_charts/chart5'; // 9-5
import Apexarea6 from '../energy_charts/chart6'; // 9-6
import Apexarea7 from '../energy_charts/chart7'; // 9-7
import Apexarea8 from '../energy_charts/chart8'; // week
import Apexarea9 from '../energy_charts/chart9'; // month

//fullworking2
import Apexarea10 from '../energy_charts/chart1-1'; // 9-1
import Apexarea11 from '../energy_charts/chart2-1'; // 9-2
import Apexarea12 from '../energy_charts/chart3-1'; // 9-3
import Apexarea13 from '../energy_charts/chart4-1'; // 9-4
import Apexarea14 from '../energy_charts/chart5-1'; // 9-5
import Apexarea15 from '../energy_charts/chart6-1'; // 9-6
import Apexarea16 from '../energy_charts/chart7-1'; // 9-7
import Apexarea17 from '../energy_charts/chart8-1'; // week
import Apexarea18 from '../energy_charts/chart9-1'; // month

import Firebase from 'firebase';

import DashboardRightSidebar from './rightbar';

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

                            <Col xl="10">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title mb-4">fullworkingweek1 - 9/1</h4>
                                        <div id="area-chart">
                                            <Apexarea />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>

                        <Col xl="10">
                          <Card>
                            <CardBody>
                              <h4 className="mt-0 header-title mb-4">fullworkingweek2 - 9-1</h4>
                              <div id="area-chart">
                                <Apexarea10 />
                              </div>
                            </CardBody>
                          </Card>
                        </Col>

                      </Row>

                      <Row>

                        <Col xl="10">
                          <Card>
                            <CardBody>
                              <h4 className="mt-0 header-title mb-4">fullworkingweek1 - 9/2</h4>
                              <div id="area-chart">
                                <Apexarea2 />
                              </div>
                            </CardBody>
                          </Card>
                        </Col>

                        <Col xl="10">
                          <Card>
                            <CardBody>
                              <h4 className="mt-0 header-title mb-4">fullworkingweek2 - 9-2</h4>
                              <div id="area-chart">
                                <Apexarea11 />
                              </div>
                            </CardBody>
                          </Card>
                        </Col>

                      </Row>

                      <Row>

                      <Col xl="10">
                        <Card>
                          <CardBody>
                            <h4 className="mt-0 header-title mb-4">fullworkingweek1 - 9/3</h4>
                            <div id="area-chart">
                              <Apexarea3 />
                            </div>
                          </CardBody>
                        </Card>
                      </Col>

                        <Col xl="10">
                          <Card>
                            <CardBody>
                              <h4 className="mt-0 header-title mb-4">fullworkingweek2 - 9/3</h4>
                              <div id="area-chart">
                                <Apexarea12 />
                              </div>
                            </CardBody>
                          </Card>
                        </Col>

                      </Row>

                      <Row>

                      <Col xl="10">
                        <Card>
                          <CardBody>
                            <h4 className="mt-0 header-title mb-4">fullworkingweek1 - 9/4</h4>
                            <div id="area-chart">
                              <Apexarea4 />
                            </div>
                          </CardBody>
                        </Card>
                      </Col>

                        <Col xl="10">
                          <Card>
                            <CardBody>
                              <h4 className="mt-0 header-title mb-4">fullworkingweek2 - 9/4</h4>
                              <div id="area-chart">
                                <Apexarea13 />
                              </div>
                            </CardBody>
                          </Card>
                        </Col>

                      </Row>

                      <Row>

                      <Col xl="10">
                        <Card>
                          <CardBody>
                            <h4 className="mt-0 header-title mb-4">fullworkingweek1 - 9/5</h4>
                            <div id="area-chart">
                              <Apexarea5 />
                            </div>
                          </CardBody>
                        </Card>
                      </Col>

                        <Col xl="10">
                          <Card>
                            <CardBody>
                              <h4 className="mt-0 header-title mb-4">fullworkingweek2 - 9/5</h4>
                              <div id="area-chart">
                                <Apexarea14 />
                              </div>
                            </CardBody>
                          </Card>
                        </Col>

                      </Row>

                      <Row>

                      <Col xl="10">
                        <Card>
                          <CardBody>
                            <h4 className="mt-0 header-title mb-4">fullworkingweek1 - 9/6</h4>
                            <div id="area-chart">
                              <Apexarea6 />
                            </div>
                          </CardBody>
                        </Card>
                      </Col>

                        <Col xl="10">
                          <Card>
                            <CardBody>
                              <h4 className="mt-0 header-title mb-4">fullworkingweek2 - 9/6</h4>
                              <div id="area-chart">
                                <Apexarea15 />
                              </div>
                            </CardBody>
                          </Card>
                        </Col>

                      </Row>

                      <Row>

                      <Col xl="10">
                        <Card>
                          <CardBody>
                            <h4 className="mt-0 header-title mb-4">fullworkingweek1 - 9/7</h4>
                            <div id="area-chart">
                              <Apexarea7 />
                            </div>
                          </CardBody>
                        </Card>
                      </Col>

                        <Col xl="10">
                          <Card>
                            <CardBody>
                              <h4 className="mt-0 header-title mb-4">fullworkingweek2 - 9/7</h4>
                              <div id="area-chart">
                                <Apexarea16 />
                              </div>
                            </CardBody>
                          </Card>
                        </Col>

                      </Row>

                      <Row>

                      <Col xl="10">
                        <Card>
                          <CardBody>
                            <h4 className="mt-0 header-title mb-4">fullworkingweek1 - whole week</h4>
                            <div id="area-chart">
                              <Apexarea8 />
                            </div>
                          </CardBody>
                        </Card>
                      </Col>

                        <Col xl="10">
                          <Card>
                            <CardBody>
                              <h4 className="mt-0 header-title mb-4">fullworkingweek2 - whole week</h4>
                              <div id="area-chart">
                                <Apexarea17 />
                              </div>
                            </CardBody>
                          </Card>
                        </Col>

                      </Row>

                      <Row>

                      <Col xl="10">
                        <Card>
                          <CardBody>
                            <h4 className="mt-0 header-title mb-4">fullworkingweek1 - whole month</h4>
                            <div id="area-chart">
                              <Apexarea9 />
                            </div>
                          </CardBody>
                        </Card>
                      </Col>

                        <Col xl="10">
                          <Card>
                            <CardBody>
                              <h4 className="mt-0 header-title mb-4">fullworkingweek2 - whole month</h4>
                              <div id="area-chart">
                                <Apexarea18 />
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


