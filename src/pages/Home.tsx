import * as React from 'react';
import { Navigate } from 'react-router-dom';
import AuthService from '../services/Auth.service';

export default class Home extends React.Component {

    render() {
        return (
           <div>
             <p>You're at home</p>
           </div>
        );
    }
}