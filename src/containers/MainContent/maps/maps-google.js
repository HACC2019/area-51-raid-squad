// import React, { Component } from 'react';
// import { Row, Col, Card, CardBody } from 'reactstrap';
// import { Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import { Link } from 'react-router-dom';
// import { activateAuthLayout } from '../../../store/actions';
// import { connect } from 'react-redux';
// import Settingmenu from '../Subpages/Settingmenu';
// import LightData from './LightData';
// import Firebase from 'firebase';
//
// let query = Firebase.database().ref("Site_Power").orderByChild("island");
//
// const LoadingContainer = (props) => (
//     <div>Loading...</div>
// );
//
// class MapsGoogle extends Component {
//   _isMounted = false;
//
//   constructor(props) {
//     super(props);
//     this.onMarkerClick = this.onMarkerClick.bind(this);
//     this.state = {
//       showingInfoWindow: false,
//       activeMarker: {},
//       selectedPlace: {},
//       chargers: [{
//         "Dole_Plantation": {
//           "address": "64-1550 Kamehameha Hwy Wahiawa, HI 96786",
//           "charger_details": "Count: 1 | Port(s): 1 | Charging Level: 3",
//           "charging_standards": "CHAdeMO, CCS/SAE",
//           "cost": "per kWh rates: 49¢ (9am - 5pm), 57¢ (5pm - 10pm), 54¢ (10pm - 9am)",
//           "hours": "10 am - 5 pm",
//           "island": "Oahu",
//           "name": "Dole Plantation",
//           "payment_options": "Credit card or OpConnect Network",
//           "status": "Online"
//         },
//         "HECO_Hilo": {
//           "address": "1200 Kilauea Avenue Hilo, HI 96720",
//           "charger_details": "Count: 1 | Port(s): 1 | Charging Level: 3",
//           "charging_standards": "CHAdeMO, CCS/SAE",
//           "cost": "per kWh rates: 51¢ (9am - 5pm), 63¢ (5pm - 10pm), 61¢ (10pm - 9am)",
//           "hours": "24/7",
//           "island": "Hawaii",
//           "name": "Hawaii Electric Light Hilo Office",
//           "payment_options": "Credit card, Greenlots Network, or \"Nissan No Charge to Charge\"",
//           "status": "Online"
//         },
//         "HECO_Kona": {
//           "address": "74-5519 Kaiwi Street Kailua-Kona, HI 96740",
//           "charger_details": "Count: 1 | Port(s): 1 | Charging Level: 3",
//           "charging_standards": "CHAdeMO, CCS/SAE",
//           "cost": "per kWh rates: 51¢ (9am - 5pm), 63¢ (5pm - 10pm), 61¢ (10pm - 9am)",
//           "hours": "24/7",
//           "island": "Hawaii",
//           "name": "Hawaii Electric Light Kona Office",
//           "payment_options": "Credit card, Greenlots Network, or \"Nissan No Charge to Charge\"",
//           "status": "Online"
//         },
//         "HECO_Maui": {
//           "address": "210 W Kamehameha Avenue Kahului, HI 96732",
//           "charger_details": "Count: 1 | Port(s): 1 | Charging Level: 3",
//           "charging_standards": "CHAdeMO, CCS/SAE",
//           "cost": "per kWh rates: 49¢ (9am - 5pm), 62¢ (5pm - 10pm), 60¢ (10pm - 9am)",
//           "hours": "24/7",
//           "island": "Maui",
//           "name": "Maui Electric Company",
//           "payment_options": "Greenlots Network or \"Nissan No Charge to Charge\"",
//           "status": "Online"
//         },
//         "HECO_Ward": {
//           "address": "820 Ward Avenue Honolulu, HI 96814",
//           "charger_details": "Count: 2 | Port(s): 2 | Charging Level: 3",
//           "charging_standards": "CHAdeMO, CCS/SAE",
//           "cost": "per kWh rates: 49¢ (9am - 5pm), 57¢ (5pm - 10pm), 54¢ (10pm - 9am)",
//           "hours": "24/7",
//           "island": "Oahu",
//           "name": "Hawaiian Electric Ward Office",
//           "payment_options": "Credit Card, Greenlots Network, or \"Nissan No Charge to Charge\"",
//           "status": "Online"
//         },
//         "Haleiwa": {
//           "address": "66-145 Kamehameha Highway Haleiwa, HI 96712",
//           "charger_details": "Count: 1 | Port(s): 1 | Charging Level: 3",
//           "charging_standards": "CHAdeMO, CCS/SAE",
//           "cost": "per kWh rates: 49¢ (9am - 5pm), 57¢ (5pm - 10pm), 54¢ (10pm - 9am)",
//           "hours": "24/7",
//           "island": "Oahu",
//           "name": "Haleiwa Town Center",
//           "payment_options": "Greenlots Network, or \"Nissan No Charge to Charge\"",
//           "status": "Online"
//         },
//         "Hawaii_Kai": {
//           "address": "515 Pepeekeo St Honolulu, HI 96825",
//           "charger_details": "Count: 1 | Port(s): 1 | Charging Level: 3",
//           "charging_standards": "CHAdeMO, CCS/SAE",
//           "cost": "per kWh rates: 49¢ (9am - 5pm), 57¢ (5pm - 10pm), 54¢ (10pm - 9am)",
//           "hours": "24/7",
//           "island": "Oahu",
//           "name": "Hawaii Kai 7-Eleven",
//           "payment_options": "Credit Card or OpConnect Network",
//           "status": "Online"
//         },
//         "Iwilei_Costco": {
//           "address": "801 Dillingham Building Honolulu, HI 96817",
//           "charger_details": "Count: 1 | Port(s): 1 | Charging Level: 3",
//           "charging_standards": "CHAdeMO, CCS/SAE",
//           "cost": "per kWh rates: 49¢ (9am - 5pm), 57¢ (5pm - 10pm), 54¢ (10pm - 9am)",
//           "hours": "24/7",
//           "island": "Oahu",
//           "name": "Iwilei Costco Parking Lot",
//           "payment_options": "Credit Card or OpConnect Network",
//           "status": "Online"
//         },
//         "Kapolei_Commons": {
//           "address": "4470 Kapolei Parkway Kapolei, HI 96707",
//           "charger_details": "Count: 1 | Port(s): 1 | Charging Level: 3",
//           "charging_standards": "CHAdeMO",
//           "cost": "per kWh rates: 49¢ (9am - 5pm), 57¢ (5pm - 10pm), 54¢ (10pm - 9am)",
//           "hours": "24/7",
//           "island": "Oahu",
//           "name": "Kapolei Commons",
//           "payment_options": "Credit Card or Greenlots Network",
//           "status": "Offline"
//         },
//         "Kaunakakai": {
//           "address": "64 Ala Malama Street Kaunakakai, HI 96748",
//           "charger_details": "Count: 1 | Port(s): 1 | Charging Level: 3",
//           "charging_standards": "CHAdeMO, CCS/SAE",
//           "cost": "per kWh rates: 54¢ (9am - 5pm), 66¢ (5pm - 10pm), 64¢ (10pm - 9am)",
//           "hours": "24/7",
//           "island": "Maui",
//           "name": "Kaunakakai",
//           "payment_options": "Credit card or Greenlots Network",
//           "status": "Online"
//         },
//         "Koolau": {
//           "address": "47-388 Hui Iwa Street Kaneohe, HI 96744",
//           "charger_details": "Count: 1 | Port(s): 1 | Charging Level: 3",
//           "charging_standards": "CHAdeMO, CCS/SAE",
//           "cost": "per kWh rates: 49¢ (9am - 5pm), 57¢ (5pm - 10pm), 54¢ (10pm - 9am)",
//           "hours": "24/7",
//           "island": "Oahu",
//           "name": "Koolau Center",
//           "payment_options": "Credit Card or OpConnect Network",
//           "status": "Online"
//         },
//         "Mauna_Lani": {
//           "address": "68-1330 Mauna Lani Drive Kamuela, HI 96743",
//           "charger_details": "Count: 1 | Port(s): 1 | Charging Level: 3",
//           "charging_standards": "CHAdeMO, CCS/SAE",
//           "cost": "per kWh rates: 51¢ (9am - 5pm), 63¢ (5pm - 10pm), 61¢ (10pm - 9am)",
//           "hours": "24/7",
//           "island": "Hawaii",
//           "name": "The Shops at Mauna Lani",
//           "payment_options": "Greenlots Network smartphone app or \"Nissan No Charge to Charge\"",
//           "status": "Online"
//         },
//         "Punaluu": {
//           "address": "95-5642 Mamalahoa Hwy Naalehu, HI 96772",
//           "charger_details": "Count: 1 | Port(s): 1 | Charging Level: 3",
//           "charging_standards": "CHAdeMO, CCS/SAE",
//           "cost": "per kWh rates: 51¢ (9am - 5pm), 63¢ (5pm - 10pm), 61¢ (10pm - 9am)",
//           "hours": "9am - 5pm",
//           "island": "Hawaii",
//           "name": "Punaluu Bake Shop",
//           "payment_options": "Credit card, Greenlots Network, or \"Nissan No Charge to Charge\"",
//           "status": "Online"
//         },
//         "Times_Square": {
//           "address": "98-1268 Kaahumanu St Pearl City, HI 96782",
//           "charger_details": "Count: 1 | Port(s): 1 | Charging Level: 3",
//           "charging_standards": "CHAdeMO, CCS/SAE",
//           "cost": "per kWh rates: 49¢ (9am - 5pm), 57¢ (5pm - 10pm), 54¢ (10pm - 9am)",
//           "hours": "24/7",
//           "island": "Oahu",
//           "name": "Times Square Shopping Center",
//           "payment_options": "Credit card, Greenlots Network, or \"Nissan No Charge to Charge\"",
//           "status": "Online"
//         },
//         "Waianae_Mall": {
//           "address": "86-120 Farrington Hwy Waianae, HI 96792",
//           "charger_details": "Count: 1 | Port(s): 1 | Charging Level: 3",
//           "charging_standards": "CHAdeMO, CCS/SAE",
//           "cost": "per kWh rates: 49¢ (9am - 5pm), 57¢ (5pm - 10pm), 54¢ (10pm - 9am)",
//           "hours": "24/7",
//           "island": "Oahu",
//           "name": "Waianae Shopping Mall",
//           "payment_options": "Credit card or OpConnect Network",
//           "status": "Online"
//         },
//         "Waimea_KTA": {
//           "address": "65-1158 Mamalahoa Hwy Waimea, HI 96743",
//           "charger_options": "Count: 1 | Port(s): 1 | Charging Level: 3",
//           "charging_standards": "CHAdeMO, CCS/SAE",
//           "cost": "per kWh rates: 51¢ (9am - 5pm), 63¢ (5pm - 10pm), 61¢ (10pm - 9am)",
//           "hours": "24/7",
//           "island": "Hawaii",
//           "name": "Waimea KTA",
//           "payment_options": "Credit card, Greenlots Network, or \"Nissan No Charge to Charge\"",
//           "status": "Online"
//         }
//       }
//       ]
//     };
//   }
//
//   onMarkerClick(props, marker, e) {
//     alert('You clicked in this marker');
//   }
//
//   componentDidMount() {
//     this._isMounted = true;
//     this.props.activateAuthLayout();
//
//     query.on('value', snapshot => {
//       if (this._isMounted) {
//         let chargersTemp = []
//
//         snapshot.forEach(function (childSnapshot) {
//           chargersTemp.push(childSnapshot.val());
//         })
//
//         this.setState({ chargers: chargersTemp })
//       }
//     });
//   }
//
//   componentWillUnmount() {
//     let q = Firebase.database().ref('area-51-rs');
//     q.on('value', (snap) => {
//       var finished = []
//       snap.forEach((data) => {
//         let result = data.val();
//         result["key"] = data.key;
//         finished.push(result);
//       });
//
//       this.setState({
//         listingData: finished
//       })
//     });
//
//   }
//
//   render() {
//     const markers = this.state.chargers.map(charger =>
//         <React.Fragment title={charger.name}/>
//     );
//
//     return (
//         <React.Fragment>
//
//           <div className="content">
//             <div className="container-fluid">
//               <div className="page-title-box">
//                 <Row className="align-items-center">
//                   <Col sm="6">
//                     <h4 className="page-title">Google Map</h4>
//                     <ol className="breadcrumb">
//                       <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
//                       <li className="breadcrumb-item"><Link to="#">Maps</Link></li>
//                       <li className="breadcrumb-item active">Google Map</li>
//                     </ol>
//                   </Col>
//                   <Col sm="6">
//                     <div className="float-right d-none d-md-block">
//                       <Settingmenu/>
//                     </div>
//                   </Col>
//                 </Row>
//               </div>
//               <Row>
//
//                 <Col lg="6">
//                   <Card>
//                     <CardBody>
//                       <h4 className="mt-0 header-title">Markers</h4>
//                       <p className="text-muted mb-4">Example of google maps.</p>
//                       <div id="gmaps-overlay" className="gmaps">
//                         <Map google={this.props.google}
//                              style={{ height: 300, width: 750, position: 'relative' }}
//                              zoom={14}>
//                           {markers}
//
//                           <InfoWindow>
//                             <div>
//                               <h1>{this.state.selectedPlace.name}</h1>
//                               <h1>{this.state.chargers.map(marker => (
//                                   <Marker
//                                       key={marker.key}
//                                       coordinate={marker.address}
//                                       image={this.flagImg}
//                                       identifier={"Marker" + marker.key}
//                                       onPress={() => this.getMyLocation(marker.address.latitude, marker.address.longitude)}
//                                   />
//                               ))}
//                               </h1>
//                             </div>
//                           </InfoWindow>
//                         </Map>
//                       </div>
//                     </CardBody>
//                   </Card>
//                 </Col>
//               </Row>
//             </div>
//           </div>
//         </React.Fragment>
//     )
//   }
// }
//
// export default connect(null, { activateAuthLayout }) (GoogleApiWrapper({
//       apiKey: "AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE",
//       LoadingContainer: LoadingContainer,
//       v: "3"
//     }(MapsGoogle)));
