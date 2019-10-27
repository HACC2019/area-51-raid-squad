import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';
import { Link } from 'react-router-dom';


class Uigrid extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    componentDidMount() {
        this.props.activateAuthLayout();
    }


    render() {

        return (
            <React.Fragment>


                <div className="content">
                    <div className="container-fluid">
                        <div className="page-title-box">
                            <Row className="align-items-center">
                                <Col sm="6">
                                    <h4 className="page-title">Grid</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                        <li className="breadcrumb-item"><Link to="#">UI Elements</Link></li>
                                        <li className="breadcrumb-item active">Grid</li>
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
                            <Col>
                                <Card>
                                    <CardBody>

                                        <h4 className="mt-0 header-title">Grid Options</h4>
                                        <p className="text-muted">See how aspects of the Bootstrap grid
                                            system work across multiple devices with a handy table.</p>

                                        <div className="table-responsive">
                                            <table className="table table-bordered table-striped mb-0">
                                                <thead>
                                                    <tr>
                                                        <th></th>
                                                        <th className="text-center">
                                                            Extra small<br />
                                                            <small>&lt;576px</small>
                                                        </th>
                                                        <th className="text-center">
                                                            Small<br />
                                                            <small>≥576px</small>
                                                        </th>
                                                        <th className="text-center">
                                                            Medium<br />
                                                            <small>≥768px</small>
                                                        </th>
                                                        <th className="text-center">
                                                            Large<br />
                                                            <small>≥992px</small>
                                                        </th>
                                                        <th className="text-center">
                                                            Extra large<br />
                                                            <small>≥1200px</small>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th className="text-nowrap" scope="row">Grid Behavior</th>
                                                        <td>Horizontal at all times</td>
                                                        <td colSpan="4">Collapsed to start, horizontal above breakpoints</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-nowrap" scope="row">Max container width</th>
                                                        <td>None (auto)</td>
                                                        <td>540px</td>
                                                        <td>720px</td>
                                                        <td>960px</td>
                                                        <td>1140px</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-nowrap" scope="row">Class Prefix</th>
                                                        <td><code>.col-</code></td>
                                                        <td><code>.col-sm-</code></td>
                                                        <td><code>.col-md-</code></td>
                                                        <td><code>.col-lg-</code></td>
                                                        <td><code>.col-xl-</code></td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-nowrap" scope="row"># Of Columns</th>
                                                        <td colSpan="5">12</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-nowrap" scope="row">Gutter Width</th>
                                                        <td colSpan="5">20px (10px on each side of a column)</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-nowrap" scope="row">Nestable</th>
                                                        <td colSpan="5">Yes</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-nowrap" scope="row">Offsets</th>
                                                        <td colSpan="5">Yes</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-nowrap" scope="row">Column Ordering</th>
                                                        <td colSpan="5">Yes</td>
                                                    </tr>
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


export default connect(null, { activateAuthLayout })(Uigrid);

