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
import Apexarea from '../../../containers/charts/apex/apexarea';
import Apexbar from '../../../containers/charts/apex/apexbar';
// import Apexchart1 from '../../../containers/charts/apex/apexchart1';
// import Apexchart2 from '../../../containers/charts/apex/apexchart2';
// import Apexchart3 from '../../../containers/charts/apex/apexchart3';
// import Apexradial from '../../../containers/charts/apex/apexradial';
// import Apexradial2 from '../../../containers/charts/apex/apexradial2';
// import Apexsocial from '../../../containers/charts/apex/apexsocial';

//Images
// import user2 from '../../../images/users/user-2.jpg';
// import user3 from '../../../images/users/user-3.jpg';
// import user4 from '../../../images/users/user-4.jpg';
// import user5 from '../../../images/users/user-5.jpg';
// import user6 from '../../../images/users/user-6.jpg';
// import user7 from '../../../images/users/user-7.jpg';

import DashboardRightSidebar from './rightbar';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = { activeTab: '1', activeother: '1', startDate: new Date() }
        this.toggleStock = this.toggleStock.bind(this);
        this.toggleMessages = this.toggleMessages.bind(this);
    }

    componentDidMount() {
        this.props.activateAuthLayout();
        // document.body.classList = "";
        // if (this.props.location.pathname === '/layout-light') {
        //     document.body.classList.add('left-side-menu-light');
        // }
        // else if (this.props.location.pathname === '/layout-collapsed') {
        //     document.body.classList.toggle('enlarged');
        // }
        // else { }
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
                            <Col lg="4">
                                <Card className="mini-stat bg-pattern">
                                    <CardBody className="mini-stat-img">
                                        <div className="mini-stat-icon">
                                            <i className="dripicons-broadcast bg-soft-primary text-primary float-right h4"></i>
                                        </div>
                                        <h6 className="text-uppercase mb-3 mt-0">Amount Made</h6>
                                        <h5 className="mb-3">$1,687</h5>
                                        <p className="text-muted mb-0"><span className="text-success mr-2"> 12% <i className="mdi mdi-arrow-up"></i> </span> From previous period</p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="4">
                                <Card className="mini-stat bg-pattern">
                                    <CardBody className="mini-stat-img">
                                        <div className="mini-stat-icon">
                                            <i className="dripicons-box bg-soft-primary text-primary float-right h4"></i>
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
                                            <i className="dripicons-tags bg-soft-primary text-primary float-right h4"></i>
                                        </div>
                                        <h6 className="text-uppercase mb-3 mt-0">Average Sale Made</h6>
                                        <h5 className="mb-3">$14.6</h5>
                                        <p className="text-muted mb-0"><span className="text-danger mr-2"> -26% <i className="mdi mdi-arrow-down"></i> </span> From previous period</p>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col xl="4">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title mb-4">Weekly Sales</h4>
                                        <div id="area-chart">
                                            <Apexarea />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col xl="8">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title mb-4">Kenneth's Test Area</h4>
                                        <div id="column-chart" dir="ltr">
                                            <Apexbar />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            {/*<Col xl="4">*/}
                            {/*    <Card>*/}
                            {/*        <CardBody>*/}
                            {/*            <h4 className="mt-0 header-title">Earning</h4>*/}
                            {/*            <div>*/}
                            {/*                <div className="wid-earning">*/}
                            {/*                    <div className="row">*/}
                            {/*                        <div className="col-md-6">*/}
                            {/*                            <div>*/}
                            {/*                                <h5 className="mt-0">$1,452</h5>*/}
                            {/*                                <p className="text-muted mb-md-0">Weekly</p>*/}
                            {/*                            </div>*/}
                            {/*                        </div>*/}
                            {/*                        <div className="col-md-5">*/}
                            {/*                            <div id="chart1">*/}
                            {/*                                <Apexchart1 />*/}
                            {/*                            </div>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*                <div className="wid-earning">*/}
                            {/*                    <div className="row">*/}
                            {/*                        <div className="col-md-6">*/}
                            {/*                            <div>*/}
                            {/*                                <h5 className="mt-0">$4,150</h5>*/}
                            {/*                                <p className="text-muted mb-md-0">Monthly</p>*/}
                            {/*                            </div>*/}
                            {/*                        </div>*/}
                            {/*                        <div className="col-md-5">*/}
                            {/*                            <div id="chart2">*/}
                            {/*                                <Apexchart2 />*/}
                            {/*                            </div>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*                <div className="wid-earning">*/}
                            {/*                    <div className="row">*/}
                            {/*                        <div className="col-md-6">*/}
                            {/*                            <div>*/}
                            {/*                                <h5 className="mt-0">$38,759</h5>*/}
                            {/*                                <p className="text-muted mb-md-0">Yearly</p>*/}

                            {/*                            </div>*/}
                            {/*                        </div>*/}
                            {/*                        <div className="col-md-5">*/}
                            {/*                            <div id="chart3">*/}
                            {/*                                <Apexchart3 />*/}
                            {/*                            </div>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </CardBody>*/}
                            {/*    </Card>*/}
                            {/*</Col>*/}


                            {/*<Col xl="4">*/}
                            {/*    <Card className="messages recent-stock">*/}
                            {/*        <CardBody>*/}
                            {/*            <h4 className="mt-0 header-title">Station Specifics</h4>*/}

                            {/*            <Nav tabs className="tab-wid recent-stock-widget nav-justified">*/}
                            {/*                <NavItem>*/}
                            {/*                    <NavLink*/}
                            {/*                        className={classnames({ active: this.state.activeTab === '1' })}*/}
                            {/*                        onClick={() => { this.toggleStock('1'); }}*/}
                            {/*                    >*/}
                            {/*                        <i className="dripicons-device-desktop h4 product-icon"></i>*/}
                            {/*                        <p className="text-muted mb-0">Station A</p>*/}
                            {/*                    </NavLink>*/}
                            {/*                </NavItem>*/}
                            {/*                <NavItem>*/}
                            {/*                    <NavLink*/}
                            {/*                        className={classnames({ active: this.state.activeTab === '2' })}*/}
                            {/*                        onClick={() => { this.toggleStock('2'); }} >*/}
                            {/*                        <i className="dripicons-monitor h4 product-icon"></i>*/}
                            {/*                        <p className="text-muted mb-0">Station B</p>*/}
                            {/*                    </NavLink>*/}
                            {/*                </NavItem>*/}
                            {/*            </Nav>*/}


                            {/*            <TabContent activeTab={this.state.activeTab}>*/}
                            {/*                <TabPane tabId="1">*/}
                            {/*                    <div className="text-center">*/}
                            {/*                        <div id="radial-chart">*/}
                            {/*                            <Apexradial />*/}
                            {/*                        </div>*/}
                            {/*                        <h5 className="font-18">Computer</h5>*/}
                            {/*                        <p className="text-muted mb-0">Neque porro quisquam est</p>*/}
                            {/*                    </div>*/}
                            {/*                </TabPane>*/}
                            {/*                <TabPane tabId="2">*/}
                            {/*                    <div className="text-center">*/}
                            {/*                        <div id="radial-chart-2">*/}
                            {/*                            <Apexradial2 />*/}

                            {/*                        </div>*/}
                            {/*                        <h5 className="font-18">Laptop</h5>*/}
                            {/*                        <p className="text-muted mb-0">Ut enim ad veniam quis</p>*/}
                            {/*                    </div>*/}
                            {/*                </TabPane>*/}
                            {/*            </TabContent>*/}
                            {/*        </CardBody>*/}
                            {/*    </Card>*/}
                            {/*</Col>*/}
                            {/*<Col xl="4">*/}
                            {/*    <Card>*/}
                            {/*        <CardBody>*/}
                            {/*            <h4 className="mt-0 header-title">Port Usages</h4>*/}
                            {/*            <div id="multiple-radial-chart" className="social-source" dir="ltr">*/}
                            {/*                <Apexsocial />*/}
                            {/*            </div>*/}
                            {/*        </CardBody>*/}
                            {/*    </Card>*/}
                            {/*</Col>*/}
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


