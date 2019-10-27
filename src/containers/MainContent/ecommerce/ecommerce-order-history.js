import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';


const data = [
    {
        Id: '#12354781',
        Amount: '$22',
        Date: 'Jul 11, 2017',
        Payment: 'fab fa-cc-discover text-muted font-20',
        Name: 'Lasse C. Overgaard',
        Status: 'Paid',
        Statusclass: 'badge badge-soft-success badge-pill',
    }, {
        Id: '#12354782',
        Amount: '$22',
        Date: 'Jul 12, 2017',
        Payment: 'fab fa-cc-discover text-muted font-20',
        Name: 'Lasse C. Overgaard',
        Status: 'Chargeback',
        Statusclass: 'badge badge-soft-danger badge-pill',
    }, {
        Id: '#12354781',
        Amount: '$1541',
        Date: 'Apr 11, 2017',
        Payment: 'fab fa-cc-visa text-muted font-20',
        Name: 'Nikolaj S. Henriksen',
        Status: 'Paid',
        Statusclass: 'badge badge-soft-success badge-pill',
    }, {
        Id: '#12354781',
        Amount: '$22',
        Date: 'Jul 11, 2017',
        Payment: 'fab fa-cc-visa text-muted font-20',
        Name: 'Herbert C. Patton',
        Status: 'Chargeback',
        Statusclass: 'badge badge-soft-danger badge-pill',
    }, {
        Id: '#12354781',
        Amount: '$22',
        Date: 'Jul 11, 2017',
        Payment: 'fab fa-cc-discover text-muted font-20',
        Name: 'Nikolaj S. Henriksen',
        Status: 'Refund',
        Statusclass: 'badge badge-soft-warning badge-pill',
    }, {
        Id: '#12354782',
        Amount: '$22',
        Date: 'Jul 12, 2017',
        Payment: 'fab fa-cc-discover text-muted font-20',
        Name: 'Lasse C. Overgaard',
        Status: 'Chargeback',
        Statusclass: 'badge badge-soft-danger badge-pill',
    }, {
        Id: '#12354781',
        Amount: '$1541',
        Date: 'Apr 11, 2017',
        Payment: 'fab fa-cc-visa text-muted font-20',
        Name: 'Lasse C. Overgaard',
        Status: 'Paid',
        Statusclass: 'badge badge-soft-success badge-pill',
    }, {
        Id: '#12354781',
        Amount: '$22',
        Date: 'Jul 11, 2017',
        Payment: 'fab fa-cc-visa text-muted font-20',
        Name: 'Herbert C. Patton',
        Status: 'Chargeback',
        Statusclass: 'badge badge-soft-danger badge-pill',
    }, {
        Id: '#12354781',
        Amount: '$22',
        Date: 'Jul 11, 2017',
        Payment: 'fab fa-cc-discover text-muted font-20',
        Name: 'Lasse C. Overgaard',
        Status: 'Refund',
        Statusclass: 'badge badge-soft-warning badge-pill',
    },
    {
        Id: '#12354781',
        Amount: '$1541',
        Date: 'Apr 11, 2017',
        Payment: 'fab fa-cc-discover text-muted font-20',
        Name: 'Lasse C. Overgaard',
        Status: 'Paid',
        Statusclass: 'badge badge-soft-success badge-pill',
    }, {
        Id: '#12354781',
        Amount: '$22',
        Date: 'Jul 11, 2017',
        Payment: 'fab fa-cc-visa text-muted font-20',
        Name: 'Lasse C. Overgaard',
        Status: 'Chargeback',
        Statusclass: 'badge badge-soft-danger badge-pill',
    }, {
        Id: '#12354781',
        Amount: '$22',
        Date: 'Jul 11, 2017',
        Payment: 'fab fa-cc-discover text-muted font-20',
        Name: 'Lasse C. Overgaard',
        Status: 'Refund',
        Statusclass: 'badge badge-soft-warning badge-pill',
    },
];



const columns = [
    {
        name: 'Order ID',
        sortable: true,
        selector: 'Id',
        cell: row => <div className="text-white">{row.Id} </div>
    },
    {
        name: 'Amount',
        sortable: true,
        selector: 'Amount',
        cell: row => <div className="text-white">{row.Amount} </div>
    },
    {
        name: 'Order Date',
        sortable: true,
        selector: 'Date',
        cell: row => <div className="text-white">{row.Date} </div>
    },
    {
        name: 'Payment',
        sortable: true,
        selector: 'Payment',
        cell: row => <div className="text-white"><i className={row.Payment}></i></div>

    },
    {
        name: 'Billing Name',
        sortable: true,
        selector: 'Name',
        cell: row => <div className="text-white">{row.Name} </div>
    },
    {
        name: 'Status',
        selector: 'Status',
        sortable: true,
        cell: row => <div className="text-white"><span className={row.Statusclass}>{row.Status}</span></div>
    },
    {
        name: 'Action',
        selector: 'Action',
        cell: row => <div> <Link to="#" className="text-primary mr-3"> <i className="mdi mdi-pencil h5 m-0"></i></Link><Link to="#" className="text-danger"> <i className="mdi mdi-close h5 m-0"></i></Link></div>,
    }
];


class EcommerceOrderHistory extends Component {

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
                
                <div className="content ecommerce-order">
                        <div className="container-fluid">
                            <div className="page-title-box">
                                <Row className="align-items-center">
                                    <Col sm="6">
                                        <h4 className="page-title">Order History</h4>
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                            <li className="breadcrumb-item"><Link to="#">Ecommerce</Link></li>
                                            <li className="breadcrumb-item active">Order History</li>
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
                                    <DataTable
                                                columns={columns}
                                                pagination={false}
                                                data={data}
                                            />
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


export default connect(null, { activateAuthLayout })(EcommerceOrderHistory);