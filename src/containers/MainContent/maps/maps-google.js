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
// Another way to import. This is recommended to reduce bundle size
import PropagateLoader from 'react-spinners/PropagateLoader';


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
            selectedPlace: {},
            loading: true
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

    sneak() {
        this.state.loading = false;

        return <span/>
    }

    onMarkerClick = (props, marker, e) =>
        this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
    });

    render() {

        return (
            <React.Fragment>
                <div className="content" style={{padding: 0}}>
                    <div className="container-fluid">
                        <PropagateLoader
                        css={"position: absolute; z-index: 1; left: 50%; top: 45%; transform: translate(-50%, -50%); border-color: black"}
                        sizeUnit={"px"}
                        size={20}
                        color={'#553c8b'}
                        loading={this.state.loading}
                        />
                        <div id="mapmap">
                            <Map google={this.props.google} zoom={8}
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",
                                                        backgroundColor: 'rgba(105,105,105,0.25)'
                                                    }}
                                                    initialCenter={{
                                                        lat: 20.2666,
                                                        lng: -156.27
                                                    }}>

                                                    {this.state.chargers.map(charger =>
                                                        <Marker
                                                        name={charger.name}
                                                        position={{lat: charger.lat, lng: charger.lng}}
                                                        onClick={this.onMarkerClick} />
                                                    )}

                                                    {this.sneak()}

                                                    <InfoWindow
                                                        marker={this.state.activeMarker}
                                                        visible={this.state.showingInfoWindow}>
                                                            <div>
                                                            <h1>{this.state.selectedPlace.name}</h1>
                                                            </div>
                                                    </InfoWindow>
                            </Map>
                        f</div>
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



