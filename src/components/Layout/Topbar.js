import React, { Component } from 'react';
// import LanguageMenu from './Menus/languageMenu';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
import NotificationMenu from './Menus/notificationMenu';
import ProfileMenu from './Menus/profileMenu';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import { toggleSidebar  } from '../../store/actions';
import HecoLogo from '../../images/heco-logo-white.png';

// import { getLoggedInUser } from '../../helpers/authUtils';

class Topbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            create_menu: false,
            istoggle : false
        };
        this.toggleCreate = this.toggleCreate.bind(this);
    }
    toggleCreate() {
        this.setState(prevState => ({
            create_menu: !prevState.create_menu
        }));
    }

    sidebarToggle = () =>{
        document.body.classList.toggle('enlarged');
        this.props.toggleSidebar(!this.props.is_toggle);
     }

    
    toggleFullscreen() {
        if (!document.fullscreenElement && /* alternative standard method */ !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="topbar">
                    <div className="topbar-left">
                        <Link to="/" className="logo">
                            <span className="logo-light">
                                <img width='200px' className="full-heco-logo" src={HecoLogo} alt=""/>
                            </span>
                            {/*<span className="logo-sm">*/}
                            {/*    <img src={logoSmall} alt="" height="22" />*/}
                            {/*</span>*/}
                        </Link>
                    </div>

                    <nav className="navbar-custom">
                        <ul className="navbar-right list-inline float-right mb-0">

                            {/*<LanguageMenu />*/}

                            <li className="dropdown notification-list list-inline-item d-none d-md-inline-block mr-1">
                                <Link onClick={this.toggleFullscreen} className="nav-link waves-effect" to="#" id="btn-fullscreen">
                                    <i className="ion ion-md-qr-scanner noti-icon"></i>
                                </Link>
                            </li>

                        </ul>

                        <ul className="list-inline menu-left mb-0">
                            <li className="float-left">
                                {/*<button onClick={ this.sidebarToggle }   className="button-menu-mobile open-left waves-effect">*/}
                                {/*    <i className="mdi mdi-menu"></i>*/}
                                {/*</button>*/}
                            </li>
                        </ul>
                    </nav>
                </div>
            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => {
    const { is_toggle,is_light } = state.Layout;
    return {  is_toggle,is_light };
}

export default withRouter(connect(mapStatetoProps, { toggleSidebar })(Topbar));















