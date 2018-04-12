import React, {Component} from 'react'
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class PC extends Component{
    render(){
        return(
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-3">
                    <img src="../images/img10.png"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   <Button color="primary">Compare Speeds</Button>
                </div>
                <div class="col-md-3">
                    <img src="../images/img11.png"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;<Button color="primary">Shop Now</Button>
                </div>
                <div class="col-md-3">
                    <img src="../images/img12.png"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;<Button color="primary">Shop Bundles</Button>
                </div>
            </div>
        );
    }
}