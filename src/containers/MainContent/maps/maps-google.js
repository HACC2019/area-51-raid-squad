import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Link } from 'react-router-dom';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';
import LightData from './LightData';
import Firebase from 'firebase';
import * as Bootstrap from 'react-bootstrap';
import { css } from '@emotion/core';
// First way to import
import { ClipLoader } from 'react-spinners';
// Another way to import. This is recommended to reduce bundle size
import ClipLoader from 'react-spinners/ClipLoader';


let Site_Power_query = Firebase.database().ref("Site_Power").orderByChild("island");

const LoadingContainer = (props) => (
    <div>Loading...</div>
)

class Mapsgoogle extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);

        this.state = {
            chargers: [],
            chargerUsage: 0,
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        }
    }

    componentDidMount() {
        this._isMounted = true;
        this.props.activateAuthLayout();

        Site_Power_query.on('value', snapshot => {
            if (this._isMounted) {
                let chargersTemp = []

                snapshot.forEach(function(childSnapshot) {
                    chargersTemp.push(childSnapshot.val());
                })

                this.setState({chargers: chargersTemp})
            }
        });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    onMarkerClick(props, marker, e) {
        alert('You clicked in this marker');
    }

    render() {

        // const locations = this.state.chargers.map(charger =>
        //     <Marker
        //         name={charger.name}
        //         title={"what does this do"}
        //         position={{lat: 20.266}, {lng: -156.27}}
        //     />
        // )

        // console.log(locations);

        return (
            <React.Fragment>
                <div className="content">
                    <div className="container-fluid">
                        <Map google={this.props.google} zoom={8}
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                }}
                                                initialCenter={{
                                                    lat: 20.2666,
                                                    lng: -156.27
                                                }}>

                                                {this.state.chargers.map(charger =>
                                                    <Marker
                                                    name={'Dolores park'}
                                                    position={{lat: charger.lat, lng: charger.lng}} />
                                                )}

                                                <InfoWindow>
                                                    <div>
                                                        <h1>{this.state.selectedPlace.name}</h1>
                                                    </div>
                                                </InfoWindow>
                        </Map>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default connect(null, { activateAuthLayout })(GoogleApiWrapper({
    apiKey: "AIzaSyDAyU96p2SuAik_SvA8nd1C1D1-M4EtiCM",
    LoadingContainer: LoadingContainer,
    v: "3"
})(Mapsgoogle));



