
import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// falgs
import usFlag from '../../../images/flags/us_flag.jpg';
import germanyFlag from '../../../images/flags/germany_flag.jpg';
import italyFlag from '../../../images/flags/italy_flag.jpg';
import frenchFlag from '../../../images/flags/french_flag.jpg';
import spainFlag from '../../../images/flags/spain_flag.jpg';
import russiaFlag from '../../../images/flags/russia_flag.jpg';

class LanguageMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: false,
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            menu: !prevState.menu
        }));
    }
    render() {

        return (
            <React.Fragment>
               <Dropdown isOpen={this.state.menu} toggle={this.toggle} className="notification-list list-inline-item d-none  d-md-inline-block mr-1" tag="li">
                     <DropdownToggle className="nav-link dropdown-toggle arrow-none" style={{ color:"#FFFFFF" }} tag="a">
                        <img alt="Veltrix" src={usFlag} className="mr-2" height="12" /> English  <span className="mdi mdi-chevron-down"></span>
                    </DropdownToggle>
                    <DropdownMenu className="language-switch" right>
                        <DropdownItem tag="a" href="#"><img alt="Veltrix" src={germanyFlag} height="16" /><span> German </span></DropdownItem>
                        <DropdownItem tag="a" href="#"><img alt="Veltrix" src={italyFlag} height="16" /><span> Italian </span></DropdownItem>
                        <DropdownItem tag="a" href="#"><img alt="Veltrix" src={frenchFlag} height="16" /><span> French </span></DropdownItem>
                        <DropdownItem tag="a" href="#"><img alt="Veltrix" src={spainFlag} height="16" /><span> Spanish </span></DropdownItem>
                        <DropdownItem tag="a" href="#"><img alt="Veltrix" src={russiaFlag} height="16" /><span> Russian </span></DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </React.Fragment>
        );
    }
}


export default LanguageMenu;
