import React, { Component } from 'react';
import { Row, Col, Card, CardBody, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import { activateAuthLayout } from '../../../store/actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

// import Rightsidebar from '../../../components/RightSidebar'; // to be removed
//Charts
import Apexarea from '../../../containers/charts/apex/apexarea';
import Apexbar from '../../../containers/charts/apex/apexbar';
import BarChart_RevenuePerDay from '../../charts/apex/barChart_RevenuePerDay';
import Apexchart2 from '../../../containers/charts/apex/apexchart2';
import Apexchart3 from '../../../containers/charts/apex/apexchart3';
import Apexradial from '../../../containers/charts/apex/apexradial';
import Apexradial2 from '../../../containers/charts/apex/apexradial2';
import Apexsocial from '../../../containers/charts/apex/apexsocial';

//Images
import user2 from '../../../images/users/user-2.jpg';
import user3 from '../../../images/users/user-3.jpg';
import user4 from '../../../images/users/user-4.jpg';
import user5 from '../../../images/users/user-5.jpg';
import user6 from '../../../images/users/user-6.jpg';
import user7 from '../../../images/users/user-7.jpg';

// import DashboardRightSidebar from './rightbar'; // to be removed, also reduced right-margin to 0

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
                                    <h4 className="page-title">Dashboard</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item active">Welcome to Veltrix Dashboard</li>
                                    </ol>
                                </div>
                                <div className="col-sm-6">
                                    <div className="float-right d-none d-md-block">
                                        <Settingmenu />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Row>
                            <Col lg="4">
                                <Card className="mini-stat bg-pattern">
                                    <CardBody className="mini-stat-img">
                                        <div className="mini-stat-icon">
                                            <i className="dripicons-box bg-soft-primary text-primary float-right h4"></i>
                                        </div>
                                        <h6 className="text-uppercase mb-3 mt-0">Revenue</h6>
                                        <h5 className="mb-3">1,687</h5>
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
                                        <h6 className="text-uppercase mb-3 mt-0">Revenue</h6>
                                        <h5 className="mb-3">$ 48,265</h5>
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
                                        <h6 className="text-uppercase mb-3 mt-0">Average Price</h6>
                                        <h5 className="mb-3">$ 14.6</h5>
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
                                        <h4 className="mt-0 header-title mb-4">Revenue per day</h4> {/*changed title*/}
                                        <div id="column-chart" dir="ltr">
                                            <Apexbar />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col xl="4">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title">Earning</h4>
                                        <div>
                                            <div className="wid-earning">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div>
                                                            <h5 className="mt-0">$1,452</h5>
                                                            <p className="text-muted mb-md-0">Weekly</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-5">
                                                        <div id="chart1">
                                                            <BarChart_RevenuePerDay />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wid-earning">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div>
                                                            <h5 className="mt-0">$4,150</h5>
                                                            <p className="text-muted mb-md-0">Monthly</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-5">
                                                        <div id="chart2">
                                                            <Apexchart2 />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wid-earning">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div>
                                                            <h5 className="mt-0">$38,759</h5>
                                                            <p className="text-muted mb-md-0">Yearly</p>

                                                        </div>
                                                    </div>
                                                    <div className="col-md-5">
                                                        <div id="chart3">
                                                            <Apexchart3 />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>


                            <Col xl="4">
                                <Card className="messages recent-stock">
                                    <CardBody>
                                        <h4 className="mt-0 header-title">Recent Stock</h4>

                                        <Nav tabs className="tab-wid recent-stock-widget nav-justified">
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab === '1' })}
                                                    onClick={() => { this.toggleStock('1'); }}
                                                >
                                                    <i className="dripicons-device-desktop h4 product-icon"></i>
                                                    <p className="text-muted mb-0">Computer</p>
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab === '2' })}
                                                    onClick={() => { this.toggleStock('2'); }} >
                                                    <i className="dripicons-monitor h4 product-icon"></i>
                                                    <p className="text-muted mb-0">Laptop</p>
                                                </NavLink>
                                            </NavItem>
                                        </Nav>


                                        <TabContent activeTab={this.state.activeTab}>
                                            <TabPane tabId="1">
                                                <div className="text-center">
                                                    <div id="radial-chart">
                                                        <Apexradial />
                                                    </div>
                                                    <h5 className="font-18">Computer</h5>
                                                    <p className="text-muted mb-0">Neque porro quisquam est</p>
                                                </div>
                                            </TabPane>
                                            <TabPane tabId="2">
                                                <div className="text-center">
                                                    <div id="radial-chart-2">
                                                        <Apexradial2 />

                                                    </div>
                                                    <h5 className="font-18">Laptop</h5>
                                                    <p className="text-muted mb-0">Ut enim ad veniam quis</p>
                                                </div>
                                            </TabPane>
                                        </TabContent>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xl="4">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title">Social Source</h4>
                                        <div id="multiple-radial-chart" className="social-source" dir="ltr">
                                            <Apexsocial />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl="8">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title mb-4">Latest Transactions</h4>
                                        <div className="table-responsive">
                                            <table className="table mb-0">
                                                <tbody>
                                                    <tr>
                                                        <td style={{ width: "60px" }}>
                                                            <img src={user2} alt="" className="thumb-sm rounded-circle" />
                                                        </td>
                                                        <td>David Wiley
                                                            <p className="m-0 text-muted">On 02 Jun, 2019</p>
                                                        </td>
                                                        <td>Desktop</td>
                                                        <td>
                                                            <i className="mdi mdi-checkbox-blank-circle text-success mr-1"></i> Confirm
                                                        </td>
                                                        <td>
                                                            $2105
                                                            <p className="m-0 text-muted font-14">Amount</p>
                                                        </td>
                                                        <td>
                                                            <div>
                                                                <Link to="#" className="btn btn-primary btn-sm">Edit</Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img src={user3} alt="" className="thumb-sm rounded-circle" />
                                                        </td>
                                                        <td>Michael Gatlin
                                                            <p className="m-0 text-muted">On 03 Jun, 2019</p>
                                                        </td>
                                                        <td>laptop</td>
                                                        <td>
                                                            <i className="mdi mdi-checkbox-blank-circle text-danger mr-1"></i> Payment expired
                                                        </td>
                                                        <td>
                                                            $1825
                                                            <p className="m-0 text-muted font-14">Amount</p>
                                                        </td>
                                                        <td>
                                                            <div>
                                                                <Link to="#" className="btn btn-primary btn-sm">Edit</Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img src={user4} alt="" className="thumb-sm rounded-circle" />
                                                        </td>
                                                        <td>Steve Dietrich
                                                            <p className="m-0 text-muted">On 05 Jun, 2019</p>
                                                        </td>
                                                        <td>Tablet</td>
                                                        <td>
                                                            <i className="mdi mdi-checkbox-blank-circle text-warning mr-1"></i> Waiting payment
                                                        </td>
                                                        <td>
                                                            $1460
                                                            <p className="m-0 text-muted font-14">Amount</p>
                                                        </td>
                                                        <td>
                                                            <div>
                                                                <Link to="#" className="btn btn-primary btn-sm">Edit</Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img src={user5} alt="" className="thumb-sm rounded-circle" />
                                                        </td>
                                                        <td>James Harris
                                                            <p className="m-0 text-muted">On 07 Jun, 2019</p>
                                                        </td>
                                                        <td>Mobile</td>
                                                        <td>
                                                            <i className="mdi mdi-checkbox-blank-circle text-success mr-1"></i> Confirm
                                                        </td>
                                                        <td>
                                                            $1434
                                                            <p className="m-0 text-muted font-14">Amount</p>
                                                        </td>
                                                        <td>
                                                            <div>
                                                                <Link to="#" className="btn btn-primary btn-sm">Edit</Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img src={user6} alt="" className="thumb-sm rounded-circle" />
                                                        </td>
                                                        <td>Clay Johnson
                                                            <p className="m-0 text-muted">On 08 Jun, 2019</p>
                                                        </td>
                                                        <td>laptop</td>
                                                        <td>
                                                            <i className="mdi mdi-checkbox-blank-circle text-success mr-1"></i> Confirm
                                                        </td>
                                                        <td>
                                                            $1759
                                                            <p className="m-0 text-muted font-14">Amount</p>
                                                        </td>
                                                        <td>
                                                            <div>
                                                                <Link to="#" className="btn btn-primary btn-sm">Edit</Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xl="4">
                                <Card className="messages">
                                    <CardBody>
                                        <h4 className="mt-0 header-title mb-4">Latest Messages</h4>

                                        <Nav tabs className="messages-tabs tab-wid nav-justified">
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeother === '1' })}
                                                    onClick={() => { this.toggleMessages('1'); }}
                                                >
                                                    <h5 className="mt-0 date">10</h5>
                                                    <p className="text-muted mb-0">June</p>
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeother === '2' })}
                                                    onClick={() => { this.toggleMessages('2'); }} >
                                                    <h5 className="mt-0 date">12</h5>
                                                    <p className="text-muted mb-0">June</p>
                                                </NavLink>
                                            </NavItem>
                                        </Nav>

                                        <TabContent activeTab={this.state.activeother}>
                                            <TabPane tabId="1">
                                                <div className="p-2 mt-2">
                                                    <ul className="list-unstyled latest-message-list mb-0">
                                                        <li className="message-list-item">
                                                            <Link to="#">
                                                                <div className="media">
                                                                    <img className="mr-3 thumb-md rounded-circle" src={user2} alt="" />
                                                                    <div className="media-body">
                                                                        <p className="float-right font-12 text-muted">Just Now</p>
                                                                        <h6 className="mt-0">Mary Frye</h6>
                                                                        <p className="text-muted mb-0">Hey! there I'm available...</p>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li className="message-list-item">
                                                            <Link to="#">
                                                                <div className="media">
                                                                    <img className="mr-3 thumb-md rounded-circle" src={user3} alt="" />
                                                                    <div className="media-body">
                                                                        <p className="float-right font-12 text-muted">11:42am</p>
                                                                        <h6 className="mt-0">David Smith</h6>
                                                                        <p className="text-muted mb-0">I've finished it! See you so...</p>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li className="message-list-item">
                                                            <Link to="#" >
                                                                <div className="media">
                                                                    <img className="mr-3 thumb-md rounded-circle" src={user4} alt="" />
                                                                    <div className="media-body">
                                                                        <p className="float-right font-12 text-muted">01:56pm</p>
                                                                        <h6 className="mt-0">Troy Long</h6>
                                                                        <p className="text-muted mb-0">This theme is awesome!</p>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="text-center">
                                                    <Link to="#" className="btn btn-primary btn-sm">Load more</Link>
                                                </div>
                                            </TabPane>
                                            <TabPane tabId="2">
                                                <div className="p-2 mt-2">
                                                    <ul className="list-unstyled latest-message-list mb-0">
                                                        <li className="message-list-item">
                                                            <Link to="#">
                                                                <div className="media">
                                                                    <img className="mr-3 thumb-md rounded-circle" src={user5} alt="" />
                                                                    <div className="media-body">
                                                                        <p className="float-right font-12 text-muted">09:42am</p>
                                                                        <h6 className="mt-0">John Carle</h6>
                                                                        <p className="text-muted mb-0">Hey! there I'm available...</p>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li className="message-list-item">
                                                            <Link to="#">
                                                                <div className="media">
                                                                    <img className="mr-3 thumb-md rounded-circle" src={user6} alt="" />
                                                                    <div className="media-body">
                                                                        <p className="float-right font-12 text-muted">11:07am</p>
                                                                        <h6 className="mt-0">Jerry Carter</h6>
                                                                        <p className="text-muted mb-0">I've finished it! See you so...</p>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li className="message-list-item">
                                                            <Link to="#">
                                                                <div className="media">
                                                                    <img className="mr-3 thumb-md rounded-circle" src={user7} alt="" />
                                                                    <div className="media-body">
                                                                        <p className="float-right font-12 text-muted">01:17pm</p>
                                                                        <h6 className="mt-0">Shane Hill</h6>
                                                                        <p className="text-muted mb-0">This theme is awesome!</p>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="text-center">
                                                    <Link to="#" className="btn btn-primary btn-sm">Load more</Link>
                                                </div>
                                            </TabPane>
                                        </TabContent>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>

                {/*to be removed*/}
                {/*<Rightsidebar>*/}
                {/*    <DashboardRightSidebar />*/}
                {/*</Rightsidebar>*/}
            </React.Fragment>
        );
    }
}

export default withRouter(connect(null, { activateAuthLayout })(Dashboard));


