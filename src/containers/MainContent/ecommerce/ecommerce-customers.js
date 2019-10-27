import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';


const data = [
    {
        Username: 'Tosha T. Rivera',
        Email: 'ToshaTRivera@teleworm.us',
        Phone: '573-426-7916',
        Address: '547 Maple Court Rolla, MO 65401',
        Balance: '$2,510',
        Date: 'April 02, 2017',
    },
    {
        Username: 'Stanley I. Thurman',
        Email: 'StanleyIThurman@teleworm.us	',
        Phone: '573-426-7923',
        Address: '	2306 Mulberry Avenue Little Rock, AR 72211',
        Balance: '$5,510',
        Date: 'May 02, 2017',
    },
    {
        Username: 'Rufina J. Bordeaux',
        Email: 'RufinaJBordeaux@teleworm.us',
        Phone: '573-426-7916',
        Address: '252 Skips Lane Tucson, AZ 85701',
        Balance: '$4,510',
        Date: 'April 02, 2017',
    }, {
        Username: 'Tosha T. Rivera',
        Email: 'ToshaTRivera@teleworm.us',
        Phone: '573-426-7346',
        Address: '547 Maple Court Rolla, MO 65401',
        Balance: '$2,510',
        Date: 'April 02, 2017',
    },
    {
        Username: 'Stanley I. Thurman',
        Email: 'StanleyIThurman@teleworm.us	',
        Phone: '573-426-8916',
        Address: '	2306 Mulberry Avenue Little Rock, AR 72211',
        Balance: '$5,510',
        Date: 'May 02, 2017',
    },
    {
        Username: 'Rufina J. Bordeaux',
        Email: 'RufinaJBordeaux@teleworm.us',
        Phone: '573-426-7916',
        Address: '252 Skips Lane Tucson, AZ 85701',
        Balance: '$4,510',
        Date: 'April 02, 2017',
    },
    {
        Username: 'Tosha T. Rivera',
        Email: 'ToshaTRivera@teleworm.us',
        Phone: '573-426-1216',
        Address: '547 Maple Court Rolla, MO 65401',
        Balance: '$2,510',
        Date: 'April 02, 2017',
    },
    {
        Username: 'Stanley I. Thurman',
        Email: 'StanleyIThurman@teleworm.us	',
        Phone: '573-426-7916',
        Address: '	2306 Mulberry Avenue Little Rock, AR 72211',
        Balance: '$5,510',
        Date: 'May 02, 2017',
    },
    {
        Username: 'Rufina J. Bordeaux',
        Email: 'RufinaJBordeaux@teleworm.us',
        Phone: '573-426-7856',
        Address: '252 Skips Lane Tucson, AZ 85701',
        Balance: '$4,510',
        Date: 'April 02, 2017',
    },
    {
        Username: 'Tosha T. Rivera',
        Email: 'ToshaTRivera@teleworm.us',
        Phone: '573-426-7916',
        Address: '547 Maple Court Rolla, MO 65401',
        Balance: '$2,510',
        Date: 'April 02, 2017',
    },
    {
        Username: 'Stanley I. Thurman',
        Email: 'StanleyIThurman@teleworm.us	',
        Phone: '573-426-2316',
        Address: '	2306 Mulberry Avenue Little Rock, AR 72211',
        Balance: '$5,510',
        Date: 'May 02, 2017',
    },
    {
        Username: 'Rufina J. Bordeaux',
        Email: 'RufinaJBordeaux@teleworm.us',
        Phone: '573-426-7916',
        Address: '252 Skips Lane Tucson, AZ 85701',
        Balance: '$4,510',
        Date: 'April 02, 2017',
    },
    {
        Username: 'Tosha T. Rivera',
        Email: 'ToshaTRivera@teleworm.us',
        Phone: '573-426-7566',
        Address: '547 Maple Court Rolla, MO 65401',
        Balance: '$2,510',
        Date: 'April 02, 2017',
    },
    {
        Username: 'Stanley I. Thurman',
        Email: 'StanleyIThurman@teleworm.us	',
        Phone: '573-426-7916',
        Address: '	2306 Mulberry Avenue Little Rock, AR 72211',
        Balance: '$5,510',
        Date: 'May 02, 2017',
    },
    {
        Username: 'Rufina J. Bordeaux',
        Email: 'RufinaJBordeaux@teleworm.us',
        Phone: '573-426-3416',
        Address: '252 Skips Lane Tucson, AZ 85701',
        Balance: '$4,510',
        Date: 'April 02, 2017',
    },
    {
        Username: 'Tosha T. Rivera',
        Email: 'ToshaTRivera@teleworm.us',
        Phone: '573-426-7915',
        Address: '547 Maple Court Rolla, MO 65401',
        Balance: '$2,510',
        Date: 'April 02, 2017',
    },
    {
        Username: 'Stanley I. Thurman',
        Email: 'StanleyIThurman@teleworm.us	',
        Phone: '573-426-8916',
        Address: '	2306 Mulberry Avenue Little Rock, AR 72211',
        Balance: '$5,510',
        Date: 'May 02, 2017',
    },
    {
        Username: 'Rufina J. Bordeaux',
        Email: 'RufinaJBordeaux@teleworm.us',
        Phone: '573-426-7916',
        Address: '252 Skips Lane Tucson, AZ 85701',
        Balance: '$4,510',
        Date: 'April 02, 2017',
    },
];


const columns = [
    {
        name: 'Username',
        sortable: true,
        selector: 'Username',
    },
    {
        name: 'Email',
        sortable: true,
        width: "270px",
        selector: 'Email',
    },
    {
        name: 'Phone Number',
        sortable: true,
        selector: 'Phone',
    },
    {
        name: 'Address',
        sortable: true,
        width: "270px",
        selector: 'Address',
    },
    {
        name: 'Wallet Balance',
        sortable: true,
        selector: 'Balance',
    },
    {
        name: 'Joining Date',
        sortable: true,
        selector: 'Date',
    },
    {
        name: 'Action',
        selector: 'Action',
        cell: row => <div> <Link to="/#" className="text-primary mr-3" > <i className="mdi mdi-pencil font-18"></i></Link><Link to="/#" className="text-danger"> <i className="mdi mdi-close font-18"></i></Link></div>,
    }
];

class EcommerceCustomer extends Component {

    constructor(props) {
        super(props);
        this.state = { }
      }

      componentDidMount() {
        this.props.activateAuthLayout();
    }

    render() {

        return (
            <React.Fragment>
                <div className="content ecommerce-customers">
                        <div className="container-fluid">
                            <div className="page-title-box">
                                <Row className="align-items-center">
                                    <Col sm="6">
                                        <h4 className="page-title">Customers</h4>
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                            <li className="breadcrumb-item"><Link to="#">Ecommerce</Link></li>
                                            <li className="breadcrumb-item active">Customers</li>
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
                                    <div className="customer-history">
                                    <DataTable
                                                columns={columns}
                                                pagination={false}
                                                data={data}
                                            />
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


export default connect(null, { activateAuthLayout })(EcommerceCustomer);


