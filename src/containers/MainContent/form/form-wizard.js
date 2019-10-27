import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import WizardFormFirstPageRoot from '../Subpages/WizardFormFirstPage';
import WizardFormSecondPageRoot from '../Subpages/WizardFormSecondPage';
import WizardFormThirdPageRoot from '../Subpages/WizardFormThirdPage';
import WizardFormFourPageRoot from '../Subpages/WizardFormFourPage';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';
import { Link } from 'react-router-dom';

class FormWizard extends Component {



    constructor(props) {
        super(props)
        this.nextPageRoot = this.nextPageRoot.bind(this)
        this.previousPageRoot = this.previousPageRoot.bind(this)

        this.state = {
            pageRoot: 1
        }
    }

    componentDidMount() {
        this.props.activateAuthLayout();
    }

    nextPageRoot() {
        this.setState({ pageRoot: this.state.pageRoot + 1 })
    }

    previousPageRoot() {
        this.setState({ pageRoot: this.state.pageRoot - 1 })
    }
    render() {
        const { onSubmitRoot } = this.props;
        const { pageRoot } = this.state;

        return (
            <React.Fragment>

                <div className="content">
                    <div className="container-fluid">
                        <div className="page-title-box">
                            <Row className="align-items-center">
                                <Col sm="6">
                                    <h4 className="page-title">Form Wizard</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Forms</Link></li>
                                        <li className="breadcrumb-item active">Form Wizard</li>
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
                            <Col sm="12">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title mb-2">Form Wizard</h4>

                                        {pageRoot === 1 && <WizardFormFirstPageRoot onSubmit={this.nextPageRoot} />}
                                        {pageRoot === 2 && (
                                            <WizardFormSecondPageRoot
                                                previousPage={this.previousPageRoot}
                                                onSubmit={this.nextPageRoot}
                                            />
                                        )}
                                        {pageRoot === 3 && (
                                            <WizardFormThirdPageRoot
                                                previousPage={this.previousPageRoot}
                                                onSubmit={this.nextPageRoot}
                                            />
                                        )}
                                        {pageRoot === 4 && (
                                            <WizardFormFourPageRoot
                                                previousPage={this.previousPageRoot}
                                                onSubmit={onSubmitRoot}
                                            />
                                        )}
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

export default connect(null, { activateAuthLayout })(FormWizard);
