import React, { Component } from 'react';
import { Button, Row, Col, Card, CardBody, Popover, PopoverHeader, PopoverBody, Tooltip, Dropdown, DropdownToggle,ButtonDropdown, DropdownMenu, DropdownItem } from 'reactstrap';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';
import { Link } from 'react-router-dom';


class Uigeneral extends Component {

    constructor(props) {
        super(props);

        this.state = {};

        this.toggletop = this.toggletop.bind(this);
        this.toggleright = this.toggleright.bind(this);
        this.toggleleft = this.toggleleft.bind(this);
        this.togglebottom = this.togglebottom.bind(this);
        this.toggledismiss = this.toggledismiss.bind(this);
        this.toggledismissclose = this.toggledismissclose.bind(this);

        this.ttop = this.ttop.bind(this);
        this.tleft = this.tleft.bind(this);
        this.tright = this.tright.bind(this);
        this.tbottom = this.tbottom.bind(this);

        this.state = {
            popovertop: false,
            popoverleft: false,
            popoverright: false,
            popoverbottom: false,

            tttop: false,
            ttleft: false,
            ttright: false,
            ttbottom: false,

        };
    }

    componentDidMount() {
        this.props.activateAuthLayout();
    }


    toggletop() { this.setState({ popovertop: !this.state.popovertop }); }
    toggleleft() { this.setState({ popoverleft: !this.state.popoverleft }); }
    toggleright() { this.setState({ popoverright: !this.state.popoverright }); }
    togglebottom() { this.setState({ popoverbottom: !this.state.popoverbottom }); }
    toggledismiss() { this.setState({ popoverdismiss: !this.state.popoverdismiss }); }
    toggledismissclose() { this.setState({ popoverdismiss: false }); }

    ttop() { this.setState({ tttop: !this.state.tttop }); }
    tright() { this.setState({ ttright: !this.state.ttright }); }
    tbottom() { this.setState({ ttbottom: !this.state.ttbottom }); }
    tleft() { this.setState({ ttleft: !this.state.ttleft }); }

    render() {

        return (
            <React.Fragment>

                
<div className="content">
                        <div className="container-fluid">
                            <div className="page-title-box">
                                <Row className="align-items-center">
                                    <Col sm="6">
                                        <h4 className="page-title">General UI</h4>
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                            <li className="breadcrumb-item"><Link to="#">UI Elements</Link></li>
                                            <li className="breadcrumb-item active">General UI</li>
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
                    <Col lg="12">
                        <Card>
                            <CardBody>
                                <Row>
                                    <Col lg="6">
                                        <div>
                                            <h4 className="mt-0 header-title">Badges</h4>
                                            <p className="text-muted mb-4">Add any of the below mentioned modifier classes to change the appearance of a badge.</p>
                                            <div className="mb-5">
                                                <span className="badge badge-primary">Primary</span>{' '}
                                                <span className="badge badge-success">Success</span>{' '}
                                                <span className="badge badge-info">Info</span>{' '}
                                                <span className="badge badge-warning">Warning</span>{' '}
                                                <span className="badge badge-danger">Danger</span>{' '}
                                                <span className="badge badge-dark">Dark</span>{' '}
                                            </div>
                                            <h5 className="font-14">Badges Lighten</h5>
                                            <p className="text-muted mb-4">Use the <code>badge-soft-* </code> class for badge lighten.</p>
                                            <div>
                                                <span className="badge badge-soft-primary">Primary</span>{' '}
                                                <span className="badge badge-soft-success">Success</span>{' '}
                                                <span className="badge badge-soft-info">Info</span>{' '}
                                                <span className="badge badge-soft-warning">Warning</span>{' '}
                                                <span className="badge badge-soft-danger">Danger</span>{' '}
                                                <span className="badge badge-soft-dark">Dark</span>{' '}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg="6">
                                        <div>
                                            <h4 className="header-title mt-4 mt-lg-0">Pill Badges</h4>
                                            <p className="text-muted mb-4">Use the <code>.badge-pill</code> modifier class to make
                                                    badges more rounded (with a larger <code>border-radius</code>
                                                and additional horizontal <code>padding</code>).
                                                    Useful if you miss the badges from v3.</p>

                                            <div>
                                                <span className="badge badge-pill badge-primary">Primary</span>{' '}
                                                <span className="badge badge-pill badge-success">Success</span>{' '}
                                                <span className="badge badge-pill badge-info">Info</span>{' '}
                                                <span className="badge badge-pill badge-warning">Warning</span>{' '}
                                                <span className="badge badge-pill badge-danger">Danger</span>{' '}
                                                <span className="badge badge-pill badge-dark">Dark</span>{' '}
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                            </CardBody>
                        </Card>

                    </Col>
                </Row>

                <Row>
                    <Col lg="6">
                        <Card>
                            <CardBody>
                                <h4 className="mt-0 header-title">Dropdowns</h4>
                                <p className="text-muted">The best part is you can do this with any button variant, too:</p>

                                <div className="btn-group mt-1 mr-1">
                                <Dropdown isOpen={this.state.drp_main} toggle={() => this.setState({ drp_main: !this.state.drp_main })}>
                                                    <DropdownToggle className="btn btn-primary" caret>
                                                    Primary{' '}
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem>Action</DropdownItem>
                                                        <DropdownItem>Another action</DropdownItem>
                                                        <DropdownItem>Something else here</DropdownItem>
                                                        <div className="dropdown-divider"></div>
                                                        <DropdownItem>Separated link</DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown> 
                                </div>

                                <div className="btn-group mt-1 mr-1">
                                <Dropdown isOpen={this.state.drp_success} toggle={() => this.setState({ drp_success: !this.state.drp_success })}>
                                                    <DropdownToggle className="btn btn-success" caret>
                                                    Success{' '}
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem>Action</DropdownItem>
                                                        <DropdownItem>Another action</DropdownItem>
                                                        <DropdownItem>Something else here</DropdownItem>
                                                        <div className="dropdown-divider"></div>
                                                        <DropdownItem>Separated link</DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown> 
                                </div>

                                <div className="btn-group mt-1 mr-1">
                                <Dropdown isOpen={this.state.drp_info} toggle={() => this.setState({ drp_info: !this.state.drp_info })}>
                                                    <DropdownToggle className="btn btn-info" caret>
                                                    Info{' '}
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem>Action</DropdownItem>
                                                        <DropdownItem>Another action</DropdownItem>
                                                        <DropdownItem>Something else here</DropdownItem>
                                                        <div className="dropdown-divider"></div>
                                                        <DropdownItem>Separated link</DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown> 
                                </div>

                                <div className="btn-group mt-1 mr-1">
                                <Dropdown isOpen={this.state.drp_warning} toggle={() => this.setState({ drp_warning: !this.state.drp_warning })}>
                                                    <DropdownToggle className="btn btn-warning" caret>
                                                    Warning{' '}
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem>Action</DropdownItem>
                                                        <DropdownItem>Another action</DropdownItem>
                                                        <DropdownItem>Something else here</DropdownItem>
                                                        <div className="dropdown-divider"></div>
                                                        <DropdownItem>Separated link</DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown> 
                                </div>

                                <div className="btn-group mt-1 mr-1">
                                <Dropdown isOpen={this.state.drp_danger} toggle={() => this.setState({ drp_danger: !this.state.drp_danger })}>
                                                    <DropdownToggle className="btn btn-danger" caret>
                                                    Danger{' '}
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem>Action</DropdownItem>
                                                        <DropdownItem>Another action</DropdownItem>
                                                        <DropdownItem>Something else here</DropdownItem>
                                                        <div className="dropdown-divider"></div>
                                                        <DropdownItem>Separated link</DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown> 
                                </div>
                                
                                
                               
                            </CardBody>
                        </Card>
                    </Col>

                    <Col lg="6">
                        <Card>
                            <CardBody>
                                <h4 className="mt-0 header-title">Split Button Dropdowns</h4>
                                <p className="text-muted">Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of <code>.dropdown-toggle-split</code> for proper spacing around the dropdown caret.</p>

                                <div className="btn-group mt-1 mr-1">
                                             <ButtonDropdown isOpen={this.state.drp_primary1} toggle={() => this.setState({ drp_primary1: !this.state.drp_primary1 })}>
                                                <Button id="caret" color="primary">Primary</Button>
                                                <DropdownToggle caret color="primary">
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem>Action</DropdownItem>
                                                    <DropdownItem>Another action</DropdownItem>
                                                    <DropdownItem>Something else here</DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>Seperated link</DropdownItem>
                                                </DropdownMenu>
                                            </ButtonDropdown>
                                </div>


                                <div className="btn-group mt-1 mr-1">
                                             <ButtonDropdown isOpen={this.state.drp_success1} toggle={() => this.setState({ drp_success1: !this.state.drp_success1 })}>
                                                <Button id="caret" color="success">Success</Button>
                                                <DropdownToggle caret color="success">
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem>Action</DropdownItem>
                                                    <DropdownItem>Another action</DropdownItem>
                                                    <DropdownItem>Something else here</DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>Seperated link</DropdownItem>
                                                </DropdownMenu>
                                            </ButtonDropdown>
                                </div>

                                <div className="btn-group mt-1 mr-1">
                                             <ButtonDropdown isOpen={this.state.drp_info1} toggle={() => this.setState({ drp_info1: !this.state.drp_info1 })}>
                                                <Button id="caret" color="info">Info</Button>
                                                <DropdownToggle caret color="info">
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem>Action</DropdownItem>
                                                    <DropdownItem>Another action</DropdownItem>
                                                    <DropdownItem>Something else here</DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>Seperated link</DropdownItem>
                                                </DropdownMenu>
                                            </ButtonDropdown>
                                </div>

                                <div className="btn-group mt-1 mr-1">
                                             <ButtonDropdown isOpen={this.state.drp_warning1} toggle={() => this.setState({ drp_warning1: !this.state.drp_warning1 })}>
                                                <Button id="caret" color="warning">Success</Button>
                                                <DropdownToggle caret color="warning">
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem>Action</DropdownItem>
                                                    <DropdownItem>Another action</DropdownItem>
                                                    <DropdownItem>Something else here</DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>Seperated link</DropdownItem>
                                                </DropdownMenu>
                                            </ButtonDropdown>
                                </div>

                                <div className="btn-group mt-1 mr-1">
                                             <ButtonDropdown isOpen={this.state.drp_danger1} toggle={() => this.setState({ drp_danger1: !this.state.drp_danger1 })}>
                                                <Button id="caret" color="danger">Danger</Button>
                                                <DropdownToggle caret color="danger">
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem>Action</DropdownItem>
                                                    <DropdownItem>Another action</DropdownItem>
                                                    <DropdownItem>Something else here</DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>Seperated link</DropdownItem>
                                                </DropdownMenu>
                                            </ButtonDropdown>
                                </div>

                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col lg="6">
                        <Card>
                            <CardBody>
                                <h4 className="mt-0 header-title">Dropdown Directions</h4>
                                <p className="text-muted">Trigger dropdown menus above elements by adding <code>.dropup</code>, <code>.dropright</code> and <code>.dropleft</code> to the parent element.</p>

                               
                                <div className="btn-group mt-1 mr-1">
                                <Dropdown  direction="up"  isOpen={this.state.drp_primary_dir} toggle={() => this.setState({ drp_primary_dir: !this.state.drp_primary_dir })}>
                                                    <DropdownToggle className="btn btn-primary" caret>
                                                    Dropup{' '}
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem>Action</DropdownItem>
                                                        <DropdownItem>Another action</DropdownItem>
                                                        <DropdownItem>Something else here</DropdownItem>
                                                        <div className="dropdown-divider"></div>
                                                        <DropdownItem>Separated link</DropdownItem>
                                                    </DropdownMenu>
                                        </Dropdown> 
                                        </div>

                                        <div className="btn-group mt-1 mr-1">
                                        <Dropdown  direction="right"  isOpen={this.state.drp_success_dir} toggle={() => this.setState({ drp_success_dir: !this.state.drp_success_dir })}>
                                                    <DropdownToggle className="btn btn-success" caret>
                                                    Dropright{' '}
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem>Action</DropdownItem>
                                                        <DropdownItem>Another action</DropdownItem>
                                                        <DropdownItem>Something else here</DropdownItem>
                                                        <div className="dropdown-divider"></div>
                                                        <DropdownItem>Separated link</DropdownItem>
                                                    </DropdownMenu>
                                        </Dropdown> 
                                        </div>

                                        <div className="btn-group mt-1 mr-1">
                                        <Dropdown  direction="left"  isOpen={this.state.drp_warning_dir} toggle={() => this.setState({ drp_warning_dir: !this.state.drp_warning_dir })}>
                                                    <DropdownToggle className="btn btn-warning" caret>
                                                    Dropleft{' '}
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem>Action</DropdownItem>
                                                        <DropdownItem>Another action</DropdownItem>
                                                        <DropdownItem>Something else here</DropdownItem>
                                                        <div className="dropdown-divider"></div>
                                                        <DropdownItem>Separated link</DropdownItem>
                                                    </DropdownMenu>
                                        </Dropdown> 
                                               </div>

                                               <div className="btn-group mt-1 mr-1">
                                        <Dropdown  direction="down"  isOpen={this.state.drp_danger_dir} toggle={() => this.setState({ drp_danger_dir: !this.state.drp_danger_dir })}>
                                                    <DropdownToggle className="btn btn-danger" caret>
                                                    Dropdown{' '}
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem>Action</DropdownItem>
                                                        <DropdownItem>Another action</DropdownItem>
                                                        <DropdownItem>Something else here</DropdownItem>
                                                        <div className="dropdown-divider"></div>
                                                        <DropdownItem>Separated link</DropdownItem>
                                                    </DropdownMenu>
                                        </Dropdown> 
                                               </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="6">
                        <Card>
                            <CardBody>
                                <h4 className="mt-0 header-title">Menu Alignment</h4>
                                <p className="text-muted">Add <code>.dropdown-menu-right</code>
                                    to a <code>.dropdown-menu</code> to right
                                            align the dropdown menu.</p>

                                        <div className="btn-group mt-1">
                                        <Dropdown  isOpen={this.state.drp_sec_dir} toggle={() => this.setState({ drp_sec_dir: !this.state.drp_sec_dir })}>
                                                    <DropdownToggle className="btn btn-secondary" caret>
                                                    Menu is right-aligned
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem>Action</DropdownItem>
                                                        <DropdownItem>Another action</DropdownItem>
                                                        <DropdownItem>Something else here</DropdownItem>
                                                        <div className="dropdown-divider"></div>
                                                        <DropdownItem>Separated link</DropdownItem>
                                                    </DropdownMenu>
                                        </Dropdown> 
                                    </div>

                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col lg="12">
                        <Card>
                            <CardBody>
                                <h4 className="mt-0 header-title mb-4">Pagination</h4>

                                <Row>
                                    <Col lg="6">
                                        <h5 className="font-16 mt-0">Default Example</h5>
                                        <p className="text-muted">Pagination links indicate a series of related content exists across multiple pages.</p>

                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className="page-item"><Link className="page-link" to="#">Previous</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">Next</Link></li>
                                            </ul>
                                        </nav>

                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className="page-item">
                                                    <Link className="page-link" to="#" aria-label="Previous">
                                                        <span aria-hidden="true">&laquo;</span>
                                                        <span className="sr-only">Previous</span>
                                                    </Link>
                                                </li>
                                                <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="#" aria-label="Next">
                                                        <span aria-hidden="true">&raquo;</span>
                                                        <span className="sr-only">Next</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>

                                    </Col>

                                    <Col lg="6">
                                        <h5 className="font-16 mt-0">Disabled and Active States</h5>
                                        <p className="text-muted">Pagination links are customizable for
                                                        different circumstances. Use <code>.disabled</code> for links that appear
                                                        un-clickable and <code>.active</code> to
                                                        indicate the current page.</p>


                                        <nav aria-label="...">
                                            <ul className="pagination">
                                                <li className="page-item disabled">
                                                    <Link className="page-link" to="#" tabIndex="-1">Previous</Link>
                                                </li>
                                                <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                                <li className="page-item active">
                                                    <Link className="page-link" to="#">2 <span className="sr-only">(current)</span></Link>
                                                </li>
                                                <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="#">Next</Link>
                                                </li>
                                            </ul>
                                        </nav>

                                        <nav aria-label="...">
                                            <ul className="pagination">
                                                <li className="page-item disabled">
                                                    <span className="page-link">Previous</span>
                                                </li>
                                                <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                                <li className="page-item active">
                                                    <span className="page-link">
                                                        2
                                                                <span className="sr-only">(current)</span>
                                                    </span>
                                                </li>
                                                <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="#">Next</Link>
                                                </li>
                                            </ul>
                                        </nav>


                                    </Col>
                                </Row>

                                <Row>
                                    <Col lg="6">
                                        <h5 className="font-16 mt-4">Sizing</h5>
                                        <p className="text-muted">Fancy larger or smaller pagination? Add <code>.pagination-lg</code> or <code>.pagination-sm</code> for additional
                                                        sizes.</p>

                                        <nav aria-label="...">
                                            <ul className="pagination pagination-lg">
                                                <li className="page-item disabled">
                                                    <Link className="page-link" to="#" tabIndex="-1">Previous</Link>
                                                </li>
                                                <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="#">Next</Link>
                                                </li>
                                            </ul>
                                        </nav>

                                        <nav aria-label="...">
                                            <ul className="pagination pagination-sm mb-0">
                                                <li className="page-item disabled">
                                                    <Link className="page-link" to="#" tabIndex="-1">Previous</Link>
                                                </li>
                                                <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="#">Next</Link>
                                                </li>
                                            </ul>
                                        </nav>

                                    </Col>

                                    <Col lg="6">
                                        <h5 className="font-16 mt-4">Alignment</h5>
                                        <p className="text-muted">Change the alignment of pagination
                                                        components with flexbox utilities.</p>

                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination justify-content-center">
                                                <li className="page-item disabled">
                                                    <Link className="page-link" to="#" tabIndex="-1">Previous</Link>
                                                </li>
                                                <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="#">Next</Link>
                                                </li>
                                            </ul>
                                        </nav>

                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination justify-content-end">
                                                <li className="page-item disabled">
                                                    <Link className="page-link" to="#" tabIndex="-1">Previous</Link>
                                                </li>
                                                <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="#">Next</Link>
                                                </li>
                                            </ul>
                                        </nav>

                                    </Col>
                                </Row>

                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col lg="6">
                        <Card>
                            <CardBody>

                                <h4 className="mt-0 header-title">Popovers</h4>
                                <p className="text-muted">Add small overlay content, like those found in iOS, to any element for housing secondary information.</p>

                                <div className="button-items">
                                <Button id="Popovertop" onClick={this.toggletop} className="btn btn-secondary">
                                          Popover on top
                                        </Button>
                                        <Popover placement="top" isOpen={this.state.popovertop} target="Popovertop" toggle={this.toggletop}>
                                          <PopoverHeader>Popover Title</PopoverHeader>
                                          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                        </Popover> &nbsp;
       
                                        <Button id="Popoverright" onClick={this.toggleright} className="btn btn-secondary">
                                          Popover on right
                                        </Button>
                                        <Popover placement="right" isOpen={this.state.popoverright} target="Popoverright" toggle={this.toggleright}>
                                          <PopoverHeader>Popover Title</PopoverHeader>
                                          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                        </Popover> &nbsp;

                                        <Button id="Popoverbottom" onClick={this.togglebottom} className="btn btn-secondary">
                                          Popover on bottom
                                        </Button>
                                        <Popover placement="bottom" isOpen={this.state.popoverbottom} target="Popoverbottom" toggle={this.togglebottom}>
                                          <PopoverHeader>Popover Title</PopoverHeader>
                                          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                        </Popover> &nbsp;

                                          <Button id="Popoverleft" onClick={this.toggleleft} className="btn btn-secondary">
                                          Popover on left
                                        </Button>
                                        <Popover placement="left" isOpen={this.state.popoverleft} target="Popoverleft" toggle={this.toggleleft}>
                                          <PopoverHeader>Popover Title</PopoverHeader>
                                          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                        </Popover> &nbsp;

                                       <Button id="Popoverdismiss"  className="btn btn-success mt-2" onClick={this.toggledismiss}>
                                          Dismissible popover
                                        </Button>
                                        <Popover  onClick={this.toggledismissclose} placement="bottom" isOpen={this.state.popoverdismiss} target="Popoverdismiss" toggle={this.toggledismiss}>
                                          <PopoverHeader>Popover Title</PopoverHeader>
                                          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                        </Popover>
                                   </div>

                            </CardBody>
                        </Card>

                    </Col>

                    <Col lg="6">
                        <Card>
                            <CardBody>

                                <h4 className="mt-0 header-title">Tooltips</h4>
                                <p className="text-muted">Hover over the links below to see tooltips:</p>

                                <div className="button-items">
                                <Tooltip placement="top" isOpen={this.state.tttop} target="TooltipTop" toggle={()=> this.setState({ tttop: !this.state.tttop  })}>Hello world!</Tooltip>
                                <Tooltip placement="right" isOpen={this.state.ttright} target="TooltipRight" toggle={()=> this.setState({ ttright: !this.state.ttright  })}>Hello world!</Tooltip>
                                <Tooltip placement="bottom" isOpen={this.state.ttbottom} target="TooltipBottom" toggle={()=> this.setState({ ttbottom: !this.state.ttbottom  })}>Hello world!</Tooltip>
                                <Tooltip placement="left" isOpen={this.state.ttleft} target="TooltipLeft" toggle={()=> this.setState({ ttleft: !this.state.ttleft  })}>Hello world!</Tooltip>
                          
                            <button type="button" className="btn btn-primary" id="TooltipTop"> Tooltip on top</button>{' '}
                            <button type="button" className="btn btn-primary" id="TooltipBottom"> Tooltip on Bottom</button>{' '}
                            <button type="button" className="btn btn-primary" id="TooltipLeft"> Tooltip on Left</button>{' '}
                            <button type="button" className="btn btn-primary" id="TooltipRight"> Tooltip on Right</button>
                                </div>

                            </CardBody>
                        </Card>

                    </Col>
                </Row>

                <Row>
                    <Col lg="12">
                        <Card>
                            <CardBody>
                                <h4 className="mt-0 header-title">Breadcrumb</h4>
                                <p className="text-muted">Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.</p>

                                <Row>
                                    <Col md="6">
                                        <div>
                                            <nav aria-label="breadcrumb">
                                                <ol className="breadcrumb bg-transparent">
                                                    <li className="breadcrumb-item active" aria-current="page">Home</li>
                                                </ol>
                                            </nav>

                                            <nav aria-label="breadcrumb">
                                                <ol className="breadcrumb bg-transparent">
                                                    <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                                    <li className="breadcrumb-item active" aria-current="page">Library</li>
                                                </ol>
                                            </nav>

                                            <nav aria-label="breadcrumb">
                                                <ol className="breadcrumb bg-transparent">
                                                    <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                                    <li className="breadcrumb-item"><Link to="#">Library</Link></li>
                                                    <li className="breadcrumb-item active" aria-current="page">Data</li>
                                                </ol>
                                            </nav>
                                        </div>
                                    </Col>
                                    <Col md="6">
                                        <div>
                                            <nav aria-label="breadcrumb">
                                                <ol className="breadcrumb bg-transparent">
                                                    <li className="breadcrumb-item active" aria-current="page"><i className="mdi mdi-home-outline"></i></li>
                                                </ol>
                                            </nav>

                                            <nav aria-label="breadcrumb">
                                                <ol className="breadcrumb bg-transparent">
                                                    <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                                    <li className="breadcrumb-item active" aria-current="page">Library</li>
                                                </ol>
                                            </nav>

                                            <nav aria-label="breadcrumb">
                                                <ol className="breadcrumb bg-transparent">
                                                    <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                                    <li className="breadcrumb-item"><Link to="#">Library</Link></li>
                                                    <li className="breadcrumb-item active" aria-current="page">Data</li>
                                                </ol>
                                            </nav>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col lg="6">
                        <Card>
                            <CardBody>
                                <h4 className="mt-0 header-title">Border Spinner</h4>
                                <p className="text-muted">Use the border spinners for a lightweight loading indicator.</p>
                                <div>
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-border text-secondary" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-border text-success" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-border text-info" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-border text-warning" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-border text-danger" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-border text-dark" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>

                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="6">
                        <Card>
                            <CardBody>
                                <h4 className="mt-0 header-title">Growing Spinner</h4>
                                <p className="text-muted">If you don’t fancy a border spinner, switch to the grow spinner. While it doesn’t technically spin, it does repeatedly grow!</p>
                                <div>
                                    <div className="spinner-grow text-primary" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-grow text-secondary" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-grow text-success" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-grow text-info" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-grow text-warning" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-grow text-danger" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-grow text-dark" role="status">
                                        <span className="sr-only">Loading...</span>
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


export default connect(null, { activateAuthLayout })(Uigeneral);


