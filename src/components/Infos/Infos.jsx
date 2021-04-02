import React from 'react';
import { Router } from 'react-router';
import App from '../../App';
import ShamazinService from '../../service/shamazinService';
import {Link} from "react-router-dom"
import InfoComponent, {Info} from '../Info/Info';
import './Infos.css';

class InfosComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            infos: props.infos,
            expand: false,
        };
    }

    
    componentDidMount() {

    }

    componentDidUpdate(prevProps,prevState) {
       
    }

    render() {
        const willExpand = () => {
            this.setState({
                expand: true,
            });
        };

        const willCollapse = () => {
            this.setState({
                expand: false,
            });
        };

        if (this.props.infos.length<3) {
        return(
            <div>
                <h1>About this product</h1>
            
        <ul>
         {this.props.infos.map( (info) => (
         <InfoComponent info = {info}/>))}
        </ul>
        </div>
        );
         }
         if (this.state.expand===false) {
         return (
            <div>
            <h1>About this product</h1>
        
    <ul>
     {this.props.infos.slice(0,3).map( (info) => (
     <InfoComponent info = {info}/>))}
    </ul>
    <button className='infobutton' onClick= {willExpand}>Show more</button>
    </div>
         
         )
         }
         return(
            <div>
                <h1>About this product</h1>
            
        <ul>
         {this.props.infos.map( (info) => (
         <InfoComponent info = {info}/>))}
        </ul>
        <button className='infobutton' onClick= {willCollapse}>Show less</button>
        </div>
        );
    }
}

export default InfosComponent;