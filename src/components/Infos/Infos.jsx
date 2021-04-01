import React from 'react';
import { Router } from 'react-router';
import App from '../../App';
import ShamazinService from '../../service/shamazinService';
import {Link} from "react-router-dom"
import InfoComponent, {Info} from '../Info/Info';

class InfosComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            infos: props.infos
        };
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps,prevState) {
       
    }

    render() {
        
        return(
        <>
         {this.props.infos.map( (info) => (
         <InfoComponent info = {info}/>))}
        </>
        );
    }
}

export default InfosComponent;