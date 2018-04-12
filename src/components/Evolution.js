import React, {Component} from 'react'
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Evolution extends Component{
    render(){
        return(
            <div class="row">
                <div class="col-md-1">
                </div>
                <div class="col-md-6">
                    <img src="../images/img8.png"/>
                </div>
                <div class="col-md-5">
                    <img src="../images/img9.png"/>
                    <Button color="primary" size="lg">
                        CHECK AVAILABILIY
                    </Button>
                </div>
            </div>
        );
    }
}