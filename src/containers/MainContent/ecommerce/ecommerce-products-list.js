import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';

import img1 from '../../../images/products/1.jpg';
import img2 from '../../../images/products/2.jpg';
import img3 from '../../../images/products/3.jpg';
import img4 from '../../../images/products/4.jpg';
import img5 from '../../../images/products/5.jpg';
import img6 from '../../../images/products/6.jpg';
import img7 from '../../../images/products/7.jpg';
import img8 from '../../../images/products/8.jpg';

const data = [
    {
        Image: img1,
        Pname: 'Gray belt watch',
        Pdesc: 'Sed ut perspiciatis unde omnis iste.',
        Date: '22/05/2017',
        Amount: '$521',
        Unit: '5841',
    },
    {
        Image: img2,
        Pname: 'Riverston Glass Chair',
        Pdesc: 'natus error sit voluptatem doloremque.',
        Date: '28/05/2017',
        Amount: '$561',
        Unit: '4841',
    },
    {
        Image: img3,
        Pname: 'Trex Outdoor Furniture Cape',
        Pdesc: 'Sed ut perspiciatis unde omnis iste.',
        Date: '26/05/2017',
        Amount: '$421',
        Unit: '6841',
    },
    {
        Image: img4,
        Pname: '3 color belt watch',
        Pdesc: 'Dolor sit consec te imperdiet iaculis.',
        Date: '11/05/2017',
        Amount: '$821',
        Unit: '3841',
    },
    {
        Image: img5,
        Pname: 'Classic Company watch',
        Pdesc: 'Sed ut perspiciatis unde omnis iste.',
        Date: '21/05/2017',
        Amount: '$721',
        Unit: '2841',
    },
    {
        Image: img6,
        Pname: 'Outdoor Furniture Cape',
        Pdesc: 'Quis autem vel eum iure te imperdiet.',
        Date: '12/05/2017',
        Amount: '$422',
        Unit: '2841',
    },
    {
        Image: img6,
        Pname: 'Classic Company watch',
        Pdesc: 'Sed ut perspiciatis unde omnis iste.',
        Date: '12/05/2017',
        Amount: '$422',
        Unit: '2841',
    },
    {
        Image: img7,
        Pname: 'Outdoor Furniture Cape',
        Pdesc: 'Quis autem vel eum iure te imperdiet.',
        Date: '12/05/2017',
        Amount: '$422',
        Unit: '2841',
    },
    {
        Image: img8,
        Pname: 'Riverston Glass Chair',
        Pdesc: 'natus error sit voluptatem doloremque.',
        Date: '12/05/2017',
        Amount: '$422',
        Unit: '2841',
    },
    {
        Image: img2,
        Pname: 'Classic Company watch',
        Pdesc: 'Sed ut perspiciatis unde omnis iste.',
        Date: '12/05/2017',
        Amount: '$422',
        Unit: '2841',
    },
    {
        Image: img1,
        Pname: 'Outdoor Furniture Cape',
        Pdesc: 'Quis autem vel eum iure te imperdiet.',
        Date: '12/05/2017',
        Amount: '$422',
        Unit: '2841',
    },
    {
        Image: img2,
        Pname: 'Riverston Glass Chair',
        Pdesc: 'natus error sit voluptatem doloremque.',
        Date: '12/05/2017',
        Amount: '$422',
        Unit: '2841',
    }
];

const columns = [
    {
        name: 'Image',
        sortable: true,
        selector: 'Image',
        cell: row => <div className="product-list-img text-white"><img src={row.Image} className="img-fluid thumb-md rounded" alt="tbl" /></div>
    },
    {
        name: 'Product Name',
        width: "450px",
        color: "white",
        sortable: true,
        selector: 'PName',
        cell: row => <div> <h6 className="mt-0 mb-1 text-white">{row.Pname}</h6> <p className="m-0 font-14" style={{ color:"#dddcdc"  }}>{row.Pdesc}</p> </div>
    },
    {
        name: 'Date',
        sortable: true,
        selector: 'Date',
        cell: row => <div className="text-white">{row.Date} </div>
    },
    {
        name: 'Amount',
        sortable: true,
        selector: 'Amount',
        cell: row => <div className="text-white">{row.Amount} </div>
    },
    {
        name: 'Unit',
        sortable: true,
        selector: 'Unit',
        cell: row => <div className="text-white">{row.Unit} </div>
    },
    {
        name: 'Action',
        sortable: true,
        selector: 'Action',
        cell: row => <div><Link to="#" className="m-r-15 text-primary"><i className="mdi mdi-pencil font-18 mr-3"></i></Link>
            <Link to="#" className="text-danger" ><i className="mdi mdi-close font-18"></i></Link></div>
    },

];


class EcommerceProductEdit extends Component {

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

                <div className="content ecommerce-product">
                    <div className="container-fluid">
                        <div className="page-title-box">
                            <Row className="align-items-center">
                                <Col sm="6">
                                    <h4 className="page-title">Products List</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Ecommerce</Link></li>
                                        <li className="breadcrumb-item active">Products List</li>
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
                                        <div className="table-responsive">
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

export default connect(null, { activateAuthLayout })(EcommerceProductEdit);
