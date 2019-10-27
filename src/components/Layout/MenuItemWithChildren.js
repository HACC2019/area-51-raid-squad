import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';

class MenuItemWithChildren extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const item = this.props.item || {};
        return (
            <React.Fragment>
                <li>
                    <Link to="" className="waves-effect waves-light" onClick={this.hideCollpase}>
                        {item.icon ? <i className={item.icon}></i> : null}
                        <span> {item.label ? item.label : null}{' '}
                            {item.badgeicon ? <span className={item.badgeicon}>{item.bagdevalue} </span> :
                                <span className="float-right menu-arrow">
                                    <i className="mdi mdi-chevron-right"></i>
                                </span>}
                        </span>
                    </Link>
                    <ul className="submenu collapse">
                        {item.children.map((child, i) => {
                            if (child.children) {
                                return <MenuItemWithChildren item={child} key={i} />
                            } else {
                                return <li key={i}> <MenuItem item={child} /></li>
                            }
                        })}
                    </ul>
                </li>
            </React.Fragment>
        );
    }
}

export default MenuItemWithChildren;
