import React, { Component } from 'react';
import { Row, Col, Card } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';


import user2 from '../../../images/users/user-2.jpg';
import user3 from '../../../images/users/user-3.jpg';
import user4 from '../../../images/users/user-4.jpg';
import user6 from '../../../images/users/user-6.jpg';


class EmailCompose extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
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
                                        <h4 className="page-title">Email Compose</h4>
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                            <li className="breadcrumb-item"><Link to="#">Email</Link></li>
                                            <li className="breadcrumb-item active">Email Compose</li>
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
                                <div className="email-leftbar card">
                                    <Link to="email-compose" className="btn btn-danger btn-block waves-effect waves-light">Compose</Link>
        
                                    <div className="mail-list mt-4">
                                        <Link to="/email-inbox" className="active"><i className="mdi mdi-email-outline mr-2"></i> Inbox <span className="ml-1 float-right">(18)</span></Link>
                                        <Link to="#"><i className="mdi mdi-star-outline mr-2"></i>Starred</Link>
                                        <Link to="#"><i className="mdi mdi-diamond-stone mr-2"></i>Important</Link>
                                        <Link to="#"><i className="mdi mdi-file-outline mr-2"></i>Draft</Link>
                                        <Link to="#"><i className="mdi mdi-email-check-outline mr-2"></i>Sent Mail</Link>
                                        <Link to="#"><i className="mdi mdi-trash-can-outline mr-2"></i>Trash</Link>
                                    </div>
        
        
                                    <h6 className="mt-4">Labels</h6>
        
                                    <div className="mail-list mt-1">
                                        <Link to="#"><span className="mdi mdi-arrow-right-drop-circle text-info float-right"></span>Theme Support</Link>
                                        <Link to="#"><span className="mdi mdi-arrow-right-drop-circle text-warning float-right"></span>Freelance</Link>
                                        <Link to="#"><span className="mdi mdi-arrow-right-drop-circle text-primary float-right"></span>Social</Link>
                                        <Link to="#"><span className="mdi mdi-arrow-right-drop-circle text-danger float-right"></span>Friends</Link>
                                        <Link to="#"><span className="mdi mdi-arrow-right-drop-circle text-success float-right"></span>Family</Link>
                                    </div>
        
                                    <h6 className="mt-4">Chat</h6>
        
                                    <div className="mt-2">
                                        <Link to="#" className="media">
                                            <img className="d-flex mr-3 rounded-circle" src={user2} alt="Veltrix" height="36" />
                                            <div className="media-body chat-user-box">
                                                <p className="user-title m-0">Scott Median</p>
                                                <p className="text-muted">Hello</p>
                                            </div>
                                        </Link>
        
                                        <Link to="#" className="media">
                                            <img className="d-flex mr-3 rounded-circle" src={user3} alt="Veltrix" height="36" />
                                            <div className="media-body chat-user-box">
                                                <p className="user-title m-0">Julian Rosa</p>
                                                <p className="text-muted">What about our next..</p>
                                            </div>
                                        </Link>
        
                                        <Link to="#" className="media">
                                            <img className="d-flex mr-3 rounded-circle" src={user4} alt="Veltrix" height="36" />
                                            <div className="media-body chat-user-box">
                                                <p className="user-title m-0">David Medina</p>
                                                <p className="text-muted">Yeah everything is fine</p>
                                            </div>
                                        </Link>
        
                                        <Link to="#" className="media">
                                            <img className="d-flex mr-3 rounded-circle" src={user6} alt="Veltrix" height="36" />
                                            <div className="media-body chat-user-box">
                                                <p className="user-title m-0">Jay Baker</p>
                                                <p className="text-muted">Wow that's great</p>
                                            </div>
                                        </Link>
    
                                    </div>
                                </div>
                               
                                <div className="email-rightbar mb-3">
        
                                    <Card>
                                        <div className="card-body">
                                            <form>
                                                <div className="form-group">
                                                    <input type="email" className="form-control" placeholder="To" />
                                                </div>
        
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Subject" />
                                                </div>
                                                <div className="form-group">
                                                <div className="summernote">
                                               
                                                <Editor
                                                    toolbarClassName="toolbarClassName"
                                                    wrapperClassName="wrapperClassName"
                                                    editorClassName="editorClassName" />
                                                

                                                </div>
                                                </div>
        
                                                <div className="btn-toolbar form-group mb-0">
                                                    <div className="">
                                                        <button type="button" className="btn btn-success waves-effect waves-light mr-1"><i className="far fa-save"></i></button>
                                                        <button type="button" className="btn btn-success waves-effect waves-light mr-1"><i className="far fa-trash-alt"></i></button>
                                                        <button className="btn btn-primary waves-effect waves-light"> <span>Send</span> <i className="fab fa-telegram-plane ml-1"></i> </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </Card>
                                </div> 
                            </Col>
                        </Row>   
                        </div>   
                        </div>
            </React.Fragment>
        );
    }
}

export default connect(null, { activateAuthLayout })(EmailCompose);

