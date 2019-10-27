import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Modal } from 'reactstrap';
import PerfectScrollbar from 'react-scrollbar';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';
import { Link } from 'react-router-dom';


class Uimodals extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false, modal_standard: false, modal_large: false, modal_xlarge: false, modal_small: false,
            modal_center: false, modal_scroll: false
        };

        this.tog_standard = this.tog_standard.bind(this);
        this.tog_xlarge = this.tog_xlarge.bind(this);
        this.tog_large = this.tog_large.bind(this);
        this.tog_small = this.tog_small.bind(this);
        this.tog_center = this.tog_center.bind(this);
        this.tog_scroll = this.tog_scroll.bind(this);

    }

    componentDidMount() {
        this.props.activateAuthLayout();
    }

    tog_standard() {
        this.setState(prevState => ({
            modal_standard: !prevState.modal_standard
        }));
        this.removeBodyCss();
    }
    removeBodyCss() {
        document.body.classList.add('no_padding');
    }

    tog_large() {
        this.setState(prevState => ({
            modal_large: !prevState.modal_large
        }));
        this.removeBodyCss();
    }
    tog_xlarge() {
        this.setState(prevState => ({
            modal_xlarge: !prevState.modal_xlarge
        }));
        this.removeBodyCss();
    }
    tog_small() {
        this.setState(prevState => ({
            modal_small: !prevState.modal_small
        }));
        this.removeBodyCss();
    }
    tog_center() {
        this.setState(prevState => ({
            modal_center: !prevState.modal_center
        }));
        this.removeBodyCss();
    }
    tog_scroll() {
        this.setState(prevState => ({
            modal_scroll: !prevState.modal_scroll
        }));
        this.removeBodyCss();
    }
    show() {
        this.setState({ visible: true });
    }
    hide() {
        this.setState({ visible: false });
    }


    render() {

        return (
            <React.Fragment>


                <div className="content">
                    <div className="container-fluid">
                        <div className="page-title-box">
                            <Row className="align-items-center">
                                <Col sm="6">
                                    <h4 className="page-title">Modals</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                        <li className="breadcrumb-item"><Link to="#">UI Elements</Link></li>
                                        <li className="breadcrumb-item active">Modals</li>
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
                            <Col>
                                <Card>
                                    <CardBody>

                                        <h4 className="mt-0 header-title">Modals Examples</h4>
                                        <p className="text-muted mb-4 font-14">Modals are streamlined, but flexible
                                            dialog prompts powered by JavaScript. They support a number of use cases
                                            from user notification to completely custom content and feature a
                                            handful of helpful subcomponents, sizes, and more.</p>

                                        <div className="modal bs-example-modal" tabIndex="-1" role="dialog">
                                            <div className="modal-dialog" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title mt-0">Modal Title</h5>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <p>One fine body&hellip;</p>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-primary">Save changes</button>
                                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <Row>

                                            <Col sm="6" md="4" xl="3">
                                                <div className="my-4 text-center">
                                                    <p className="text-muted">Standard Modal</p>

                                                    <button type="button" onClick={this.tog_standard} className="btn btn-primary waves-effect waves-light">Standard Modal</button>
                                                </div>


                                                <Modal isOpen={this.state.modal_standard} toggle={this.tog_standard} >
                                                    <div className="modal-header">
                                                        <h5 className="modal-title mt-0" id="myModalLabel">Modal Heading</h5>
                                                        <button type="button" onClick={() => this.setState({ modal_standard: false })} className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <h5>Overflowing text to show scroll behavior</h5>
                                                        <p>Cras mattis consectetur purus sit amet fermentum.
                                                            Cras justo odio, dapibus ac facilisis in,
                                                            egestas eget quam. Morbi leo risus, porta ac
                                                            consectetur ac, vestibulum at eros.</p>
                                                        <p>Praesent commodo cursus magna, vel scelerisque
                                                            nisl consectetur et. Vivamus sagittis lacus vel
                                                            augue laoreet rutrum faucibus dolor auctor.</p>
                                                        <p>Aenean lacinia bibendum nulla sed consectetur.
                                                            Praesent commodo cursus magna, vel scelerisque
                                                            nisl consectetur et. Donec sed odio dui. Donec
                                                            ullamcorper nulla non metus auctor
                                                            fringilla.</p>
                                                        <p>Cras mattis consectetur purus sit amet fermentum.
                                                            Cras justo odio, dapibus ac facilisis in,
                                                            egestas eget quam. Morbi leo risus, porta ac
                                                            consectetur ac, vestibulum at eros.</p>
                                                        <p>Praesent commodo cursus magna, vel scelerisque
                                                            nisl consectetur et. Vivamus sagittis lacus vel
                                                            augue laoreet rutrum faucibus dolor auctor.</p>
                                                        <p>Aenean lacinia bibendum nulla sed consectetur.
                                                            Praesent commodo cursus magna, vel scelerisque
                                                            nisl consectetur et. Donec sed odio dui. Donec
                                                            ullamcorper nulla non metus auctor
                                                            fringilla.</p>
                                                        <p>Cras mattis consectetur purus sit amet fermentum.
                                                            Cras justo odio, dapibus ac facilisis in,
                                                            egestas eget quam. Morbi leo risus, porta ac
                                                            consectetur ac, vestibulum at eros.</p>
                                                        <p>Praesent commodo cursus magna, vel scelerisque
                                                            nisl consectetur et. Vivamus sagittis lacus vel
                                                            augue laoreet rutrum faucibus dolor auctor.</p>
                                                        <p>Aenean lacinia bibendum nulla sed consectetur.
                                                            Praesent commodo cursus magna, vel scelerisque
                                                            nisl consectetur et. Donec sed odio dui. Donec
                                                            ullamcorper nulla non metus auctor
                                                            fringilla.</p>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" onClick={this.tog_standard} className="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
                                                        <button type="button" className="btn btn-primary waves-effect waves-light">Save changes</button>
                                                    </div>
                                                </Modal>
                                            </Col>

                                            <Col sm="6" md="4" xl="3">
                                                <div className="my-4 text-center">
                                                    <p className="text-muted">Extra Large Modal</p>

                                                    <button type="button" onClick={this.tog_xlarge} className="btn btn-primary waves-effect waves-light" data-toggle="modal" data-target=".bs-example-modal-xl">Extra Large Modal</button>
                                                </div>


                                                <Modal className="modal-xl" isOpen={this.state.modal_xlarge} toggle={this.tog_xlarge} >
                                                    <div className="modal-header">
                                                        <h5 className="modal-title mt-0" id="myExtraLargeModalLabel">Extra Large Modal</h5>
                                                        <button onClick={() => this.setState({ modal_xlarge: false })} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <p>Cras mattis consectetur purus sit amet fermentum.
                                                            Cras justo odio, dapibus ac facilisis in,
                                                            egestas eget quam. Morbi leo risus, porta ac
                                                            consectetur ac, vestibulum at eros.</p>
                                                        <p>Praesent commodo cursus magna, vel scelerisque
                                                            nisl consectetur et. Vivamus sagittis lacus vel
                                                            augue laoreet rutrum faucibus dolor auctor.</p>
                                                        <p className="mb-0">Aenean lacinia bibendum nulla sed consectetur.
                                                            Praesent commodo cursus magna, vel scelerisque
                                                            nisl consectetur et. Donec sed odio dui. Donec
                                                            ullamcorper nulla non metus auctor
                                                            fringilla.</p>
                                                    </div>
                                                </Modal>
                                            </Col>

                                            <Col sm="6" md="4" xl="3">
                                                <div className="my-4 text-center">
                                                    <p className="text-muted">Large Modal</p>

                                                    <button type="button" onClick={this.tog_large} className="btn btn-primary waves-effect waves-light" data-toggle="modal" data-target=".bs-example-modal-lg">Large Modal</button>
                                                </div>


                                                <Modal className="modal-lg" isOpen={this.state.modal_large} toggle={this.tog_large} >
                                                    <div className="modal-header">
                                                        <h5 className="modal-title mt-0" id="myLargeModalLabel">Large Modal</h5>
                                                        <button onClick={() => this.setState({ modal_large: false })} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <p>Cras mattis consectetur purus sit amet fermentum.
                                                            Cras justo odio, dapibus ac facilisis in,
                                                            egestas eget quam. Morbi leo risus, porta ac
                                                            consectetur ac, vestibulum at eros.</p>
                                                        <p>Praesent commodo cursus magna, vel scelerisque
                                                            nisl consectetur et. Vivamus sagittis lacus vel
                                                            augue laoreet rutrum faucibus dolor auctor.</p>
                                                        <p className="mb-0">Aenean lacinia bibendum nulla sed consectetur.
                                                            Praesent commodo cursus magna, vel scelerisque
                                                            nisl consectetur et. Donec sed odio dui. Donec
                                                            ullamcorper nulla non metus auctor
                                                            fringilla.</p>
                                                    </div>
                                                </Modal>
                                            </Col>

                                            <Col sm="6" md="4" xl="3">
                                                <div className="my-4 text-center">
                                                    <p className="text-muted">Small Modal</p>

                                                    <button type="button" onClick={this.tog_small} className="btn btn-primary waves-effect waves-light" data-toggle="modal" data-target=".bs-example-modal-sm">Small Modal</button>
                                                </div>

                                                <Modal className="modal-sm" isOpen={this.state.modal_small} toggle={this.tog_small} >
                                                    <div className="modal-header">
                                                        <h5 className="modal-title mt-0" id="mySmallModalLabel">Small Modal</h5>
                                                        <button onClick={() => this.setState({ modal_small: false })} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <p>Cras mattis consectetur purus sit amet fermentum.
                                                            Cras justo odio, dapibus ac facilisis in,
                                                            egestas eget quam. Morbi leo risus, porta ac
                                                            consectetur ac, vestibulum at eros.</p>
                                                        <p>Praesent commodo cursus magna, vel scelerisque
                                                            nisl consectetur et. Vivamus sagittis lacus vel
                                                            augue laoreet rutrum faucibus dolor auctor.</p>
                                                        <p className="mb-0">Aenean lacinia bibendum nulla sed consectetur.
                                                            Praesent commodo cursus magna, vel scelerisque
                                                            nisl consectetur et. Donec sed odio dui. Donec
                                                            ullamcorper nulla non metus auctor
                                                            fringilla.</p>
                                                    </div>
                                                </Modal>
                                            </Col>

                                            <Col sm="6" md="4" xl="3">
                                                <div className="my-4 text-center">
                                                    <p className="text-muted">Center Modal</p>
                                                    <button type="button" onClick={this.tog_center} className="btn btn-primary waves-effect waves-light" data-toggle="modal" data-target=".bs-example-modal-center">Center Modal</button>
                                                </div>
                                                <Modal isOpen={this.state.modal_center} toggle={this.tog_center} >
                                                    <div className="modal-header">
                                                        <h5 className="modal-title mt-0">Center Modal</h5>
                                                        <button type="button" onClick={() => this.setState({ modal_center: false })} className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <p>Cras mattis consectetur purus sit amet fermentum.
                                                            Cras justo odio, dapibus ac facilisis in,
                                                            egestas eget quam. Morbi leo risus, porta ac
                                                            consectetur ac, vestibulum at eros.</p>
                                                        <p>Praesent commodo cursus magna, vel scelerisque
                                                            nisl consectetur et. Vivamus sagittis lacus vel
                                                            augue laoreet rutrum faucibus dolor auctor.</p>
                                                        <p className="mb-0">Aenean lacinia bibendum nulla sed consectetur.
                                                            Praesent commodo cursus magna, vel scelerisque
                                                            nisl consectetur et. Donec sed odio dui. Donec
                                                            ullamcorper nulla non metus auctor
                                                            fringilla.</p>
                                                    </div>
                                                </Modal>
                                            </Col>

                                            <Col sm="6" md="4" xl="3">
                                                <div className="my-4 text-center">
                                                    <p className="text-muted">Scrollable Modal</p>

                                                    <button type="button" onClick={this.tog_scroll} className="btn btn-primary waves-effect waves-light" data-toggle="modal" data-target="#exampleModalScrollable">Scrollable Modal</button>
                                                </div>

                                                <Modal className="modal-center" isOpen={this.state.modal_scroll} toggle={this.tog_scroll} >
                                                    <div className="modal-header">
                                                        <h5 className="modal-title mt-0" id="exampleModalScrollableTitle">Scrollable Modal</h5>
                                                        <button type="button" onClick={() => this.setState({ modal_scroll: false })} className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <PerfectScrollbar style={{ height: "700px" }}>
                                                            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                                            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                                            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                                            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                                            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                                            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                                            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                                            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                                            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                                            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                                            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                                            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                                        </PerfectScrollbar>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" onClick={() => this.setState({ modal_scroll: false })} className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                        <button type="button" className="btn btn-primary">Save changes</button>
                                                    </div>
                                                </Modal>
                                            </Col>
                                        </Row>
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

export default connect(null, { activateAuthLayout })(Uimodals);


