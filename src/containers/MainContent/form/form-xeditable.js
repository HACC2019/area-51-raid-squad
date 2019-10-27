import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';
import { Link } from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';

const products = [{ id: 1, age : 25, qty : 1500, cost : 1000  },
  { id: 2, age : 34, qty : 1900, cost : 1300  },
  { id: 3, age : 67, qty : 1300, cost : 1300  },
  { id: 4, age : 23, qty : 1100, cost : 6400  },
  { id: 5, age : 78, qty : 1400, cost : 4000  }
];

const columns = [{
  dataField: 'id',
  text: 'ID'
}, {
  dataField: 'age',
  text: 'Age(AutoFill)'
}, {
  dataField: 'qty',
  text: 'Qty(AutoFill and Editable)'
},{
  dataField: 'cost',
  text: 'Cost(Editable)'
},];

class FormEeditable extends Component {

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
                  <h4 className="page-title">Form Xeditable</h4>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                    <li className="breadcrumb-item"><Link to="#">Forms</Link></li>
                    <li className="breadcrumb-item active">Form Xeditable</li>
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

                    <h4 className="mt-0 header-title">Inline Example</h4>
                    <p className="text-muted mb-4">This library allows you to create
                        editable elements on your page. It can be used with any engine
                        (bootstrap, jquery-ui, jquery only) and includes both popup and inline
                                            modes. Please try out demo to see how it works.</p>

                    <div className="table-responsive">
                  
                    <BootstrapTable
                                        keyField="id"
                                        data={products}
                                        columns={columns}
                                        cellEdit={cellEditFactory({ mode: 'click' })}
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

export default connect(null, { activateAuthLayout })(FormEeditable);

