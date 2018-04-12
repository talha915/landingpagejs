import React, {Component} from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Header extends Component{
    render(){
        return(
            <div class="row">
                <div class="col-md-10">
                </div>
                <div class="col-md-2">
                    <Button color="#067ab4" size="sm" className="headerButton">
                        <a href="#" className="headerButtonText">
                            Already a customer?
                        </a>
                    </Button>
                </div>        
                
            </div>
        );
    }
}
