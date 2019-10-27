import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Tooltip  } from 'reactstrap';
import { Link } from 'react-router-dom';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';

import img1 from '../../../images/products/1.jpg';
import img2 from '../../../images/products/2.jpg';
import img3 from '../../../images/products/3.jpg';
import img4 from '../../../images/products/4.jpg';
import img5 from '../../../images/products/5.jpg';
import img6 from '../../../images/products/6.jpg';
import img7 from '../../../images/products/7.jpg';
import img8 from '../../../images/products/8.jpg';

class EcommerceProducts extends Component {

    constructor(props) {
        super(props);
        this.state = { }
      }

      componentDidMount() {
        this.props.activateAuthLayout();
    }

    render() {

        return (
            <React.Fragment>
               

                
                <div className="content">
                        <div className="container-fluid">
                            <div className="page-title-box">
                                <Row className="align-items-center">
                                    <Col sm="6">
                                        <h4 className="page-title">Products</h4>
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                            <li className="breadcrumb-item"><Link to="#">Ecommerce</Link></li>
                                            <li className="breadcrumb-item active">Products</li>
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
                            <Col xl="3" md="6">
                                <Card className="product-box">
                                    <CardBody>
                                        <div className="product-img">
                                            <img src={img1} className="img-fluid rounded-top mx-auto d-block" alt="work-thumbnail" />
                                            <div className="product-overlay">
                                                <ul className="list-inline product-links social-links mb-0">
                                                    <li className="list-inline-item">
                                                       <Tooltip placement="top" isOpen={this.state.i1} target="i1" toggle={() => this.setState({ i1: !this.state.i1 })}>Like</Tooltip>
                                                        <Link to="#" id="i1" className="team-member"><i className="dripicons-heart"></i></Link>
                                                     </li>
                                                    <li className="list-inline-item">
                                                    <Tooltip placement="top" isOpen={this.state.i2} target="i2" toggle={() => this.setState({ i2: !this.state.i2 })}>Add to Wishlist</Tooltip>
                                                        <Link to="#" id="i2" className="team-member"><i className="dripicons-shopping-bag"></i></Link>
                                                     </li>
                                                    <li className="list-inline-item">
                                                    <Tooltip placement="top" isOpen={this.state.i3} target="i3" toggle={() => this.setState({ i3: !this.state.i3 })}>Add to Cart</Tooltip>
                                                        <Link to="#" id="i3" className="team-member"><i className="dripicons-cart"></i></Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        
                                        <div className="detail mt-3">
                                            <h4 className="font-16"><Link to="" className="text-dark">Gray belt watch</Link> </h4>
                                            <p className="text-muted">
                                                <i className="mdi mdi-star text-warning"></i>{' '}
                                                <i className="mdi mdi-star text-warning"></i>{' '}
                                                <i className="mdi mdi-star text-warning"></i>{' '}
                                                <i className="mdi mdi-star text-warning"></i>{' '}
                                                <i className="mdi mdi-star text-warning"></i>
                                            </p>
                                            <h5 className="my-0 font-16 float-right"><span className="text-muted mr-2"><del>$72</del></span> <b>$64</b></h5>
                                            <span className="badge badge-soft-primary">24 % Off</span>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xl="3" md="6">
                                <Card className="product-box">
                                    <CardBody>
                                        <div className="product-img">
                                            <img src={img2} className="img-fluid rounded-top mx-auto d-block" alt="work-thumbnail" />
                                            <div className="product-overlay">
                                                <ul className="list-inline product-links social-links mb-0">
                                                <li className="list-inline-item">
                                                       <Tooltip placement="top" isOpen={this.state.i11} target="i11" toggle={() => this.setState({ i11: !this.state.i11 })}>Like</Tooltip>
                                                        <Link to="#" id="i11" className="team-member"><i className="dripicons-heart"></i></Link>
                                                     </li>
                                                    <li className="list-inline-item">
                                                    <Tooltip placement="top" isOpen={this.state.i22} target="i22" toggle={() => this.setState({ i22: !this.state.i22 })}>Add to Wishlist</Tooltip>
                                                        <Link to="#" id="i22" className="team-member"><i className="dripicons-shopping-bag"></i></Link>
                                                     </li>
                                                    <li className="list-inline-item">
                                                    <Tooltip placement="top" isOpen={this.state.i33} target="i33" toggle={() => this.setState({ i33: !this.state.i33 })}>Add to Cart</Tooltip>
                                                        <Link to="#" id="i33" className="team-member"><i className="dripicons-cart"></i></Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="detail mt-3">
                                            <h4 className="font-16"><Link to="" className="text-dark">Riverston Glass Chair</Link> </h4>
                                            <p className="text-muted">
                                            <i className="mdi mdi-star text-warning"></i>{' '}
                                                <i className="mdi mdi-star text-warning"></i>{' '}
                                                <i className="mdi mdi-star text-warning"></i>{' '}
                                                <i className="mdi mdi-star text-warning"></i>{' '}
                                                <i className="mdi mdi-star text-warning"></i>
                                            </p>
                                            <h5 className="my-0 font-16 float-right"><span className="text-muted mr-2"><del>$70</del></span> <b>$62</b></h5>
                                            <span className="badge badge-soft-danger">26 % Off</span>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xl="3" md="6">
                                <Card className="product-box">
                                    <CardBody>
                                        <div className="product-img">
                                            <img src={img3} className="img-fluid rounded-top mx-auto d-block" alt="work-thumbnail" />
                                            <div className="product-overlay">
                                                <ul className="list-inline product-links social-links mb-0">
                                                <li className="list-inline-item">
                                                       <Tooltip placement="top" isOpen={this.state.p1} target="p1" toggle={() => this.setState({ p1: !this.state.p1 })}>Like</Tooltip>
                                                        <Link to="#" id="p1" className="team-member"><i className="dripicons-heart"></i></Link>
                                                     </li>
                                                    <li className="list-inline-item">
                                                    <Tooltip placement="top" isOpen={this.state.p2} target="p2" toggle={() => this.setState({ p2: !this.state.p2 })}>Add to Wishlist</Tooltip>
                                                        <Link to="#" id="p2" className="team-member"><i className="dripicons-shopping-bag"></i></Link>
                                                     </li>
                                                    <li className="list-inline-item">
                                                    <Tooltip placement="top" isOpen={this.state.p3} target="p3" toggle={() => this.setState({ p3: !this.state.p3 })}>Add to Cart</Tooltip>
                                                        <Link to="#" id="p3" className="team-member"><i className="dripicons-cart"></i></Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="detail mt-3">
                                            <h4 className="font-16"><Link to="" className="text-dark">Trex Outdoor Furniture Cape</Link> </h4>
                                            <p className="text-muted">
                                            <i className="mdi mdi-star text-warning"></i>{' '}
                                                <i className="mdi mdi-star text-warning"></i>{' '}
                                                <i className="mdi mdi-star text-warning"></i>{' '}
                                                <i className="mdi mdi-star text-warning"></i>{' '}
                                                <i className="mdi mdi-star text-warning"></i>
                                            </p>
                                            <h5 className="my-0 font-16 float-right"><span className="text-muted mr-2"><del>$78</del></span> <b>$68</b></h5>
                                            <span className="badge badge-soft-warning">30 % Off</span>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xl="3" md="6">
                                <Card className="product-box">
                                    <CardBody>
                                        <div className="product-img">
                                            <img src={img4} className="img-fluid rounded-top mx-auto d-block" alt="work-thumbnail" />
                                            <div className="product-overlay">
                                                <ul className="list-inline product-links social-links mb-0">
                                                <li className="list-inline-item">
                                                       <Tooltip placement="top" isOpen={this.state.q1} target="q1" toggle={() => this.setState({ q1: !this.state.q1 })}>Like</Tooltip>
                                                        <Link to="#" id="q1" className="team-member"><i className="dripicons-heart"></i></Link>
                                                     </li>
                                                    <li className="list-inline-item">
                                                    <Tooltip placement="top" isOpen={this.state.q2} target="q2" toggle={() => this.setState({ q2: !this.state.q2 })}>Add to Wishlist</Tooltip>
                                                        <Link to="#" id="q2" className="team-member"><i className="dripicons-shopping-bag"></i></Link>
                                                     </li>
                                                    <li className="list-inline-item">
                                                    <Tooltip placement="top" isOpen={this.state.q3} target="q3" toggle={() => this.setState({ q3: !this.state.q3 })}>Add to Cart</Tooltip>
                                                        <Link to="#" id="q3" className="team-member"><i className="dripicons-cart"></i></Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="detail mt-3">
                                            <h4 className="font-16"><Link to="" className="text-dark">3 color belt watch</Link> </h4>
                                            <p className="text-muted">
                                            <i className="mdi mdi-star text-warning"></i>{' '}
                                                <i className="mdi mdi-star text-warning"></i>{' '}
                                                <i className="mdi mdi-star text-warning"></i>{' '}
                                                <i className="mdi mdi-star text-warning"></i>{' '}
                                                <i className="mdi mdi-star text-warning"></i>
                                            </p>
                                            <h5 className="my-0 font-16 float-right"><span className="text-muted mr-2"><del>$84</del></span> <b>$72</b></h5>
                                            <span className="badge badge-soft-success">28 % Off</span>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xl="3" md="6">
                                <Card className="product-box">
                                    <CardBody>
                                        <div className="product-img">
                                            <img src={img5} className="img-fluid rounded-top mx-auto d-block" alt="work-thumbnail" />
                                            <div className="product-overlay">
                                                <ul className="list-inline product-links social-links mb-0">
                                                <li className="list-inline-item">
                                                       <Tooltip placement="top" isOpen={this.state.m1} target="m1" toggle={() => this.setState({ m1: !this.state.m1 })}>Like</Tooltip>
                                                        <Link to="#" id="m1" className="team-member"><i className="dripicons-heart"></i></Link>
                                                     </li>
                                                    <li className="list-inline-item">
                                                    <Tooltip placement="top" isOpen={this.state.m2} target="m2" toggle={() => this.setState({ m2: !this.state.m2 })}>Add to Wishlist</Tooltip>
                                                        <Link to="#" id="m2" className="team-member"><i className="dripicons-shopping-bag"></i></Link>
                                                     </li>
                                                    <li className="list-inline-item">
                                                    <Tooltip placement="top" isOpen={this.state.m3} target="m3" toggle={() => this.setState({ m3: !this.state.m3 })}>Add to Cart</Tooltip>
                                                        <Link to="#" id="m3" className="team-member"><i className="dripicons-cart"></i></Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="detail mt-3">
                                            <h4 className="font-16"><Link to="" className="text-dark">Classic Company watch</Link> </h4>
                                            <p className="text-muted">
                                            <i className="mdi mdi-star text-warning"></i>{' '}
                                                <i className="mdi mdi-star text-warning"></i>{' '}
                                                <i className="mdi mdi-star text-warning"></i>{' '}
                                                <i className="mdi mdi-star text-warning"></i>{' '}
                                                <i className="mdi mdi-star text-warning"></i>
                                            </p>
                                            <h5 className="my-0 font-16 float-right"><span className="text-muted mr-2"><del>$70</del></span> <b>$68</b></h5>
                                            <span className="badge badge-soft-success">30 % Off</span>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xl="3" md="6">
                                <Card className="product-box">
                                    <CardBody>
                                        <div className="product-img">
                                            <img src={img6} className="img-fluid rounded-top mx-auto d-block" alt="work-thumbnail" />
                                            <div className="product-overlay">
                                                <ul className="list-inline product-links social-links mb-0">
                                                <li className="list-inline-item">
                                                       <Tooltip placement="top" isOpen={this.state.h1} target="h1" toggle={() => this.setState({ h1: !this.state.h1 })}>Like</Tooltip>
                                                        <Link to="#" id="h1" className="team-member"><i className="dripicons-heart"></i></Link>
                                                     </li>
                                                    <li className="list-inline-item">
                                                    <Tooltip placement="top" isOpen={this.state.h2} target="h2" toggle={() => this.setState({ h2: !this.state.h2 })}>Add to Wishlist</Tooltip>
                                                        <Link to="#" id="h2" className="team-member"><i className="dripicons-shopping-bag"></i></Link>
                                                     </li>
                                                    <li className="list-inline-item">
                                                    <Tooltip placement="top" isOpen={this.state.h3} target="h3" toggle={() => this.setState({ h3: !this.state.h3 })}>Add to Cart</Tooltip>
                                                        <Link to="#" id="h3" className="team-member"><i className="dripicons-cart"></i></Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="detail mt-3">
                                            <h4 className="font-16"><Link to="" className="text-dark">Shine Company Chair</Link> </h4>
                                            <p className="text-muted">
                                            <i className="mdi mdi-star text-warning"></i>{' '}
                                                <i className="mdi mdi-star text-warning"></i>{' '}
                                                <i className="mdi mdi-star text-warning"></i>{' '}
                                                <i className="mdi mdi-star text-warning"></i>{' '}
                                                <i className="mdi mdi-star text-warning"></i>
                                            </p>
                                            <h5 className="my-0 font-16 float-right"><span className="text-muted mr-2"><del>$84</del></span> <b>$68</b></h5>
                                            <span className="badge badge-soft-warning">32 % Off</span>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xl="3" md="6">
                                <Card className="product-box">
                                    <CardBody>
                                        <div className="product-img">
                                            <img src={img7} className="img-fluid rounded-top mx-auto d-block" alt="work-thumbnail" />
                                            <div className="product-overlay">
                                                <ul className="list-inline product-links social-links mb-0">
                                                <li className="list-inline-item">
                                                       <Tooltip placement="top" isOpen={this.state.s1} target="s1" toggle={() => this.setState({ s1: !this.state.s1 })}>Like</Tooltip>
                                                        <Link to="#" id="s1" className="team-member"><i className="dripicons-heart"></i></Link>
                                                     </li>
                                                    <li className="list-inline-item">
                                                    <Tooltip placement="top" isOpen={this.state.s2} target="s2" toggle={() => this.setState({ s2: !this.state.s2 })}>Add to Wishlist</Tooltip>
                                                        <Link to="#" id="s2" className="team-member"><i className="dripicons-shopping-bag"></i></Link>
                                                     </li>
                                                    <li className="list-inline-item">
                                                    <Tooltip placement="top" isOpen={this.state.s3} target="s3" toggle={() => this.setState({ s3: !this.state.s3 })}>Add to Cart</Tooltip>
                                                        <Link to="#" id="s3" className="team-member"><i className="dripicons-cart"></i></Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="detail mt-3">
                                            <h4 className="font-16"><Link to="" className="text-dark">Trex Outdoor Furniture Cape</Link> </h4>
                                            <p className="text-muted">
                                            <i className="mdi mdi-star text-warning"></i>{' '}
                                                <i className="mdi mdi-star text-warning"></i>{' '}
                                                <i className="mdi mdi-star text-warning"></i>{' '}
                                                <i className="mdi mdi-star text-warning"></i>{' '}
                                                <i className="mdi mdi-star text-warning"></i>
                                            </p>
                                            <h5 className="my-0 font-16 float-right"><span className="text-muted mr-2"><del>$74</del></span> <b>$66</b></h5>
                                            <span className="badge badge-soft-danger">34 % Off</span>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xl="3" md="6">
                                <Card className="product-box">
                                    <CardBody>
                                        <div className="product-img">
                                            <img src={img8} className="img-fluid rounded-top mx-auto d-block" alt="work-thumbnail" />
                                            <div className="product-overlay">
                                                <ul className="list-inline product-links social-links mb-0">
                                                <li className="list-inline-item">
                                                       <Tooltip placement="top" isOpen={this.state.n1} target="n1" toggle={() => this.setState({ n1: !this.state.n1 })}>Like</Tooltip>
                                                        <Link to="#" id="n1" className="team-member"><i className="dripicons-heart"></i></Link>
                                                     </li>
                                                    <li className="list-inline-item">
                                                    <Tooltip placement="top" isOpen={this.state.n2} target="n2" toggle={() => this.setState({ n2: !this.state.n2 })}>Add to Wishlist</Tooltip>
                                                        <Link to="#" id="n2" className="team-member"><i className="dripicons-shopping-bag"></i></Link>
                                                     </li>
                                                    <li className="list-inline-item">
                                                    <Tooltip placement="top" isOpen={this.state.n3} target="n3" toggle={() => this.setState({ n3: !this.state.n3 })}>Add to Cart</Tooltip>
                                                        <Link to="#" id="n3" className="team-member"><i className="dripicons-cart"></i></Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="detail mt-3">
                                            <h4 className="font-16"><Link to="" className="text-dark">black color lamp</Link> </h4>
                                            <p className="text-muted">
                                            <i className="mdi mdi-star text-warning"></i>{' '}
                                                <i className="mdi mdi-star text-warning"></i>{' '}
                                                <i className="mdi mdi-star text-warning"></i>{' '}
                                                <i className="mdi mdi-star text-warning"></i>{' '}
                                                <i className="mdi mdi-star text-warning"></i>
                                            </p>
                                            <h5 className="my-0 font-16 float-right"><span className="text-muted mr-2"><del>$72</del></span> <b>$64</b></h5>
                                            <span className="badge badge-soft-primary">26 % Off</span>
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

export default connect(null, { activateAuthLayout })(EcommerceProducts);
