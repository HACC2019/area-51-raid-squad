import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MenuItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.MenuClick = this.MenuClick.bind(this);
  }
  
  MenuClick = (event) => {
    var width = window.innerWidth;
    if (width < 992) {
        document.body.classList.toggle('enlarged');
    }
}

  render() {
    const item = this.props.item || {};
    return (
      <React.Fragment>
       <Link to={item.url} onClick={this.MenuClick}>
            {item.icon && <i className={item.icon}></i>}
            {item.badgeicon && <span className={item.badgeicon}>{item.bagdevalue} </span>}
            <span>{' '}{item.label}</span>
        </Link>
      </React.Fragment>
    );
}
}

export default MenuItem;




