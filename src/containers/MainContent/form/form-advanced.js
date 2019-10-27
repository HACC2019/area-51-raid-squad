import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button } from 'reactstrap';
import { SketchPicker } from 'react-color';
import ColorPicker from "@vtaits/react-color-picker";
import '@vtaits/react-color-picker/dist/index.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Switch from "react-switch";
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';

import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart';


const optionGroup = [
    {
        label: "Picnic",
        options: [
            { label: "Mustard", value: "Mustard" },
            { label: "Ketchup", value: "Ketchup" },
            { label: "Relish", value: "Relish" }
        ]
    },
    {
        label: "Camping",
        options: [
            { label: "Tent", value: "Tent" },
            { label: "Flashlight", value: "Flashlight" },
            { label: "Toilet Paper", value: "Toilet Paper" }
        ]
    }
];


class Formadvanced extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: 'red', colorRgb: 'red', colorCust: 'red',

            default_date: new Date(), default: false, start_date: new Date(), monthDate: new Date(), yearDate: new Date(), end_date: new Date(), date: new Date(),

            disbadge: true, disthresh: false, placementbadge: false, textcount: 0, optioncount: 0, placementcount: 0, advanceclass: "badgecount",

            switch1: true, switch2: true, switch3: true, switch4: true, switch5: true, switch6: true, switch7: true, switch8: true, switch9: true,
            switch11: true, switch12: true, switch13: true, switch14: true, switch15: true,

            data_attr: 56, postfix: 20, prefix: 25,
            empty_val: 0, not_attr: 15, explicit_val: 33,

            selectedGroup: null, selectedMulti: null,

            firstpick : false,
            basicEmoji: "",

            secpick : false,
            secEmoji: ""
        };

        //colorpicker
        this.onDrag = this.onDrag.bind(this);
        this.onDragRgb = this.onDragRgb.bind(this);
        this.onDragCust = this.onDragCust.bind(this);
        this.handleHor = this.handleHor.bind(this);

        // DatePicker
        this.handleDefault = this.handleDefault.bind(this);
        this.handleAutoClose = this.handleAutoClose.bind(this);
        this.handleStart = this.handleStart.bind(this);
        this.handleEnd = this.handleEnd.bind(this);
        this.handleMonthChange = this.handleMonthChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);

        // Bootsrap Maxlength
        this.threshholdchange = this.threshholdchange.bind(this);
        this.threshholdDefault = this.threshholdDefault.bind(this);
        this.optionchange = this.optionchange.bind(this);
        this.placementchange = this.placementchange.bind(this);
        this.textareachange = this.textareachange.bind(this);

        this.handleSelectGroup = this.handleSelectGroup.bind(this);
        this.handleMulti = this.handleMulti.bind(this);

        //Emoji Change
        this.changeemoji = this.changeemoji.bind(this);
        this.changesecemoji = this.changesecemoji.bind(this);

    }

    componentDidMount() {
        this.props.activateAuthLayout();
    }


    //Emoji Picker
    changeemoji(emoji)
    {
        this.setState({ 
            basicEmoji: this.state.basicEmoji + emoji.native + " "
          });
    }

    changesecemoji(emoji)
    {
        this.setState({ 
            secEmoji: this.state.secEmoji + emoji.native + " "
          });
    }

    //Color Picker
    onDrag(c1) {
        this.setState({ color: c1 });
    }
    onDragRgb(c1) {
        this.setState({ colorRgb: c1 });
    }
    onDragCust(c1) {
        this.setState({ colorCust: c1 });
    }
    handleHor = (color) => {
        this.setState({ colorHor: color.hex });
    };

    //DatePicker
    handleDefault(date) {
        this.setState({ default_date: date });
    }
    handleAutoClose(date) {
        this.setState({ auto_close: date });
    }
    handleStart(date) {
        this.setState({ start_date: date });
    }
    handleEnd(date) {
        this.setState({ end_date: date });
    }
    handleMonthChange(date) {
        this.setState({ monthDate: date });
    }
    handleYearChange(date) {
        this.setState({ yearDate: date });
    }

    //Bootstrap Maxlength   
    threshholdchange(event) {
        var count = event.target.value.length;
        if (count > 0) { this.setState({ disthresh: true }); } else { this.setState({ disthresh: false }); }
        this.setState({ threshholdcount: event.target.value.length });
    }

    threshholdDefault(event) {
        var count = event.target.value.length;
        if (count > 0) { this.setState({ disDefault: true }); } else { this.setState({ disDefault: false }); }
        this.setState({ threshholdDefault: event.target.value.length });
    }

    optionchange(event) {
        var count = event.target.value.length;
        if (count > 0) { this.setState({ disbadge: true }); } else { this.setState({ disbadge: false }); }
        if (count > 24) { this.setState({ advanceclass: "badgecountextra" }); }
        else { this.setState({ advanceclass: "badgecount" }); }
        this.setState({ optioncount: event.target.value.length });
    }

    placementchange(event) {
        var count = event.target.value.length;
        if (count > 0) { this.setState({ placementbadge: true }); } else { this.setState({ placementbadge: false }); }
        this.setState({ placementcount: event.target.value.length });
    }

    textareachange(event) {
        var count = event.target.value.length;
        if (count > 0) { this.setState({ textareabadge: true }); } else { this.setState({ textareabadge: false }); }
        this.setState({ textcount: event.target.value.length });
    }


    //Select 
    handleSelectGroup = (selectedGroup) => {
        this.setState({ selectedGroup });
    }
    handleMulti = (selectedMulti) => {
        this.setState({ selectedMulti });
    }

    

    render() {

        const { selectedGroup } = this.state;
        const { selectedMulti } = this.state;

        const Offsymbol = props => {
            return (
                <div
                  style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 15,
                  color: "#fff",
                  paddingRight: 2
                }} > No
              </div>
            );
        };
        
        const OnSymbol = props => {
            return (
                <div style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              height: "100%",
                              fontSize: 15,
                              color: "#fff",
                              paddingRight: 2
                           }}> Yes
                </div>
            );
        }
        
   
        
        return (
            <React.Fragment>

    <div className="content form-advanced">
                        <div className="container-fluid">
                            <div className="page-title-box">
                                <Row className="align-items-center">
                                    <Col sm="6">
                                        <h4 className="page-title">Form Advanced</h4>
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                            <li className="breadcrumb-item"><Link to="#">Forms</Link></li>
                                            <li className="breadcrumb-item active">Form Advanced</li>
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
                            <h4 className="mt-0 header-title">React Select</h4>
                                    <form>
                                        <div className="form-group">
                                            <label className="control-label">Single Select</label>

                                            <Select
                                                value={selectedGroup}
                                                onChange={this.handleSelectGroup}
                                                options={optionGroup}
                                            />

                                        </div>
                                        <div className="form-group mb-0">
                                            <label className="control-label">Multiple Select</label>
                                            <Select
                                                value={selectedMulti}
                                                isMulti={true}
                                                onChange={this.handleMulti}
                                                options={optionGroup}
                                            />
                                        </div>
                                    </form>
                            </CardBody>
                        </Card>

                        <Card>
                        <CardBody>

                        <h4 className="mt-0 header-title">React Switch</h4>
                        <p className="text-muted m-b-30">Here are a few types of switches. </p>
                        <div>
                            <Switch 
                            uncheckedIcon={<Offsymbol />}
                            checkedIcon={<OnSymbol /> }
                            onColor="#64b0f2" 
                            onChange={() => this.setState({ switch1: !this.state.switch1 })} 
                            checked={this.state.switch1} />&nbsp;
                            
                            <Switch uncheckedIcon={<Offsymbol />}
                            checkedIcon={<OnSymbol /> } onColor="#ff7aa3" onChange={() => this.setState({ switch2: !this.state.switch2 })} checked={this.state.switch2} />&nbsp;
                            <Switch uncheckedIcon={<Offsymbol />}
                            checkedIcon={<OnSymbol /> } onColor="#2b3d51" onChange={() => this.setState({ switch3: !this.state.switch3 })} checked={this.state.switch3} />&nbsp;
                            <Switch uncheckedIcon={<Offsymbol />}
                            checkedIcon={<OnSymbol /> } onColor="#1bb99a" onChange={() => this.setState({ switch4: !this.state.switch4 })} checked={this.state.switch4} />&nbsp;
                            <Switch uncheckedIcon={<Offsymbol />}
                            checkedIcon={<OnSymbol /> } onColor="#64b0f2" onChange={() => this.setState({ switch5: !this.state.switch5 })} checked={this.state.switch5} />&nbsp;
                            <Switch uncheckedIcon={<Offsymbol />}
                            checkedIcon={<OnSymbol /> } onColor="#9261c6" onChange={() => this.setState({ switch6: !this.state.switch6 })} checked={this.state.switch6} />&nbsp;
                            <Switch uncheckedIcon={<Offsymbol />}
                            checkedIcon={<OnSymbol /> } onColor="#64b4f2" onChange={() => this.setState({ switch7: !this.state.switch7 })} checked={this.state.switch7} />&nbsp;
                            <Switch uncheckedIcon={<Offsymbol />}
                            checkedIcon={<OnSymbol /> } onColor="#ff2aa3" onChange={() => this.setState({ switch8: !this.state.switch8 })} checked={this.state.switch8} />&nbsp;
                            <Switch uncheckedIcon={<Offsymbol />}
                            checkedIcon={<OnSymbol /> } onColor="#2b3551" onChange={() => this.setState({ switch9: !this.state.switch9 })} checked={this.state.switch9} />
                        </div>
                        </CardBody>
                        </Card>

                    </Col>

                    <Col lg="6">
                        <Card>
                            <CardBody>

                            <h4 className="mt-0 header-title">React Datepicker</h4>

                                <form action="#">
                                    <div className="form-group">
                                        <label>Default Functionality</label>
                                        <div>
                                            <div className="input-group">
                                                <DatePicker
                                                    className="form-control"
                                                    selected={this.state.default_date}
                                                    onChange={this.handleDefault}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Month View</label>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <DatePicker
                                                    selected={this.state.monthDate}
                                                    className="form-control"
                                                    onChange={this.handleMonthChange}
                                                    showMonthDropdown
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Year View</label>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <DatePicker
                                                    selected={this.state.yearDate}
                                                    className="form-control"
                                                    onChange={this.handleYearChange}
                                                    showYearDropdown
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group mb-0">
                                        <label>Date Range</label>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <DatePicker
                                                    selected={this.state.start_date}
                                                    selectsStart
                                                    className="form-control"
                                                    startDate={this.state.start_date}
                                                    endDate={this.state.end_date}
                                                    onChange={this.handleStart}
                                                />
                                            </div>

                                            <div className="col-md-6">
                                                <DatePicker
                                                    selected={this.state.end_date}
                                                    selectsEnd
                                                    className="form-control"
                                                    startDate={this.state.start_date}
                                                    endDate={this.state.end_date}
                                                    onChange={this.handleEnd}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                </form>
                            </CardBody>
                        </Card>

                    </Col>
                </Row>
                <Row>
                    <Col lg="6">
                        <Card>
                            <CardBody>

                            <h4 className="mt-0 header-title">React Color</h4>
                                    <p className="text-muted m-b-30">Fancy and customizable colorpicker using by <code> &lt;ColorPicker&gt; </code>.</p>

                                <form action="#">
                                        <div className="form-group">
                                            <label>Simple input field</label>
                                            <input type="text" className="colorpicker-default form-control" value={this.state.color} onClick={() => this.setState({ simple_color: !this.state.simple_color })} />

                                            {this.state.simple_color ?
                                                <ColorPicker saturationHeight={100} saturationWidth={100} value={this.state.color} onDrag={this.onDrag.bind(this)} />
                                                : null}
                                        </div>

                                        <div className="form-group m-b-0">
                                            <label>As a component</label>
                                            <div className="colorpicker-default input-group">
                                                <input type="text" readOnly value={this.state.colorRgb} className="form-control" />

                                                <span className="input-group-append add-on">
                                                    <button onClick={() => this.setState({ simple_color1: !this.state.simple_color1 })} className="btn btn-light" type="button">
                                                        <i style={{
                                                            backgroundColor: this.state.colorRgb,
                                                            marginTop: "2px"
                                                        }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>
                                                    </button>
                                                </span>

                                            </div>
                                            {this.state.simple_color1 ?
                                                <ColorPicker saturationHeight={100} saturationWidth={100} value={this.state.colorRgb} onDrag={this.onDragRgb.bind(this)} />
                                                : null}
                                        </div>
                                        <div className="form-group">
                                            <label>Horizontal mode</label>
                                            <input onClick={() => this.setState({ simple_color2: !this.state.simple_color2 })} value={this.state.colorHor} type="text" className="form-control" />
                                            {this.state.simple_color2 ?
                                                <SketchPicker
                                                    color='#fff'
                                                    width="160px"
                                                    onChangeComplete={this.handleHor} />
                                                : null}
                                        </div>

                                        <div className="form-group mb-0">
                                            <label>Customized widget size</label>
                                            <input type="text" className="colorpicker-default form-control" value={this.state.colorCust} onClick={() => this.setState({ simple_color3: !this.state.simple_color3 })} />
                                            {this.state.simple_color3 ?
                                                <React.Fragment>
                                                    <ColorPicker saturationHeight={100} saturationWidth={100} value={this.state.colorCust} onDrag={this.onDragCust.bind(this)} />
                                                    <div style={{
                                                        backgroundColor: this.state.colorCust,
                                                        width: "140px",
                                                        padding: "5px"
                                                    }}></div>
                                                </React.Fragment>
                                                : null}
                                        </div>

                                    </form>

                            </CardBody>
                        </Card>

                    </Col>
                    <Col lg="6">
                        <Card>
                            <CardBody>
                            <h4 className="mt-0 header-title">Bootstrap TouchSpin</h4>
                                    <p className="text-muted m-b-30">A mobile and touch friendly input spinner component for Bootstrap</p>

                                    <form>
                                        <div className="form-group">
                                            <label className="control-label">Using data attributes</label>
                                            <div className="input-group">
                                                <div className="input-group-append" onClick={() => this.setState({ data_attr: this.state.data_attr - 1 })}>
                                                    <Button type="button" className="btn btn-primary"><i className="mdi mdi-minus"></i></Button>
                                                </div>
                                                <input type="number" className="form-control" value={this.state.data_attr} placeholder="number" />
                                                <div className="input-group-append" onClick={() => this.setState({ data_attr: this.state.data_attr + 1 })}>
                                                    <Button type="button" className="btn btn-primary"><i className="mdi mdi-plus"></i></Button>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Example with postfix (large)</label>
                                            <div className="input-group">
                                                <div className="input-group-append" onClick={() => this.setState({ postfix: this.state.postfix - 1 })}>
                                                    <Button type="button" className="btn btn-primary"><i className="mdi mdi-minus"></i></Button>
                                                </div>
                                                <input type="number" className="form-control" value={this.state.postfix} placeholder="number" />
                                                <div className="input-group-append" onClick={() => this.setState({ postfix: this.state.postfix + 1 })}>
                                                    <span className="input-group-text">%</span>
                                                    <Button type="button" className="btn btn-primary"><i className="mdi mdi-plus"></i></Button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label className="control-label">Init with empty value:</label>
                                            <div className="input-group">
                                                <div className="input-group-append" onClick={() => this.setState({ empty_val: this.state.empty_val - 1 })}>
                                                    <Button type="button" className="btn btn-primary"><i className="mdi mdi-minus"></i></Button>
                                                </div>
                                                <input type="number" className="form-control" value={this.state.empty_val} placeholder="number" />
                                                <div className="input-group-append" onClick={() => this.setState({ empty_val: this.state.empty_val + 1 })}>
                                                    <Button type="button" className="btn btn-primary"><i className="mdi mdi-plus"></i></Button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Value attribute is not set (applying settings.initval)</label>
                                            <div className="input-group">
                                                <div className="input-group-append" onClick={() => this.setState({ not_attr: this.state.not_attr - 1 })}>
                                                    <Button type="button" className="btn btn-primary"><i className="mdi mdi-minus"></i></Button>
                                                </div>
                                                <input type="number" className="form-control" value={this.state.not_attr} placeholder="number" />
                                                <div className="input-group-append" onClick={() => this.setState({ not_attr: this.state.not_attr + 1 })}>
                                                    <Button type="button" className="btn btn-primary"><i className="mdi mdi-plus"></i></Button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group mb-0">
                                            <label className="control-label">Value is set explicitly to 33 (skipping settings.initval) </label>
                                            <div className="input-group">
                                                <div className="input-group-append" onClick={() => this.setState({ explicit_val: this.state.explicit_val - 1 })}>
                                                    <Button type="button" className="btn btn-primary"><i className="mdi mdi-minus"></i></Button>
                                                </div>
                                                <input type="number" className="form-control" value={this.state.explicit_val} placeholder="number" />
                                                <div className="input-group-append" onClick={() => this.setState({ explicit_val: this.state.explicit_val + 1 })}>
                                                    <Button type="button" className="btn btn-primary"><i className="mdi mdi-plus"></i></Button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                            </CardBody>
                        </Card>

                    </Col>
                </Row>

                <Row>

                    <Col lg="6">
                        <Card>
                            <CardBody>

                            <h4 className="mt-0 header-title">MaxLength</h4>
                                    <p className="text-muted m-b-30">This plugin integrates by default with
                                        Twitter bootstrap using badges to display the maximum lenght of the
                                    field where the user is inserting text. </p>

                                    <label>Default usage</label>
                                    <p className="text-muted m-b-15">
                                        The badge will show up by default when the remaining chars are 10 or less:
                                </p>
                                    <input type="text" maxLength="25" onChange={this.threshholdDefault} name="thresholdconfig" className="form-control" />
                                    {this.state.disDefault ? <span className="badgecount">{this.state.threshholdDefault} / 25 </span> : null}

                                   <br></br>
                                    <div className="m-t-20">
                                        <label>Threshold value</label>
                                        <p className="text-muted m-b-15">
                                            Do you want the badge to show up when there are 20 chars or less? Use the <code>threshold</code> option:
                                    </p>
                                        <input type="text" maxLength="25" onChange={this.threshholdchange} name="thresholdconfig" className="form-control" id="thresholdconfig" />
                                        {this.state.disthresh ? <span className="badgecount">{this.state.threshholdcount} / 25 </span> : null}
                                    </div>
                                    <br></br>

                                    <div className="m-t-20">
                                        <label>All the options</label>
                                        <p className="text-muted m-b-15">
                                            Please note: if the <code>alwaysShow</code> option is enabled, the <code>threshold</code> option is ignored.
                                    </p>
                                        <input type="text" onChange={this.optionchange} className="form-control" maxLength="25" name="alloptions" id="alloptions" />
                                        {this.state.disbadge ? <span className="badgecount">You Types {this.state.optioncount} out of 25 chars available</span> : null}
                                    </div>
                                    <br></br>

                                    <div className="m-t-20">
                                        <label>Position</label>
                                        <p className="text-muted m-b-15">
                                            All you need to do is specify the <code>placement</code> option, with one of those strings. If none
                                            is specified, the positioning will be defauted to 'bottom'.
                                    </p>
                                        <input type="text" onChange={this.placementchange} className="form-control" maxLength="25" name="placement" id="placement" />
                                        {this.state.placementbadge ? <span style={{ float: "right" }} className="badgecount">{this.state.placementcount} / 25 </span> : null}
                                    </div>
                                    <br></br>
                                    <div className="m-t-20">
                                        <label>Textareas</label>
                                        <p className="text-muted m-b-15">
                                            Bootstrap maxlength supports textarea as well as inputs. Even on old IE.
                                    </p>
                                        <textarea onChange={this.textareachange} className="form-control" maxLength="225" rows="3" placeholder="This textarea has a limit of 225 chars."></textarea>
                                        {this.state.textareabadge ? <span className="badgecount"> {this.state.textcount} / 225 </span> : null}
                                    </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col lg="6">
                        <Card>
                            <CardBody>
                                <h4 className="mt-0 header-title mb-4">Emoji Picker</h4>
                                <form>
                                        <div className="form-group">
                                         <label>Input field</label>
                                          <input type="text" className="form-control" value={this.state.basicEmoji} placeholder="Input field" onFocus={() => this.setState({ firstpick : !this.state.firstpick })} />
                                          </div>

                                            {this.state.firstpick ?
                                               <Picker set='emojione' onClick={this.changeemoji} />
                                           : null }
                                          
                                          <div className="form-group">
                                          <label>Textarea  with emoji image input</label>
                                           <textarea placeholder="Textarea with emoji image input" value= {this.state.secEmoji} className="form-control" onFocus={() => this.setState({ secpick : !this.state.secpick })} >
                                            </textarea>
                                            </div>
                                        
                                            {this.state.secpick ?
                                               <Picker set='emojione' onClick={this.changesecemoji} />
                                           : null }
                                            
                                        </form>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <h4 className="mt-0 header-title">Bootstrap FileStyle</h4>
                                <p className="text-muted">Examples of bootstrap fileStyle.</p>
                               
                                <form action="#">
                                <div className="input-group">
                                    <div className="custom-file">
                                        <input
                                        type="file"
                                        className="custom-file-input"
                                        id="inputGroupFile01"
                                        aria-describedby="inputGroupFileAddon01" />
                                        <label className="custom-file-label" htmlFor="inputGroupFile01">
                                        Choose file
                                        </label>
                                    </div>
                                    </div>
                                    <br></br>

                                    <div className="input-group">
                                    <div className="custom-file">
                                        <input
                                        multiple="multiple"
                                        type="file"
                                        className="custom-file-input"
                                        id="inputGroupFile01"
                                        aria-describedby="inputGroupFileAddon01" />
                                        <label className="custom-file-label" htmlFor="inputGroupFile01">
                                        Choose multiple file
                                        </label>
                                    </div>
                                    </div>
                                </form>
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

	
export default connect(null, { activateAuthLayout })(Formadvanced);

