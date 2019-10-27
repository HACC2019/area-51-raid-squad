import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, FormGroup, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { AvForm, AvField, AvInput } from 'availity-reactstrap-validation';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { activateAuthLayout } from '../../store/actions';
 
class TFSupport extends Component {
  constructor(props){
    super(props);
    this.state = {
      'name': '',
      'email': '',
      'phone': '',
      'orgnization': '',
      'ticket': '',
      'submitted': false,
    }
    this.changeField = this.changeField.bind(this)
    this.submitTicket = this.submitTicket.bind(this)
    this.resetField = this.resetField.bind(this)
  }
 
  changeField(){
 
  }
 
  submitTicket(){
 
    // also turn the submitted true
    // after 3 seconds, change to false
  }
 
  resetField(){
      this.setState({
        'name': '',
        'email': '',
        'phone': '',
        'orgnization': '',
        'ticket': '',
      })
  }
 
  componentDidMount() {
    this.props.activateAuthLayout();
  }
 
  render(){
    return(
      <React.Fragment>
        <Container fluid>
         
          <div className="page-title-box">
            <Row className="align-items-center">
              <Col sm='6'>
                <h4 className="page-title">Submit Support Ticket</h4>
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/dashboard">Dashboard</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Support</BreadcrumbItem>
                </Breadcrumb>
              </Col>
            </Row>
          </div>
         
          <Row>
            <Col md="12">
              <Card>
                <CardBody>
                    <h4 className="mt-0 header-title">Support Ticket</h4>
                    <p className="text-muted m-b-30">Please detail the issue and Trueface will reach out ASAP.</p>
 
                    <AvForm>
                        <AvField
                            name="name"
                            label="Name "
                            type="text"
                            errorMessage="Please enter name"
                            validate={{ required: { value: true } }}
                            onChange={this.changeField}
                        />
                        <AvField
                            name="email"
                            label="Email "
                            type="email"
                            errorMessage="Invalid Email"
                            validate = {{ required: { value: true }, email: { value: true } }}
                            onChange={this.changeField}
                        />
                        <AvField
                            name="phone"
                            label="Phone "
                            type="number"
                            errorMessage="Invalid Phone Number"
                            validate = {{ required: { value: true }, pattern: { value: '^[0-9]+$', errorMessage: 'Only Digits' } }}
                        />
                        <AvField
                            name="organization"
                            label="Organization "
                            type="text"
                            errorMessage="Please Enter Organization"
                            validate={{ required: { value: true } }}
                            onChange={this.changeField}
                        />
                        <AvInput
                            name="ticket"
                            label="Ticket "
                            type="textarea"
                            errorMessage="Please Enter Ticket"
                            validate={{ required: { value: true } }}
                            onChange={this.changeField}
                        />
                        <FormGroup className="mb-0">
                            <div>
                                <Button
                                    type="submit"
                                    color="primary"
                                    className="mr-1"
                                >
                                    Submit
                                </Button>{' '}
                                <Button
                                    type="reset"
                                    color="secondary"
                                    onClick={this.resetField}
                                >
                                    Cancel
                                </Button>
                            </div>
                        </FormGroup>
                    </AvForm>
                </CardBody>
                { this.state.submitted && <h6>Ticket Submitted</h6>}
              </Card>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}
 
export default withRouter(connect(null, { activateAuthLayout })(TFSupport));