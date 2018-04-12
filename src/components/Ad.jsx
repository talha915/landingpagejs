import React, {Component} from 'react'
import { Button, FormGroup, FormControl, Input, Form, Col, ControlLabel, Checkbox } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Ad extends Component{
    render(){
        return(
            <div class="row"> 
                <div class="col-md-1">
                </div>      
                <div class="col-md-4">
                    <br></br>
                    <img src="../images/img13.png"/>
                </div>
                <div class="col-md-5">
                    <br></br>
                    <div className="form">
                        <p className="font">
                            <h2>&nbsp;Request a Call</h2><br></br>
                            &nbsp;Fill out the following form and one of our AT&T experts will get in touch.<br></br>
                        </p>
                        
                        <form class="form-inline">
                            <div class="form-group" className="formInputs">
                                <input type="text" class="form-control" id="name" className="formFields" placeholder="First Name"  name="name" size="25"/>
                            </div>
                            <div class="form-group" className="formInputs">
                                <input type="text" class="form-control " className="formFields" placeholder="Last Name" name="lname" size="25"/>
                            </div><br></br>
                            <div class="form-group" className="formInputs">
                                <br></br><input type="text" class="form-control" className="formFields" placeholder="Phone Number" name="phonenumber" size="25"/>
                            </div>
                            <div class="form-group" className="formInputs">
                                <br></br><input type="text" class="form-control" className="formFields" placeholder="Zip Code" name="zipcode" size="8"/>
                                &nbsp;&nbsp;<Button color="primary" size="lg">Call Me</Button>
                            </div>
                            <p className="font">
                            &nbsp;All fields required.
                            &nbsp;  <img src="../images/forms.png"/>
                            </p>
                        </form>
                    </div>
                </div>
                <div class="col-md-1">
                </div> 
            </div>
        );
    }
}