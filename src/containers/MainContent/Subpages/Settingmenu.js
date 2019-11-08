import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class SettingMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <React.Fragment>
                <Dropdown isOpen={this.state.setting_menu} toggle={() => this.setState({ setting_menu: !this.state.setting_menu })}>
                    <DropdownToggle color="primary" className="arrow-none waves-effect waves-light">
                        <i className="mdi mdi-settings mr-2"></i>Week
                                        </DropdownToggle>
                    <DropdownMenu className="language-switch" right>
                        <DropdownItem tag="a" href="#">Previous Week</DropdownItem>
                        <DropdownItem tag="a" href="#">Month</DropdownItem>
                        <div className="dropdown-divider"></div>
                        <DropdownItem tag="a" href="#">Year</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </React.Fragment>

        );
    }
}

export default SettingMenu;


