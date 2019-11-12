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
import Apexarea2 from '../energy_charts/chart2';

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

                            <Col xl="10">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title mb-4">fullworkingweek - 9/1</h4>
                                        <div id="area-chart">
                                            <Apexarea />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>

                        <Col xl="10">
                          <Card>
                            <CardBody>
                              <h4 className="mt-0 header-title mb-4">fullworkingweek - 9/2</h4>
                              <div id="area-chart">
                                <Apexarea2 />
                              </div>
                            </CardBody>
                          </Card>
                        </Col>

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


