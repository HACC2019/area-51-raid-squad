import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import InputMask from 'react-input-mask';
import MaterialInput from '@material-ui/core/Input';
import { activateAuthLayout } from '../../../store/actions';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';

class FormMask extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.activateAuthLayout();
    }


    render() {
        const ISBN1 = (props) => (
            <InputMask mask="999-99-999-9999-99-9" value={props.value} className="form-control" onChange={props.onChange}>
                {(inputProps) => <MaterialInput {...inputProps} type="tel" disableUnderline />}
            </InputMask>
        );

        const ISBN2 = (props) => (
            <InputMask mask="999 99 999 9999 99 9" value={props.value} className="form-control" onChange={props.onChange}>
                {(inputProps) => <MaterialInput {...inputProps} type="tel" disableUnderline />}
            </InputMask>
        );

        const ISBN3 = (props) => (
            <InputMask mask="999/99/999/9999/99/9" value={props.value} className="form-control" onChange={props.onChange}>
                {(inputProps) => <MaterialInput {...inputProps} type="tel" disableUnderline />}
            </InputMask>
        );

        const IPV4 = (props) => (
            <InputMask mask="999.999.999.999" value={props.value} className="form-control" onChange={props.onChange}>
                {(inputProps) => <MaterialInput {...inputProps} type="tel" disableUnderline />}
            </InputMask>
        );

        const IPV6 = (props) => (
            <InputMask mask="****:****:****:*:***:****:****:****" value={props.value} className="form-control" onChange={props.onChange}>
                {(inputProps) => <MaterialInput {...inputProps} disableUnderline />}
            </InputMask>
        );

        const TAX = (props) => (
            <InputMask mask="99-9999999" value={props.value} className="form-control" onChange={props.onChange}>
                {(inputProps) => <MaterialInput {...inputProps} type="tel" disableUnderline />}
            </InputMask>
        );

        const Phone = (props) => (
            <InputMask mask="(999) 999-9999" value={props.value} className="form-control" onChange={props.onChange}>
                {(inputProps) => <MaterialInput {...inputProps} type="tel" disableUnderline />}
            </InputMask>
        );

        const Currency = (props) => (
            <InputMask mask="$ 999,999,999.99" value={props.value} className="form-control" onChange={props.onChange}>
                {(inputProps) => <MaterialInput {...inputProps} prefix='$' type="tel" disableUnderline />}
            </InputMask>
        );

        const Date1 = (props) => (
            <InputMask mask="99/99/9999" value={props.value} className="form-control" onChange={props.onChange}>
                {(inputProps) => <MaterialInput {...inputProps} type="tel" disableUnderline />}
            </InputMask>
        );

        const Date2 = (props) => (
            <InputMask mask="99-99-9999" value={props.value} className="form-control" onChange={props.onChange}>
                {(inputProps) => <MaterialInput {...inputProps} type="tel" disableUnderline />}
            </InputMask>
        );

        return (
            <React.Fragment>


                <div className="content">
                    <div className="container-fluid">
                        <div className="page-title-box">
                            <Row className="align-items-center">
                                <Col sm="6">
                                    <h4 className="page-title">Form Mask</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Forms</Link></li>
                                        <li className="breadcrumb-item active">Form Mask</li>
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

                                        <h4 className="mt-0 header-title">Input Masks</h4>
                                        <p className="text-muted mb-4">Input masks can be used to force the
                                            user to enter data conform a specific format. Unlike validation, the
                                            user can't enter any other key than the ones specified by the mask.
                                        </p>

                                        <Row>
                                            <Col md="6">
                                                <div>
                                                    <form action="#">
                                                        <div className="form-group">
                                                            <label>ISBN 1</label>
                                                            <ISBN1 />
                                                            <span className="font-13 text-muted">e.g "999-99-999-9999-9"</span>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>ISBN 2</label>
                                                            <ISBN2 />
                                                            <span className="font-13 text-muted">999 99 999 9999 9</span>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>ISBN 3</label>
                                                            <ISBN3 />
                                                            <span className="font-13 text-muted">999/99/999/9999/9</span>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>IPV4</label>
                                                            <IPV4 />
                                                            <span className="font-13 text-muted">192.168.110.310</span>
                                                        </div>
                                                        <div className="form-group mb-0">
                                                            <label>IPV6</label>
                                                            <IPV6 />
                                                            <span className="font-13 text-muted">4deg:1340:6547:2:540:h8je:ve73:98pd</span>
                                                        </div>
                                                    </form>
                                                </div>
                                            </Col>

                                            <Col md="6">
                                                <div className="mt-4 mt-md-0">
                                                    <form action="#">
                                                        <div className="form-group">
                                                            <label>Tax ID</label>
                                                            <TAX />
                                                            <span className="font-13 text-muted">99-9999999</span>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Phone</label>
                                                            <Phone />
                                                            <span className="font-13 text-muted">(999) 999-9999</span>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Currency</label>
                                                            <Currency />
                                                            <span className="font-13 text-muted">$ 999,999,999.99</span>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Date</label>
                                                            <Date1 />
                                                            <span className="font-13 text-muted">dd/mm/yyyy</span>
                                                        </div>
                                                        <div className="form-group mb-0">
                                                            <label>Date 2</label>
                                                            <Date2 />
                                                            <span className="font-13 text-muted">dd-mm-yyyy</span>
                                                        </div>
                                                    </form>
                                                </div>
                                            </Col>
                                        </Row>
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

export default connect(null, { activateAuthLayout })(FormMask);


