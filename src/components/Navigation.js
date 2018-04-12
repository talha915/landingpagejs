import React, {Component} from 'react'
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Navigation extends Component{
    render(){
        return(
            <div class="row">
               
                <div class="col-md-5">
                    <img src="../images/img1.png"/>
                </div>
                <div class="col-md-7">
                <br></br><Button class="navigationButton" color="#ccc">
                        <a href="" class="navigationButtonText">
                            Home
                        </a>
                    </Button>
                    <Button  color="link">
                        <a href="" class="navigationButtonText">
                            Plans & Pricing
                        </a>
                    </Button>
                    <Button  color="link">
                        <a href="" class="navigationButtonText">
                            AT & T Services
                        </a>
                    </Button>
                    <Button  color="link">
                        <a href="" class="navigationButtonText">
                            Bundles
                        </a>
                    </Button>
                    <Button  color="link">
                        <a href="" class="navigationButtonText">
                            DIRECTV
                        </a>
                    </Button>
                    <Button  color="link">
                        <a href="" class="navigationButtonText">
                            Business
                        </a>
                    </Button>
                    <Button  color="primary" >
                        <a href="" class="navigationButtonText">
                            Order AT & T
                        </a>
                    </Button>
                </div>
            </div>    
        );
    }
}