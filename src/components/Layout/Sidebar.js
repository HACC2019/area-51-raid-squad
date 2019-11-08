import React, { Component } from 'react';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import MetisMenu from 'metismenujs';
import { connect } from 'react-redux';
import { toggleSidebar  } from '../../store/actions';

const SideNav = () => { return <div id="sidebar-menu">
                <ul className="metismenu" id="side-menu">
                            <li className="menu-title">Overview</li>
                            <li>
                                <Link to="/dashboard" className="waves-effect">
                                    <i className="ion ion-md-speedometer"></i><span className="badge badge-success badge-pill float-right">2</span> <span> Dashboard </span>
                                </Link>
                            </li>

                            {/* <li className="menu-title">Apps</li>
                            <li>
                                <Link to="/#" className="waves-effect"><i className="ion ion-md-mail"></i><span> Email <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
                                <ul className="submenu">
                                    <li><Link to="email-inbox">Inbox</Link></li>
                                    <li><Link to="email-read">Email Read</Link></li>
                                    <li><Link to="email-compose">Email Compose</Link></li>
                                </ul>
                            </li> */}

                            <li>
                                <Link to="calendar" className="waves-effect"><i className="ion ion-md-calendar"></i><span> Calendar </span></Link>
                            </li>

                            <li>
                                <Link to="/#" className="waves-effect waves-light"><i className="ion ion-md-cart"></i><span> Ecommerce <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
                                <ul className="submenu">
                                    <li><Link to="ecommerce-products">Products</Link></li>
                                    <li><Link to="ecommerce-products-list">Products List</Link></li>
                                    <li><Link to="ecommerce-order-history">Order History</Link></li>
                                    <li><Link to="ecommerce-customers">Customers</Link></li>
                                    <li><Link to="ecommerce-product-edit">Product Edit</Link></li>
                                </ul>
                            </li>

                            <li>
                                <Link to="charger_status" className="waves-effect waves-light"><i className="ion ion-md-clipboard"></i><span> Charger Status </span></Link>
                            </li>

                            {/* <li className="menu-title">Pages</li>

                            <li>
                                <Link to="/#" className="waves-effect"><i className="ion ion-md-wifi"></i><span> Authentication <span className="badge badge-pill badge-light float-right">New</span> </span></Link>
                                <ul className="submenu">
                                    <li><Link to="pages-login-2">Login Two</Link></li>
                                    <li><Link to="pages-register-2">Register Two</Link></li>
                                    <li><Link to="pages-recoverpw-2">Recover Password Two</Link></li>
                                    <li><Link to="pages-lock-screen-2">Lock Screen Two</Link></li>
                                </ul>
                            </li>

                            <li>
                                <Link to="/#" className="waves-effect"><i className="ion ion-md-copy"></i><span> Extra Pages <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
                                <ul className="submenu">
                                    <li><Link to="pages-blank">Blank Page</Link></li>
                                    <li><Link to="pages-timeline">Timeline</Link></li>
                                    <li><Link to="pages-invoice">Invoice</Link></li>
                                    <li><Link to="pages-pricing">Pricing</Link></li>
                                    <li><Link to="pages-maintenance">Maintenance</Link></li>
                                    <li><Link to="pages-faq">Faq</Link></li>
                                    <li><Link to="pages-404">Error 404</Link></li>
                                    <li><Link to="pages-500">Error 500</Link></li>
                                </ul>
                            </li>

                            <li>
                                <Link to="/#" className="waves-effect"><i className="ion ion-md-paper-plane"></i><span> Email Templates <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
                                <ul className="submenu">
                                    <li><Link to="email-template-basic">Basic Action Email</Link></li>
                                    <li><Link to="email-template-alert">Alert Email</Link></li>
                                    <li><Link to="email-template-billing">Billing Email</Link></li>
                                </ul>
                            </li> */}

                            <li className="menu-title">Layouts</li>

                            <li>
                                <Link to="layout-light-sidebar" className="waves-effect">
                                    <i className="ion ion-md-options"></i><span> Light Sidebar </span>
                                </Link>
                            </li>

                            <li>
                                <Link to="layout-collapsed-sidebar" className="waves-effect">
                                    <i className="ion ion-md-switch"></i><span> Collapsed Sidebar </span>
                                </Link>
                            </li>

                            <li className="menu-title">Components</li>

                            <li>
                                <Link to="/#" className="waves-effect"><i className="ion ion-md-infinite"></i> <span> UI Elements <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span> </Link>
                                <ul className="submenu">
                                    <li><Link to="ui-alerts">Alerts</Link></li>
                                    <li><Link to="ui-buttons">Buttons</Link></li>
                                    <li><Link to="ui-cards">Cards</Link></li>
                                    <li><Link to="ui-carousel">Carousel</Link></li>
                                    <li><Link to="ui-general">General UI</Link></li>
                                    <li><Link to="ui-grid">Grid</Link></li>
                                    <li><Link to="ui-images">Images</Link></li>
                                    <li><Link to="ui-lightbox">Lightbox</Link></li>
                                    <li><Link to="ui-modals">Modals</Link></li>
                                    <li><Link to="ui-rangeslider">Range Slider</Link></li>
                                    <li><Link to="ui-sweet-alert">Sweet-Alert</Link></li>
                                    <li><Link to="ui-tabs-accordions">Tabs & Accordions</Link></li>
                                    <li><Link to="ui-typography">Typography</Link></li>
                                </ul>
                            </li>
                            
                            <li>
                                <Link to="/#" className="waves-effect"><i className="ion ion-md-paper"></i><span> Forms <span className="badge badge-pill badge-info float-right">8</span> </span></Link>
                                <ul className="submenu">
                                    <li><Link to="form-elements">Form Elements</Link></li>
                                    <li><Link to="form-validation">Form Validation</Link></li>
                                    <li><Link to="form-advanced">Form Advanced</Link></li>
                                    <li><Link to="form-editors">Form Editors</Link></li>
                                    <li><Link to="form-uploads">Form File Upload</Link></li>
                                    <li><Link to="form-xeditable">Form Xeditable</Link></li>
                                    <li><Link to="form-wizard">Form Wizard</Link></li>
                                    <li><Link to="form-mask">Form Mask</Link></li>
                                </ul>
                            </li>

                            <li>
                                <Link to="/#" className="waves-effect"><i className="ion ion-md-pulse"></i><span> Charts <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
                                <ul className="submenu">
                                    <li><Link to="charts-apex">Apex Chart</Link></li>
                                    <li><Link to="charts-echart">E - Chart</Link></li>
                                    <li><Link to="charts-chartist">Chartist Chart</Link></li>
                                    <li><Link to="charts-chartjs">Chartjs Chart</Link></li>
                                    <li><Link to="charts-knob"> Knob Chart</Link></li>
                                    <li><Link to="charts-sparkline">Sparkline Chart</Link></li>
                                </ul>
                            </li>

                            <li>
                                <Link to="/#" className="waves-effect"><i className="ion ion-md-list"></i><span> Tables <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
                                <ul className="submenu">
                                    <li><Link to="tables-basic">Basic Tables</Link></li>
                                    <li><Link to="tables-datatable">Data Table</Link></li>
                                    <li><Link to="tables-responsive">Responsive Table</Link></li>
                                    <li><Link to="tables-editable">Editable Table</Link></li>
                                </ul>
                            </li>

                            <li>
                                <Link to="/#" className="waves-effect"><i className="ion ion-md-bonfire"></i> <span> Icons  <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span></span> </Link>
                                <ul className="submenu">
                                    <li><Link to="icons-material">Material Design</Link></li>
                                    <li><Link to="icons-fontawesome">Font Awesome</Link></li>
                                    <li><Link to="icons-ion">Ion Icons</Link></li>
                                    <li><Link to="icons-themify">Themify Icons</Link></li>
                                    <li><Link to="icons-dripicons">Dripicons</Link></li>
                                </ul>
                            </li>

                            <li>
                                <Link to="/#" className="waves-effect"><i className="ion ion-md-pin"></i><span> Maps <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
                                <ul className="submenu">
                                    <li><Link to="maps-google"> Google Map</Link></li>
                                    <li><Link to="maps-vector"> Vector Map</Link></li>
                                </ul>
                            </li>
                            
                            <li>
                                <Link to="/#" className="waves-effect"><i className="ion ion-md-funnel"></i><span> Multi Level <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
                                <ul className="submenu">
                                    <li><Link to="/#"  onClick={(e) => e.preventDefault() }> Menu 1</Link></li>
                                    <li>
                                        <Link to="/#">Menu 2  <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span></Link>
                                        <ul className="submenu">
                                            <li><Link to="/#" onClick={(e) => e.preventDefault() }>Menu 2.1</Link></li>
                                            <li><Link to="/#"  onClick={(e) => e.preventDefault() }>Menu 2.1</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
    </div>
}

class Sidebar extends Component {

    componentDidMount() {
       new MetisMenu("#side-menu");
       
        var matchingMenuItem = null;
        var ul = document.getElementById("side-menu");
        var items = ul.getElementsByTagName("a");
        for (var i = 0; i < items.length; ++i) {
            if (this.props.location.pathname === items[i].pathname) {
                matchingMenuItem = items[i];
                break;
            }
        }
        if (matchingMenuItem) {
            this.activateParentDropdown(matchingMenuItem);
        }
    }

    activateParentDropdown = (item) => {

        item.classList.add('mm-active');
        const parent = item.parentElement;

        if (parent) {
            parent.classList.add('mm-active'); // li 
            const parent2 = parent.parentElement;

            if (parent2) {
                parent2.classList.add("mm-show");
              
                const parent3 = parent2.parentElement;

                if (parent3) {
                    parent3.classList.add('mm-active'); // li
                    parent3.childNodes[0].classList.add('mm-active'); //a
                    const parent4 = parent3.parentElement;
                    if (parent4) {
                        parent4.classList.add('mm-active');
                    }
                }
            }
            return false;
        }
        return false;
    }

    render() {
        return (
            <React.Fragment>
                <div className="left side-menu">
                    {this.props.is_toggle ? 
                        <PerfectScrollbar>
                             <SideNav />
                        </PerfectScrollbar>
                        :
                        <SideNav />
                        }
                    <div className="clearfix"></div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => {
    const { is_toggle } = state.Layout;
    return {  is_toggle };
}

export default withRouter(connect(mapStatetoProps, { toggleSidebar })(Sidebar));












