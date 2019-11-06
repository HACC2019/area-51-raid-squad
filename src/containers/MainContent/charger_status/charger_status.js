import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Progress, Tooltip } from 'reactstrap';
import { Link } from 'react-router-dom';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';
import Firebase from 'firebase';

//images
import user1 from '../../../images/users/user-1.jpg';
import user2 from '../../../images/users/user-2.jpg';
import user3 from '../../../images/users/user-3.jpg';
import user4 from '../../../images/users/user-4.jpg';
import user5 from '../../../images/users/user-5.jpg';
import user6 from '../../../images/users/user-6.jpg';
import user7 from '../../../images/users/user-7.jpg';
import user8 from '../../../images/users/user-8.jpg';
import { func } from 'prop-types';



class Charger_Status extends Component {

    constructor(props) {
        super(props);

        if(!Firebase.apps.length) {
            Firebase.initializeApp({
                apiKey: "AIzaSyC7B4lfv4_ls8_0JSEPsPvK5sLEnfmcuQs",
                authDomain: "area-51-rs.firebaseapp.com",
                databaseURL: "https://area-51-rs.firebaseio.com",
                projectId: "area-51-rs",
                storageBucket: "area-51-rs.appspot.com",
                messagingSenderId: "805985707758",
                appId: "1:805985707758:web:25c29503f7d055fd17f5ff"
              });
        }

          

        this.state = {
            chargers: []
        }
    }

    componentDidMount() {
        this.props.activateAuthLayout();
        this.getUserData();
    }

    
    getUserData = () => {
        let values = [];
        let stations = [];
        let stationsTemp = [];
        let i = 0;
        let query = Firebase.database();

        query.ref("Site_Power/Oahu").once("value").then((snapshot) =>
            snapshot.forEach((childSnapshot) =>
                stationsTemp.push(childSnapshot.val())

                stations.push({
                    island: "Oahu",
                    stationName: childSnapshot.key,
                    address: stationsTemp[i]["address"],
                    charger_details: stationsTemp[i]["charger_details"],
                    charging_standards: stationsTemp[i]["charging_standards"],
                    cost: stationsTemp[i]["cost"],
                    hours: stationsTemp[i]["hours"],
                    payment_options: stationsTemp[i]["payment_options"],
                    status: stationsTemp[i]["status"]
            });
            i++;
            this.setState({
                chargers : stations
            }));
        ));
        console.log('DATA RETRIEVED');
    };

    render() {

        return (
            <React.Fragment>
                <div className="content">
                    <div className="container-fluid">
                        <div className="page-title-box">
                            <Row className="align-items-center">
                                <Col sm="6">
                                    <h4 className="page-title">Charger Status </h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                        <li className="breadcrumb-item active">Charger_Status</li>
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
                                            <i className="dripicons-archive text-primary h4 ml-3"></i>
                                        </div>

                                        <h5 className="font-20 mt-0 pt-1">24</h5>
                                        <p className="text-muted mb-0">Total Chargers</p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xl="3" md="6">
                                <Card className="bg-pattern">
                                    <CardBody>
                                        <div className="float-right">
                                            <i className="dripicons-trophy text-primary h4 ml-3"></i>
                                        </div>
                                        <h5 className="font-20 mt-0 pt-1">18</h5>
                                        <p className="text-muted mb-0">Chargers Online</p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xl="3" md="6">
                                <Card className="bg-pattern">
                                    <CardBody>
                                        <div className="float-right">
                                            <i className="dripicons-hourglass text-primary h4 ml-3"></i>
                                        </div>
                                        <h5 className="font-20 mt-0 pt-1">06</h5>
                                        <p className="text-muted mb-0">Pending Charger_Status</p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xl="3" md="6">
                                <Card>
                                    <CardBody>
                                        <form>
                                            <div className="form-group mb-0">
                                                <label>Search</label>
                                                <div className="input-group mb-0">
                                                    <input type="text" className="form-control" placeholder="Search..." aria-describedby="project-search-addon" />
                                                    <div className="input-group-append">
                                                        <button className="btn btn-danger" type="button" id="project-search-addon"><i className="mdi mdi-magnify search-icon font-12"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
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
                                                        <th scope="col">#</th>
                                                        <th scope="col">Charger_Status</th>
                                                        <th scope="col">Date</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col">Team</th>
                                                        <th scope="col" style={{ width: "16%" }}>Progress</th>
                                                        <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
   
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>New admin Design</td>
                                                        <td>22/4/2019</td>
                                                        <td><span className="badge badge-soft-success badge-pill"><i className="mdi mdi-checkbox-blank-circle mr-1"></i> Completed</span></td>

                                                        <td>
                                                            <div className="team">
                                                                <Tooltip placement="top" isOpen={this.state.i1} target="i1" toggle={() => this.setState({ i1: !this.state.i1 })}>Roger Drake</Tooltip>
                                                                <Link to="#" id="i1" className="team-member"><img src={user6} alt="Veltrix" className="rounded-circle thumb-sm" /></Link>

                                                                <Tooltip placement="top" isOpen={this.state.i2} target="i2" toggle={() => this.setState({ i2: !this.state.i2 })}>Reggie James</Tooltip>
                                                                <Link to="#" id="i2" className="team-member"><img src={user7} alt="Veltrix" className="rounded-circle thumb-sm" /> </Link>

                                                                <Tooltip placement="top" isOpen={this.state.i3} target="i3" toggle={() => this.setState({ i3: !this.state.i3 })}>Reggie James</Tooltip>
                                                                <Link to="#" id="i3" className="team-member"><img src={user8} alt="Veltrix" className="rounded-circle thumb-sm" /></Link>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p className="float-right mb-0 ml-3">80%</p>
                                                            <Progress className="mt-2" style={{ height: '5px' }} color="success" value={80} />
                                                        </td>
                                                        <td>
                                                            <div>
                                                                <Tooltip placement="top" isOpen={this.state.t1} target="t1" toggle={() => this.setState({ t1: !this.state.t1 })}>Edit</Tooltip>
                                                                <Link to="#" id="t1" className="text-success mr-4"> <i className="dripicons-pencil h5 m-0"></i></Link>

                                                                <Tooltip placement="top" isOpen={this.state.t2} target="t2" toggle={() => this.setState({ t2: !this.state.t2 })}>Delete</Tooltip>
                                                                <Link to="#" id="t2" className="text-danger" > <i className="dripicons-cross h5 m-0"></i></Link>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>Landing page Design</td>
                                                        <td>25/4/2019</td>
                                                        <td><span className="badge badge-soft-primary badge-pill"><i className="mdi mdi-checkbox-blank-circle mr-1"></i> pending</span></td>

                                                        <td>
                                                            <div className="team">
                                                                <Tooltip placement="top" isOpen={this.state.i21} target="i21" toggle={() => this.setState({ i21: !this.state.i21 })}>Deborah Mixon</Tooltip>
                                                                <Link to="#" id="i21" className="team-member"><img src={user2} alt="Veltrix" className="rounded-circle thumb-sm" /></Link>

                                                                <Tooltip placement="top" isOpen={this.state.i22} target="i22" toggle={() => this.setState({ i22: !this.state.i22 })}>Scott Jessie</Tooltip>
                                                                <Link to="#" id="i22" className="team-member"><img src={user1} alt="Veltrix" className="rounded-circle thumb-sm" /> </Link>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p className="float-right mb-0 ml-3">76%</p>
                                                            <Progress className="mt-2" style={{ height: '5px' }} color="purple" value={76} />
                                                        </td>
                                                        <td>
                                                            <div>
                                                                <Tooltip placement="top" isOpen={this.state.t21} target="t21" toggle={() => this.setState({ t21: !this.state.t21 })}>Edit</Tooltip>
                                                                <Link to="#" id="t21" className="text-success mr-4"> <i className="dripicons-pencil h5 m-0"></i></Link>

                                                                <Tooltip placement="top" isOpen={this.state.t22} target="t22" toggle={() => this.setState({ t22: !this.state.t22 })}>Delete</Tooltip>
                                                                <Link to="#" id="t22" className="text-danger" > <i className="dripicons-cross h5 m-0"></i></Link>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>Multipurpose Landing Template</td>
                                                        <td>26/4/2019</td>
                                                        <td><span className="badge badge-soft-primary badge-pill"><i className="mdi mdi-checkbox-blank-circle mr-1"></i> pending</span></td>

                                                        <td>
                                                            <div className="team">
                                                                <Tooltip placement="top" isOpen={this.state.i41} target="i41" toggle={() => this.setState({ i41: !this.state.i41 })}>Neil Wing</Tooltip>
                                                                <Link to="#" id="i41" className="team-member"><img alt="Veltrix" src={user3} className="rounded-circle thumb-sm" /></Link>

                                                                <Tooltip placement="top" isOpen={this.state.i42} target="i42" toggle={() => this.setState({ i42: !this.state.i42 })}>Stanley Barber</Tooltip>
                                                                <Link to="#" id="i42" className="team-member"><img alt="Veltrix" src={user4} className="rounded-circle thumb-sm" /> </Link>

                                                                <Tooltip placement="top" isOpen={this.state.i43} target="i43" toggle={() => this.setState({ i43: !this.state.i43 })}>Roger Drake</Tooltip>
                                                                <Link to="#" id="i43" className="team-member"><img alt="Veltrix" src={user5} className="rounded-circle thumb-sm" /></Link>

                                                                <Tooltip placement="top" isOpen={this.state.i44} target="i44" toggle={() => this.setState({ i44: !this.state.i44 })}>Jack Krier</Tooltip>
                                                                <Link to="#" id="i44" className="team-member"><img alt="Veltrix" src={user6} className="rounded-circle thumb-sm" /></Link>

                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p className="float-right mb-0 ml-3">100%</p>
                                                            <Progress className="mt-2" style={{ height: '5px' }} color="purple" value={100} />
                                                        </td>
                                                        <td>
                                                            <div>
                                                                <Tooltip placement="top" isOpen={this.state.t41} target="t41" toggle={() => this.setState({ t41: !this.state.t41 })}>Edit</Tooltip>
                                                                <Link to="#" id="t41" className="text-success mr-4"> <i className="dripicons-pencil h5 m-0"></i></Link>

                                                                <Tooltip placement="top" isOpen={this.state.t42} target="t42" toggle={() => this.setState({ t42: !this.state.t42 })}>Delete</Tooltip>
                                                                <Link to="#" id="t42" className="text-danger" > <i className="dripicons-cross h5 m-0"></i></Link>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th scope="row">4</th>
                                                        <td>New admin Design</td>
                                                        <td>22/4/2019</td>
                                                        <td><span className="badge badge-soft-success badge-pill"><i className="mdi mdi-checkbox-blank-circle mr-1"></i> Completed</span></td>

                                                        <td>
                                                            <div className="team">
                                                                <Tooltip placement="top" isOpen={this.state.i51} target="i51" toggle={() => this.setState({ i51: !this.state.i51 })}>Roger Drake</Tooltip>
                                                                <Link to="#" id="i51" className="team-member"><img alt="Veltrix" src={user6} className="rounded-circle thumb-sm" /></Link>

                                                                <Tooltip placement="top" isOpen={this.state.i52} target="i52" toggle={() => this.setState({ i52: !this.state.i52 })}>Reggie James</Tooltip>
                                                                <Link to="#" id="i52" className="team-member"><img alt="Veltrix" src={user7} className="rounded-circle thumb-sm" /> </Link>

                                                                <Tooltip placement="top" isOpen={this.state.i53} target="i53" toggle={() => this.setState({ i53: !this.state.i53 })}>Reggie James</Tooltip>
                                                                <Link to="#" id="i53" className="team-member"><img alt="Veltrix" src={user8} className="rounded-circle thumb-sm" /></Link>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p className="float-right mb-0 ml-3">80%</p>
                                                            <Progress className="mt-2" style={{ height: '5px' }} color="success" value={80} />
                                                        </td>
                                                        <td>
                                                            <div>
                                                                <Tooltip placement="top" isOpen={this.state.t51} target="t51" toggle={() => this.setState({ t51: !this.state.t51 })}>Edit</Tooltip>
                                                                <Link to="#" id="t51" className="text-success mr-4"> <i className="dripicons-pencil h5 m-0"></i></Link>

                                                                <Tooltip placement="top" isOpen={this.state.t52} target="t52" toggle={() => this.setState({ t52: !this.state.t52 })}>Delete</Tooltip>
                                                                <Link to="#" id="t52" className="text-danger" > <i className="dripicons-cross h5 m-0"></i></Link>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th scope="row">5</th>
                                                        <td>Redesign - Landing page</td>
                                                        <td>25/4/2019</td>
                                                        <td><span className="badge badge-soft-primary badge-pill"><i className="mdi mdi-checkbox-blank-circle mr-1"></i> pending</span></td>

                                                        <td>
                                                            <div className="team">
                                                                <Tooltip placement="top" isOpen={this.state.i71} target="i71" toggle={() => this.setState({ i71: !this.state.i71 })}>Deborah Mixon</Tooltip>
                                                                <Link to="#" id="i71" className="team-member"><img alt="Veltrix" src={user2} className="rounded-circle thumb-sm" /></Link>

                                                                <Tooltip placement="top" isOpen={this.state.i72} target="i72" toggle={() => this.setState({ i72: !this.state.i72 })}>Scott Jessie</Tooltip>
                                                                <Link to="#" id="i72" className="team-member"><img alt="Veltrix" src={user1} className="rounded-circle thumb-sm" /> </Link>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p className="float-right mb-0 ml-3">42%</p>
                                                            <Progress className="mt-2" style={{ height: '5px' }} color="purple" value={42} />
                                                        </td>
                                                        <td>
                                                            <div>
                                                                <Tooltip placement="top" isOpen={this.state.t71} target="t71" toggle={() => this.setState({ t71: !this.state.t71 })}>Edit</Tooltip>
                                                                <Link to="#" id="t71" className="text-success mr-4"> <i className="dripicons-pencil h5 m-0"></i></Link>

                                                                <Tooltip placement="top" isOpen={this.state.t72} target="t72" toggle={() => this.setState({ t72: !this.state.t72 })}>Delete</Tooltip>
                                                                <Link to="#" id="t72" className="text-danger" > <i className="dripicons-cross h5 m-0"></i></Link>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th scope="row">6</th>
                                                        <td>Brand logo design </td>
                                                        <td>26/4/2019</td>
                                                        <td><span className="badge badge-soft-primary badge-pill"><i className="mdi mdi-checkbox-blank-circle mr-1"></i> pending</span></td>

                                                        <td>
                                                            <div className="team">
                                                                <Tooltip placement="top" isOpen={this.state.i81} target="i81" toggle={() => this.setState({ i81: !this.state.i81 })}>Neil Wing</Tooltip>
                                                                <Link to="#" id="i81" className="team-member"><img alt="Veltrix" src={user3} className="rounded-circle thumb-sm" /></Link>

                                                                <Tooltip placement="top" isOpen={this.state.i82} target="i82" toggle={() => this.setState({ i82: !this.state.i82 })}>Stanley Barber</Tooltip>
                                                                <Link to="#" id="i82" className="team-member"><img alt="Veltrix" src={user4} className="rounded-circle thumb-sm" /> </Link>

                                                                <Tooltip placement="top" isOpen={this.state.i83} target="i83" toggle={() => this.setState({ i83: !this.state.i83 })}>Roger Drake</Tooltip>
                                                                <Link to="#" id="i83" className="team-member"><img alt="Veltrix" src={user5} className="rounded-circle thumb-sm" /></Link>

                                                                <Tooltip placement="top" isOpen={this.state.i84} target="i84" toggle={() => this.setState({ i84: !this.state.i84 })}>Jack Krier</Tooltip>
                                                                <Link to="#" id="i84" className="team-member"><img alt="Veltrix" src={user6} className="rounded-circle thumb-sm" /></Link>

                                                                <Tooltip placement="top" isOpen={this.state.i85} target="i85" toggle={() => this.setState({ i85: !this.state.i85 })}>Jack Krier</Tooltip>
                                                                <Link to="#" id="i85" className="team-member"><img alt="Veltrix" src={user7} className="rounded-circle thumb-sm" /></Link>

                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p className="float-right mb-0 ml-3">36%</p>
                                                            <Progress className="mt-2" style={{ height: '5px' }} color="purple" value={36} />
                                                        </td>
                                                        <td>
                                                            <div>
                                                                <Tooltip placement="top" isOpen={this.state.t81} target="t81" toggle={() => this.setState({ t81: !this.state.t81 })}>Edit</Tooltip>
                                                                <Link to="#" id="t81" className="text-success mr-4"> <i className="dripicons-pencil h5 m-0"></i></Link>

                                                                <Tooltip placement="top" isOpen={this.state.t82} target="t82" toggle={() => this.setState({ t82: !this.state.t82 })}>Delete</Tooltip>
                                                                <Link to="#" id="t82" className="text-danger" > <i className="dripicons-cross h5 m-0"></i></Link>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th scope="row">7</th>
                                                        <td> Landing page Design</td>
                                                        <td>22/4/2019</td>
                                                        <td><span className="badge badge-soft-success badge-pill"><i className="mdi mdi-checkbox-blank-circle mr-1"></i> Completed</span></td>

                                                        <td>
                                                            <div className="team">
                                                                <Tooltip placement="top" isOpen={this.state.i101} target="i101" toggle={() => this.setState({ i101: !this.state.i101 })}>Roger Drake</Tooltip>
                                                                <Link to="#" id="i101" className="team-member"><img alt="Veltrix" src={user6} className="rounded-circle thumb-sm" /></Link>

                                                                <Tooltip placement="top" isOpen={this.state.i102} target="i102" toggle={() => this.setState({ i102: !this.state.i102 })}>Reggie James</Tooltip>
                                                                <Link to="#" id="i102" className="team-member"><img alt="Veltrix" src={user7} className="rounded-circle thumb-sm" /> </Link>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p className="float-right mb-0 ml-3">80%</p>
                                                            <Progress className="mt-2" style={{ height: '5px' }} color="success" value={80} />
                                                        </td>
                                                        <td>
                                                            <div>
                                                                <Tooltip placement="top" isOpen={this.state.t1} target="t101" toggle={() => this.setState({ t101: !this.state.t101 })}>Edit</Tooltip>
                                                                <Link to="#" id="t101" className="text-success mr-4"> <i className="dripicons-pencil h5 m-0"></i></Link>

                                                                <Tooltip placement="top" isOpen={this.state.t2} target="t102" toggle={() => this.setState({ t102: !this.state.t102 })}>Delete</Tooltip>
                                                                <Link to="#" id="t102" className="text-danger" > <i className="dripicons-cross h5 m-0"></i></Link>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th scope="row">8</th>
                                                        <td>Landing page Design</td>
                                                        <td>25/4/2019</td>
                                                        <td><span className="badge badge-soft-primary badge-pill"><i className="mdi mdi-checkbox-blank-circle mr-1"></i> pending</span></td>

                                                        <td>
                                                            <div className="team">
                                                                <Tooltip placement="top" isOpen={this.state.i111} target="i111" toggle={() => this.setState({ i111: !this.state.i111 })}>Deborah Mixon</Tooltip>
                                                                <Link to="#" id="i111" className="team-member"><img alt="Veltrix" src={user2} className="rounded-circle thumb-sm" /></Link>

                                                                <Tooltip placement="top" isOpen={this.state.i112} target="i112" toggle={() => this.setState({ i112: !this.state.i112 })}>Scott Jessie</Tooltip>
                                                                <Link to="#" id="i112" className="team-member"><img alt="Veltrix" src={user1} className="rounded-circle thumb-sm" /> </Link>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p className="float-right mb-0 ml-3">76%</p>
                                                            <Progress className="mt-2" style={{ height: '5px' }} color="purple" value={76} />
                                                        </td>
                                                        <td>
                                                            <div>
                                                                <Tooltip placement="top" isOpen={this.state.t111} target="t111" toggle={() => this.setState({ t111: !this.state.t111 })}>Edit</Tooltip>
                                                                <Link to="#" id="t111" className="text-success mr-4"> <i className="dripicons-pencil h5 m-0"></i></Link>

                                                                <Tooltip placement="top" isOpen={this.state.t112} target="t112" toggle={() => this.setState({ t112: !this.state.t112 })}>Delete</Tooltip>
                                                                <Link to="#" id="t112" className="text-danger" > <i className="dripicons-cross h5 m-0"></i></Link>
                                                            </div>
                                                        </td>
                                                    </tr>
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


export default connect(null, { activateAuthLayout })(Charger_Status);


