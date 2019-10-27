import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';
import { Link } from 'react-router-dom';

class Uitypography extends Component {

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
                                    <h4 className="page-title">Typography</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                        <li className="breadcrumb-item"><Link to="#">UI Elements</Link></li>
                                        <li className="breadcrumb-item active">Typography</li>
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
                                        <h4 className="mt-0 header-title">Headings</h4>
                                        <p className="text-muted mb-4">All HTML headings, <code
                                            className="highlighter-rouge">&lt;h1&gt;</code> through <code
                                                className="highlighter-rouge">&lt;h6&gt;</code>, are available.</p>

                                        <h1 className="mb-3">h1. Bootstrap heading <small className="text-muted">Semibold 2.5rem (40px)</small></h1>
                                        <h2 className="mb-3">h2. Bootstrap heading <small className="text-muted">Semibold 2rem (32px)</small></h2>
                                        <h3 className="mb-3">h3. Bootstrap heading <small className="text-muted">Semibold 1.75rem (28px)</small></h3>
                                        <h4 className="mb-3">h4. Bootstrap heading <small className="text-muted">Semibold 1.5rem (24px)</small></h4>
                                        <h5 className="mb-3">h5. Bootstrap heading <small className="text-muted">Semibold 1.25rem (20px)</small></h5>
                                        <h6>h6. Bootstrap heading <small className="text-muted">Semibold 1rem (16px)</small></h6>
                                    </CardBody>
                                </Card>

                                <Card>
                                    <CardBody>

                                        <h4 className="mt-0 header-title">Inline Text Elements</h4>
                                        <p className="text-muted mb-4">Styling for common inline HTML5 elements.</p>

                                        <p>You can use the mark tag to <mark>highlight</mark> text.</p>
                                        <p><del>This line of text is meant to be treated as deleted text.</del></p>
                                        <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
                                        <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
                                        <p><u>This line of text will render as underlined</u></p>
                                        <p><small>This line of text is meant to be treated as fine print.</small></p>
                                        <p><strong>This line rendered as bold text.</strong></p>
                                        <p className="mb-0"><em>This line rendered as italicized text.</em></p>
                                    </CardBody>
                                </Card>

                                <Card>
                                    <CardBody>

                                        <h4 className="mt-0 header-title">Unstyled List</h4>
                                        <p className="text-muted mb-4">Remove the default <code
                                            className="highlighter-rouge">list-style</code> and left margin on list
                                            items (immediate children only). <strong>This only applies to immediate
                                                children list items</strong>, meaning you will need to add the class
                                            for any nested lists as well.</p>

                                        <ul className="list-unstyled mb-0">
                                            <li>Integer molestie lorem at massa</li>
                                            <li>Nulla volutpat aliquam velit
                                                <ul>
                                                    <li>Phasellus iaculis neque</li>
                                                    <li>Purus sodales ultricies</li>
                                                    <li>Vestibulum laoreet porttitor sem</li>
                                                </ul>
                                            </li>
                                            <li>Faucibus porta lacus fringilla vel</li>
                                        </ul>
                                    </CardBody>
                                </Card>

                            </Col>

                            <Col lg="6">
                                <Card>
                                    <CardBody>

                                        <h4 className="mt-0 header-title">Display Headings</h4>
                                        <p className="text-muted mb-4">Traditional heading elements are designed to work best in the meat of your page content. </p>

                                        <h1 className="display-1">Display 1</h1>
                                        <h1 className="display-2">Display 2</h1>
                                        <h1 className="display-3">Display 3</h1>
                                        <h1 className="display-4">Display 4</h1>

                                    </CardBody>
                                </Card>

                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title">Lead</h4>
                                        <p>Make a paragraph stand out by adding <code>.lead</code>.</p>
                                        <p className="lead mb-0">
                                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                                        </p>
                                    </CardBody>
                                </Card>

                                <Card>
                                    <CardBody>

                                        <h4 className="mt-0 header-title">Blockquotes</h4>
                                        <p className="text-muted mb-4">For quoting blocks of content from
                                            another source within your document. Wrap <code
                                                className="highlighter-rouge">&lt;blockquote
                                                class="blockquote"&gt;</code> around any <abbr
                                                title="HyperText Markup Language">HTML</abbr> as the quote.</p>

                                        <blockquote className="blockquote font-16">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                            <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                        </blockquote>

                                        <blockquote className="blockquote blockquote-reverse font-16 mb-0">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                            <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                        </blockquote>
                                    </CardBody>
                                </Card>

                                <Card>
                                    <CardBody>

                                        <h4 className="mt-0 header-title">Inline List</h4>
                                        <p className="text-muted mb-4">Remove a list’s bullets and apply some
                                            light <code className="highlighter-rouge">margin</code> with a combination
                                            of two classes, <code className="highlighter-rouge">.list-inline</code> and
                                            <code className="highlighter-rouge">.list-inline-item</code>.</p>

                                        <ul className="list-inline mb-0">
                                            <li className="list-inline-item">Lorem ipsum</li>
                                            <li className="list-inline-item">Phasellus iaculis</li>
                                            <li className="list-inline-item">Nulla volutpat</li>
                                        </ul>

                                    </CardBody>
                                </Card>

                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Card>
                                    <CardBody>

                                        <h4 className="mt-0 header-title">Description List Alignment</h4>
                                        <p className="text-muted mb-4">Align terms and descriptions
                                            horizontally by using our grid system’s predefined classes (or semantic
                                            mixins). For longer terms, you can optionally add a <code
                                                className="highlighter-rouge">.text-truncate</code> class to
                                            truncate the text with an ellipsis.</p>

                                        <dl className="row mb-0">
                                            <dt className="col-sm-3">Description lists</dt>
                                            <dd className="col-sm-9">A description list is perfect for defining terms.</dd>

                                            <dt className="col-sm-3">Euismod</dt>
                                            <dd className="col-sm-9">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
                                            <dd className="col-sm-9 offset-sm-3">Donec id elit non mi porta gravida at eget metus.</dd>

                                            <dt className="col-sm-3">Malesuada porta</dt>
                                            <dd className="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

                                            <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
                                            <dd className="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>

                                            <dt className="col-sm-3">Nesting</dt>
                                            <dd className="col-sm-9 mb-0">
                                                <dl className="row mb-0">
                                                    <dt className="col-sm-4">Nested definition list</dt>
                                                    <dd className="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
                                                </dl>
                                            </dd>
                                        </dl>
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


export default connect(null, { activateAuthLayout })(Uitypography);

