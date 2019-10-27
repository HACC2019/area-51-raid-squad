import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import logolight from '../../../images/logo-light.png';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';


class EmailTemplateBasic extends Component {

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
                                    <h4 className="page-title">Basic Email</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Email Templates</Link></li>
                                        <li className="breadcrumb-item active">Basic Email</li>
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
                                <table className="body-wrap" style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontSize: "14px", width: "100%", backgroundColor: "#2e3235", margin: "0", boxSizing: "border-box" }} bgcolor="#2e3235">
                                    <tr style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0" }}>
                                        <td style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", verticalAlign: "top", margin: "0" }} valign="top"></td>
                                        <td className="container" width="600" style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", verticalAlign: "top", display: "block !important", maxWidth: "600px !important", clear: "both !important", margin: "0 auto" }} valign="top">
                                            <div className="content" style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", display: "block", maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
                                                <table className="main" width="100%" cellPadding="0" cellSpacing="0" itemProp="action" itemScope itemType="http://schema.org/ConfirmAction" style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", borderRadius: "3px", margin: "0", border: "none" }}>
                                                    <tr style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0" }}>
                                                        <td className="content-wrap" style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", verticalAlign: "top", margin: "0", padding: "30px", boxShadow: "0px 0px 13px 0px rgba(36, 36, 41, 0.07)", borderRadius: "7px", backgroundColor: "#383c40" }} valign="top">
                                                            <meta itemProp="name" content="Confirm Email" style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0" }} />
                                                            <table width="100%" cellPadding="0" cellSpacing="0" style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0" }}>
                                                                <tr style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0" }}>
                                                                    <td className="content-block" style={{ textAlign: "center", fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", verticalAlign: "top", margin: "0", padding: "0 0 20px" }} valign="top">
                                                                        <img src={logolight} alt="" height="18" className="mb-4" />
                                                                    </td>
                                                                </tr>
                                                                <tr style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0" }}>
                                                                    <td className="content-block" style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", verticalAlign: "top", margin: "0", padding: "0 0 20px" }} valign="top">
                                                                        Please confirm your email address by clicking the link below.
                                                                    </td>
                                                                </tr>
                                                                <tr style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0" }}>
                                                                    <td className="content-block" style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", verticalAlign: "top", margin: "0", padding: "0 0 20px" }} valign="top">
                                                                        We may need to send you critical information about our service and it is important that we have an accurate email address.
                                                                    </td>
                                                                </tr>
                                                                <tr style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0" }}>
                                                                    <td className="content-block" itemProp="handler" itemScope itemType="http://schema.org/HttpActionHandler" style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", verticalAlign: "top", margin: "0", padding: "0 0 20px" }} valign="top">
                                                                        <Link to="#" className="btn-primary" itemProp="url" style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", color: "#FFF", textDecoration: "none", lineHeight: "2em", fontWeight: "bold", textAlign: "center", cursor: "pointer", display: "inline-block", borderRadius: "5px", textTransform: "capitalize", backgroundColor: "#e74c5e", margin: "0", borderColor: "#e74c5e", borderStyle: "solid", borderWidth: "8px 16px" }}>Confirm
                                                                            email address</Link>
                                                                    </td>
                                                                </tr>
                                                                <tr style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0" }}>
                                                                    <td className="content-block" style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", verticalAlign: "top", margin: "0", padding: "0 0 20px" }} valign="top">
                                                                        <b>Veltrix</b>
                                                                        <p>Support Team</p>
                                                                    </td>
                                                                </tr>

                                                                <tr style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0" }}>
                                                                    <td className="content-block" style={{ textAlign: "center", fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", verticalAlign: "top", margin: "0", padding: "0" }} valign="top">
                                                                        © {new Date().getFullYear()}  Veltrix
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


export default connect(null, { activateAuthLayout })(EmailTemplateBasic);
