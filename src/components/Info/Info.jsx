import React from 'react';
import { Router } from 'react-router';
import App from '../../App';
import ShamazinService from '../../service/shamazinService';
import {Link} from "react-router-dom"
import {Info} from '../Info/Info';

class InfoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            info: props.info
        };
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps,prevState) {
       
    }

    render() {
        
        return(
            <h1>{this.props.info.value}</h1>
        );
    }
}

export default InfoComponent;