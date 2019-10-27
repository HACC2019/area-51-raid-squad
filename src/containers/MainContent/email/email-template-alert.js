import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';

class EmailTemplateAlert extends Component {

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
                                    <h4 className="page-title">Alert Email</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Email Templates</Link></li>
                                        <li className="breadcrumb-item active">Alert Email</li>
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
                                <table className="body-wrap" style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontSize: "14px", width: "100%", backgroundColor: "#2e3235", margin: "0", boxSizing: "border-box" }} bgcolor="#f3f3f3">
                                    <tr style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0" }}>
                                        <td style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", verticalAlign: "top", margin: "0" }} valign="top"></td>
                                        <td className="container" width="600" style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", verticalAlign: "top", display: "block !important", maxWidth: "600px !important", clear: "both !important", margin: "0 auto" }} valign="top">
                                            <div className="content" style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", display: "block", maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
                                                <table className="main" width="100%" cellPadding="0" cellSpacing="0" style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", borderRadius: "3px", backgroundColor: "#383c40", margin: "0" }} bgcolor="#fff">
                                                    <tr style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0" }}>
                                                        <td className="alert alert-warning" style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "16px", verticalAlign: "top", color: "#fff", fontWeight: "500", textAlign: "center", borderRadius: "3px 3px 0 0", backgroundColor: "#4090cb", margin: "0", padding: "20px" }} align="center" bgcolor="#71b6f9" valign="top">
                                                            Warning: You're approaching your limit. Please upgrade.
                                                        </td>
                                                    </tr>
                                                    <tr style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0" }}>
                                                        <td className="content-wrap" style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", verticalAlign: "top", margin: "0", padding: "20px" }} valign="top">
                                                            <table width="100%" cellPadding="0" cellSpacing="0" style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0" }}>
                                                                <tr style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0" }}>
                                                                    <td className="content-block" style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0", padding: "0 0 20px" }} valign="top">
                                                                        You have <strong style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0" }}><span style={{ backgroundColor: "#47bd9a", color: "#ffffff", padding: "5px 8px", fontSize: "12px", borderRadius: "4px" }}>1
                                                                                    free report</span></strong> remaining.
                                                                    </td>
                                                                </tr>
                                                                <tr style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0" }}>
                                                                    <td className="content-block" style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0", padding: "0 0 25px" }} valign="top">
                                                                        Add your credit card now to upgrade your account to a premium plan to ensure you don't miss out on any reports.
                                                                    </td>
                                                                </tr>
                                                                <tr style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0" }}>
                                                                    <td className="content-block" style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0", padding: "0 0 25px" }} valign="top">
                                                                        <Link to="#" className="btn-primary" style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", color: "#FFF", textDecoration: "none", lineHeight: "2em", fontWeight: "bold", textAlign: "center", cursor: "pointer", display: "inline-block", borderRadius: "5px", textTransform: "capitalize", backgroundColor: "#e74c5e", margin: "0", borderColor: "#e74c5e", borderStyle: "solid", borderWidth: "8px 16px" }}>Upgrade
                                                                            my account</Link>
                                                                    </td>
                                                                </tr>
                                                                <tr style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0" }}>
                                                                    <td className="content-block" style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0", padding: "0 0 25px" }} valign="top">
                                                                        Thanks for choosing <b>Veltrix</b> Admin.
                                                                    </td>
                                                                </tr>
                                                                <tr style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0" }}>
                                                                    <td className="content-block" style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0" }} valign="top">
                                                                        <b>Veltrix</b>
                                                                        <p>Support Team</p>
                                                                    </td>
                                                                </tr>

                                                                <tr style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0" }}>
                                                                    <td className="content-block" style={{ textAlign: "center", fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", verticalAlign: "top", margin: "0", padding: "0" }} valign="top">
                                                                        ©  {new Date().getFullYear()}  Veltrix
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </Col>
                        </Row>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default connect(null, { activateAuthLayout })(EmailTemplateAlert);
