import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { VectorMap } from 'react-jvectormap';
// import user1 from "../../../images/users/user-1.jpg";
import "./rightbar.css";

class Rightbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date()
        };

        // DatePicker
        this.handleDate = this.handleDate.bind(this);
    }

    handleDate = (date) => {
        this.setState({ startDate: date });
    };

    render() {
        return (
            <React.Fragment>
                 <div className="right-sidebar d-none d-xl-block">
            {/*<div className="slimscroll-menu">*/}
            {/*    <div className="px-4 pt-4">*/}
            {/*        <div className="card user-wid text-center overflow-hidden">*/}
            {/*            <div className="p-4 bg-lighten-danger"></div>*/}
            {/*            <div className="mx-3">*/}
            {/*                <div className="bg-white user-wid-content p-1 rounded">*/}
            {/*                    <div className="user-img">*/}
            {/*                        <img src={user1} alt="user-img" title="" className="rounded-circle thumb-md img-fluid" />*/}
            {/*                    </div>*/}
            {/*                    <h5 className="font-14 mb-1"><Link to="#">Username</Link> </h5>*/}
            {/*                    <p className="text-muted mb-2"><small>Admin Head</small></p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
                    <div className="mb-4">
                        <h5 className="font-14" id='cal'>Calender</h5>
                        <div className="dashboard-date-pick" id="date-pick-widget" data-provide="datepicker-inline">
                        <DatePicker
                                inline
                                selected={this.state.startDate}
                                onChange={this.handleDate}
                           />
                        </div>
                    </div>
                {/*</div>*/}
            </div>
        {/*</div>*/}

            </React.Fragment>
        );
    }
}


export default Rightbar;








