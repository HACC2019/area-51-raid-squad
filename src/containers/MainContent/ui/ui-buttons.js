import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button, DropdownToggle,ButtonGroup, DropdownMenu, DropdownItem, ButtonDropdown } from 'reactstrap';
import { Link } from 'react-router-dom';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';


class Uibuttons extends Component {

    constructor(props) {
        super(props);
        this.state = { cSelected: [] };

        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
        this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);

    }

    onRadioBtnClick(rSelected) {
        this.setState({ rSelected });
    }

    onCheckboxBtnClick(selected) {
        const index = this.state.cSelected.indexOf(selected);
        if (index < 0) {
            this.state.cSelected.push(selected);
        } else {
            this.state.cSelected.splice(index, 1);
        }
        this.setState({ cSelected: [...this.state.cSelected] });
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
                                    <h4 className="page-title">Buttons</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                        <li className="breadcrumb-item"><Link to="#">UI Elements</Link></li>
                                        <li className="breadcrumb-item active">Buttons</li>
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
                                        <h4 className="mt-0 header-title">Default Buttons</h4>
                                        <p className="text-muted">Bootstrap includes six predefined button styles, each serving its own semantic purpose.</p>
                                        <div className="button-items">

                                            <Button color="primary">Primary</Button>{' '}
                                            <Button color="secondary">Secondary</Button>{' '}
                                            <Button color="success">Success</Button>{' '}
                                            <Button color="info">Info</Button>{' '}
                                            <Button color="warning">Warning</Button>{' '}
                                            <Button color="danger">Danger</Button>{' '}
                                            <Button color="dark">Dark</Button>{' '}
                                            <Button color="link">Link</Button>{' '}
                                            <Button color="light">Light</Button>{' '}

                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title">Outline Buttons</h4>
                                        <p className="text-muted">Replace the default modifier classes with the <code className="highlighter-rouge">.btn-outline-*</code> ones to remove all background images and colors on any button.</p>
                                        <div className="button-items">

                                            <Button outline color="primary">Primary</Button>{' '}
                                            <Button outline color="secondary">Secondary</Button>{' '}
                                            <Button outline color="success">Success</Button>{' '}
                                            <Button outline color="info">Info</Button>{' '}
                                            <Button outline color="warning">Warning</Button>{' '}
                                            <Button outline color="danger">Danger</Button>{' '}
                                            <Button outline color="dark">Dark</Button>{' '}
                                            <Button outline color="light">Light</Button>{' '}

                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title">Rounded Buttons</h4>
                                        <p className="text-muted">Use class <code>.btn-rounded</code> for button round border.</p>
                                        <div className="button-items">

                                            <Button className="btn-rounded" color="primary">Primary</Button>{' '}
                                            <Button className="btn-rounded" color="secondary">Secondary</Button>{' '}
                                            <Button className="btn-rounded" color="success">Success</Button>{' '}
                                            <Button className="btn-rounded" color="info">Info</Button>{' '}
                                            <Button className="btn-rounded" color="warning">Warning</Button>{' '}
                                            <Button className="btn-rounded" color="danger">Danger</Button>{' '}
                                            <Button className="btn-rounded" color="dark">Dark</Button>{' '}
                                            <Button className="btn-rounded" color="link">Link</Button>{' '}
                                            <Button className="btn-rounded" color="light">Light</Button>{' '}

                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title">Buttons With Icon Labels</h4>
                                        <p className="text-muted">Use class <code>.btn-rounded</code> for button round border.</p>

                                        <div className="button-items" dir="ltr">

                                            <Button className="btn-icon" color="primary"> <span className="btn-icon-label"><i className="mdi mdi-bullseye-arrow mr-2"></i></span> Primary</Button>{' '}
                                            <Button className="btn-icon" color="success"> <span className="btn-icon-label"><i className="mdi mdi-check-all mr-2"></i></span> Success</Button>{' '}
                                            <Button className="btn-icon" color="warning"> <span className="btn-icon-label"><i className="mdi mdi-alert-outline mr-2"></i></span> Warning</Button>{' '}
                                            <Button className="btn-icon" color="danger">  <span className="btn-icon-label"><i className="mdi mdi-block-helper mr-2"></i></span> Danger</Button>{' '}

                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="6">
                                <Card>
                                    <CardBody>

                                        <h4 className="mt-0 header-title">Buttons Sizes</h4>
                                        <p className="text-muted">Add <code>.btn-lg</code> or <code>.btn-sm</code> for additional sizes.
                                        </p>

                                        <div className="button-items">

                                            <Button className="waves-effect waves-light" size="lg" color="primary">Large button</Button>{' '}
                                            <Button className="waves-effect waves-light" size="lg" color="secondary">Large button</Button>{' '}
                                            <Button className="waves-effect waves-light" size="sm" color="primary">Small button</Button>{' '}
                                            <Button className="waves-effect waves-light" size="sm" color="secondary">Small button</Button>{' '}

                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title">Buttons Width</h4>
                                        <p className="text-muted">Add size is <code>xs</code>, <code>sm</code>, <code>md</code> and <code>lg</code> for additional buttons width.
                                        </p>

                                        <div className="button-items">
                                            <Button className="waves-effect waves-light" size="xs" color="primary">Xs</Button>{' '}
                                            <Button className="waves-effect waves-light" size="sm" color="danger">Small</Button>{' '}
                                            <Button className="waves-effect waves-light" size="md" color="warning">Medium</Button>{' '}
                                            <Button className="waves-effect waves-light" size="lg" color="success">Large</Button>{' '}

                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="6">
                                <Card>
                                    <CardBody>

                                        <h4 className="mt-0 header-title">Button Tags</h4>
                                        <p className="text-muted">The <code className="highlighter-rouge">.btn</code>
                                            classes are designed to be used with the <code
                                                className="highlighter-rouge">&lt;button&gt;</code> element.
                                            However, you can also use these classes on <code
                                                className="highlighter-rouge">&lt;a&gt;</code> or <code
                                                    className="highlighter-rouge">&lt;input&gt;</code> elements (though
                                            some browsers may apply a slightly different rendering).</p>

                                        <div className="button-items">
                                            <Link className="btn btn-primary waves-effect waves-light" to="#" role="button">Link</Link>{' '}
                                            <Button type="submit" className="waves-effect waves-light" color="success">Button</Button>{' '}
                                            <input className="btn btn-info" type="button" value="Input" />{' '}
                                            <input className="btn btn-danger" type="submit" value="Submit" />{' '}
                                            <input className="btn btn-warning" type="reset" value="Reset" />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="6">
                                <Card>
                                    <CardBody>

                                        <h4 className="mt-0 header-title">Toggle States</h4>
                                        <p className="text-muted">Add <code className="highlighter-rouge">data-toggle="button"</code>
                                            to toggle a button’s <code className="highlighter-rouge">active</code>
                                            state. If you’re pre-toggling a button, you must manually add the <code
                                                className="highlighter-rouge">.active</code> class
                                            <strong>and</strong> <code
                                                className="highlighter-rouge">aria-pressed="true"</code> to the
                                            <code className="highlighter-rouge">&lt;button&gt;</code>.
                                        </p>

                                        <div className="button-items">
                                            <button type="button" className="btn btn-primary waves-effect waves-light" data-toggle="button" aria-pressed="false">
                                                Single toggle
                                            </button>

                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>

                        </Row>

                        <Row>
                            <Col lg="6">
                                <Card>
                                    <CardBody>

                                        <div className="button-items">

                                            <Button className="btn waves-effect btn-block btn-lg waves-light" color="primary"> Block level Button</Button>{' '}
                                            <Button className="btn waves-effect btn-block btn-sm waves-light" color="secondary"> Block level Button</Button>{' '}

                                        </div>
                                    </CardBody>
                                </Card>

                            </Col>

                            <Col lg="6">
                                <Card>
                                    <CardBody>

                                        <h4 className="mt-0 header-title">Checkbox & Radio Buttons</h4>
                                        <p className="text-muted">Bootstrap’s <code
                                            className="highlighter-rouge">.button</code> styles can be applied to
                                            other elements, such as <code className="highlighter-rouge">
                                                &lt;label&gt;</code>s, to provide checkbox or radio style button
                                            toggling. Add <code
                                                className="highlighter-rouge">data-toggle="buttons"</code> to a
                                            <code className="highlighter-rouge">.btn-group</code> containing those
                                            modified buttons to enable toggling in their respective styles.</p>

                                            <Row>
                                    <Col xl="6">

                                        <ButtonGroup className="mt-2 mt-xl-0">
                                            <Button color="primary" onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}>Checked-1</Button>
                                            <Button color="primary" onClick={() => this.onCheckboxBtnClick(2)} active={this.state.cSelected.includes(2)}>Checked-2</Button>
                                            <Button color="primary" onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}>Checked-3</Button>
                                        </ButtonGroup>

                                    </Col>
                                    <Col xl="6">

                                        <ButtonGroup className="mt-2 mt-xl-0">
                                            <Button color="secondary" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>Active</Button>
                                            <Button color="secondary" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>Radio</Button>
                                            <Button color="secondary" onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>Radio</Button>
                                        </ButtonGroup>

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

                                        <h4 className="mt-0 header-title">Button Group</h4>
                                        <p className="text-muted mb-4">Wrap a series of buttons with <code
                                            className="highlighter-rouge">.btn</code> in <code
                                                className="highlighter-rouge">.btn-group</code>.</p>

                                        <Row>
                                            <div className="col-md-6">
                                                <div className="btn-group" role="group" aria-label="Basic example">
                                                    <Button color="primary">Left</Button>{' '}
                                                    <Button color="primary">Middle</Button>{' '}
                                                    <Button color="primary">Right</Button>{' '}
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="btn-group mt-4 mt-md-0" role="group" aria-label="Basic example">
                                                    <button type="button" className="btn btn-secondary"><i className="mdi mdi-bullseye-arrow"></i></button>
                                                    <button type="button" className="btn btn-secondary"><i className="mdi mdi-account"></i></button>
                                                    <button type="button" className="btn btn-secondary"><i className="mdi mdi-cloud-check"></i></button>
                                                    <button type="button" className="btn btn-secondary"><i className="mdi mdi-link"></i></button>
                                                    <button type="button" className="btn btn-secondary"><i className="mdi mdi-invert-colors"></i></button>
                                                </div>
                                            </div>
                                        </Row>

                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="6">
                                <Card>
                                    <CardBody>

                                        <h4 className="mt-0 header-title">Button Toolbar</h4>
                                        <p className="text-muted">Combine sets of button groups into
                                            button toolbars for more complex components. Use utility classes as
                                            needed to space out groups, buttons, and more.</p>

                                        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                            <div className="btn-group mr-2" role="group" aria-label="First group">
                                                <Button color="secondary">1</Button>{' '}
                                                <Button color="secondary">2</Button>{' '}
                                                <Button color="secondary">3</Button>{' '}
                                                <Button color="secondary">4</Button>{' '}
                                            </div>
                                            <div className="btn-group mr-2" role="group" aria-label="Second group">
                                                <Button color="secondary">5</Button>{' '}
                                                <Button color="secondary">6</Button>{' '}
                                                <Button color="secondary">7</Button>{' '}
                                            </div>
                                            <div className="btn-group" role="group" aria-label="Third group">
                                                <Button color="secondary">8</Button>{' '}
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

                                        <h4 className="mt-0 header-title">Sizing</h4>
                                        <p className="text-muted">Instead of applying button sizing
                                            classes to every button in a group, just add <code
                                                className="highlighter-rouge">.btn-group-*</code> to each <code
                                                    className="highlighter-rouge">.btn-group</code>, including each one
                                            when nesting multiple groups.</p>

                                        <div className="btn-group btn-group-lg" role="group" aria-label="Basic example">
                                            <Button color="primary">Left</Button>{' '}
                                            <Button color="primary">Middle</Button>{' '}
                                            <Button color="primary">Right</Button>{' '}
                                        </div>

                                        <br />

                                        <div className="btn-group mt-2" role="group" aria-label="Basic example">
                                            <Button color="secondary">Left</Button>{' '}
                                            <Button color="secondary">Middle</Button>{' '}
                                            <Button color="secondary">Right</Button>{' '}
                                        </div>

                                        <br />

                                        <div className="btn-group btn-group-sm mt-2" role="group" aria-label="Basic example">

                                            <Button color="danger">Left</Button>{' '}
                                            <Button color="danger">Middle</Button>{' '}
                                            <Button color="danger">Right</Button>{' '}
                                        </div>

                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg="6">
                                <Card>
                                    <CardBody>

                                        <h4 className="mt-0 header-title">Vertical Variation</h4>
                                        <p className="text-muted">Make a set of buttons appear vertically
                                            stacked rather than horizontally. Split button dropdowns are not
                                            supported here.</p>

                                        <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                                            <button type="button" className="btn btn-secondary">Button</button>
                                            <ButtonDropdown isOpen={this.state.drp_link} toggle={() => this.setState({ drp_link: !this.state.drp_link })}>
                                                <DropdownToggle caret color="secondary">
                                                    Dropdown{' '}</DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem>Dropdown link</DropdownItem>
                                                    <DropdownItem>Dropdown link</DropdownItem>
                                                </DropdownMenu>
                                            </ButtonDropdown>
                                            <button type="button" className="btn btn-secondary">Button</button>
                                            <button type="button" className="btn btn-secondary">Button</button>
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


export default connect(null, { activateAuthLayout })(Uibuttons);
