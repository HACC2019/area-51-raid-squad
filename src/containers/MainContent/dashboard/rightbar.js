import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { VectorMap } from 'react-jvectormap';
import user1 from "../../../images/users/user-1.jpg";
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
            <div className="slimscroll-menu">
                <div className="px-4 pt-4">
                    <div className="card user-wid text-center overflow-hidden">
                        <div className="p-4 bg-lighten-danger"></div>
                        <div className="mx-3">
                            <div className="bg-white user-wid-content p-1 rounded">
                                <div className="user-img">
                                    <img src={user1} alt="user-img" title="" className="rounded-circle thumb-md img-fluid" />
                                </div>
                                <h5 className="font-14 mb-1"><Link to="#">James Heine</Link> </h5>
                                <p className="text-muted mb-2"><small>Admin Head</small></p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <h5 className="font-14">Calender</h5>
                        <div className="dashboard-date-pick" id="date-pick-widget" data-provide="datepicker-inline">
                        <DatePicker
                                inline
                                selected={this.state.startDate}
                                onChange={this.handleDate}
                           />
                        </div>
                    </div>

                    <div>
                        <h5 className="font-14">Clients</h5>

                        <div className="dashboard-map-wid">
                        <VectorMap map="world_mill"
                            backgroundColor="transparent"
                            normalizeFunction = "polynomial"
                            ref="map"
                            containerStyle={{
                              width: '100%',
                              height: '100%'
                          }}
                          markerLabelStyle = {{
                            initial: {
                                r: 5,
                                'fill': '#e74c5e',
                                'fill-opacity': 0.9,
                                'stroke': '#fff',
                                'stroke-width' : 4,
                                'stroke-opacity': 0.4
                            },
                            hover: {
                                'stroke': '#fff',
                                'fill-opacity': 1,
                                'stroke-width': 2,
                            }
                          }}
                          series = {{
                            markers: [
                                {
                                    latLng : [61.52, 105.31],
                                    name : 'Russia'
                                }, {
                                    latLng : [-25.27, 133.77],
                                    name : 'Australia'
                                },  {
                                    latLng : [20.59, 78.96],
                                    name : 'India'
                                }, {
                                    latLng : [39.52, -87.12],
                                    name : 'Brazil'
                                }
                              ],
                            regions: [{
                                values: {
                                    "US": 'rgba(64, 144, 203, 0.3)',
                                    "AU": 'rgba(64, 144, 203, 0.3)',
                                    "IN": 'rgba(64, 144, 203, 0.3)',
                                    "RU": 'rgba(64, 144, 203, 0.3)',
                                },
                                attribute: 'fill',
                            }]
                          }}
                            regionStyle={{
                                initial: {
                                  fill: "#f2f2f2",
                                  stroke: "none",
                                  "stroke-width": 0,
                                  "stroke-opacity": 0
                                },
                                hover: {
                                  "fill-opacity": 0.8,
                                  cursor: 'pointer'
                                },
                                selected: {
                                  fill: '#2938bc'  //what colour clicked country will be
                                },
                                selectedHover: {
                                },
                              }}
                            containerClassName="map"         
                  />
                        </div>

                        

                    </div>

                </div>
            </div>
        </div>

            </React.Fragment>
        );
    }
}


export default Rightbar;








