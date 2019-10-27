import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';
import { Link } from 'react-router-dom';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import BootstrapTheme from '@fullcalendar/bootstrap';
import 'fullcalendar/dist/fullcalendar.min.css';

const DefaultEvents = [
    {
        title: 'All Day Event',
        start: new Date().setDate(new Date().getDate() + 1),
    },
    {
        id: 999,
        title: 'Repeating Event',
        start: new Date().setDate(new Date().getDate() - 5),
        allDay: false,
        className: 'bg-teal'
    },
    {
        id: 999,
        title: 'Meeting',
        start: new Date().setDate(new Date().getDate() - 3),
        allDay: false,
        className: 'bg-purple'
    },
    {
        id: 999,
        title: 'Meeting',
        start: new Date().setDate(new Date().getDate() + 4),
        allDay: false,
        className: 'bg-warning'
    },
    {
        title: 'Meeting',
        start: new Date().setDate(new Date().getDate() + 4),
        allDay: false,
        className: 'bg-danger'
    },
];

class Calendar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            calendarWeekends: true,
            calendarEvents: DefaultEvents,
        }
        this.calendarComponentRef = React.createRef();
        this.handleDateClick = this.handleDateClick.bind(this);
    }
    componentDidMount() {
        this.props.activateAuthLayout();
    }

    handleDateClick = (arg) => {
        var title = prompt('Event Title:');
        this.setState({ selectedDay: arg });
        if(title == null) {  }
        else
        {
            var newEvent = {};
            newEvent = {
                id: this.state.calendarEvents.length + 1,
                title: title,
                start: this.state.selectedDay ? this.state.selectedDay.date : new Date(),
                className: 'bg-primary'
            };
            this.setState({
                calendarEvents: this.state.calendarEvents.concat(newEvent),
                selectedDay: null
            });

        }
       
    }

    render() {

        return (
            <React.Fragment>

                <div className="content">
                    <div className="container-fluid">
                        <div className="page-title-box">
                            <div className="row align-items-center">
                                <div className="col-sm-6">
                                    <h4 className="page-title">Calendar</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                        <li className="breadcrumb-item active">Calendar</li>
                                    </ol>
                                </div>
                                <div className="col-sm-6">
                                    <div className="float-right d-none d-md-block">
                                        <Settingmenu />
                                    </div>
                                </div>
                            </div>
                        </div>
                      
                    
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <FullCalendar ref={this.calendarComponentRef} defaultView="dayGridMonth" plugins={[BootstrapTheme, dayGridPlugin, interactionPlugin]}
                                    slotDuration={'00:15:00'}
                                    minTime={'08:00:00'}
                                    maxTime={'19:00:00'}
                                    handleWindowResize={true}
                                    themeSystem="bootstrap"
                                    header={{
                                        left: 'prev,next today',
                                        center: 'title',
                                        right: 'dayGridMonth,dayGridWeek,dayGridDay'
                                    }}
                                    dateClick={this.handleDateClick}
                                    editable={true}
                                    droppable={true}
                                    eventLimit={true}
                                    selectable={true}
                                    events={this.state.calendarEvents}
                                    id="calendar" />
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


export default connect(null, { activateAuthLayout })(Calendar);

