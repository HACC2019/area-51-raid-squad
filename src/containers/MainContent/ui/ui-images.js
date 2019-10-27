import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';

import img2 from '../../../images/small/img-2.jpg';
import img3 from '../../../images/small/img-3.jpg';
import img4 from '../../../images/small/img-4.jpg';

import user1 from '../../../images/users/user-1.jpg';
import user2 from '../../../images/users/user-2.jpg';
import user3 from '../../../images/users/user-3.jpg';
import user4 from '../../../images/users/user-4.jpg';
import user5 from '../../../images/users/user-5.jpg';
import user6 from '../../../images/users/user-6.jpg';

class Uiimages extends Component {

    constructor(props) {
        super(props);
        this.state = {}
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
                                    <h4 className="page-title">Images</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                        <li className="breadcrumb-item"><Link to="#">UI Elements</Link></li>
                                        <li className="breadcrumb-item active">Images</li>
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
                                        <h4 className="mt-0 header-title">Image Rounded & Circle</h4>
                                        <p className="text-muted mb-4">Use classes
                                            <code>.rounded</code> and <code>.rounded-circle</code>.</p>

                                        <Row>
                                            <Col md="6">
                                                <img className="rounded mr-2" alt="200x200" width="200" src={img4} data-holder-rendered="true" />
                                            </Col>
                                            <Col md="6">
                                                <div className="mt-4 mt-md-0">
                                                    <img className="rounded-circle" alt="200x200" src={user4} data-holder-rendered="true" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardBody>

                                        <h4 className="mt-0 header-title">Image Thumbnails</h4>
                                        <p className="text-muted mb-4">In addition to our border-radius utilities, you can use
                                            <code className="highlighter-rouge">.img-thumbnail</code> to give an image a
                                            rounded 1px border appearance.</p>
                                        <Row>
                                            <Col md="6">
                                                <img className="img-thumbnail" alt="200x200" width="200" src={img3} data-holder-rendered="true" />
                                            </Col>
                                            <Col md="6">
                                                <div className="mt-4 mt-md-0">
                                                    <img className="img-thumbnail rounded-circle" alt="200x200" src={user3} data-holder-rendered="true" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title">Responsive Images</h4>
                                        <p className="text-muted mb-4">Images in Bootstrap are made responsive
                                            with <code className="highlighter-rouge">.img-fluid</code>. <code
                                                className="highlighter-rouge">max-width: 100%;</code> and <code
                                                    className="highlighter-rouge">height: auto;</code> are applied to
                                            the image so that it scales with the parent element.</p>
                                        <div className="">
                                            <img src={img2} className="img-fluid" alt="Responsive" />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>

                        </Row>

                        <Row>
                            <Col lg="12">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title mb-4">Image Sizes</h4>
                                        <Row>
                                            <Col md="6">
                                                <Row>
                                                    <Col lg="4">
                                                        <div>
                                                            <img src={user3} alt="" className="rounded thumb-sm" />
                                                            <p className="mt-2 mb-lg-0"><code>.thumb-sm</code></p>
                                                        </div>
                                                    </Col>
                                                    <Col lg="4">
                                                        <div>
                                                            <img src={user4} alt="" className="rounded thumb-md" />
                                                            <p className="mt-2  mb-lg-0"><code>.thumb-md</code></p>
                                                        </div>
                                                    </Col>
                                                    <Col lg="4">
                                                        <div>
                                                            <img src={user5} alt="" className="rounded thumb-lg" />
                                                            <p className="mt-2 mb-lg-0"><code>.thumb-lg</code></p>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col md="6">
                                                <Row>
                                                    <Col lg="4">
                                                        <div>
                                                            <img src={user3} alt="" className="rounded-circle thumb-sm" />
                                                            <p className="mt-2 mb-lg-0"><code>.thumb-sm</code></p>
                                                        </div>
                                                    </Col>
                                                    <Col lg="4">
                                                        <div>
                                                            <img src={user4} alt="" className="rounded-circle thumb-md" />
                                                            <p className="mt-2  mb-lg-0"><code>.thumb-md</code></p>
                                                        </div>
                                                    </Col>
                                                    <Col lg="4">
                                                        <div>
                                                            <img src={user5} alt="" className="rounded-circle thumb-lg" />
                                                            <p className="mt-2 mb-lg-0"><code>.thumb-lg</code></p>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Card>
                                    <CardBody>

                                        <h4 className="mt-0 header-title">Default Media Object</h4>
                                        <p className="text-muted mb-4">The default media displays a media
                                            object (images, video, audio) to the left or right of a content
                                            block.</p>

                                        <div className="media mb-4">
                                            <img className="d-flex mr-3 rounded-circle" src={user6} alt="Veltrix" height="64" />
                                            <div className="media-body">
                                                <h5 className="mt-0 font-16">Media heading</h5>
                                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                            </div>
                                        </div>


                                        <div className="media mb-4">
                                            <img className="d-flex mr-3 rounded-circle" src={user2} alt="Veltrix" height="64" />
                                            <div className="media-body">
                                                <h5 className="mt-0 font-16">Media heading</h5>
                                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.

                                                <div className="media mt-3">
                                                    <Link className="d-flex pr-3" to="#">
                                                        <img src={user3} alt="Veltrix" height="64" className="rounded-circle" />
                                                    </Link>
                                                    <div className="media-body">
                                                        <h5 className="mt-0 font-16">Media heading</h5>
                                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="media">
                                            <div className="media-body">
                                                <h5 className="mt-0 mb-1 font-16">Media Object</h5>
                                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                            </div>
                                            <img className="d-flex ml-3 rounded-circle" src={user4} alt="Veltrix" height="64" />
                                        </div>

                                    </CardBody>
                                </Card>
                            </Col>

                        </Row>


                        <Row>
                            <Col>
                                <Card>
                                    <CardBody>

                                        <h4 className="mt-0 header-title">Media Alignment</h4>
                                        <p className="text-muted mb-4">The images or other media can be
                                            aligned top, middle, or bottom. The default is top aligned.</p>

                                        <div className="media mb-4">
                                            <img className="d-flex align-self-start rounded mr-3" src={user3} alt="Veltrix" height="64" />
                                            <div className="media-body">
                                                <h5 className="mt-0 font-16">Top-aligned media</h5>
                                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                                <p className="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                            </div>
                                        </div>

                                        <div className="media mb-4">
                                            <img className="d-flex align-self-center rounded mr-3" src={user5} alt="Veltrix" height="64" />
                                            <div className="media-body">
                                                <h5 className="mt-0 font-16">Center-aligned media</h5>
                                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                                <p className="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                            </div>
                                        </div>

                                        <div className="media">
                                            <img className="d-flex align-self-end rounded mr-3" src={user1} alt="Veltrix" height="64" />
                                            <div className="media-body">
                                                <h5 className="mt-0 font-16">Bottom-aligned media</h5>
                                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                                <p className="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                            </div>
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



export default connect(null, { activateAuthLayout })(Uiimages);

