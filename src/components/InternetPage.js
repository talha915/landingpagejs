import React, {Component} from 'react'
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class InternetPage extends Component{
    render(){
        return(
            <div class="row">
                <div class="col-md-1">
                </div> 
                <div class="col-md-4">
                    <img src="../images/img6.png"/>
                    <Button color="primary" size="lg">
                        SHOP NOW
                    </Button>
                </div>
                <div class="col-md-5">
                    <img src="../images/img7.png"/>
                </div>
            </div>
        );
    }
}