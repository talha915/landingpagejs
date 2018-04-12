import React, {Component} from 'react';
import App from './App';
class CheckList extends Component{
    render(){
        return(
            <ul>
                <li>
                    Phone Number: 000-0091-2233
                </li>
                <li>
                    Name: {this.props.contacts}
                </li>
                <li>
                    Car Model: {this.props.carmodel}
                </li>
            </ul>
        );
    }
}
export default CheckList;