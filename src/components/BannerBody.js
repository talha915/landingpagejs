import React, {Component} from 'react'
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class BannerBody extends Component{
    render(){
        return(
            <div class="row">
                <div class="col-md-1">
                </div> 
                <div class="col-md-3">
                    <img src="../images/img3.png"/>
                    <Button color="primary" size="lg">
                        SHOP NOW
                    </Button>
                </div>
                <div class="col-md-8">
                    <img src="../images/img4.png"/>
                </div>
            </div>
        );
    }
}