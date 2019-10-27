import React, { Component } from 'react';
import { Row, Col, Card, CardBody,  Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';


import user1 from '../../../images/users/user-1.jpg';
import user2 from '../../../images/users/user-2.jpg';
import user3 from '../../../images/users/user-3.jpg';
import user4 from '../../../images/users/user-4.jpg';
import user6 from '../../../images/users/user-6.jpg';

import img3 from '../../../images/small/img-3.jpg';
import img4 from '../../../images/small/img-4.jpg';



class EmailRead extends Component {

    constructor(props) {
        super(props);
        this.state = {
            folder_menu: false,
            tag_menu: false,
            more_menu : false
        };
        this.toggleFolder = this.toggleFolder.bind(this);
        this.toggleTag = this.toggleTag.bind(this);
        this.toggleMore = this.toggleMore.bind(this);
    }

    componentDidMount() {
        this.props.activateAuthLayout();
    }


    toggleFolder() {
        this.setState(prevState => ({
            folder_menu: !prevState.folder_menu
        }));
    }

    toggleTag() {
        this.setState(prevState => ({
            tag_menu: !prevState.tag_menu
        }));
    }
    
    toggleMore() {
        this.setState(prevState => ({
            more_menu: !prevState.more_menu
        }));
    }
    

    render() {

        return (
            <React.Fragment>
                    
                    <div className="content">
                        <div className="container-fluid">
                            <div className="page-title-box">
                                <Row className="align-items-center">
                                    <Col sm="6">
                                        <h4 className="page-title">Email Read</h4>
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                            <li className="breadcrumb-item"><Link to="#">Email</Link></li>
                                            <li className="breadcrumb-item active">Email Read</li>
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
                                <Card className="email-leftbar">
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
                                </Card>

                                <div className="email-rightbar mb-3">
                                    
                                    <Card>
                                        <div className="btn-toolbar p-3" role="toolbar">
                                            <div className="btn-group mb-2 mb-sm-0">
                                                <button type="button" className="btn btn-primary waves-light waves-effect"><i className="fa fa-inbox"></i></button>
                                                <button type="button" className="btn btn-primary waves-light waves-effect"><i className="fa fa-exclamation-circle"></i></button>
                                                <button type="button" className="btn btn-primary waves-light waves-effect"><i className="far fa-trash-alt"></i></button>
                                            </div>
                                            <div className="btn-group ml-1 mb-2 mb-sm-0">
                                            <Dropdown isOpen={this.state.folder_menu} toggle={this.toggleFolder}>
                                            <DropdownToggle className="btn btn-primary waves-effect waves-light" caret>
                                            <i className="fa fa-folder"></i>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem tag="a" href="#">Updates</DropdownItem>
                                                <DropdownItem tag="a" href="#">Social</DropdownItem>
                                                <DropdownItem tag="a" href="#">Team Manage</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                            </div>

                                            <div className="btn-group ml-1 mb-2 mb-sm-0">

                                            <Dropdown isOpen={this.state.tag_menu} toggle={this.toggleTag}>
                                            <DropdownToggle className="btn btn-primary waves-effect waves-light" caret>
                                            <i className="fa fa-tag"></i>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem tag="a" href="#">Updates</DropdownItem>
                                                <DropdownItem tag="a" href="#">Social</DropdownItem>
                                                <DropdownItem tag="a" href="#">Team Manage</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                            </div>
            
                                            <div className="btn-group ml-1 mb-2 mb-sm-0">
                                            <Dropdown isOpen={this.state.more_menu} toggle={this.toggleMore}>
                                            <DropdownToggle className="btn btn-primary waves-effect waves-light" caret>
                                            More
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem tag="a" href="#">Mark as Unread</DropdownItem>
                                                <DropdownItem tag="a" href="#">Mark as Important</DropdownItem>
                                                <DropdownItem tag="a" href="#">Add to Tasks</DropdownItem>
                                                <DropdownItem tag="a" href="#">Add Star</DropdownItem>
                                                <DropdownItem tag="a" href="#">Mute</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                            </div>
                                        </div>
                                        <CardBody>
        
                                            <div className="media mb-4">
                                                <img className="d-flex mr-3 rounded-circle thumb-md" src={user1} alt="Veltrix" />
                                                <div className="media-body">
                                                    <h4 className="font-14 m-0">Humberto D. Champion</h4>
                                                    <small className="text-muted">support@domain.com</small>
                                                </div>
                                            </div>
        
                                            <h4 className="mt-0 font-16">This Week's Top Stories</h4>
        
                                            <p>Dear Lorem Ipsum,</p>
                                            <p>Praesent dui ex, dapibus eget mauris ut, finibus vestibulum enim. Quisque arcu leo, facilisis in fringilla id, luctus in tortor. Nunc vestibulum est quis orci varius viverra. Curabitur dictum volutpat massa vulputate molestie. In at felis ac velit maximus
                                                convallis.</p>
                                            <p>Sed elementum turpis eu lorem interdum, sed porttitor eros commodo. Nam eu venenatis tortor, id lacinia diam. Sed aliquam in dui et porta. Sed bibendum orci non tincidunt ultrices. Vivamus fringilla, mi lacinia dapibus condimentum, ipsum urna lacinia
                                                lacus, vel tincidunt mi nibh sit amet lorem.</p>
                                            <p>Sincerly,</p>
                                            <hr/>
        
                                            <Row>
                                                <div className="col-xl-2 col-6">
                                                    <Card>
                                                        <img className="card-img-top img-fluid" src={img3}  alt="Veltrix" />
                                                        <div className="py-2 text-center">
                                                            <Link to="" className="font-500">Download</Link>
                                                        </div>
                                                    </Card>
                                                </div>
                                            <div className="col-xl-2 col-6">
                                                    <Card>
                                                        <img className="card-img-top img-fluid" src={img4}  alt="Veltrix" />
                                                        <div className="py-2 text-center">
                                                            <Link to="" className="font-500">Download</Link>
                                                        </div>
                                                    </Card>
                                                </div>
                                            </Row>
        
                                            <Link to="email-compose" className="btn btn-secondary waves-effect mt-4"><i className="mdi mdi-reply"></i> Reply</Link>
                                        </CardBody>
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


export default connect(null, { activateAuthLayout })(EmailRead);
