import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button, Modal, ModalBody } from 'reactstrap';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';

import { Link } from 'react-router-dom';

// image
import img1 from '../../../images/small/img-1.jpg';
import img2 from '../../../images/small/img-2.jpg';
import img3 from '../../../images/small/img-3.jpg';
import img4 from '../../../images/small/img-4.jpg';
import img5 from '../../../images/small/img-5.jpg';
import img6 from '../../../images/small/img-6.jpg';
import img7 from '../../../images/small/img-7.jpg';

const images = [img1, img2, img3, img4, img5, img6];

class Uilightbox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isFits: false,
            isEffects: false,
            isGallery: false,
            isGalleryZoom: false,
            isOpen: false,
            isOpen1: false,
            modal_standard: false,
        };

        this.openModal = this.openModal.bind(this)
        this.openModal1 = this.openModal1.bind(this)
        this.tog_standard = this.tog_standard.bind(this);
    }
    componentDidMount() {
        this.props.activateAuthLayout();
    }

    tog_standard() {
        this.setState(prevState => ({
            modal_standard: !prevState.modal_standard
        }));
    }

    openModal() {
        this.setState({ isOpen: true })
    }

    openModal1() {
        this.setState({ isOpen1: true })
    }
    render() {
        const { photoIndex } = this.state;
        return (
            <React.Fragment>


                <div className="content">
                    <div className="container-fluid">
                        <div className="page-title-box">
                            <Row className="align-items-center">
                                <Col sm="6">
                                    <h4 className="page-title">Lightbox</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                        <li className="breadcrumb-item"><Link to="#">UI Elements</Link></li>
                                        <li className="breadcrumb-item active">Lightbox</li>
                                    </ol>
                                </Col>
                                <Col sm="6">
                                    <div className="float-right d-none d-md-block">
                                        <Settingmenu />
                                    </div>
                                </Col>
                            </Row>
                        </div>



                        {this.state.isFits ?
                            <Lightbox mainSrc={images[photoIndex]}
                                enableZoom={false}
                                imageCaption={"Caption. Can be aligned it to any side and contain any HTML."}
                                onCloseRequest={() => this.setState({ isFits: false })}
                            /> : null}


                        {this.state.isEffects ?
                            <Lightbox mainSrc={images[3]}
                                enableZoom={false}
                                onCloseRequest={() => this.setState({ isEffects: false })}
                            /> : null}


                        {this.state.isGallery ?
                            <Lightbox
                                mainSrc={images[photoIndex]}
                                nextSrc={images[(photoIndex + 1) % images.length]}
                                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                enableZoom={false}
                                onCloseRequest={() => this.setState({ isGallery: false })}
                                onMovePrevRequest={() => this.setState({ photoIndex: (photoIndex + images.length - 1) % images.length, })}
                                onMoveNextRequest={() => this.setState({ photoIndex: (photoIndex + 1) % images.length, })}
                                imageCaption={"Project " + parseFloat(photoIndex + 1)}
                            /> : null}

                        {this.state.isGalleryZoom ?
                            <Lightbox
                                mainSrc={images[photoIndex]}
                                nextSrc={images[(photoIndex + 1) % images.length]}
                                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                onCloseRequest={() => this.setState({ isGalleryZoom: false })}
                                onMovePrevRequest={() => this.setState({ photoIndex: (photoIndex + images.length - 1) % images.length, })}
                                onMoveNextRequest={() => this.setState({ photoIndex: (photoIndex + 1) % images.length, })}
                            /> : null}

                        <Row>
                            <Col lg="6">
                                <Card>
                                    <CardBody>

                                        <h4 className="mt-0 header-title">Single Image Lightbox</h4>
                                        <p className="text-muted mb-4">Three simple popups with different scaling settings.</p>

                                        <Row>
                                            <div className="col-6">
                                                <h5 className="mt-0 font-14 m-b-15">Fits (Horz/Vert)</h5>
                                                <img onClick={() => this.setState({ isFits: true })} className="img-fluid" alt="" src={img2} width="145" />
                                            </div>
                                            <div className="col-6">
                                                <h5 className="mt-0 font-14 m-b-15">Effects</h5>
                                                <img onClick={() => this.setState({ isEffects: true })} className="img-fluid" alt="" src={img3} width="75" />
                                                <p className="mt-2 mb-0 text-muted">No gaps, zoom animation, close icon in top-right corner.</p>
                                            </div>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg="6">
                                <Card>
                                    <CardBody>

                                        <h4 className="mt-0 header-title">Lightbox Gallery</h4>
                                        <p className="text-muted mb-4">In this example lazy-loading of images is enabled for the next image based on move direction. </p>

                                        <div className="popup-gallery">
                                            <div className="img-fluid float-left">
                                                <img src={img1} onClick={() => this.setState({ isGallery: true, photoIndex: 0 })} alt="" width="120" />
                                            </div>
                                            <div className="img-fluid float-left">
                                                <img src={img2} onClick={() => this.setState({ isGallery: true, photoIndex: 1 })} alt="" width="120" />
                                            </div>
                                            <div className="img-fluid float-left">
                                                <img src={img3} onClick={() => this.setState({ isGallery: true, photoIndex: 2 })} alt="" width="120" />
                                            </div>
                                            <div className="img-fluid float-left">
                                                <img src={img4} onClick={() => this.setState({ isGallery: true, photoIndex: 3 })} alt="" width="120" />
                                            </div>
                                            <div className="img-fluid float-left">
                                                <img src={img5} onClick={() => this.setState({ isGallery: true, photoIndex: 4 })} alt="" width="120" />
                                            </div>
                                            <div className="img-fluid float-left">
                                                <img src={img6} onClick={() => this.setState({ isGallery: true, photoIndex: 5 })} alt="" width="120" />
                                            </div>

                                        </div>

                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="6">
                                <Card>
                                    <CardBody>

                                        <h4 className="mt-0 header-title">Zoom Gallery</h4>
                                        <p className="text-muted mb-4">Zoom effect works only with images.</p>

                                        <div className="zoom-gallery">
                                            <img src={img3} className="float-left" onClick={() => this.setState({ isGalleryZoom: true, photoIndex: 2 })} alt="" width="275" />
                                            <img src={img7} className="float-left" onClick={() => this.setState({ isGalleryZoom: true, photoIndex: 4 })} alt="" width="275" />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg="6">
                                <Card>
                                    <CardBody>

                                        <h4 className="mt-0 header-title">Popup With Video Or Map</h4>
                                        <p className="text-muted mb-4">In this example lazy-loading of images is enabled for the next image based on move direction. </p>

                                        <Row>
                                            <Col>
                                                <Button className="btn btn-secondary" onClick={this.openModal}>Open Youtube Video</Button>{' '}
                                                <Button className="btn btn-secondary" onClick={this.openModal1}>Open Vimeo Video</Button>{' '}

                                                <ModalVideo channel='youtube' isOpen={this.state.isOpen} onClose={() => this.setState({ isOpen: false })} />
                                                <ModalVideo channel='youtube' isOpen={this.state.isOpen1} onClose={() => this.setState({ isOpen1: false })} />

                                            </Col>
                                        </Row>

                                    </CardBody>
                                </Card>

                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title mb-4">Popup With Form</h4>
                                        <div>
                                            <Button onClick={() => this.setState({ modal_standard: true })} className="popup-form btn btn-primary">Popup form</Button>
                                        </div>



                                    </CardBody>
                                </Card>

                                <Modal className="modal-xl" isOpen={this.state.modal_standard} toggle={this.tog_standard}>


                                    <ModalBody>
                                        <h4 className="mt-0 mb-4">Form</h4>
                                        <form>
                                            <Row>
                                                <Col lg="4">
                                                    <div className="form-group">
                                                        <label for="name">Name</label>
                                                        <input type="text" className="form-control" id="name" placeholder="Enter Name" />
                                                    </div>
                                                </Col>
                                                <Col lg="4">
                                                    <div className="form-group">
                                                        <label for="email">Email</label>
                                                        <input type="email" className="form-control" id="email" placeholder="Enter Email" />
                                                    </div>
                                                </Col>
                                                <Col lg="4">
                                                    <div className="form-group">
                                                        <label for="password">Password</label>
                                                        <input type="text" className="form-control" id="password" placeholder="Enter Password" />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg="12">
                                                    <div className="form-group">
                                                        <label for="subject">Subject</label>
                                                        <textarea className="form-control" id="subject" rows="3"></textarea>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg="12">
                                                    <div className="text-right">
                                                        <button type="submit" onClick={() => this.setState({ modal_standard: false })} className="btn btn-primary">Submit</button>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </form>
                                    </ModalBody>



                                </Modal>

                            </Col>
                        </Row>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default connect(null, { activateAuthLayout })(Uilightbox);

