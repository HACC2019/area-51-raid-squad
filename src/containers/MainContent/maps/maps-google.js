import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Link } from 'react-router-dom';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';
import LightData from './LightData';

const LoadingContainer = (props) => (
    <div>Loading...</div>
)

class Mapsgoogle extends Component {

    constructor(props) {
        super(props);
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        };
    }

    componentDidMount() {
        this.props.activateAuthLayout();
    }

    onMarkerClick(props, marker, e) {
        alert('You clicked in this marker');
    }

    

    render() {

        return (
            <React.Fragment>

                <div className="content">
                    <div className="container-fluid">
                        <div className="page-title-box">
                            <Row className="align-items-center">
                                <Col sm="6">
                                    <h4 className="page-title">Google Map</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Maps</Link></li>
                                        <li className="breadcrumb-item active">Google Map</li>
                                    </ol>
                                </Col>
                                <Col sm="6">
                                    <div className="float-right d-none d-md-block">
                                        <Settingmenu />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <Row>
                            <Col lg="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title">Basic</h4>
                                        <p className="text-muted mb-4">Example of google maps.</p>
                                        <div id="gmaps-markers" className="gmaps">
                                            <Map google={this.props.google} zoom={14}
                                                style={{
                                                    minWwidth: "50%",
                                                    height: 300,
                                                    width: 750
                                                }}
                                            >
                                                <InfoWindow>
                                                    <div>
                                                        <h1>{this.state.selectedPlace.name}</h1>
                                                    </div>
                                                </InfoWindow>
                                            </Map>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title">Markers</h4>
                                        <p className="text-muted mb-4">Example of google maps.</p>
                                        <div id="gmaps-overlay" className="gmaps">
                                            <Map google={this.props.google}
                                                style={{ height: 300, width: 750, position: 'relative' }}
                                                zoom={14}>

                                                <Marker
                                                    title={'The marker`s title will appear as a tooltip.'}
                                                    name={'SOMA'}
                                                    position={{ lat: 37.778519, lng: -122.405640 }} />
                                                <Marker name={'Dolores park'} />
                                                <InfoWindow>
                                                    <div>
                                                        <h1>{this.state.selectedPlace.name}</h1>
                                                    </div>
                                                </InfoWindow>
                                            </Map>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title">Overlays</h4>
                                        <p className="text-muted mb-4">Example of google maps.</p>
                                        <div id="panorama" className="gmaps-panaroma">
                                            <Map google={this.props.google} zoom={14}
                                                style={{
                                                    minWwidth: "50%",
                                                    height: 300,
                                                    width: 750
                                                }}
                                                initialCenter={{
                                                    lat: 40.854885,
                                                    lng: -88.081807
                                                }}>

                                                <Marker onClick={this.onMarkerClick} />
                                                <InfoWindow>
                                                    <div>
                                                        <h1>{this.state.selectedPlace.name}</h1>
                                                    </div>
                                                </InfoWindow>
                                            </Map>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title">Ultra Light</h4>
                                        <p className="text-muted mb-4">Example of google maps.</p>
                                        <div className="gmaps">
                                                <Map google={this.props.google} zoom={14} styles={LightData.Data} style={{ height: 300, width: 730 }}>
                                                <Marker onClick={this.onMarkerClick} />
                                                <InfoWindow>
                                                    <div>
                                                    <h1>{this.state.selectedPlace.name}</h1>
                                                    </div>
                                                </InfoWindow>
                                                </Map>
                                             </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default connect(null, { activateAuthLayout })(GoogleApiWrapper({
    apiKey: "AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE",
    LoadingContainer: LoadingContainer,
    v: "3"
})(Mapsgoogle));



