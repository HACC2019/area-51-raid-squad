import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import Dropzone from 'react-dropzone';
import { Link } from 'react-router-dom';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';

class FormUpload extends Component {

    constructor(props) {
        super(props);
        this.handleAcceptedFiles = this.handleAcceptedFiles.bind(this);

        this.state = { selectedFiles: [] }
    }

    componentDidMount() {
        this.props.activateAuthLayout();
    }


    handleAcceptedFiles = (files) => {
        files.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file),
            formattedSize: this.formatBytes(file.size)
        }));

        this.setState({ selectedFiles: files });
    }

    /**
    * Formats the size
    */
    formatBytes = (bytes, decimals = 2) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    render() {

        return (
            <React.Fragment>
                <div className="content">
                    <div className="container-fluid">
                        <div className="page-title-box">
                            <Row className="align-items-center">
                                <Col sm="6">
                                    <h4 className="page-title">Form File Upload</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Forms</Link></li>
                                        <li className="breadcrumb-item active">Form File Upload</li>
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
                            <Col >
                                <Card>
                                    <CardBody>

                                        <h4 className="mt-0 header-title">Dropzone</h4>
                                        <p className="text-muted mb-4">DropzoneJS is an open source library
                                            that provides drag’n’drop file uploads with image previews.
                                        </p>

                                        <Dropzone onDrop={acceptedFiles => this.handleAcceptedFiles(acceptedFiles)}>
                                            {({ getRootProps, getInputProps }) => (
                                                <div className="dropzone">
                                                    <div className="dz-message needsclick" {...getRootProps()}>
                                                        <input {...getInputProps()} />
                                                        <i className="h1 text-muted dripicons-cloud-upload"></i>
                                                        <h3>Drop files here or click to upload.</h3>
                                                        <span className="text-muted font-13">(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</span>
                                                    </div>
                                                </div>
                                            )}
                                        </Dropzone>

                                        <div className="dropzone-previews mt-3" id="file-previews">
                                            {this.state.selectedFiles.map((f, i) => {
                                                return <Card className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete" key={i + "-file"}>
                                                    <div className="p-2">
                                                        <Row className="align-items-center">
                                                            <Col className="col-auto">
                                                                <img data-dz-thumbnail="" height="80" className="avatar-sm rounded bg-light" alt={f.name} src={f.preview} />
                                                            </Col>
                                                            <Col className="pl-0">
                                                                <Link to="#" className="text-muted font-weight-bold">{f.name}</Link>
                                                                <p className="mb-0"><strong>{f.formattedSize}</strong></p>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Card>
                                            })}
                                        </div>
                                        <div className="text-center mt-4">
                                            <button type="button" className="btn btn-primary waves-effect waves-light">Send Files</button>
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

export default connect(null, { activateAuthLayout })(FormUpload);

